
import ContactForm from '@/components/custom/contact-form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="py-12 md:py-20 bg-background">
      <div className="container">
        <section className="text-center mb-16 md:mb-24">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl">Get In Touch</h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground sm:text-xl">
            We're here to help and answer any question you might have. We look forward to hearing from you!
          </p>
        </section>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="lg:col-span-3">
            <Card className="shadow-xl rounded-xl">
              <CardHeader>
                <CardTitle className="font-headline text-2xl text-foreground">Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2">
            <Card className="shadow-xl rounded-xl">
              <CardHeader>
                <CardTitle className="font-headline text-2xl text-foreground">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-primary mr-4 mt-1 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">Our Office</h3>
                    <p className="text-sm text-muted-foreground">Ward no 6 House no 200 Rajkhar Duddhi Sonbhadra UP 231208</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-primary mr-4 mt-1 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">Email Us</h3>
                    <a href="mailto:contact@xellara.com" className="text-sm text-primary hover:underline">contact@xellara.com</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-primary mr-4 mt-1 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">Call Us</h3>
                    <a href="tel:+919214233771" className="text-sm text-primary hover:underline">+91 9214233771</a>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t">
                   <h3 className="font-semibold text-foreground mb-2">Business Hours</h3>
                   <p className="text-sm text-muted-foreground">Monday - Friday: 9 AM - 6 PM (IST)</p>
                   <p className="text-sm text-muted-foreground">Saturday - Sunday: Closed</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
