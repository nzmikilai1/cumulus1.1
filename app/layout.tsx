import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/hooks/use-theme';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'FleetCard - Manage Your Fleet',
  description: 'Comprehensive fleet card management system',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}