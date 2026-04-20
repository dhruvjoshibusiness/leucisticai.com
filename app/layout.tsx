import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Leucistic — Command What Others Miss',
  description: 'Premium predictive maintenance intelligence for manufacturers.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
