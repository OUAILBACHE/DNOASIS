import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export function HeroSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-card to-background">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold text-card-foreground mb-6 text-balance">
          Premium Domain Names for Sale – Secure the Perfect Name Today
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
          Discover premium domains with detailed analytics including pricing, CPC data, and search volume metrics to
          make informed investment decisions.
        </p>

        <div className="max-w-2xl mx-auto">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input placeholder="Search for domains..." className="pl-10 h-12 text-lg" />
            </div>
            <Button size="lg" className="h-12 px-8">
              Search Domains
            </Button>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">100+</div>
            <div className="text-muted-foreground">Premium Domains</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">$500K+</div>
            <div className="text-muted-foreground">Total Sales Volume</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-muted-foreground">Happy Customers</div>
          </div>
        </div>
      </div>
    </section>
  )
}
