import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Tools Hub — Discover the Best AI & Productivity Tools",
  description:
    "A clean, modern hub showcasing ChatGPT, Gemini, DeepSeek, Eraser, tldraw, Grok and Perplexity.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#030712" },
  ],
};

function ThemeInitScript() {
  // Runs before hydration to avoid theme flash. No user input involved.
  const code = `(function(){try{var t=localStorage.getItem('ai-tools-hub-theme');var d=window.matchMedia('(prefers-color-scheme: dark)').matches;if(t==='dark'||(!t&&d)){document.documentElement.classList.add('dark')}}catch(e){}})();`;
  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeInitScript />
      </head>
      <body className="antialiased min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100">
        {children}
      </body>
    </html>
  );
}
