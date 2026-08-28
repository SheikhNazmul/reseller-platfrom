import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ResellerHub | Multi-Vendor Reseller Platform",
  description: "A modern reseller and multi-vendor commerce platform built with Next.js, TypeScript and Supabase.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
