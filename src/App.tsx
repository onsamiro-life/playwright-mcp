import { ThemeProvider } from "@/contexts/ThemeContext";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { CityExplorer } from "@/components/home/CityExplorer";
import { CategorySection } from "@/components/home/CategorySection";
import { FeaturedCity } from "@/components/home/FeaturedCity";

function App() {
  return (
    <ThemeProvider>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <HeroSection />
          <CityExplorer />
          <CategorySection />
          <FeaturedCity />
        </main>
        <Footer />
      </div>
      <ThemeSwitcher />
    </ThemeProvider>
  );
}

export default App;
