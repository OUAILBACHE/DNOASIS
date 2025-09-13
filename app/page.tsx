import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { FeaturedDomains } from "@/components/featured-domains";
import { Footer } from "@/components/footer";

export default function Page() { // must be default export
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturedDomains />
      </main>
      <Footer />
    </div>
  );
}

