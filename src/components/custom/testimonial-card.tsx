import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

type TestimonialCardProps = {
  quote: string;
  author: string;
  company: string;
  avatarUrl?: string;
};

export default function TestimonialCard({ quote, author, company, avatarUrl }: TestimonialCardProps) {
  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl overflow-hidden h-full">
      <CardContent className="p-8 flex flex-col h-full">
        <div className="flex mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
          ))}
        </div>
        <blockquote className="text-muted-foreground italic mb-4 flex-grow">"{quote}"</blockquote>
        <div className="flex items-center">
          {avatarUrl && (
             // Next Image component is not used here due to potential complexity with external URLs for avatars if not whitelisted
            <img src={avatarUrl} alt={author} className="h-10 w-10 rounded-full mr-3 object-cover" data-ai-hint="person portrait" />
          )}
          <div>
            <p className="font-semibold text-foreground">{author}</p>
            <p className="text-sm text-muted-foreground">{company}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
