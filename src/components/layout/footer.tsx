import Link from 'next/link';
import { BotMessageSquare } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4 transition-opacity hover:opacity-80">
              <BotMessageSquare className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-primary">Xellara</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Xpand. Xceed. Xcel.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/careers" className="text-sm text-muted-foreground hover:text-primary transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2 text-foreground">Connect With Us</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Ward no 6 House no 200 Rajkhar Duddhi Sonbhadra UP 231208
            </p>
             <p className="text-sm text-muted-foreground mt-1">
              <a href="mailto:contact@xellara.com" className="hover:text-primary transition-colors">contact@xellara.com</a>
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              <a href="tel:+919214233771" className="hover:text-primary transition-colors">+91 9214233771</a>
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Xellara. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
