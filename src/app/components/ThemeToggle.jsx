"use client";
import { useSyncExternalStore } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

function subscribe(callback) {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });
  return () => observer.disconnect();
}
const getTheme = () => document.documentElement.dataset.theme ?? "dark";

export default function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getTheme, () => "dark");
  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("portfolio-theme", next);
    } catch {
      /* Theme still works without storage. */
    }
  }
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      className="p-2 min-h-11 min-w-11 text-foreground rounded border border-outline"
    >
      {theme === "dark" ? (
        <SunIcon className="h-5 w-5 mx-auto" />
      ) : (
        <MoonIcon className="h-5 w-5 mx-auto" />
      )}
    </button>
  );
}
