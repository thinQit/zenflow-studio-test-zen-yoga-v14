import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

import { NavbarGlass } from "@/components/blocks/NavbarGlass";
import { FooterMultiColumn } from "@/components/blocks/FooterMultiColumn";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ZenFlow Studio",
  description:
    "ZenFlow Studio — premium yoga and meditation in a minimalist Japanese-inspired sanctuary.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased bg-background text-foreground">
        {/* Navbar must be full width and fixed */}
        <div className="fixed top-0 left-0 right-0 w-full z-50">
          <NavbarGlass
            logo="ZenFlow Studio"
            navItems={[
              { label: "About", href: "/about" },
              { label: "Services", href: "/services" },
              { label: "Pricing", href: "/pricing" },
              { label: "Contact", href: "/contact" },
              { label: "Portfolio", href: "/portfolio" },
            ]}
            ctaLabel="Book a Class"
            ctaHref="/contact"
          />
        </div>

        {/* Offset for fixed nav */}
        <div className="pt-20">{children}</div>

        <FooterMultiColumn
          brand="ZenFlow Studio"
          description="A minimalist Japanese-inspired yoga and meditation studio—designed for breath, balance, and clarity."
          columns={[
            {
              title: "Explore",
              links: [
                { label: "About", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Pricing", href: "/pricing" },
                { label: "Contact", href: "/contact" },
              ],
            },
            {
              title: "Programs",
              links: [
                { label: "Vinyasa Flow", href: "/services" },
                { label: "Restorative", href: "/services" },
                { label: "Meditation", href: "/services" },
                { label: "Private Sessions", href: "/pricing" },
              ],
            },
            {
              title: "Studio",
              links: [
                { label: "Instructors", href: "/portfolio" },
                { label: "Community", href: "/about" },
                { label: "Policies", href: "/contact" },
                { label: "Gift Cards", href: "/pricing" },
              ],
            },
          ]}
          copyright="© 2026 ZenFlow Studio. All rights reserved."
        />
      </body>
    </html>
  );
}
