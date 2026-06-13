import { Button } from "@/components/ui/button";

const navLinks = ["도시 탐색", "생활 가이드", "커뮤니티"];

export function Navbar() {
  return (
    <header
      className="sticky top-0 z-50 w-full border-b backdrop-blur-sm"
      style={{ background: "var(--theme-nav-bg)", borderColor: "var(--border)" }}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <a
            href="/"
            className="flex items-center gap-2 text-xl font-bold"
            style={{ color: "var(--foreground)" }}
          >
            🏕 NomadKR
          </a>
          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <Button
                key={link}
                variant="ghost"
                size="sm"
                style={{ color: "var(--muted-foreground)" }}
              >
                {link}
              </Button>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <span className="hidden text-sm sm:inline" style={{ color: "var(--muted-foreground)" }}>KO</span>
          <Button variant="outline" size="sm">
            로그인
          </Button>
        </div>
      </div>
    </header>
  );
}
