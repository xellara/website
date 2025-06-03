import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, CheckCircle2, DatabaseZap, BarChart2, Settings2 } from 'lucide-react';

const features = [
  { title: 'CRM Data Management', description: 'Accurate data entry, updates, and cleansing to maintain a reliable CRM database.' },
  { title: 'Ticketing System Administration', description: 'Configuration, user management, and workflow optimization for your helpdesk software.' },
  { title: 'Customer Interaction Logging', description: 'Ensuring all customer touchpoints are accurately recorded in your CRM/ticketing system.' },
  { title: 'Report Generation & Analysis', description: 'Custom reports from your CRM data to provide actionable business insights.' },
  { title: 'User Training & Support', description: 'Assisting your internal team with using CRM and ticketing tools effectively.' },
  { title: 'System Integration Support', description: 'Helping to manage integrations between your CRM/ticketing system and other business tools.' },
];

export default function CrmTicketingPage() {
  return (
    <div className="py-12 md:py-20 bg-background">
      <div className="container">
        <section className="mb-12 md:mb-16">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <Briefcase className="h-16 w-16 text-primary mb-4" />
              <h1 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl">Remote CRM &amp; Ticketing Support</h1>
              <p className="mt-4 text-lg text-muted-foreground sm:text-xl">
                Maximize the potential of your customer relationship management and ticketing systems with our expert remote support. We help you maintain clean data, streamline workflows, and gain valuable insights.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image 
                src="https://placehold.co/600x400.png" 
                alt="CRM &amp; Ticketing Support" 
                width={600} 
                height={400} 
                className="rounded-xl shadow-xl object-cover"
                data-ai-hint="crm dashboard data"
              />
            </div>
          </div>
        </section>

        <section className="mb-12 md:mb-16">
          <h2 className="font-headline text-3xl font-semibold text-center text-foreground mb-10">Our CRM &amp; Ticketing Support Services</h2>
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
          <h2 className="font-headline text-3xl font-semibold text-center text-foreground mb-10">Benefits of Outsourcing CRM &amp; Ticketing Support</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <DatabaseZap className="h-12 w-12 text-primary mx-auto mb-3" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Improved Data Quality</h3>
              <p className="text-sm text-muted-foreground">Ensure your customer data is accurate, up-to-date, and actionable.</p>
            </div>
            <div>
              <Settings2 className="h-12 w-12 text-primary mx-auto mb-3" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Streamlined Operations</h3>
              <p className="text-sm text-muted-foreground">Optimize your CRM and ticketing workflows for maximum efficiency.</p>
            </div>
            <div>
              <BarChart2 className="h-12 w-12 text-primary mx-auto mb-3" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Actionable Insights</h3>
              <p className="text-sm text-muted-foreground">Leverage your data for better decision-making and strategic planning.</p>
            </div>
          </div>
        </section>

        <section className="text-center">
          <h2 className="font-headline text-2xl font-semibold text-foreground mb-4">Unlock Your CRM's Full Potential!</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Contact us to learn how our remote support can enhance your CRM and ticketing system performance.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/quote">Get a Support Quote</Link>
          </Button>
        </section>
      </div>
    </div>
  );
}
