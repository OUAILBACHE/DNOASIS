export interface Domain {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  features: string[];
  registrar: string;
  expiryDate: string;
  traffic?: number;
  revenue?: number;
  featured?: boolean;
}

export const domains: Domain[] = [
  {
    id: '1',
    name: 'techstartup.com',
    price: 15000,
    category: 'Technology',
    description: 'Perfect domain for technology startups and innovative companies.',
    features: ['Short & Memorable', 'High Commercial Value', 'Tech Industry'],
    registrar: 'GoDaddy',
    expiryDate: '2025-12-15',
    traffic: 5000,
    revenue: 2000,
    featured: true
  },
  {
    id: '2',
    name: 'digitalmarketing.pro',
    price: 8500,
    category: 'Marketing',
    description: 'Ideal for digital marketing agencies and consultants.',
    features: ['Professional Extension', 'Industry Specific', 'SEO Friendly'],
    registrar: 'Namecheap',
    expiryDate: '2025-08-20',
    traffic: 3200,
    featured: true
  },
  {
    id: '3',
    name: 'ecommercehub.net',
    price: 12000,
    category: 'E-commerce',
    description: 'Great for e-commerce platforms and online marketplaces.',
    features: ['Brandable', 'Commerce Focus', 'Global Appeal'],
    registrar: 'GoDaddy',
    expiryDate: '2025-11-30',
    traffic: 4500,
    revenue: 1500
  },
  {
    id: '4',
    name: 'cryptoinvest.io',
    price: 25000,
    category: 'Finance',
    description: 'Premium domain for cryptocurrency and investment platforms.',
    features: ['Premium Extension', 'Finance Sector', 'High Value'],
    registrar: 'Namecheap',
    expiryDate: '2025-10-10',
    traffic: 8000,
    revenue: 5000,
    featured: true
  },
  {
    id: '5',
    name: 'healthtech.solutions',
    price: 18000,
    category: 'Healthcare',
    description: 'Perfect for health technology and medical innovation companies.',
    features: ['Descriptive', 'Healthcare Focus', 'Modern Extension'],
    registrar: 'GoDaddy',
    expiryDate: '2025-09-25',
    traffic: 2800
  },
  {
    id: '6',
    name: 'aitools.app',
    price: 22000,
    category: 'Technology',
    description: 'Ideal for AI tools and applications in the growing AI market.',
    features: ['Trending Niche', 'App Extension', 'Future-Proof'],
    registrar: 'Namecheap',
    expiryDate: '2025-12-05',
    traffic: 6500,
    revenue: 3000,
    featured: true
  }
];

export const categories = [
  'All Categories',
  'Technology',
  'Marketing',
  'E-commerce',
  'Finance',
  'Healthcare',
  'Education',
  'Entertainment'
];