import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CloverSpace",
  description: "Helping local businesses stand out online with websites built for growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
