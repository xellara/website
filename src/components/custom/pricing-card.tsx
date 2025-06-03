import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, LucideIcon } from 'lucide-react';

type PricingCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  price?: string;
  pricePeriod?: string;
  features: string[];
  ctaText: string;
  ctaLink: string;
  popular?: boolean;
};

export default function PricingCard({ 
  icon: Icon, 
  title, 
  description, 
  price, 
  pricePeriod, 
  features, 
  ctaText, 
  ctaLink, 
  popular = false 
}: PricingCardProps) {
  return (
    <Card className={`flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl overflow-hidden ${popular ? 'border-2 border-primary' : ''}`}>
      {popular && (
        <div className="bg-primary text-primary-foreground text-center py-1.5 text-sm font-semibold">
          Most Popular
        </div>
      )}
      <CardHeader className="p-8">
        <div className="flex items-center gap-3 mb-2">
          <Icon className={`h-10 w-10 ${popular ? 'text-primary' : 'text-muted-foreground'}`} />
          <CardTitle className="font-headline text-2xl text-foreground">{title}</CardTitle>
        </div>
        <CardDescription className="text-sm text-muted-foreground min-h-[40px]">{description}</CardDescription>
      </CardHeader>
      <CardContent className="p-8 flex-grow">
        {price && (
          <div className="mb-6">
            <span className="text-4xl font-bold text-foreground">{price}</span>
            {pricePeriod && <span className="text-muted-foreground">/{pricePeriod}</span>}
          </div>
        )}
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
              <span className="text-sm text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="p-8 mt-auto">
        <Button asChild size="lg" className={`w-full ${popular ? 'bg-primary hover:bg-primary/90 text-primary-foreground' : 'bg-accent hover:bg-accent/90 text-accent-foreground'}`}>
          <Link href={ctaLink}>{ctaText}</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
