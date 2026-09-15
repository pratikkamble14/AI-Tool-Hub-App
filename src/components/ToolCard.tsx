import type { AITool } from "@/data/tools";
import { ToolIcon } from "./ToolIcon";

interface Props {
  tool: AITool;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
}

export function ToolCard({ tool, isFavorite, onToggleFavorite }: Props) {
  return (
    <article className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900">
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <ToolIcon tool={tool} />
          <div className="min-w-0">
            <h2 className="break-words text-lg font-semibold leading-tight">{tool.name}</h2>
            <span className="mt-1 inline-block rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-300">
              {tool.category}
            </span>
          </div>
        </div>
        <button
          type="button"
          onClick={() => onToggleFavorite(tool.id)}
          aria-pressed={isFavorite}
          aria-label={isFavorite ? `Remove ${tool.name} from favorites` : `Add ${tool.name} to favorites`}
          title={isFavorite ? "Remove from favorites" : "Add to favorites"}
          className="rounded-lg p-2 text-xl leading-none transition hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:hover:bg-gray-800"
        >
          <span aria-hidden="true">{isFavorite ? "★" : "☆"}</span>
        </button>
      </div>

      <p className="mt-4 flex-1 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
        {tool.description}
      </p>

      <a
        href={tool.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex items-center justify-center gap-2 rounded-xl bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
      >
        Visit Website
        <span aria-hidden="true">↗</span>
      </a>
    </article>
  );
}
