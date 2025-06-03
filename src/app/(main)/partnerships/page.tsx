
import PartnershipForm from '@/components/custom/partnership-form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Handshake, Zap, Target, Share2 } from 'lucide-react';
import Image from 'next/image';

const partnershipBenefits = [
  {
    icon: Zap,
    title: "Expand Your Reach",
    description: "Access new markets and customer segments through our established network and client base."
  },
  {
    icon: Target,
    title: "Enhance Offerings",
    description: "Complement your services with our solutions to provide more comprehensive value to your clients."
  },
  {
    icon: Share2,
    title: "Collaborative Growth",
    description: "Work together on innovative projects and co-marketing initiatives for mutual success."
  }
];

export default function PartnershipsPage() {
  return (
    <div className="py-12 md:py-20 bg-background">
      <div className="container">
        <section className="text-center mb-16 md:mb-24">
           {/* <Image 
            src="https://placehold.co/1200x400.png" 
            alt="Partner with Xellara"
            width={1200}
            height={400}
            className="w-full h-auto object-cover rounded-xl mb-10 shadow-lg"
            data-ai-hint="business handshake partnership"
          /> */}
          <h1 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl">Partner with Xellara</h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground sm:text-xl">
            Let's build success together. Xellara is seeking strategic partners to expand our network, enhance our offerings, and deliver greater value to clients worldwide.
          </p>
        </section>

        <section className="mb-16 md:mb-24">
          <h2 className="font-headline text-3xl font-semibold text-center text-foreground mb-12">Benefits of Partnering With Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnershipBenefits.map(benefit => (
              <Card key={benefit.title} className="shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl">
                <CardHeader className="items-center text-center">
                  <benefit.icon className="h-12 w-12 text-primary mb-3" />
                  <CardTitle className="font-headline text-xl text-foreground">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-3">
            <Card className="shadow-xl rounded-xl">
              <CardHeader>
                <CardTitle className="font-headline text-2xl text-foreground">Become a Partner</CardTitle>
                <p className="text-sm text-muted-foreground mt-1">
                  Interested in exploring a partnership? Fill out the form below, and our partnership team will get in touch with you.
                </p>
              </CardHeader>
              <CardContent>
                <PartnershipForm />
              </CardContent>
            </Card>
          </div>
          <div className="lg:col-span-2 space-y-8">
            <Card className="shadow-lg rounded-xl">
                <CardHeader>
                    <Handshake className="h-10 w-10 text-primary mb-2" />
                    <CardTitle className="font-headline text-xl text-foreground">Who We Partner With</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        <li>Technology Providers</li>
                        <li>Consulting Firms</li>
                        <li>Software Companies (CRM, Helpdesk, etc.)</li>
                        <li>Marketing Agencies</li>
                        <li>Industry Associations</li>
                        <li>Businesses seeking complementary services</li>
                    </ul>
                </CardContent>
            </Card>
             <Card className="shadow-lg rounded-xl bg-primary/5">
                <CardHeader>
                    <CardTitle className="font-headline text-xl text-foreground">Our Partnership Philosophy</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground">
                        We believe in building strong, mutually beneficial relationships based on trust, transparency, and shared goals. We are committed to supporting our partners and fostering collaborative innovation.
                    </p>
                </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
