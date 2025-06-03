import QuoteForm from '@/components/custom/quote-form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb, Zap, Users } from 'lucide-react';
import { Suspense } from 'react';

// Wrapper component to allow QuoteForm to use useSearchParams
function QuotePageContent() {
  return <QuoteForm />;
}

export default function QuotePage() {
  return (
    <div className="py-12 md:py-20 bg-gradient-to-br from-primary/5 via-background to-background">
      <div className="container">
        <section className="text-center mb-12 md:mb-16">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl">Request a Personalized Quote</h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground sm:text-xl">
            Tell us about your needs, and we'll provide a tailored quote to help you achieve your business objectives. Our team is ready to craft the perfect solution for you.
          </p>
        </section>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <Card className="shadow-xl rounded-xl">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="font-headline text-2xl text-foreground">Your Project Details</CardTitle>
                <CardDescription>Please fill out the form below. The more details you provide, the more accurate your quote will be.</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <Suspense fallback={<div>Loading form...</div>}>
                  <QuotePageContent />
                </Suspense>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1 space-y-8">
            <Card className="shadow-lg rounded-xl">
              <CardHeader>
                <Lightbulb className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="font-headline text-xl text-foreground">Why Xellara?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p><strong>Tailored Solutions:</strong> We don't believe in one-size-fits-all. Your quote will be customized to your exact needs.</p>
                <p><strong>Transparent Pricing:</strong> No hidden fees. We provide clear and competitive pricing.</p>
                <p><strong>Expert Consultation:</strong> Our team will work with you to understand your goals and propose the best strategy.</p>
              </CardContent>
            </Card>
             <Card className="shadow-lg rounded-xl">
              <CardHeader>
                <Zap className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="font-headline text-xl text-foreground">What to Expect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>1. Submit your detailed request.</p>
                <p>2. Our team reviews your requirements.</p>
                <p>3. We'll contact you for any clarifications (if needed).</p>
                <p>4. Receive your personalized quote within 24-48 business hours.</p>
              </CardContent>
            </Card>
             <Card className="shadow-lg rounded-xl">
              <CardHeader>
                <Users className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="font-headline text-xl text-foreground">Our Commitment</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <p>We are dedicated to providing high-quality, cost-effective solutions that drive results for your business. Your success is our priority.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
