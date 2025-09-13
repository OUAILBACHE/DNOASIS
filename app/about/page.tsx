import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Award, Users, TrendingUp } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="py-16 bg-gradient-to-b from-card to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-foreground mb-6">About DomainHub</h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Your trusted partner in premium domain investments with over 10 years of experience in the domain
                  industry.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <Card>
                  <CardContent className="p-6">
                    <Shield className="h-8 w-8 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Trusted & Secure</h3>
                    <p className="text-muted-foreground">
                      All transactions are secured with SSL encryption and we offer escrow services through trusted
                      partners like Escrow.com for your peace of mind.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <Award className="h-8 w-8 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Premium Quality</h3>
                    <p className="text-muted-foreground">
                      Every domain in our portfolio is carefully vetted for brandability, SEO potential, and market
                      value to ensure you're investing in quality assets.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <Users className="h-8 w-8 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Expert Support</h3>
                    <p className="text-muted-foreground">
                      Our team of domain experts provides personalized consultation to help you find the perfect domain
                      for your business or investment portfolio.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <TrendingUp className="h-8 w-8 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Data-Driven Insights</h3>
                    <p className="text-muted-foreground">
                      Make informed decisions with our comprehensive analytics including CPC data, search volumes, and
                      market trends for every domain.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-card p-8 rounded-lg">
                <h2 className="text-2xl font-bold text-card-foreground mb-4">Our Story</h2>
                <p className="text-muted-foreground mb-4">
                  Founded in 2014, DomainHub has grown from a small domain investment company to one of the most trusted
                  premium domain marketplaces. We specialize in high-value domains across technology, finance, health,
                  and emerging industries.
                </p>
                <p className="text-muted-foreground mb-4">
                  Our founder, with over 15 years in digital marketing and domain investing, recognized the need for a
                  transparent, data-driven approach to domain sales. Today, we've facilitated over $10 million in domain
                  transactions and helped hundreds of businesses secure their perfect online identity.
                </p>
                <p className="text-muted-foreground">
                  Whether you're a startup looking for the perfect brand name or an investor seeking premium digital
                  assets, we're here to help you succeed in the domain market.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
