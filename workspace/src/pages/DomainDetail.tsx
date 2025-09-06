import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { domains } from '@/data/domains';
import { 
  Globe, 
  TrendingUp, 
  DollarSign, 
  Calendar, 
  Shield, 
  ArrowLeft,
  Mail,
  Phone,
  CheckCircle,
  Star
} from 'lucide-react';

export default function DomainDetail() {
  const { id } = useParams();
  const domain = domains.find(d => d.id === id);

  if (!domain) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Domain Not Found</h1>
          <p className="text-muted-foreground mb-6">The domain you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/domains">Browse All Domains</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US').format(num);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Button variant="ghost" asChild className="mb-6">
          <Link to="/domains">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Domains
          </Link>
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Domain Header */}
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <Globe className="h-8 w-8 text-primary" />
                      <h1 className="text-3xl font-bold">{domain.name}</h1>
                      {domain.featured && (
                        <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
                          <Star className="h-3 w-3 mr-1" />
                          Featured
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant="secondary">{domain.category}</Badge>
                      <span className="text-sm text-muted-foreground">•</span>
                      <span className="text-sm text-muted-foreground">Registered with {domain.registrar}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-primary">{formatPrice(domain.price)}</div>
                    <div className="text-sm text-muted-foreground">One-time purchase</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground">{domain.description}</p>
              </CardContent>
            </Card>

            {/* Domain Stats */}
            {(domain.traffic || domain.revenue) && (
              <Card>
                <CardHeader>
                  <CardTitle>Performance Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {domain.traffic && (
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-green-100 rounded-lg">
                          <TrendingUp className="h-6 w-6 text-green-600" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold">{formatNumber(domain.traffic)}</div>
                          <div className="text-sm text-muted-foreground">Monthly Visitors</div>
                        </div>
                      </div>
                    )}
                    {domain.revenue && (
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-blue-100 rounded-lg">
                          <DollarSign className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold">${formatNumber(domain.revenue)}</div>
                          <div className="text-sm text-muted-foreground">Monthly Revenue</div>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Domain Features */}
            <Card>
              <CardHeader>
                <CardTitle>Key Features</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {domain.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Domain Information */}
            <Card>
              <CardHeader>
                <CardTitle>Domain Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Domain Name</label>
                    <div className="text-lg font-semibold">{domain.name}</div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Category</label>
                    <div className="text-lg font-semibold">{domain.category}</div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Current Registrar</label>
                    <div className="text-lg font-semibold">{domain.registrar}</div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Expiry Date</label>
                    <div className="text-lg font-semibold flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-orange-500" />
                      <span>{new Date(domain.expiryDate).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Purchase Card */}
            <Card>
              <CardHeader>
                <CardTitle>Interested in this domain?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">{formatPrice(domain.price)}</div>
                  <div className="text-sm text-muted-foreground">One-time purchase price</div>
                </div>
                
                <Separator />
                
                <div className="space-y-3">
                  <Button className="w-full" size="lg" asChild>
                    <Link to="/contact">Make an Offer</Link>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/contact">Request Information</Link>
                  </Button>
                </div>

                <Separator />

                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Shield className="h-4 w-4 text-green-500" />
                    <span>Secure escrow service</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Fast 24-48h transfer</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Shield className="h-4 w-4 text-green-500" />
                    <span>Money-back guarantee</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Card */}
            <Card>
              <CardHeader>
                <CardTitle>Need Help?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Our domain experts are here to help you with any questions about this domain.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium">Email Us</div>
                      <div className="text-sm text-muted-foreground">hello@domainpro.com</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium">Call Us</div>
                      <div className="text-sm text-muted-foreground">+1 (555) 123-4567</div>
                    </div>
                  </div>
                </div>

                <Button variant="outline" className="w-full" asChild>
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Similar Domains */}
            <Card>
              <CardHeader>
                <CardTitle>Similar Domains</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {domains
                    .filter(d => d.id !== domain.id && d.category === domain.category)
                    .slice(0, 3)
                    .map((similarDomain) => (
                      <Link
                        key={similarDomain.id}
                        to={`/domain/${similarDomain.id}`}
                        className="block p-3 border rounded-lg hover:bg-muted/50 transition-colors"
                      >
                        <div className="font-medium">{similarDomain.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {formatPrice(similarDomain.price)}
                        </div>
                      </Link>
                    ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}