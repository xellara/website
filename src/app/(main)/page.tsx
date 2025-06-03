import Image from 'next/image';
import Link from 'next/link';
import HeroSection from '@/components/custom/hero-section';
import ServiceCard from '@/components/custom/service-card';
import TestimonialCard from '@/components/custom/testimonial-card';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, MessageSquare, Mail, Users, Award, DollarSign, ShieldCheck, Server, Zap, Briefcase, Lightbulb } from 'lucide-react';

const services = [
  { icon: Phone, title: 'Voice Support', description: 'Professional inbound and outbound call handling to enhance customer interactions.', link: '/services/voice-support' },
  { icon: MessageSquare, title: 'Live Chat Support', description: 'Real-time chat assistance to resolve queries quickly and improve satisfaction.', link: '/services/live-chat' },
  { icon: Mail, title: 'Email Handling', description: 'Efficient and organized email management for prompt customer responses.', link: '/services/email-handling' },
  { icon: Briefcase, title: 'CRM & Ticketing', description: 'Remote CRM and ticketing system support to streamline your operations.', link: '/services/crm-ticketing' },
];

const whyChooseUsItems = [
  { icon: Award, title: 'Quality Assurance', description: 'Commitment to excellence with rigorous quality checks and continuous improvement.' },
  { icon: Users, title: 'Expert Team', description: 'Highly trained professionals dedicated to representing your brand effectively.' },
  { icon: DollarSign, title: 'Cost-Effective Solutions', description: 'Competitive pricing models designed to maximize your ROI without compromising quality.' },
  { icon: ShieldCheck, title: 'Data Security & Compliance', description: 'Robust security measures (PCI, HIPAA, GDPR compliant) to protect sensitive information.' },
  { icon: Zap, title: 'Scalability & Flexibility', description: 'Services that adapt to your business needs, ensuring support as you grow.' },
  { icon: Lightbulb, title: 'Innovative Technology', description: 'Leveraging the latest AI and call center tech for superior service delivery.' },
];

/*
const testimonials = [
  { quote: "Xellara's team transformed our customer support. Response times are down, and satisfaction is up!", author: 'Jane Doe', company: 'Tech Solutions Inc.', avatarUrl: 'https://placehold.co/100x100.png' },
  { quote: "The live chat support has been a game-changer for our e-commerce site. Highly recommended.", author: 'John Smith', company: 'Fashion Hub', avatarUrl: 'https://placehold.co/100x100.png' },
  { quote: "Professional, reliable, and cost-effective. Xellara exceeded our expectations.", author: 'Alice Brown', company: 'Global Connect Ltd.', avatarUrl: 'https://placehold.co/100x100.png' },
];
*/

/*
const clientLogos = [
  { src: "https://placehold.co/150x60.png", alt: "Client A Logo", dataAiHint: "company logo" },
  { src: "https://placehold.co/150x60.png", alt: "Client B Logo", dataAiHint: "company logo" },
  { src: "https://placehold.co/150x60.png", alt: "Client C Logo", dataAiHint: "company logo" },
  { src: "https://placehold.co/150x60.png", alt: "Client D Logo", dataAiHint: "company logo" },
  { src: "https://placehold.co/150x60.png", alt: "Client E Logo", dataAiHint: "company logo" },
];
*/


export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />

      <section id="services" className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Our Core Services</h2>
            <p className="mt-4 text-lg text-muted-foreground">Comprehensive solutions to meet all your customer interaction needs.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section id="why-choose-us" className="py-16 md:py-24 bg-primary/5">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Why Partner with Xellara?</h2>
            <p className="mt-4 text-lg text-muted-foreground">Experience the Xellara difference – where technology meets human expertise.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUsItems.map((item) => (
              <Card key={item.title} className="shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <item.icon className="h-8 w-8 text-primary" />
                    <CardTitle className="font-headline text-xl text-foreground">{item.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/*
      <section id="testimonials" className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">What Our Clients Say</h2>
            <p className="mt-4 text-lg text-muted-foreground">Real stories from businesses we've helped thrive.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>
      */}
      
      {/*
      <section id="client-logos" className="py-12 bg-muted/50">
        <div className="container">
          <h3 className="text-center text-xl font-semibold text-muted-foreground mb-8">Trusted by Businesses Worldwide</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {clientLogos.map((logo, index) => (
              <Image 
                key={index} 
                src={logo.src} 
                alt={logo.alt} 
                width={150} 
                height={60} 
                className="opacity-70 hover:opacity-100 transition-opacity duration-300"
                data-ai-hint={logo.dataAiHint}
              />
            ))}
          </div>
        </div>
      </section>
      */}

      <section id="team-infrastructure" className="py-16 md:py-24 bg-primary/5">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-headline text-3xl font-semibold tracking-tight text-foreground sm:text-4xl mb-6">Our People &amp; Technology</h2>
              <p className="text-lg text-muted-foreground mb-4">
                At Xellara, we combine a highly skilled, empathetic workforce with state-of-the-art infrastructure and AI-driven tools. This synergy allows us to deliver exceptional customer experiences consistently.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Our secure facilities and redundant systems ensure business continuity and data protection, giving you peace of mind.
              </p>
              <div className="flex space-x-4">
                  <div className="flex items-center text-foreground"><Users className="h-5 w-5 mr-2 text-primary"/> Dedicated Professionals</div>
                  <div className="flex items-center text-foreground"><Server className="h-5 w-5 mr-2 text-primary"/> Advanced Infrastructure</div>
              </div>
            </div>
            <div>
              <Image 
                src="/assets/images/tech.png" 
                alt="Our Team and Infrastructure" 
                width={500} 
                height={350} 
                className="rounded-xl shadow-2xl"
                data-ai-hint="team collaboration"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-r from-accent to-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="font-headline text-3xl font-semibold tracking-tight sm:text-4xl mb-6">Ready to Transform Your Customer Service?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Let Xellara be your partner in growth. Contact us today for a personalized consultation.
          </p>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100 shadow-lg transition-transform hover:scale-105">
            <Link href="/contact">
              Get In Touch
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
