import { Badge } from "@/components/ui/badge";
import { SearchBar } from "./SearchBar";

const quickTags = ["서울", "부산", "제주", "대구", "전주"];

export function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-slate-900 to-slate-700 px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          당신의 다음 베이스캠프를<br />찾아보세요
        </h1>
        <p className="mt-4 text-lg text-slate-300 sm:text-xl">
          한국 20개 도시의 디지털 노마드 생활 정보를 한눈에
        </p>
        <div className="mt-8">
          <SearchBar />
        </div>
        <div className="mt-5 flex flex-wrap justify-center gap-2">
          {quickTags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="cursor-pointer bg-white/10 text-white hover:bg-white/20 border-white/20"
            >
              # {tag}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
