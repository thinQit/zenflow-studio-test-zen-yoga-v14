"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { ContactForm } from "@/components/blocks/ContactForm";
import { CTAGlass } from "@/components/blocks/CTAGlass";

const sectionVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export default function ContactPage() {
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
              <p className="label-md text-xs text-muted-foreground">Contact</p>
              <h1 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight display-lg">
                Booking, questions, and private sessions.
              </h1>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                Send a note with your goals and preferred times. We’ll confirm your booking and recommend
                the best starting point.
              </p>
            </div>

            <div className="relative h-80 w-full overflow-hidden rounded-2xl shadow-soft">
              <Image
                src="/images/product-3.png"
                alt="Studio calm"
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
        <ContactForm
          headline="Send an inquiry"
          subheadline="We typically respond within 1 business day."
          contactInfo={[
            { icon: "📍", label: "Location", value: "ZenFlow Studio • Downtown (by appointment)" },
            { icon: "🕒", label: "Hours", value: "Mon–Sun • 7:00–20:00" },
            { icon: "✉️", label: "Email", value: "hello@zenflow.studio" },
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
          headline="Prefer to start with pricing?"
          description="Compare tiers and choose a rhythm that supports you."
          ctaLabel="View Pricing"
          ctaHref="/pricing"
          secondaryCtaLabel="Explore Services"
          secondaryCtaHref="/services"
        />
      </motion.div>
    </main>
  );
}
