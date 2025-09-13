import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Domains Oasis</h3>
            <p className="text-primary-foreground/80 mb-4">
              The premier marketplace for buying and selling premium domain names with comprehensive analytics.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Marketplace</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <Link href="/domains" className="hover:text-accent transition-colors">
                  Browse Domains
                </Link>
              </li>
              <li>
                <Link href="/categories" className="hover:text-accent transition-colors">
                  Categories
                </Link>
              </li>
              <li>
                <Link href="/new-listings" className="hover:text-accent transition-colors">
                  New Listings
                </Link>
              </li>
              <li>
                <Link href="/trending" className="hover:text-accent transition-colors">
                  Trending
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Sellers</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              
             
              <li>
                <Link href="/seller-tools" className="hover:text-accent transition-colors">
                  Seller Tools
                </Link>
              </li>
              <li>
                <Link href="/success-stories" className="hover:text-accent transition-colors">
                  Success Stories
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-primary-foreground/80">
             
              <li>
                <Link href="/contact" className="hover:text-accent transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-accent transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-accent transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/80">
          <p>&copy; 2025 Domain Oasis. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
