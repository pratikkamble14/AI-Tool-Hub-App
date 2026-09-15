"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log to console for diagnostics; hook up a reporter here if needed.
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-dvh items-center justify-center bg-gray-50 px-4 dark:bg-gray-950">
      <div className="max-w-md rounded-2xl border border-gray-200 bg-white p-8 text-center dark:border-gray-800 dark:bg-gray-900">
        <h2 className="text-xl font-bold">Something went wrong</h2>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
          The hub hit an unexpected error. Please try again.
        </p>
        <button
          type="button"
          onClick={() => reset()}
          className="mt-5 rounded-xl bg-gray-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-gray-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
