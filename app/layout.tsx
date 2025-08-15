import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Niyukti - India\'s Premier Job Portal',
  description: 'Find your dream job in India with Niyukti. Connect with top employers and advance your career.',
  keywords: ['jobs', 'careers', 'employment', 'hiring', 'India', 'job portal'],
  authors: [{ name: 'Niyukti Team' }],
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}