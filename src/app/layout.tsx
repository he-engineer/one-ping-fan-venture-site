import type { Metadata } from 'next';
import Script from 'next/script';
import ThemeRegistry from '@/theme/ThemeRegistry';
import './globals.css';

export const metadata: Metadata = {
  title: 'One Ping Fan Venture LLC | AI Venture Studio',
  description:
    'One Ping Fan Venture LLC is an AI Venture Studio focused on rapidly prototyping, validating, and scaling AI-native products.',
  openGraph: {
    title: 'One Ping Fan Venture LLC | AI Venture Studio',
    description:
      'An AI Venture Studio that builds and operates its own products, spinning out independent companies once early signals of product-market fit are demonstrated.',
    url: 'https://onepingfanventure.com',
    siteName: 'One Ping Fan Venture LLC',
    type: 'website',
  },
};

const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {plausibleDomain ? (
          <Script
            id="plausible-analytics"
            src="https://plausible.io/js/script.js"
            data-domain={plausibleDomain}
            strategy="afterInteractive"
          />
        ) : null}
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
