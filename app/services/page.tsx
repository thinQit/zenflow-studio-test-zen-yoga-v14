"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { FeaturesGrid } from "@/components/blocks/FeaturesGrid";
import { HoverEffect } from "@/components/ui/effects/HoverEffect";
import { CTAGlass } from "@/components/blocks/CTAGlass";

const sectionVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export default function ServicesPage() {
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
              <p className="label-md text-xs text-muted-foreground">Services</p>
              <h1 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight display-lg">
                Classes designed for modern life.
              </h1>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                Choose energizing flow, deep restoration, or meditation training. Each offering is
                intentionally paced—quiet strength over intensity.
              </p>
            </div>

            <div className="relative h-80 w-full overflow-hidden rounded-2xl shadow-soft">
              <Image
                src="/images/product-1.png"
                alt="Yoga class"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="mt-14 section-muted rounded-3xl p-6 md:p-10">
            <p className="label-md text-xs text-muted-foreground">Explore</p>
            <h2 className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight">
              What we offer
            </h2>
            <div className="mt-8">
              <HoverEffect
                items={[
                  {
                    title: "Vinyasa Flow",
                    description:
                      "Breath-led sequences that build heat, mobility, and calm focus.",
                    link: "/contact",
                  },
                  {
                    title: "Restorative Yoga",
                    description:
                      "Supportive props, longer holds, and deep downshifting for recovery.",
                    link: "/contact",
                  },
                  {
                    title: "Meditation Foundations",
                    description:
                      "Technique-based training: breath, body scan, and attention skills.",
                    link: "/contact",
                  },
                  {
                    title: "Private Sessions",
                    description:
                      "Personalized programming for stress relief, mobility, and mindful strength.",
                    link: "/pricing",
                  },
                  {
                    title: "Workshops",
                    description:
                      "Seasonal intensives: breathwork, hips & hamstrings, back care, and more.",
                    link: "/contact",
                  },
                  {
                    title: "Corporate Calm",
                    description:
                      "On-site or virtual sessions for teams—movement + mindfulness for focus.",
                    link: "/contact",
                  },
                ]}
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
          badge="How it works"
          headline="Simple booking. Clear guidance."
          subheadline="Tell us your goals and schedule—we’ll recommend the best class path."
          features={[
            { icon: "1", title: "Choose a focus", description: "Flow, restore, meditate—or combine." },
            { icon: "2", title: "Pick a time", description: "Morning energy, midday reset, evening unwind." },
            { icon: "3", title: "Arrive early", description: "We’ll help you set up props and settle in." },
            { icon: "4", title: "Practice with ease", description: "Small groups and precise cues support you." },
            { icon: "5", title: "Repeat weekly", description: "Consistency is where calm compounds." },
            { icon: "6", title: "Go deeper (optional)", description: "Add private sessions for tailored progress." },
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
          headline="Want a recommended schedule?"
          description="Send your availability and goals—our team will suggest a weekly rhythm."
          ctaLabel="Request a Recommendation"
          ctaHref="/contact"
          secondaryCtaLabel="See Pricing"
          secondaryCtaHref="/pricing"
        />
      </motion.div>
    </main>
  );
}
