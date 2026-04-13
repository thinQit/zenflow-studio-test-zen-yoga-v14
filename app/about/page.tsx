"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { FeaturesGrid } from "@/components/blocks/FeaturesGrid";
import { CTAGlass } from "@/components/blocks/CTAGlass";

const sectionVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutPage() {
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
              <p className="label-md text-xs text-muted-foreground">About ZenFlow</p>
              <h1 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight display-lg">
                A sanctuary built on simplicity.
              </h1>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                ZenFlow Studio is a premium yoga and meditation space inspired by Japanese minimalism:
                tonal layers, generous white space, and calm precision. We believe practice should feel
                curated—not crowded.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Our approach blends breath-led movement, mindful strength, and accessible meditation—
                designed to support modern nervous systems.
              </p>
            </div>

            <div className="relative h-80 w-full overflow-hidden rounded-2xl shadow-soft">
              <Image
                src="/images/product-2.png"
                alt="Studio interior"
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
        <FeaturesGrid
          badge="Our Philosophy"
          headline="Organic serenity, technical precision."
          subheadline="A studio experience that feels architectural—quiet, intentional, and deeply human."
          features={[
            {
              icon: "🪨",
              title: "Curated rhythm",
              description: "A weekly cadence that supports consistency and recovery.",
            },
            {
              icon: "📐",
              title: "Alignment-first cues",
              description: "Clear instruction that respects bodies and builds confidence.",
            },
            {
              icon: "🌫️",
              title: "Tonal layering",
              description: "Boundaries defined by soft background shifts—not harsh lines.",
            },
            {
              icon: "🧠",
              title: "Nervous-system aware",
              description: "Breathwork and pacing designed to downshift stress.",
            },
            {
              icon: "🫧",
              title: "Space to breathe",
              description: "Generous spacing and small groups for a calmer room.",
            },
            {
              icon: "🕯️",
              title: "Stillness as a skill",
              description: "Meditation taught as a practical, repeatable technique.",
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
          headline="Come experience ZenFlow."
          description="Book a class or request a private session—our team will guide you to the right fit."
          ctaLabel="Contact & Booking"
          ctaHref="/contact"
          secondaryCtaLabel="View Pricing"
          secondaryCtaHref="/pricing"
        />
      </motion.div>
    </main>
  );
}
