import type {Metadata} from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css'; // Global styles
import { WhatsAppButton } from '@/components/WhatsAppButton';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: 'Studio Vitiello | Consulenza Fiscale e Societaria',
  description: 'Consulenza strategica per imprese, professionisti e crescita aziendale. Affidati allo Studio Vitiello per servizi premium di consulenza aziendale, societaria e tributaria.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="it" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="antialiased font-sans bg-[#F8F9FB] text-slate-800 selection:bg-[#B38F5F] selection:text-white flex min-h-screen flex-col" suppressHydrationWarning>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
