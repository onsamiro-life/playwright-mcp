import { categories } from "@/lib/data/cities";

export function CategorySection() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8" style={{ backgroundColor: "var(--theme-section-muted)" }}>
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold text-slate-900">노마드 생활에 필요한 모든 정보</h2>
          <p className="mt-2 text-slate-500">카테고리별로 원하는 정보를 빠르게 찾아보세요</p>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map((cat) => (
            <a
              key={cat.id}
              href="#"
              className="flex flex-col items-center gap-3 rounded-xl border border-slate-200 bg-white p-6 text-center transition-shadow hover:shadow-md"
            >
              <span className="text-4xl">{cat.icon}</span>
              <div>
                <p className="font-semibold text-slate-900">{cat.label}</p>
                <p className="mt-0.5 text-xs text-slate-500">{cat.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
