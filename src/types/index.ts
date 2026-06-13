export type CityCategory = "all" | "metro" | "small" | "coastal";

export interface City {
  id: string;
  name: string;
  categories: CityCategory[];
  imageUrl: string;
  monthlyCost: number;
  internetSpeed: number;
  coworkingCount: number;
  nomadScore: number;
}

export interface CategoryInfo {
  id: string;
  icon: string;
  label: string;
  description: string;
}
