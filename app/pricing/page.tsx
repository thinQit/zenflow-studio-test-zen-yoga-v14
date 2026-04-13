"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { PricingTable } from "@/components/blocks/PricingTable";
import { CTAGlass } from "@/components/blocks/CTAGlass";

const sectionVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export default function PricingPage() {
  return (
    <main>
      <motion.section
        className="py-20 md:py-28 bg-background"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="label-md text-xs text-muted-foreground">Pricing</p>
              <h1 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight display-lg">
                Memberships with room to breathe.
              </h1>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                Choose a tier that matches your rhythm. Upgrade anytime—keep it simple and consistent.
              </p>
            </div>

            <div className="relative h-80 w-full overflow-hidden rounded-2xl shadow-soft">
              <Image
                src="/images/product-2.png"
                alt="Meditation space"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </motion.section>

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <PricingTable
          headline="Simple tiers. Premium experience."
          subheadline="All memberships include mat + props, small-group instruction, and optional class recommendations."
          tiers={[
            {
              name: "Essential",
              price: "$79",
              period: "/month",
              description: "A calm start—perfect for 1–2 sessions per week.",
              features: ["4 classes / month", "Restorative + Foundations access", "Member-only schedule updates"],
              ctaLabel: "Choose Essential",
              ctaHref: "/contact",
            },
            {
              name: "Studio",
              price: "$129",
              period: "/month",
              description: "Our most popular—build a steady weekly rhythm.",
              features: ["8 classes / month", "All class styles", "Priority booking window", "One complimentary workshop pass"],
              ctaLabel: "Choose Studio",
              ctaHref: "/contact",
              highlighted: true,
            },
            {
              name: "Sanctuary",
              price: "$189",
              period: "/month",
              description: "For deep consistency and support.",
              features: ["Unlimited classes", "All class styles + workshops", "One private session / month", "Guest pass (1/month)"],
              ctaLabel: "Choose Sanctuary",
              ctaHref: "/contact",
            },
          ]}
        />
      </motion.div>

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <CTAGlass
          headline="Not sure which tier fits?"
          description="Tell us your goals and weekly availability—we’ll recommend the best plan."
          ctaLabel="Ask for Guidance"
          ctaHref="/contact"
          secondaryCtaLabel="Explore Services"
          secondaryCtaHref="/services"
        />
      </motion.div>
    </main>
  );
}
