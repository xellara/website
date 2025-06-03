
"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Menu, X, BotMessageSquare } from 'lucide-react'; // BotMessageSquare for logo
import type { Route } from 'next';

const navItems = [
  { label: 'Home', href: '/' as Route<string> },
  { label: 'About Us', href: '/about' as Route<string> },
  { label: 'Services', href: '/services' as Route<string> },
  { label: 'Pricing', href: '/pricing' as Route<string> },
  { label: 'Careers', href: '/careers' as Route<string> },
  { label: 'Partnerships', href: '/partnerships' as Route<string> },
  { label: 'Contact', href: '/contact' as Route<string> },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);


  if (!mounted) {
    return ( // Render a basic skeleton or null during SSR to avoid hydration mismatch for Sheet
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <BotMessageSquare className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-primary">Xellara</span>
          </Link>
          <div className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
          <BotMessageSquare className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold text-primary">Xellara</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
          <Button asChild variant="default" className="bg-primary hover:bg-primary/90 text-primary-foreground transition-colors">
            <Link href="/quote">Get a Quote</Link>
          </Button>
        </nav>

        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(true)}>
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-background p-6">
              <div className="flex flex-col space-y-6">
                <div className="flex justify-start items-center"> {/* Changed justify-between to justify-start */}
                  <Link href="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                     <BotMessageSquare className="h-7 w-7 text-primary" />
                     <span className="text-lg font-bold text-primary">Xellara</span>
                  </Link>
                  {/* The redundant SheetClose with an X icon that was here has been removed. 
                      The SheetContent component provides its own close button. */}
                </div>
                <nav className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <SheetClose asChild key={item.label}>
                      <Link
                        href={item.href}
                        className="text-base font-medium text-foreground/80 hover:text-primary"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
                <SheetClose asChild>
                  <Button asChild variant="default" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                     <Link href="/quote" onClick={() => setIsMobileMenuOpen(false)}>Get a Quote</Link>
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
