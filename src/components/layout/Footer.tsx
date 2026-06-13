import { Separator } from "@/components/ui/separator";

const serviceLinks = ["서비스 소개", "도시 탐색", "생활 가이드", "정보 제보하기"];
const infoLinks = ["이용약관", "개인정보처리방침", "문의하기"];
const socialLinks = [
  { label: "Instagram", icon: "📸", href: "#" },
  { label: "Twitter/X", icon: "𝕏", href: "#" },
  { label: "오픈카카오", icon: "💬", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <p className="text-xl font-bold text-white">🏕 NomadKR</p>
            <p className="mt-3 text-sm leading-relaxed">
              한국에서 디지털 노마드로 살고 싶은 모든 분을 위한 도시별 생활 정보 플랫폼
            </p>
          </div>
          <div>
            <p className="mb-3 text-sm font-semibold text-white">서비스</p>
            <ul className="space-y-2 text-sm">
              {serviceLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-white transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-3 text-sm font-semibold text-white">정보</p>
            <ul className="space-y-2 text-sm">
              {infoLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-white transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-3 text-sm font-semibold text-white">SNS</p>
            <ul className="space-y-2 text-sm">
              {socialLinks.map((s) => (
                <li key={s.label}>
                  <a href={s.href} className="flex items-center gap-2 hover:text-white transition-colors">
                    <span>{s.icon}</span>
                    <span>{s.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Separator className="my-8 bg-slate-700" />
        <div className="flex flex-col items-center justify-between gap-2 text-sm sm:flex-row">
          <p>정보 업데이트: 매월 1회 / 마지막 업데이트: 2026년 6월</p>
          <p>© 2026 NomadKR. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
