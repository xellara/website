
import Link from 'next/link';
import PricingCard from '@/components/custom/pricing-card';
import { Button } from '@/components/ui/button';
import { Users, Briefcase, HelpCircle } from 'lucide-react';

const pricingPlans = [
  {
    icon: Users,
    title: 'Internship Staffing',
    description: 'Access emerging talent for your projects. Cost-effective solutions with supervised interns.',
    features: [
      'Vetted and trained interns',
      'Supervision by experienced managers',
      'Flexible engagement models',
      'Ideal for startups and short-term projects',
      'Focus on specific skill sets (e.g., customer service, data entry)',
    ],
    ctaText: 'Inquire About Interns',
    ctaLink: '/quote?service=internship',
  },
  {
    icon: Briefcase,
    title: 'Full-Time Teams',
    description: 'Dedicated, experienced professionals integrated into your operations. Scalable and reliable.',
    price: 'Custom',
    pricePeriod: 'team',
    features: [
      'Dedicated agents / specialists',
      'Customized training programs',
      'Scalable team sizes',
      'Advanced reporting and analytics',
      'Full integration with your systems',
      'Options for 24/7 coverage',
    ],
    ctaText: 'Get a Custom Quote',
    ctaLink: '/quote?service=full-time',
    popular: true,
  },
  {
    icon: HelpCircle,
    title: 'Consulting &amp; Setup',
    description: 'Expert advice on call center operations, technology, and AI integration.',
    features: [
      'Process optimization consulting',
      'Technology stack recommendations',
      'Training curriculum development',
      'Quality assurance framework setup',
    ],
    ctaText: 'Discuss Your Needs',
    ctaLink: '/contact?subject=consulting',
  },
];

export default function PricingPage() {
  return (
    <div className="py-12 md:py-20 bg-background">
      <div className="container">
        <section className="text-center mb-16 md:mb-24">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl">Flexible Pricing For Your Needs</h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground sm:text-xl">
            Transparent and competitive pricing designed to provide maximum value. Choose a plan that aligns with your business goals and budget.
          </p>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.title} {...plan} />
          ))}
        </section>

        <section className="mt-16 md:mt-24 text-center bg-primary/5 p-8 md:p-12 rounded-xl">
          <h2 className="font-headline text-3xl font-semibold text-foreground mb-4">Not Sure Which Plan is Right?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our experts are here to help you find the perfect solution. Contact us for a personalized consultation and a detailed quote tailored to your specific requirements.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/contact">Contact Sales</Link>
          </Button>
        </section>
      </div>
    </div>
  );
}
