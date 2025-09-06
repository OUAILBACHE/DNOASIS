import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Globe, TrendingUp, DollarSign, Calendar, Star } from 'lucide-react';
import { Domain } from '@/data/domains';

interface DomainCardProps {
  domain: Domain;
}

export default function DomainCard({ domain }: DomainCardProps) {
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
    <Card className="h-full hover:shadow-lg transition-shadow duration-300 relative">
      {domain.featured && (
        <div className="absolute -top-2 -right-2 z-10">
          <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
            <Star className="h-3 w-3 mr-1" />
            Featured
          </Badge>
        </div>
      )}
      
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-2">
            <Globe className="h-5 w-5 text-primary" />
            <h3 className="font-semibold text-lg truncate">{domain.name}</h3>
          </div>
          <Badge variant="secondary">{domain.category}</Badge>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {domain.description}
        </p>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary">
            {formatPrice(domain.price)}
          </span>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-2 text-sm">
          {domain.traffic && (
            <div className="flex items-center space-x-1">
              <TrendingUp className="h-4 w-4 text-green-500" />
              <span className="text-muted-foreground">
                {formatNumber(domain.traffic)}/mo visits
              </span>
            </div>
          )}
          {domain.revenue && (
            <div className="flex items-center space-x-1">
              <DollarSign className="h-4 w-4 text-blue-500" />
              <span className="text-muted-foreground">
                ${formatNumber(domain.revenue)}/mo
              </span>
            </div>
          )}
          <div className="flex items-center space-x-1 col-span-2">
            <Calendar className="h-4 w-4 text-orange-500" />
            <span className="text-muted-foreground">
              Expires: {new Date(domain.expiryDate).toLocaleDateString()}
            </span>
          </div>
        </div>

        {/* Features */}
        <div className="flex flex-wrap gap-1">
          {domain.features.slice(0, 3).map((feature, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {feature}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="pt-4 space-x-2">
        <Button asChild className="flex-1">
          <Link to={`/domain/${domain.id}`}>View Details</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link to="/contact">Inquire</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}