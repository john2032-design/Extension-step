import type { ReactNode } from 'react';
import Navbar from './Navbar';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="page-bg min-h-screen">
      <Navbar />
      <main className="pt-16 md:pt-20">
        {children}
      </main>
    </div>
  );
}
