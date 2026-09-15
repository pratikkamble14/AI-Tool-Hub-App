export type ToolCategory =
  | "Chatbot"
  | "Search"
  | "Coding"
  | "Image"
  | "Video"
  | "Audio"
  | "Writing"
  | "Productivity"
  | "Design"
  | "Whiteboard"
  | "Diagramming";

export interface AITool {
  id: string;
  name: string;
  description: string;
  url: string;
  category: ToolCategory;
  brandColor: string;
  initials: string;
}

// Curated list — URLs are fixed allowlist, never rendered from user input.
export const TOOLS: AITool[] = [
  {
    id: "chatgpt",
    name: "ChatGPT",
    description:
      "OpenAI's conversational AI for writing, coding, brainstorming and everyday productivity.",
    url: "https://chatgpt.com",
    category: "Chatbot",
    brandColor: "#10a37f",
    initials: "GPT",
  },
  {
    id: "gemini",
    name: "Gemini",
    description:
      "Google's multimodal AI assistant for research, writing, coding and creative ideas.",
    url: "https://gemini.google.com",
    category: "Chatbot",
    brandColor: "#4285F4",
    initials: "Ge",
  },
  {
    id: "deepseek",
    name: "DeepSeek",
    description:
      "Open, efficient reasoning models with strong coding and math performance.",
    url: "https://chat.deepseek.com",
    category: "Chatbot",
    brandColor: "#4D6BFE",
    initials: "DS",
  },
  {
    id: "eraser",
    name: "Eraser",
    description:
      "Collaborative whiteboard and docs for diagrams, wireframes and technical design.",
    url: "https://www.eraser.io",
    category: "Diagramming",
    brandColor: "#EC2E2E",
    initials: "Er",
  },
  {
    id: "tldraw",
    name: "tldraw",
    description:
      "Fast, beautiful infinite canvas for sketching, wireframing and visual thinking.",
    url: "https://www.tldraw.com",
    category: "Whiteboard",
    brandColor: "#2E80EC",
    initials: "td",
  },
  {
    id: "grok",
    name: "Grok",
    description:
      "xAI's witty assistant with real-time X insights, coding help and deep research.",
    url: "https://grok.com",
    category: "Chatbot",
    brandColor: "#111111",
    initials: "Gk",
  },
  {
    id: "perplexity",
    name: "Perplexity",
    description:
      "AI-powered answer engine with cited sources for fast, trustworthy research.",
    url: "https://www.perplexity.ai",
    category: "Search",
    brandColor: "#20808D",
    initials: "Px",
  },
  {
    id: "claude",
    name: "Claude",
    description:
      "Anthropic's thoughtful assistant for writing, analysis, coding and long documents.",
    url: "https://claude.ai",
    category: "Chatbot",
    brandColor: "#D97757",
    initials: "Cl",
  },
  {
    id: "copilot",
    name: "Microsoft Copilot",
    description:
      "Everyday AI companion built into Windows, Edge and Microsoft 365.",
    url: "https://copilot.microsoft.com",
    category: "Chatbot",
    brandColor: "#0078D4",
    initials: "Co",
  },
  {
    id: "cursor",
    name: "Cursor",
    description:
      "AI-first code editor that pairs with you to write, edit and understand code.",
    url: "https://www.cursor.com",
    category: "Coding",
    brandColor: "#000000",
    initials: "Cu",
  },
  {
    id: "midjourney",
    name: "Midjourney",
    description:
      "Beloved text-to-image generator for stunning art, illustrations and concept work.",
    url: "https://www.midjourney.com",
    category: "Image",
    brandColor: "#334155",
    initials: "MJ",
  },
  {
    id: "leonardo",
    name: "Leonardo AI",
    description:
      "Production-ready AI art platform with fine-tuned models and canvas editing.",
    url: "https://leonardo.ai",
    category: "Image",
    brandColor: "#7C3AED",
    initials: "Le",
  },
  {
    id: "runway",
    name: "Runway",
    description:
      "Generative video and creative suite for editing, effects and AI filmmaking.",
    url: "https://runwayml.com",
    category: "Video",
    brandColor: "#00A67E",
    initials: "Rw",
  },
  {
    id: "elevenlabs",
    name: "ElevenLabs",
    description:
      "Lifelike AI voice generation, cloning and text-to-speech in 30+ languages.",
    url: "https://elevenlabs.io",
    category: "Audio",
    brandColor: "#1F2937",
    initials: "El",
  },
  {
    id: "suno",
    name: "Suno",
    description:
      "Create full songs with vocals from a text prompt — music for everyone.",
    url: "https://suno.com",
    category: "Audio",
    brandColor: "#8B5CF6",
    initials: "Su",
  },
  {
    id: "grammarly",
    name: "Grammarly",
    description:
      "AI writing partner for grammar, tone, clarity and plagiarism checks.",
    url: "https://www.grammarly.com",
    category: "Writing",
    brandColor: "#15C39A",
    initials: "Gr",
  },
  {
    id: "notion",
    name: "Notion AI",
    description:
      "Docs, wikis and projects supercharged with built-in AI writing help.",
    url: "https://www.notion.so",
    category: "Productivity",
    brandColor: "#0F172A",
    initials: "No",
  },
  {
    id: "meta-ai",
    name: "Meta AI",
    description:
      "Meta's assistant for chat, image generation and getting things done in your apps.",
    url: "https://www.meta.ai",
    category: "Chatbot",
    brandColor: "#0082FB",
    initials: "Me",
  },
  {
    id: "le-chat",
    name: "Le Chat",
    description:
      "Mistral's fast, efficient European assistant with web search and canvas.",
    url: "https://chat.mistral.ai",
    category: "Chatbot",
    brandColor: "#FF7000",
    initials: "Mi",
  },
  {
    id: "poe",
    name: "Poe",
    description:
      "One app to chat with many AI models — GPT, Claude, Llama and more.",
    url: "https://poe.com",
    category: "Chatbot",
    brandColor: "#5B21B6",
    initials: "Po",
  },
  {
    id: "character-ai",
    name: "Character.AI",
    description:
      "Chat with AI characters — from helpers and tutors to roleplay personalities.",
    url: "https://character.ai",
    category: "Chatbot",
    brandColor: "#0EA5E9",
    initials: "Ch",
  },
  {
    id: "canva",
    name: "Canva",
    description:
      "Drag-and-drop design with Magic Studio AI for presentations, posts and more.",
    url: "https://www.canva.com",
    category: "Design",
    brandColor: "#00C4CC",
    initials: "Ca",
  },
  {
    id: "figma",
    name: "Figma",
    description:
      "Collaborative interface design with AI features for sites, apps and prototypes.",
    url: "https://www.figma.com",
    category: "Design",
    brandColor: "#F24E1E",
    initials: "Fi",
  },
];

export const CATEGORIES: Array<"All" | ToolCategory> = [
  "All",
  "Chatbot",
  "Search",
  "Coding",
  "Image",
  "Video",
  "Audio",
  "Writing",
  "Productivity",
  "Design",
  "Whiteboard",
  "Diagramming",
];
