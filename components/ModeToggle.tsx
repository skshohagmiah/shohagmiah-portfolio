"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";


export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  console.log(theme, "theme");

  return (
    <>
      {theme === "light" ? (
        <button onClick={() => setTheme("dark")} className="bg-transparent">
          <Moon className="w-5 h-5 text-black" />
        </button>
      ) : (
        <button className="bg-transparent text-white"  onClick={() => setTheme("light")}>
          <Sun className="w-5 h-5" />
        </button>
      )}
    </>
  );
}
