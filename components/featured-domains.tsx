"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { DollarSign } from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"

interface Domain {
  Domain: string
  "Buy Now Price": string
  "Floor Price": string
  "Min Offer": string
  TLD: string
  Views: string
  "Show Buy Now Option": string
  "Show Make Offer Option": string
  Hidden: string
}

export function FeaturedDomains() {
  const [domains, setDomains] = useState<Domain[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchDomains() {
      try {
        console.log("[v0] Fetching domain data...")
        const response = await fetch(
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/domains-1757781629986-UH5FKZgsezotBW5Yw2rT4unndRuMox.csv",
        )
        const csvText = await response.text()

        const lines = csvText.split("\n")
        const headers = lines[0].split(",").map((h) => h.trim().replace(/"/g, ""))

        const processedDomains: Domain[] = []
        for (let i = 1; i < lines.length && i <= 7; i++) {
          // Limit to first 6 domains for featured section
          if (lines[i].trim()) {
            const values = lines[i].split(",").map((v) => v.trim().replace(/"/g, ""))
            const domain: any = {}
            headers.forEach((header, index) => {
              domain[header] = values[index] || ""
            })

            // Only include domains that are not hidden and have a buy now price
            if (domain.Hidden !== "Y" && domain["Buy Now Price"] && domain["Buy Now Price"] !== "0") {
              processedDomains.push(domain as Domain)
            }
          }
        }

        console.log("[v0] Loaded domains:", processedDomains)
        setDomains(processedDomains)
      } catch (error) {
        console.error("[v0] Error loading domains:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchDomains()
  }, [])

  const formatPrice = (price: string): string => {
    const num = Number.parseInt(price)
    return num ? `$${num.toLocaleString()}` : "Contact for Price"
  }

  const getDomainCategory = (domain: string): string => {
    const tld = domain.split(".").pop()?.toLowerCase() || ""
    if (domain.includes("tech") || domain.includes("digital") || domain.includes("app")) return "Technology"
    if (domain.includes("health") || domain.includes("medical") || domain.includes("fitness")) return "Health"
    if (domain.includes("finance") || domain.includes("money") || domain.includes("invest")) return "Finance"
    if (domain.includes("shop") || domain.includes("store") || domain.includes("buy")) return "E-commerce"
    if (tld === "com") return "Premium"
    return "Business"
  }

  const handleBuyNow = (domainName: string) => {
    window.open(`https://${domainName}`, "_blank")
  }

  if (loading) {
    return (
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-muted-foreground">Loading domains...</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Featured Premium Domains</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Handpicked domains from my portfolio with strong potential
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {domains.map((domain, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-bold text-card-foreground break-all">{domain.Domain}</CardTitle>
                  <Badge variant="secondary" className="bg-sky-100 text-sky-700">
                    {getDomainCategory(domain.Domain)}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Premium {domain.TLD.toUpperCase()} domain available for purchase
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <DollarSign className="h-4 w-4 text-sky-600" />
                    <div>
                      <div className="text-sm text-muted-foreground">Buy Now Price</div>
                      <div className="font-semibold text-sky-600">{formatPrice(domain["Buy Now Price"])}</div>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Min Offer</div>
                    <div className="font-semibold">${domain["Min Offer"]}</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-muted-foreground">TLD</div>
                    <div className="font-semibold uppercase">{domain.TLD}</div>
                  </div>
                </div>

                <div className="flex space-x-2 pt-2">
                  {domain["Show Buy Now Option"] === "Y" && (
                    <Button
                      className="flex-1 bg-sky-600 hover:bg-sky-700"
                      size="sm"
                      onClick={() => handleBuyNow(domain.Domain)}
                    >
                      Buy Now
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/domains">
            <Button size="lg" variant="outline" className="border-sky-600 text-sky-600 hover:bg-sky-50 bg-transparent">
              Browse All Domains
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
