import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Buy the hour",
  description: "Calculate what you actually earn by the hour",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
