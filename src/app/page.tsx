"use client";

import { useEffect, useMemo, useState } from "react";
import { TOOLS, CATEGORIES } from "@/data/tools";
import { ToolCard } from "@/components/ToolCard";

const FAVORITES_KEY = "ai-tools-hub-favorites";
const THEME_KEY = "ai-tools-hub-theme";

function loadFavorites(): string[] {
  try {
    const raw = localStorage.getItem(FAVORITES_KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    // Only keep known tool ids (string allowlist check)
    const validIds = new Set(TOOLS.map((t) => t.id));
    return parsed.filter(
      (v): v is string => typeof v === "string" && validIds.has(v)
    );
  } catch {
    return [];
  }
}

export default function Home() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<(typeof CATEGORIES)[number]>("All");
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const [sort, setSort] = useState<"featured" | "az" | "za" | "category">(
    "featured"
  );
  const [favorites, setFavorites] = useState<string[]>([]);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setFavorites(loadFavorites());
    try {
      setIsDark(document.documentElement.classList.contains("dark"));
    } catch {
      setIsDark(false);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
    } catch {
      // storage may be unavailable (private mode) — fail silently
    }
  }, [favorites]);

  function toggleTheme() {
    const next = !isDark;
    setIsDark(next);
    try {
      document.documentElement.classList.toggle("dark", next);
      localStorage.setItem(THEME_KEY, next ? "dark" : "light");
    } catch {
      // ignore
    }
  }

  function toggleFavorite(id: string) {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  }

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const tool of TOOLS) {
      counts[tool.category] = (counts[tool.category] ?? 0) + 1;
    }
    return counts;
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = TOOLS.filter((tool) => {
      if (category !== "All" && tool.category !== category) return false;
      if (showFavoritesOnly && !favorites.includes(tool.id)) return false;
      if (!q) return true;
      return (
        tool.name.toLowerCase().includes(q) ||
        tool.description.toLowerCase().includes(q) ||
        tool.category.toLowerCase().includes(q)
      );
    });
    const sorted = [...list];
    if (sort === "az") sorted.sort((a, b) => a.name.localeCompare(b.name));
    else if (sort === "za") sorted.sort((a, b) => b.name.localeCompare(a.name));
    else if (sort === "category")
      sorted.sort(
        (a, b) =>
          a.category.localeCompare(b.category) || a.name.localeCompare(b.name)
      );
    return sorted;
  }, [query, category, showFavoritesOnly, favorites, sort]);

  return (
    <div className="flex min-h-dvh flex-col bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-gray-100">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b border-gray-200 bg-white/80 backdrop-blur dark:border-gray-800 dark:bg-gray-950/80">
        <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-x-4 gap-y-2 px-4 py-4 sm:px-6">
          <div className="flex min-w-0 items-center gap-3">
            <span
              aria-hidden="true"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-blue-600 text-lg font-bold text-white"
            >
              AI
            </span>
            <div className="min-w-0">
              <h1 className="truncate text-lg font-bold leading-tight">AI Tools Hub</h1>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {TOOLS.length} hand-picked AI & productivity tools
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className="rounded-xl border border-gray-200 px-3 py-2 text-sm font-medium transition hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:border-gray-700 dark:hover:bg-gray-800"
          >
            {isDark ? "☀ Light" : "☾ Dark"}
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto w-full max-w-7xl px-4 pt-8 text-center sm:px-6 sm:pt-10">
        <h2 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
          Discover the best{" "}
          <span className="bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">
            AI tools
          </span>{" "}
          in one place
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-gray-600 dark:text-gray-300 sm:text-base">
          From chatbots and coding assistants to image, video, audio and design
          generators — explore short descriptions and jump straight to the
          official site.
        </p>

        {/* Search + filters */}
        <div className="mx-auto mt-6 flex w-full max-w-3xl flex-col gap-3">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search tools… (e.g. chat, whiteboard, research)"
            aria-label="Search tools"
            className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-base outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-gray-700 dark:bg-gray-900 dark:focus:ring-blue-900 sm:text-sm"
          />
          <div className="flex gap-2 overflow-x-auto pb-1 md:flex-wrap md:justify-center md:overflow-visible md:pb-0">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCategory(c)}
                aria-pressed={category === c}
                className={`shrink-0 whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 ${
                  category === c
                    ? "bg-gray-900 text-white dark:bg-white dark:text-gray-900"
                    : "bg-white text-gray-600 ring-1 ring-gray-200 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-300 dark:ring-gray-700 dark:hover:bg-gray-800"
                }`}
              >
                {c === "All" ? `All (${TOOLS.length})` : `${c} (${categoryCounts[c] ?? 0})`}
              </button>
            ))}
            <button
              type="button"
              onClick={() => setShowFavoritesOnly((v) => !v)}
              aria-pressed={showFavoritesOnly}
              className={`shrink-0 whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 ${
                showFavoritesOnly
                  ? "bg-amber-400 text-gray-900"
                  : "bg-white text-gray-600 ring-1 ring-gray-200 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-300 dark:ring-gray-700 dark:hover:bg-gray-800"
              }`}
            >
              ★ Favorites ({favorites.length})
            </button>
          </div>
        </div>
      </section>

      {/* Grid */}
      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-8 sm:px-6">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <p
            aria-live="polite"
            className="text-xs text-gray-500 dark:text-gray-400"
          >
            Showing {filtered.length} of {TOOLS.length} tools
          </p>
          <label className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
            Sort by
            <select
              value={sort}
              onChange={(e) =>
                setSort(e.target.value as typeof sort)
              }
              className="rounded-lg border border-gray-200 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:focus:ring-blue-900"
            >
              <option value="featured">Featured</option>
              <option value="az">Name (A–Z)</option>
              <option value="za">Name (Z–A)</option>
              <option value="category">Category</option>
            </select>
          </label>
        </div>
        {filtered.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-gray-300 p-12 text-center dark:border-gray-700">
            <p className="text-lg font-semibold">No tools found</p>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Try a different search term or category.
            </p>
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setCategory("All");
                setShowFavoritesOnly(false);
              }}
              className="mt-4 rounded-xl bg-gray-900 px-4 py-2 text-sm font-semibold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:bg-white dark:text-gray-900"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3 xl:grid-cols-4 xl:gap-12">
            {filtered.map((tool) => (
              <ToolCard
                key={tool.id}
                tool={tool}
                isFavorite={favorites.includes(tool.id)}
                onToggleFavorite={toggleFavorite}
              />
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-2 px-4 py-8 text-center sm:px-6">
          <p className="text-sm font-semibold">
            AI Tools Hub — find the right AI for the job
          </p>
          <p className="max-w-xl text-xs leading-relaxed text-gray-500 dark:text-gray-400">
            An independent directory of popular AI and productivity tools. All
            trademarks belong to their respective owners; this site is not
            affiliated with or endorsed by any listed tool.
          </p>
          <p className="text-xs text-gray-400 dark:text-gray-500">
            © {new Date().getFullYear()} AI Tools Hub · {TOOLS.length} tools
            and counting
          </p>
        </div>
      </footer>
    </div>
  );
}
