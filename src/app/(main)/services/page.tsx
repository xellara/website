import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, MessageSquare, Mail, Briefcase, ArrowRight } from 'lucide-react';

const services = [
  { 
    slug: "voice-support",
    icon: Phone, 
    title: 'Voice Support Services', 
    description: 'Comprehensive inbound and outbound call solutions, including customer service, technical support, telemarketing, and appointment setting. Crystal-clear communication powered by advanced VoIP technology.',
    image: "/assets/images/voice.png",
    dataAiHint: "call center agent headset"
  },
  { 
    slug: "live-chat",
    icon: MessageSquare, 
    title: 'Live Chat Support', 
    description: 'Instant, real-time assistance for your website visitors. Our skilled agents handle multiple chats efficiently, boosting conversion rates and customer satisfaction. Customizable chat widgets and proactive engagement.',
    image: "/assets/images/chat.png",
    dataAiHint: "live chat interface"
  },
  { 
    slug: "email-handling",
    icon: Mail, 
    title: 'Email Handling Services', 
    description: 'Professional email response management ensuring timely and accurate replies. We handle inquiries, support tickets, and complaints with a personalized touch, maintaining your brand voice.',
    image: "/assets/images/email.png",
    dataAiHint: "email inbox management"
  },
  { 
    slug: "crm-ticketing",
    icon: Briefcase, 
    title: 'Remote CRM & Ticketing Support', 
    description: 'Expert assistance with your Customer Relationship Management (CRM) software and ticketing systems. Data entry, system administration, report generation, and user support for platforms like Salesforce, Zendesk, HubSpot, etc.',
    image: "/assets/images/crm.png",
    dataAiHint: "crm dashboard"
  },
];

export default function ServicesPage() {
  return (
    <div className="py-12 md:py-20 bg-background">
      <div className="container">
        <section className="text-center mb-16 md:mb-24">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl">Our Services</h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground sm:text-xl">
            Xellara offers a suite of services designed to enhance your customer interactions and streamline your operations. Explore how we can help your business thrive.
          </p>
        </section>

        <div className="space-y-16 md:space-y-24">
          {services.map((service, index) => (
            <section key={service.slug} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-12`}>
              <div className="md:w-1/2">
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  width={600} 
                  height={400} 
                  className="rounded-xl shadow-xl object-cover aspect-[3/2]"
                  data-ai-hint={service.dataAiHint}
                  unoptimized
                />
              </div>
              <div className="md:w-1/2">
                <service.icon className="h-12 w-12 text-primary mb-4" />
                <h2 className="font-headline text-3xl font-semibold text-foreground mb-4">{service.title}</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                <Button asChild variant="default" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link href={`/services/${service.slug}`}>
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </section>
          ))}
        </div>

        <section className="mt-16 md:mt-24 text-center bg-accent text-accent-foreground p-8 md:p-12 rounded-xl">
          <h2 className="font-headline text-3xl font-semibold mb-4">Ready to Elevate Your Business?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Our tailored solutions are designed to meet your unique needs. Let's discuss how Xellara can support your success.
          </p>
          <Button asChild size="lg" className="bg-foreground text-background hover:bg-foreground/80">
            <Link href="/quote">Request a Custom Quote</Link>
          </Button>
        </section>
      </div>
    </div>
  );
}
