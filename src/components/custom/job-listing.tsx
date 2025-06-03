import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Briefcase, ArrowRight, Clock } from 'lucide-react';

type JobListingProps = {
  title: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Internship';
  description: string;
  applyLink: string;
};

export default function JobListing({ title, location, type, description, applyLink }: JobListingProps) {
  return (
    <Card className="flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl overflow-hidden">
      <CardHeader className="p-8">
        <CardTitle className="font-headline text-xl text-primary">{title}</CardTitle>
        <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground mt-1">
          <div className="flex items-center">
            <Briefcase className="h-4 w-4 mr-1.5" /> {type}
          </div>
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-1.5" /> {location}
          </div>
           {/* Example of adding a posting date - could be passed as prop */}
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1.5" /> Posted 2 days ago 
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-8 pt-0 flex-grow">
        <CardDescription className="text-sm text-muted-foreground line-clamp-3">{description}</CardDescription>
      </CardContent>
      <CardFooter className="p-8 bg-muted/30">
        <Button asChild variant="default" className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground">
          <Link href={applyLink}>
            Apply Now <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
