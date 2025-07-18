import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from '@/hooks/use-theme';

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
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
          rel="stylesheet"
          crossOrigin="anonymous"
        />
      </head>
      <body className="font-sans">
        <ThemeProvider>
          {children}
        </ThemeProvider>
    </html>
  );
}
  )
}