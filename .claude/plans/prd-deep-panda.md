# NomadKR 홈페이지 구현 계획

## Context

PRD(`prd-deep-panda.md`)에 정의된 한국 디지털 노마드 정보 플랫폼의 홈페이지를 구현한다.
UI만 제작하며 실제 데이터 연동/검색/필터 기능은 구현하지 않는다.
기술 스택: Vite + React 18 + TypeScript + Tailwind CSS + Shadcn/ui (SPA)

---

## 0. 사전 작업

1. `.claude/plans` 디렉토리 생성: `C:\dev_claude\playwright-mcp\.claude\plans\`
2. PRD 파일 복사 → `C:\dev_claude\playwright-mcp\.claude\plans\prd-deep-panda.md`
3. 기존 파일 삭제: `C:\Users\FINGER\.claude\plans\prd-deep-panda.md`

---

## 1. 프로젝트 부트스트랩

작업 디렉토리: `C:\dev_claude\playwright-mcp\`

```bash
# 1. Vite React TS 프로젝트 생성
npm create vite@latest nomadkr -- --template react-ts
cd nomadkr
npm install

# 2. Tailwind CSS 설치
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# 3. Shadcn 초기화 (Vite용)
npx shadcn@latest init

# 4. Shadcn 컴포넌트 설치
npx shadcn@latest add button badge card input select separator
```

---

## 2. 설정 파일

### `vite.config.ts` — 경로 별칭 설정
```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
})
```

### `tsconfig.json` — paths 추가
```json
"compilerOptions": {
  "baseUrl": ".",
  "paths": { "@/*": ["./src/*"] }
}
```

### `src/index.css` — Tailwind directives
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## 3. 최종 파일 구조

```
nomadkr/
├── src/
│   ├── main.tsx
│   ├── App.tsx                 ← 전체 레이아웃 조합
│   ├── index.css
│   ├── components/
│   │   ├── ui/                 ← Shadcn 자동 생성 (수정 금지)
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   └── home/
│   │       ├── HeroSection.tsx
│   │       ├── SearchBar.tsx
│   │       ├── CityExplorer.tsx
│   │       ├── CityCard.tsx
│   │       ├── CategorySection.tsx
│   │       └── FeaturedCity.tsx
│   ├── lib/
│   │   ├── utils.ts            ← Shadcn cn() 유틸
│   │   └── data/
│   │       └── cities.ts       ← 목 데이터
│   └── types/
│       └── index.ts
├── index.html
├── vite.config.ts
├── tailwind.config.ts
├── components.json             ← Shadcn 설정
└── package.json
```

---

## 4. 타입 정의 (`src/types/index.ts`)

```typescript
export type CityCategory = "all" | "metro" | "small" | "coastal";

export interface City {
  id: string;
  name: string;
  categories: CityCategory[];
  imageUrl: string;
  monthlyCost: number;    // 단위: 만원
  internetSpeed: number;  // 단위: Mbps
  coworkingCount: number;
  nomadScore: number;     // 1.0 ~ 5.0
}

export interface CategoryInfo {
  id: string;
  icon: string;
  label: string;
  description: string;
}
```

---

## 5. 목 데이터 (`src/lib/data/cities.ts`)

도시 8개: 서울, 부산, 제주, 대구, 광주, 전주, 강릉, 인천
`imageUrl`은 `https://placehold.co/400x240/e2e8f0/64748b?text={도시명}` 사용

---

## 6. 컴포넌트별 구현 가이드

### `src/App.tsx`
- `<Navbar />` + 각 섹션 + `<Footer />` 순서로 조합
- 섹션 순서: HeroSection → CityExplorer → CategorySection → FeaturedCity

### `components/layout/Navbar.tsx`
- `sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b`
- 좌: "🏕 NomadKR" 로고
- 중앙: 도시 탐색 / 생활 가이드 / 커뮤니티 (`Button variant="ghost"`)
- 우: 로그인 (`Button variant="outline"`) + "KO"

### `components/layout/Footer.tsx`
- 4열 그리드: 로고+설명 / 서비스 링크 / 정보 링크 / SNS 링크
- 하단: 업데이트 날짜 + 저작권

### `components/home/HeroSection.tsx`
- 배경: `bg-gradient-to-br from-slate-900 to-slate-700` + 흰 텍스트
- 헤드라인 `text-5xl font-bold`: "당신의 다음 베이스캠프를 찾아보세요"
- 서브: "한국 20개 도시의 디지털 노마드 생활 정보를 한눈에"
- `<SearchBar />` 삽입
- 빠른 접근 태그: `Badge variant="secondary"` 5개

### `components/home/SearchBar.tsx`
- Shadcn `Input` + lucide-react `Search` 아이콘
- `placeholder="도시명으로 검색하세요..."`, `max-w-xl`, 흰 배경

### `components/home/CityExplorer.tsx`
- `useState<CityCategory>("all")` 로 탭 상태 관리
- 필터 탭: 전체 / 대도시 / 중소도시 / 해안도시 → 활성탭 강조 스타일
- 정렬 `<Select>`: 추천순 / 월세낮은순 / 인터넷빠른순 (UI만)
- 탭 값으로 cities 배열 필터링 → `<CityCard />` 그리드
- `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`
- 하단 "더 많은 도시 보기" `Button variant="outline"`

### `components/home/CityCard.tsx`
- Shadcn `Card`
- `<img>` 태그로 placehold.co 이미지
- 도시명 bold + 3개 스탯 (💰 / 🌐 / 🏢)
- 별점 렌더 (★ 채움 / ☆ 빔, score 기준)
- "자세히 보기" `Button` 전체 너비

### `components/home/CategorySection.tsx`
- 섹션 제목: "노마드 생활에 필요한 모든 정보"
- 6개 카드: `grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4`
- 각 카드: 이모지 (text-4xl) + 카테고리명 + 짧은 설명
- `hover:shadow-md transition-shadow`
- 카테고리: 💰 생활비 / 🌐 인터넷 / 🏢 코워킹 / 🚌 교통 / ☀️ 날씨 / 📋 비자

### `components/home/FeaturedCity.tsx`
- "🔥 이달의 추천 도시" 제목
- 와이드 카드: 좌측 이미지 40% + 우측 정보 60% (flex)
- 도시명, 선정 이유 문구, 핵심 지표 3개, "자세히 보기 →" 버튼

---

## 7. 검증 방법

```bash
cd nomadkr
npm run dev   # → http://localhost:5173
npm run build # 빌드 오류 없는지 확인
```

**확인 체크리스트:**
- [ ] Navbar sticky + 스크롤 시 반투명 효과
- [ ] Hero 그라디언트 배경 + 검색바 + 태그 표시
- [ ] 도시 카드 3열 그리드 (8개)
- [ ] 필터 탭 클릭 시 카드 목록 변경
- [ ] 카테고리 6개 아이콘 카드
- [ ] 추천 도시 와이드 카드
- [ ] 모바일(375px) 반응형: 카드 1열, 카테고리 2열

---

## 원본 PRD 참조

이동 후 위치: `C:\dev_claude\playwright-mcp\.claude\plans\prd-deep-panda.md`
