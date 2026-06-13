import { useState } from "react";
import { useTheme, themeConfig, type Theme } from "@/contexts/ThemeContext";

const themes = Object.entries(themeConfig) as [Theme, (typeof themeConfig)[Theme]][];

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {open && (
        <div className="mb-1 flex flex-col gap-1.5 rounded-2xl border bg-white/95 p-3 shadow-2xl backdrop-blur-sm"
          style={{ borderColor: "var(--border)", backgroundColor: "var(--card)" }}>
          <p className="mb-1 px-1 text-xs font-semibold" style={{ color: "var(--muted-foreground)" }}>
            UI 테마 선택
          </p>
          {themes.map(([id, cfg]) => (
            <button
              key={id}
              onClick={() => { setTheme(id); setOpen(false); }}
              className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-left text-sm transition-all hover:scale-[1.02]"
              style={{
                backgroundColor: theme === id ? "var(--primary)" : "var(--muted)",
                color: theme === id ? "var(--primary-foreground)" : "var(--foreground)",
              }}
            >
              <span className="text-base">{cfg.emoji}</span>
              <div>
                <p className="font-semibold leading-tight">{cfg.label}</p>
                <p className="text-xs opacity-70">{cfg.description}</p>
              </div>
            </button>
          ))}
        </div>
      )}
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex h-12 w-12 items-center justify-center rounded-full shadow-xl transition-all hover:scale-110 active:scale-95"
        style={{ backgroundColor: "var(--primary)", color: "var(--primary-foreground)" }}
        title="테마 변경"
      >
        🎨
      </button>
    </div>
  );
}
