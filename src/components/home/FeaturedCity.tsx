import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { featuredCity } from "@/lib/data/cities";

export function FeaturedCity() {
  const city = featuredCity;

  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-6 text-2xl font-bold text-slate-900">🔥 이달의 추천 도시</h2>
        <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/5">
              <img
                src={city.imageUrl.replace("400x240", "800x480")}
                alt={city.name}
                className="h-full min-h-56 w-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center gap-4 p-8 md:w-3/5">
              <div>
                <p className="text-3xl font-bold text-slate-900">{city.name}</p>
                <p className="mt-2 text-lg text-slate-500">
                  "바다를 옆에 두고, 빠른 인터넷으로 — 워케이션 최적지"
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary" className="text-sm py-1.5 px-3">
                  ⭐ {city.nomadScore.toFixed(1)}점
                </Badge>
                <Badge variant="secondary" className="text-sm py-1.5 px-3">
                  💰 월 {city.monthlyCost}만원~
                </Badge>
                <Badge variant="secondary" className="text-sm py-1.5 px-3">
                  🌐 {city.internetSpeed} Mbps
                </Badge>
                <Badge variant="secondary" className="text-sm py-1.5 px-3">
                  🏢 코워킹 {city.coworkingCount}개
                </Badge>
              </div>
              <div>
                <Button size="lg" className="bg-slate-900 hover:bg-slate-800">
                  {city.name} 자세히 보기 →
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
