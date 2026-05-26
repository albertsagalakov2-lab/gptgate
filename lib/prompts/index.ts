import { allPrompts } from "@/prompts/json";

type Prompt = {
  content?: string;
  [key: string]: unknown;
};

const prompts = allPrompts as Prompt[];

export function getFirstPrompt(): string {
  if (!prompts || prompts.length === 0) {
    return "You are a helpful AI assistant.";
  }

  const firstPrompt = prompts[0];

  if (!firstPrompt?.content) {
    return "You are a helpful AI assistant.";
  }

  return firstPrompt.content;
}

export function getAllPrompts() {
  return prompts;
}

export function getPromptByIndex(index: number): string {
  if (!prompts || index < 0 || index >= prompts.length) {
    return "You are a helpful AI assistant.";
  }

  const prompt = prompts[index];

  if (!prompt?.content) {
    return "You are a helpful AI assistant.";
  }

  return prompt.content;
}
