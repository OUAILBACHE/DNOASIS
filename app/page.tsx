import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturedDomains } from "@/components/featured-domains"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturedDomains />
      </main>
      <Footer />
    </div>
  )
}
