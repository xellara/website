import Link from 'next/link';
import type { LucideIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

type ServiceCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
};

export default function ServiceCard({ icon: Icon, title, description, link }: ServiceCardProps) {
  return (
    <Card className="flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl overflow-hidden">
      <CardHeader className="bg-primary/5 p-6">
        <div className="flex items-center gap-4">
          <Icon className="h-10 w-10 text-primary" />
          <CardTitle className="font-headline text-xl text-foreground">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="p-6 flex-grow flex flex-col">
        <p className="text-muted-foreground text-sm mb-4 flex-grow">{description}</p>
        <Button asChild variant="link" className="p-0 h-auto text-primary self-start hover:text-primary/80">
          <Link href={link}>
            Learn More <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
