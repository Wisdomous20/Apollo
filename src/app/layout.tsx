import type React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Apollo Medical Group - Healthcare Made Simple & Joyful',
  description:
    'Comprehensive primary care, mental health services, and aesthetic treatments in a welcoming, modern environment. Experience healthcare that puts you first.',
  keywords: [
    'healthcare',
    'medical',
    'primary care',
    'mental health',
    'aesthetic treatments',
    'Apollo Medical',
  ],
  authors: [{ name: 'Apollo Medical Group' }],
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#4ECDC4',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="font-inter antialiased">{children}</body>
    </html>
  );
}
