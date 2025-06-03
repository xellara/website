import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PhoneCall, CheckCircle2, Users, Zap } from 'lucide-react';

const features = [
  { title: 'Inbound Call Handling', description: 'Professional answering services for customer inquiries, order taking, and support requests.' },
  { title: 'Outbound Call Campaigns', description: 'Targeted telemarketing, lead generation, surveys, and appointment setting services.' },
  { title: '24/7 Availability', description: 'Round-the-clock support options to ensure your customers can always reach you.' },
  { title: 'Multilingual Support', description: 'Catering to a diverse customer base with agents fluent in multiple languages.' },
  { title: 'Advanced Call Routing', description: 'Intelligent call distribution to ensure callers reach the right agent quickly.' },
  { title: 'Quality Assurance', description: 'Regular call monitoring and performance analysis for continuous service improvement.' },
];

export default function VoiceSupportPage() {
  return (
    <div className="py-12 md:py-20 bg-background">
      <div className="container">
        <section className="mb-12 md:mb-16">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <PhoneCall className="h-16 w-16 text-primary mb-4" />
              <h1 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl">Voice Support Services</h1>
              <p className="mt-4 text-lg text-muted-foreground sm:text-xl">
                Deliver exceptional customer experiences with our professional voice support solutions. We provide reliable, scalable, and high-quality call center services tailored to your business needs.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image 
                src="https://placehold.co/600x400.png" 
                alt="Voice Support Services" 
                width={600} 
                height={400} 
                className="rounded-xl shadow-xl object-cover"
                data-ai-hint="call center agents"
              />
            </div>
          </div>
        </section>

        <section className="mb-12 md:mb-16">
          <h2 className="font-headline text-3xl font-semibold text-center text-foreground mb-10">Key Features of Our Voice Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <Card key={feature.title} className="shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-7 w-7 text-primary" />
                    <CardTitle className="font-headline text-xl text-foreground">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-12 md:mb-16 bg-primary/5 p-8 md:p-12 rounded-xl">
          <h2 className="font-headline text-3xl font-semibold text-center text-foreground mb-10">Benefits of Partnering with Xellara for Voice Support</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <Users className="h-12 w-12 text-primary mx-auto mb-3" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Enhanced Customer Satisfaction</h3>
              <p className="text-sm text-muted-foreground">Prompt, professional, and empathetic responses improve customer loyalty.</p>
            </div>
            <div>
              <Zap className="h-12 w-12 text-primary mx-auto mb-3" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Increased Efficiency</h3>
              <p className="text-sm text-muted-foreground">Focus on your core business while we handle your call volumes effectively.</p>
            </div>
            <div>
              <DollarSign className="h-12 w-12 text-primary mx-auto mb-3" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Cost Reduction</h3>
              <p className="text-sm text-muted-foreground">Reduce operational costs associated with hiring, training, and infrastructure.</p>
            </div>
          </div>
        </section>

        <section className="text-center">
          <h2 className="font-headline text-2xl font-semibold text-foreground mb-4">Ready to Amplify Your Voice?</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Let's discuss how our voice support services can be tailored to your specific requirements.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/quote">Get a Custom Quote</Link>
          </Button>
        </section>
      </div>
    </div>
  );
}

// Helper icon (not in lucide-react by default)
const DollarSign = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <line x1="12" y1="1" x2="12" y2="23" />
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
);
