import type { ReactNode } from 'react';
import Header from './header';
import Footer from './footer';

type MainLayoutProps = {
  children: ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
