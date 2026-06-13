import { createContext, useContext, useState, type ReactNode } from "react";

export type Theme = "default" | "minimal" | "cyber" | "nature" | "luxury";

export const themeConfig: Record<Theme, { label: string; emoji: string; description: string }> = {
  default:  { label: "기본",      emoji: "🔵", description: "기존 NomadKR 스타일" },
  minimal:  { label: "미니멀",    emoji: "⬜", description: "깔끔하고 단순한 화이트 테마" },
  cyber:    { label: "네온 사이버", emoji: "🟢", description: "미래적인 다크 네온 테마" },
  nature:   { label: "네이처",    emoji: "🌿", description: "자연 친화적 어스 테마" },
  luxury:   { label: "럭셔리",    emoji: "✨", description: "프리미엄 다크 골드 테마" },
};

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType>({ theme: "default", setTheme: () => {} });

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("default");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div data-theme={theme} className="min-h-screen" style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
