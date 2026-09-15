import type { AITool } from "@/data/tools";

function initialsBadge(tool: AITool) {
  return (
    <span
      aria-hidden="true"
      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-lg font-bold text-white"
      style={{ backgroundColor: tool.brandColor }}
    >
      {tool.initials}
    </span>
  );
}

export function ToolIcon({ tool }: { tool: AITool }) {
  return initialsBadge(tool);
}
