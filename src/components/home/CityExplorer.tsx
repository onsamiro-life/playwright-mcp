import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CityCard } from "./CityCard";
import { cities } from "@/lib/data/cities";
import { cn } from "@/lib/utils";
import type { CityCategory } from "@/types";

const filterTabs: { label: string; value: CityCategory }[] = [
  { label: "전체", value: "all" },
  { label: "대도시", value: "metro" },
  { label: "중소도시", value: "small" },
  { label: "해안도시", value: "coastal" },
];

export function CityExplorer() {
  const [activeFilter, setActiveFilter] = useState<CityCategory>("all");

  const filtered = activeFilter === "all"
    ? cities
    : cities.filter((c) => c.categories.includes(activeFilter));

  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8" style={{ backgroundColor: "var(--theme-section-bg)" }}>
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-2xl font-bold text-slate-900">도시 탐색</h2>
          <Select defaultValue="recommended">
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="recommended">추천순</SelectItem>
              <SelectItem value="cost">월세 낮은순</SelectItem>
              <SelectItem value="internet">인터넷 빠른순</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="mb-6 flex flex-wrap gap-2">
          {filterTabs.map((tab) => (
            <Button
              key={tab.value}
              variant={activeFilter === tab.value ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter(tab.value)}
              className={cn(
                activeFilter === tab.value && "bg-slate-900 text-white hover:bg-slate-800"
              )}
            >
              {tab.label}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((city) => (
            <CityCard key={city.id} city={city} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button variant="outline" size="lg">
            더 많은 도시 보기
          </Button>
        </div>
      </div>
    </section>
  );
}
