import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MessagesSquare, CheckCircle2, Users, Zap, BarChartBig } from 'lucide-react';

const features = [
  { title: 'Real-Time Customer Engagement', description: 'Instantly connect with website visitors to answer questions and provide support.' },
  { title: 'Proactive Chat Invitations', description: 'Engage potential customers proactively based on browsing behavior to increase conversions.' },
  { title: 'Multi-Chat Handling', description: 'Our skilled agents efficiently manage multiple chat sessions simultaneously.' },
  { title: 'Customizable Chat Widgets', description: 'Chat interfaces designed to match your brand aesthetics and user experience.' },
  { title: 'Transcript & Reporting', description: 'Access chat transcripts and detailed reports for performance analysis and insights.' },
  { title: 'Integration Capabilities', description: 'Seamless integration with your existing CRM and helpdesk software.' },
];

export default function LiveChatPage() {
  return (
    <div className="py-12 md:py-20 bg-background">
      <div className="container">
        <section className="mb-12 md:mb-16">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <MessagesSquare className="h-16 w-16 text-primary mb-4" />
              <h1 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl">Live Chat Support</h1>
              <p className="mt-4 text-lg text-muted-foreground sm:text-xl">
                Enhance your online customer service with our responsive and efficient live chat support. Engage customers in real-time, resolve issues faster, and boost conversions.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image 
                src="/assets/images/chat.png" 
                alt="Live Chat Support Services" 
                width={600} 
                height={400} 
                className="rounded-xl shadow-xl object-cover"
                data-ai-hint="live chat discussion"
                unoptimized
              />
            </div>
          </div>
        </section>

        <section className="mb-12 md:mb-16">
          <h2 className="font-headline text-3xl font-semibold text-center text-foreground mb-10">Core Features of Our Live Chat Service</h2>
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
          <h2 className="font-headline text-3xl font-semibold text-center text-foreground mb-10">Advantages of Xellara's Live Chat Support</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <BarChartBig className="h-12 w-12 text-primary mx-auto mb-3" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Increased Conversion Rates</h3>
              <p className="text-sm text-muted-foreground">Address customer doubts instantly, guiding them through the sales funnel.</p>
            </div>
            <div>
              <Zap className="h-12 w-12 text-primary mx-auto mb-3" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Improved Customer Satisfaction</h3>
              <p className="text-sm text-muted-foreground">Provide immediate support, leading to happier and more loyal customers.</p>
            </div>
            <div>
              <DollarSign className="h-12 w-12 text-primary mx-auto mb-3" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Reduced Support Costs</h3>
              <p className="text-sm text-muted-foreground">Agents can handle multiple chats, making it more cost-effective than phone support.</p>
            </div>
          </div>
        </section>

        <section className="text-center">
          <h2 className="font-headline text-2xl font-semibold text-foreground mb-4">Engage Your Visitors Instantly!</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Discover how our live chat solutions can transform your online customer engagement.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/quote">Get a Quote for Live Chat</Link>
          </Button>
        </section>
      </div>
    </div>
  );
}

// Helper icon
const DollarSign = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <line x1="12" y1="1" x2="12" y2="23" />
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
);
