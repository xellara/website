import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary to-accent py-20 md:py-32">
      <div className="absolute inset-0 opacity-50 ">
        <Image 
          src="/assets/images/office.jpg" 
          alt="Modern office background" 
          layout="fill" 
          objectFit="cover" 
          priority
          data-ai-hint="modern office business"
        />
        <div className="absolute inset-0 bg-black/40"></div> {/* Overlay for text readability */}
      </div>
      <div className="container relative z-10 text-center">
        <h1 className="font-headline text-4xl font-extrabold tracking-tight text-primary-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          Elevate Your Customer Experience with <span className="text-primary-foreground font-black">Xellara</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-primary-foreground/80 sm:text-xl md:text-2xl">
          Tailored call center and digital solutions designed to scale your business and delight your customers.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transition-transform hover:scale-105">
            <Link href="/quote">
              Get a Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="shadow-lg transition-transform hover:scale-105 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
            <Link href="/services">
              Explore Services
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
