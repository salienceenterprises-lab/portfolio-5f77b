
import React from 'react';
import './globals.css';
export const metadata = {
  title: 'ABDULLAH SYED',
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
