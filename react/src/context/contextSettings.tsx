import { createContext } from "react";

interface animationSettings {
  turnOffAnimation: boolean;
  animation: boolean;
  bounceInUp: boolean;
  wizardStatus: string;
  openPortal: boolean;
  appearingPortal: number;
  link: string;
  getLinks?: boolean;
  stack: string[];
}

export const ContextSettings = createContext<[animationSettings,
  (settings: animationSettings) => void]>([
    {
      turnOffAnimation: false,
      animation: false,
      bounceInUp: false,
      openPortal: false,
      appearingPortal: 0,
      link: "",
      getLinks: null,
      wizardStatus: "appearing",
      stack: []
    },
    () => { }]);