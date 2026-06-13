import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import type { City } from "@/types";

function StarRating({ score }: { score: number }) {
  return (
    <span className="text-amber-400">
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i}>{i < Math.round(score) ? "★" : "☆"}</span>
      ))}
      <span className="ml-1 text-sm text-slate-500">{score.toFixed(1)}</span>
    </span>
  );
}

export function CityCard({ city }: { city: City }) {
  return (
    <Card className="overflow-hidden transition-shadow hover:shadow-md">
      <div className="aspect-[5/3] overflow-hidden">
        <img
          src={city.imageUrl}
          alt={city.name}
          className="h-full w-full object-cover"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="mb-3 text-lg font-bold text-slate-900">{city.name}</h3>
        <div className="space-y-1.5 text-sm text-slate-600">
          <div className="flex items-center gap-2">
            <span>💰</span>
            <span>월 {city.monthlyCost}만원~</span>
          </div>
          <div className="flex items-center gap-2">
            <span>🌐</span>
            <span>{city.internetSpeed} Mbps</span>
          </div>
          <div className="flex items-center gap-2">
            <span>🏢</span>
            <span>코워킹 {city.coworkingCount}개</span>
          </div>
        </div>
        <div className="mt-3">
          <StarRating score={city.nomadScore} />
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button variant="outline" className="w-full">
          자세히 보기
        </Button>
      </CardFooter>
    </Card>
  );
}
