import { ColorScheme, StartScreenPrompt, ThemeOption } from "@openai/chatkit";

export const WORKFLOW_ID =
  process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID?.trim() ?? "";

export const CREATE_SESSION_ENDPOINT = "/api/create-session";

export const STARTER_PROMPTS: StartScreenPrompt[] = [
  {
    label: "What can you do?",
    prompt: "What can you do?",
    icon: "circle-question",
  },
  {
    label: "Help me get started",
    prompt: "Help me get started with this course",
    icon: "play",
  },
  {
    label: "Explain a concept",
    prompt: "Can you explain this concept in simple terms?",
    icon: "lightbulb",
  },
];

export const PLACEHOLDER_INPUT = "Ask me anything about this course...";

export const GREETING = "Hi! I'm your AI course assistant. How can I help you today?";

export const getThemeConfig = (theme: ColorScheme): ThemeOption => ({
  colorScheme: theme,
  radius: "round",
  density: "normal",
  typography: {
    baseSize: 16,
    fontFamily: '"OpenAI Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    fontFamilyMono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  },
  color: {
    grayscale: {
      hue: 220,
      tint: 6,
      shade: theme === "dark" ? -1 : -4,
    },
    accent: {
      primary: theme === "dark" ? "#f1f5f9" : "#0f172a",
      level: 1,
    },
  },
});
