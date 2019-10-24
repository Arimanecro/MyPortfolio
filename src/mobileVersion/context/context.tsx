import { createContext } from "react";

interface infoSettings {
  go: boolean;
  close: boolean;
  category: string;
}

export const ContextSettings = createContext<[infoSettings,
  (settings: infoSettings) => void]>([
    {
      go: false,
      close: false,
      category: 'stacks'
    },
    () => { }]);