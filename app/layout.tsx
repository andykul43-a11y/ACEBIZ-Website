import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ace Biz - Leading Accounting Firm in Sydney | Tax, SMSF & Business Advisory",
  description: "Expert accounting services in Sydney. Specializing in taxation, SMSF, bookkeeping, payroll, business advisory, and analytics. Call 02 9686 6333 for a consultation.",
  keywords: "accounting Sydney, tax accountant, SMSF, bookkeeping, payroll, business advisory, Norwest accounting",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
