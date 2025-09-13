import Link from "next/link"

export function Header() {
  return (
    <header className="bg-white text-gray-900 border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-sky-600">
            Domain Oasis
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="hover:text-sky-600 transition-colors">
              Home
            </Link>
            <Link href="/domains" className="hover:text-sky-600 transition-colors">
              Domains for Sale
            </Link>
            <Link href="/about" className="hover:text-sky-600 transition-colors">
              About
            </Link>
            <Link href="/contact" className="hover:text-sky-600 transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
