import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DomainCard from '@/components/DomainCard';
import { domains } from '@/data/domains';
import { Search, Globe, Shield, Zap, Users, ArrowRight, CheckCircle } from 'lucide-react';

export default function Index() {
  const [searchQuery, setSearchQuery] = useState('');
  const featuredDomains = domains.filter(domain => domain.featured);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      window.location.href = `/domains?search=${encodeURIComponent(searchQuery)}`;
    }
  };

  const stats = [
    { label: 'Domains Sold', value: '500+', icon: Globe },
    { label: 'Happy Clients', value: '200+', icon: Users },
    { label: 'Years Experience', value: '10+', icon: Shield },
    { label: 'Success Rate', value: '95%', icon: CheckCircle }
  ];

  const features = [
    {
      icon: Shield,
      title: 'Secure Transactions',
      description: 'All domain transfers are handled through secure escrow services for your protection.'
    },
    {
      icon: Zap,
      title: 'Fast Transfer',
      description: 'Quick and efficient domain transfer process, typically completed within 24-48 hours.'
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: 'Our domain experts are here to guide you through every step of the acquisition process.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                Find Your Perfect
                <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                  {' '}Domain Name
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Discover premium domains that will elevate your brand and establish a powerful online presence. 
                From startups to enterprises, find the perfect domain for your business.
              </p>
            </div>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-3 p-2 bg-background border rounded-lg shadow-lg">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                  <Input
                    placeholder="Search for your ideal domain..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                    className="pl-10 border-0 text-lg h-12"
                  />
                </div>
                <Button onClick={handleSearch} size="lg" className="px-8">
                  Search Domains
                </Button>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span>Popular searches:</span>
              <Link to="/domains?search=tech" className="hover:text-primary transition-colors">tech</Link>
              <Link to="/domains?search=startup" className="hover:text-primary transition-colors">startup</Link>
              <Link to="/domains?search=crypto" className="hover:text-primary transition-colors">crypto</Link>
              <Link to="/domains?search=ai" className="hover:text-primary transition-colors">ai</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Domains */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Featured Premium Domains</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Hand-picked premium domains with proven value and high commercial potential
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {featuredDomains.map((domain) => (
              <DomainCard key={domain.id} domain={domain} />
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg">
              <Link to="/domains">
                View All Domains
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Choose DomainPro?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We make domain acquisition simple, secure, and successful
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent className="space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Ready to Find Your Perfect Domain?
            </h2>
            <p className="text-xl text-muted-foreground">
              Browse our extensive collection of premium domains or contact us for personalized assistance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/domains">Browse All Domains</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}