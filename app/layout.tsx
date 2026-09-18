import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', style: ['normal', 'italic'] });

export const metadata: Metadata = {
  title: 'Widya Sari | Portfolio',
  description: 'Vocational High School Student in Computer and Network Engineering. Focused on Web Dev & DevOps.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body suppressHydrationWarning className={`${inter.variable} ${playfair.variable} font-sans bg-[#050505] text-[#EDEDED] antialiased overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}