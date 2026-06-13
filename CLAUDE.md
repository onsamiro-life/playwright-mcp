# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**NomadKR** — 한국 디지털 노마드 정보 플랫폼 (UI-only SPA). 실제 데이터 연동이나 검색/필터 백엔드 없이 목 데이터로 동작한다.

## Commands

```bash
npm run dev      # Dev server → http://localhost:5173
npm run build    # tsc -b && vite build
npm run lint     # eslint .
npm run preview  # 프로덕션 빌드 미리보기
```

## Architecture

### 진입점
`src/main.tsx` → `src/App.tsx` — 전체 레이아웃을 조합하는 루트 컴포넌트.  
렌더 순서: `<Navbar />` → `<HeroSection />` → `<CityExplorer />` → `<CategorySection />` → `<FeaturedCity />` → `<Footer />`

### 컴포넌트 구조
- `src/components/ui/` — Shadcn/ui 자동 생성 프리미티브 (button, badge, card, input, select, separator). **직접 수정 금지.**
- `src/components/layout/` — `Navbar.tsx`, `Footer.tsx`
- `src/components/home/` — 페이지 섹션: `HeroSection`, `SearchBar`, `CityExplorer`, `CityCard`, `CategorySection`, `FeaturedCity`

### 데이터 & 타입
- `src/types/index.ts` — `City`, `CityCategory` (`"all" | "metro" | "small" | "coastal"`), `CategoryInfo`
- `src/lib/data/cities.ts` — 목 데이터: 한국 8개 도시 + `featuredCity` + `categories` (6개). 유일한 데이터 소스이며 API 호출 없음.
- `src/lib/utils.ts` — Shadcn `cn()` 헬퍼 (clsx + tailwind-merge)

### 경로 별칭
`@/` → `src/` (`vite.config.ts` 및 `tsconfig.app.json`에 설정됨)

### 스타일
Tailwind CSS v4 — `@tailwindcss/vite` 플러그인 방식 사용. `tailwind.config.ts` 파일 없음, `src/index.css`에서 import.

## MCP

Playwright MCP가 `.mcp.json`에 설정되어 있음:
```json
{ "mcpServers": { "playwright": { "command": "npx", "args": ["@playwright/mcp@latest"] } } }
```
UI 변경 후 브라우저 검증 시 `mcp__playwright__*` 도구를 사용한다.
