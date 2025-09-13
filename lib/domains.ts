// Domain data types and utilities
export interface Domain {
  name: string
  buyNowPrice: number
  floorPrice: number
  minOffer: string
  tld: string
  views: string
  showBuyNow: boolean
  showMakeOffer: boolean
  category?: string
}

// Real domain data from CSV (sample - will be replaced with actual data)
export const domains: Domain[] = [
  {
    name: "portlandoregoncabinets.com",
    buyNowPrice: 120,
    floorPrice: 0,
    minOffer: "20",
    tld: "com",
    views: "1",
    showBuyNow: true,
    showMakeOffer: false,
    category: "Business",
  },
  // More domains will be added from the CSV processing
]

export function formatPrice(price: number): string {
  return `$${price.toLocaleString()}`
}

export function getDomainsByCategory(category?: string): Domain[] {
  if (!category) return domains
  return domains.filter((domain) => domain.category === category)
}

export function getFeaturedDomains(limit = 6): Domain[] {
  return domains
    .filter((domain) => domain.showBuyNow)
    .sort((a, b) => b.buyNowPrice - a.buyNowPrice)
    .slice(0, limit)
}
