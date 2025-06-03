import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Aperture, Target, Users, CheckCircle2 } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="py-12 md:py-20 bg-background">
      <div className="container">
        <section className="text-center mb-16 md:mb-24">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl">About Xellara</h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground sm:text-xl">
            Discover our story, our mission, and the values that drive us to deliver exceptional digital and call center services.
          </p>
        </section>

        <section className="mb-16 md:mb-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/assets/images/journey.png"
                alt="Our Journey"
                width={600}
                height={400}
                className="rounded-xl shadow-xl"
                data-ai-hint="business journey graph"
                unoptimized
              />
            </div>
            <div>
              <h2 className="font-headline text-3xl font-semibold text-foreground mb-4">Our Journey</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Founded with a vision to revolutionize customer engagement, Xellara began as a small team of passionate professionals. We recognized the growing need for businesses to connect with their customers meaningfully and efficiently in an increasingly digital world.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Over the years, we've grown into a trusted partner for companies across various industries, expanding our services and expertise. Our journey is marked by continuous learning, adaptation to new technologies, and an unwavering commitment to our clients' success.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16 md:mb-24 bg-primary/5 p-8 md:p-12 rounded-xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="font-headline text-3xl font-semibold text-foreground mb-4">Our Mission &amp; Vision</h2>
              <div className="flex items-start mb-6">
                <Target className="h-8 w-8 text-primary mr-4 mt-1 shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-1">Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To empower businesses with innovative, reliable, and scalable customer engagement solutions that drive growth, enhance brand loyalty, and deliver measurable results.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Aperture className="h-8 w-8 text-primary mr-4 mt-1 shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-1">Vision</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To be the leading global provider of digitally-enabled customer experience services, recognized for our commitment to excellence, technological advancement, and client success.
                  </p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <Image
                src="/assets/images/mission.png"
                alt="Mission and Vision"
                width={600}
                height={400}
                className="rounded-xl shadow-xl"
                data-ai-hint="target success"
                unoptimized
              />
            </div>
          </div>
        </section>

        <section className="mb-16 md:mb-24">
          <h2 className="font-headline text-3xl font-semibold text-center text-foreground mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {['Client-Centricity', 'Integrity', 'Innovation', 'Excellence'].map((value) => (
              <Card key={value} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl p-4 sm:p-6 md:p-8">
                <CheckCircle2 className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">{value}</h3>
                <p className="text-sm text-muted-foreground">
                  We are committed to putting our clients first, upholding the highest ethical standards, fostering creativity, and striving for unparalleled quality in everything we do.
                </p>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <div className="text-center">
            <Users className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="font-headline text-3xl font-semibold text-foreground mb-4">Meet Our Team (Coming Soon)</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our strength lies in our diverse team of experts. We're working on a dedicated section to introduce the talented individuals who make Xellara exceptional. Stay tuned!
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
