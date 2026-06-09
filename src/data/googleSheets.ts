import type { Region, SocialPost } from "../types";
import { MONTHS, YEAR } from "../utils/date";

const DISCOVERY_DOC =
  "https://sheets.googleapis.com/$discovery/rest?version=v4";
const SCOPES = "https://www.googleapis.com/auth/spreadsheets";

type GoogleTokenClient = {
  requestAccessToken: (options?: { prompt?: string }) => void;
};

type GoogleSheetValueRange = {
  values?: string[][];
};

declare global {
  interface Window {
    gapi?: {
      load: (apiName: string, callback: () => void) => void;
      client: {
        init: (config: {
          apiKey?: string;
          discoveryDocs: string[];
        }) => Promise<void>;
        sheets: {
          spreadsheets: {
            values: {
              get: (request: {
                spreadsheetId: string;
                range: string;
              }) => Promise<{ result: GoogleSheetValueRange }>;
              update: (request: {
                spreadsheetId: string;
                range: string;
                valueInputOption: "RAW" | "USER_ENTERED";
                resource: GoogleSheetValueRange;
              }) => Promise<unknown>;
            };
          };
        };
      };
    };
    google?: {
      accounts: {
        oauth2: {
          initTokenClient: (config: {
            client_id: string;
            scope: string;
            callback: (response: { access_token?: string; error?: string }) => void;
          }) => GoogleTokenClient;
        };
      };
    };
  }
}

export interface GoogleSheetsConfig {
  clientId: string;
  apiKey?: string;
  spreadsheetId: string;
  range?: string;
}

export interface GoogleSheetsClient {
  readRows: () => Promise<string[][]>;
  writePosts: (posts: SocialPost[]) => Promise<void>;
}

function loadScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(
      `script[src="${src}"]`,
    );

    if (existing) {
      resolve();
      return;
    }

    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.defer = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.head.appendChild(script);
  });
}

async function loadGapiClient(apiKey?: string): Promise<void> {
  await loadScript("https://apis.google.com/js/api.js");

  await new Promise<void>((resolve, reject) => {
    window.gapi?.load("client", () => {
      window.gapi?.client
        .init({
          apiKey,
          discoveryDocs: [DISCOVERY_DOC],
        })
        .then(resolve)
        .catch(reject);
    });
  });
}

async function requestGoogleToken(clientId: string): Promise<void> {
  await loadScript("https://accounts.google.com/gsi/client");

  await new Promise<void>((resolve, reject) => {
    const tokenClient = window.google?.accounts.oauth2.initTokenClient({
      client_id: clientId,
      scope: SCOPES,
      callback: (response) => {
        if (response.error) {
          reject(new Error(response.error));
          return;
        }

        resolve();
      },
    });

    tokenClient?.requestAccessToken({ prompt: "" });
  });
}

export function getGoogleSheetsConfigFromEnv(): GoogleSheetsConfig | null {
  const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
  const spreadsheetId = import.meta.env.VITE_GOOGLE_SHEET_ID;

  if (!clientId || !spreadsheetId) {
    return null;
  }

  return {
    clientId,
    apiKey: import.meta.env.VITE_GOOGLE_API_KEY,
    spreadsheetId,
    range: "Social Calendar 2026!A:P",
  };
}

export async function createGoogleSheetsClient(
  config: GoogleSheetsConfig,
): Promise<GoogleSheetsClient> {
  await loadGapiClient(config.apiKey);
  await requestGoogleToken(config.clientId);

  const range = config.range ?? "Social Calendar 2026!A:P";

  return {
    async readRows() {
      const response =
        await window.gapi?.client.sheets.spreadsheets.values.get({
          spreadsheetId: config.spreadsheetId,
          range,
        });

      return response?.result.values ?? [];
    },
    async writePosts(posts) {
      await window.gapi?.client.sheets.spreadsheets.values.update({
        spreadsheetId: config.spreadsheetId,
        range,
        valueInputOption: "RAW",
        resource: {
          values: postsToSideBySideSheetValues(posts),
        },
      });
    },
  };
}

export function postsToSideBySideSheetValues(posts: SocialPost[]): string[][] {
  const grouped = new Map<string, Partial<Record<Region, SocialPost[]>>>();

  posts
    .slice()
    .sort((a, b) => a.date.localeCompare(b.date) || a.region.localeCompare(b.region))
    .forEach((post) => {
      const dateGroup = grouped.get(post.date) ?? {};
      const regionPosts = dateGroup[post.region] ?? [];
      regionPosts.push(post);
      dateGroup[post.region] = regionPosts;
      grouped.set(post.date, dateGroup);
    });

  const rows: string[][] = [
    [
      "",
      "",
      `${MONTHS[0]} ${YEAR}`,
      "",
      "",
      "",
      "",
      "",
      "",
      "FOR DE ->",
      `${MONTHS[0]} ${YEAR}`,
      "",
      "",
      "",
      "",
      "",
    ],
    [
      "Date",
      "Day",
      "Pillar",
      "Focus",
      "Asset",
      "Post Copy",
      "Hashtags",
      "Content Type",
      "Notes",
      "FOR DE ->",
      "Pillar",
      "Focus",
      "Asset",
      "Post Copy",
      "Hashtags",
      "Content Type",
    ],
  ];

  grouped.forEach((dateGroup, date) => {
    const maxPosts = Math.max(
      dateGroup.NA?.length ?? 0,
      dateGroup.DE?.length ?? 0,
    );

    for (let index = 0; index < maxPosts; index += 1) {
      const na = dateGroup.NA?.[index];
      const de = dateGroup.DE?.[index];
      rows.push([
        index === 0 ? formatSheetDate(date) : "",
        index === 0 ? (na?.dayOfWeek ?? de?.dayOfWeek ?? "") : "",
        na?.pillar ?? "",
        na?.focus ?? "",
        na?.asset ?? "",
        na?.postCopy ?? "",
        na?.hashtags ?? "",
        na?.contentType ?? "",
        na?.notes ?? "",
        "",
        de?.pillar ?? "",
        de?.focus ?? "",
        de?.asset ?? "",
        de?.postCopy ?? "",
        de?.hashtags ?? "",
        de?.contentType ?? "",
      ]);
    }
  });

  return rows;
}

function formatSheetDate(dateId: string): string {
  const [, month, day] = dateId.split("-");
  const monthLabel = MONTHS[Number(month) - 1].slice(0, 3);

  return `${day} ${monthLabel}`;
}
