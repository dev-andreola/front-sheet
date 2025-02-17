"use client";

import { Moon, Sun } from "lucide-react";
import { Button } from "../ui/button";
import { useTheme } from "next-themes";

let audio: HTMLAudioElement | null = null;

export default function ButtonThemeSwitch() {
  const { setTheme, theme } = useTheme();

  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light");

    if (!audio) {
      // Cria a instância do áudio apenas uma vez
      audio = new Audio("/sounds/flashlight.mp3");
    }
    // Recomeça o som do início
    audio.currentTime = 0;
    audio.play();
  };
  return (
    <Button variant="outline" size="icon" onClick={handleClick}>
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  );
}
