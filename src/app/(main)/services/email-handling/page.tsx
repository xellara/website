import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MailCheck, CheckCircle2, Users, Zap, FileText } from 'lucide-react';

const features = [
  { title: 'Prompt Email Responses', description: 'Ensuring all customer emails are answered quickly and professionally within agreed SLAs.' },
  { title: 'Categorization & Prioritization', description: 'Intelligent sorting and prioritization of emails for efficient handling.' },
  { title: 'Template & Canned Responses', description: 'Utilizing approved templates for consistency and speed, personalized as needed.' },
  { title: 'Multilingual Email Support', description: 'Responding to customers in their preferred language to enhance communication.' },
  { title: 'Spam Filtering & Management', description: 'Effective filtering of spam to keep inboxes clean and focused on genuine queries.' },
  { title: 'Reporting & Analytics', description: 'Detailed reports on email volumes, response times, and resolution rates.' },
];

export default function EmailHandlingPage() {
  return (
    <div className="py-12 md:py-20 bg-background">
      <div className="container">
        <section className="mb-12 md:mb-16">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <MailCheck className="h-16 w-16 text-primary mb-4" />
              <h1 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl">Email Handling Services</h1>
              <p className="mt-4 text-lg text-muted-foreground sm:text-xl">
                Streamline your customer communication with our expert email handling services. We provide timely, accurate, and professional email support to enhance customer satisfaction.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image 
                src="/assets/images/email.png" 
                alt="Email Handling Services" 
                width={600} 
                height={400} 
                className="rounded-xl shadow-xl object-cover"
                data-ai-hint="email inbox organization"
                unoptimized
              />
            </div>
          </div>
        </section>

        <section className="mb-12 md:mb-16">
          <h2 className="font-headline text-3xl font-semibold text-center text-foreground mb-10">Our Email Handling Capabilities</h2>
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
          <h2 className="font-headline text-3xl font-semibold text-center text-foreground mb-10">Why Choose Xellara for Email Support?</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <Zap className="h-12 w-12 text-primary mx-auto mb-3" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Improved Response Times</h3>
              <p className="text-sm text-muted-foreground">Faster replies lead to higher customer satisfaction and issue resolution.</p>
            </div>
            <div>
              <Users className="h-12 w-12 text-primary mx-auto mb-3" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Professional Brand Representation</h3>
              <p className="text-sm text-muted-foreground">Consistent and professional communication that aligns with your brand voice.</p>
            </div>
            <div>
              <FileText className="h-12 w-12 text-primary mx-auto mb-3" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Organized Communication</h3>
              <p className="text-sm text-muted-foreground">Systematic handling ensures no email is missed and follow-ups are timely.</p>
            </div>
          </div>
        </section>

        <section className="text-center">
          <h2 className="font-headline text-2xl font-semibold text-foreground mb-4">Optimize Your Email Communication!</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Let us manage your email support efficiently, so you can focus on growing your business.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/quote">Request an Email Handling Quote</Link>
          </Button>
        </section>
      </div>
    </div>
  );
}
