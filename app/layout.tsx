import type { Metadata } from 'next';
import { Oswald, Lato } from 'next/font/google';
import './globals.css';

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-heading',
  display: 'swap',
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Joe's Pizza | Authentic New York Pizza",
  description:
    "Joe's Pizza in New York, NY. Real New York pizza the way it was meant to be. Stop by for a slice or order for your whole crew.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={oswald.variable + ' ' + lato.variable}>
      <body className="bg-brand-background font-body text-brand-text">
        {children}
      </body>
    </html>
  );
}
