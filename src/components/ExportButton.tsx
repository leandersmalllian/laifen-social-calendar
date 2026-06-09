import { toPng } from "html-to-image";
import { Download, Loader2 } from "lucide-react";
import { RefObject, useState } from "react";
import { monthName } from "../utils/date";

interface ExportButtonProps {
  month: number;
  targetRef: RefObject<HTMLElement>;
}

export function ExportButton({ month, targetRef }: ExportButtonProps) {
  const [isExporting, setIsExporting] = useState(false);

  const handleExport = async () => {
    const node = targetRef.current;

    if (!node) {
      return;
    }

    setIsExporting(true);

    try {
      const dataUrl = await toPng(node, {
        backgroundColor: "#f5f7f5",
        cacheBust: true,
        canvasHeight: 1350,
        canvasWidth: 1080,
        height: 1350,
        pixelRatio: 1,
        style: {
          height: "1350px",
          width: "1080px",
        },
        width: 1080,
      });
      const link = document.createElement("a");
      link.download = `laifen-social-calendar-2026-${String(month).padStart(2, "0")}-${monthName(month).toLowerCase()}.png`;
      link.href = dataUrl;
      link.click();
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <button
      className="inline-flex items-center justify-center gap-2 rounded-[8px] bg-laifen-ink px-4 py-2 text-sm font-semibold text-white transition hover:bg-black disabled:bg-zinc-400"
      disabled={isExporting}
      type="button"
      onClick={handleExport}
    >
      {isExporting ? (
        <Loader2 className="animate-spin" size={16} />
      ) : (
        <Download size={16} />
      )}
      PNG
    </button>
  );
}
