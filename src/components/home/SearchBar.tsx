import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export function SearchBar() {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
      <Input
        type="text"
        placeholder="도시명으로 검색하세요..."
        className="h-12 bg-white pl-10 text-base text-slate-900 placeholder:text-slate-400 shadow-lg"
      />
    </div>
  );
}
