
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturedPanelBeaters from "@/components/FeaturedPanelBeaters";
import AllPanelBeatersTable from "@/components/AllPanelBeatersTable";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="font-sans min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 flex flex-col items-center w-full">
        <HeroSection />
        <FeaturedPanelBeaters />
        <AllPanelBeatersTable />
      </main>
      <Footer />
    </div>
  );
}
