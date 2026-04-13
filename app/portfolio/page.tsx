"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { TeamGrid } from "@/components/blocks/TeamGrid";
import { TestimonialsGrid } from "@/components/blocks/TestimonialsGrid";
import { CTAGlass } from "@/components/blocks/CTAGlass";

const sectionVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export default function PortfolioPage() {
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
              <p className="label-md text-xs text-muted-foreground">Instructors</p>
              <h1 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight display-lg">
                Teachers with calm precision.
              </h1>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                Our instructors blend technical alignment with a quiet, supportive presence—so you can
                practice with confidence.
              </p>
            </div>

            <div className="relative h-80 w-full overflow-hidden rounded-2xl shadow-soft">
              <Image
                src="/images/product-2.png"
                alt="Instructor guidance"
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
        <TeamGrid
          headline="Meet the team"
          subheadline="A small group of specialists—flow, restoration, and meditation."
          members={[
            {
              name: "Mina Sato",
              role: "Vinyasa + Mobility",
              bio: "Breath-led sequencing with precise alignment cues and mindful strength.",
              imageUrl: "/images/product-1.png",
            },
            {
              name: "Hiro Tanaka",
              role: "Restorative + Breathwork",
              bio: "Nervous-system downshifting, prop-supported holds, and gentle breath practices.",
              imageUrl: "/images/product-2.png",
            },
            {
              name: "Elena Park",
              role: "Meditation Foundations",
              bio: "Simple, secular techniques for attention training and daily calm.",
              imageUrl: "/images/product-3.png",
            },
            {
              name: "Noah Kim",
              role: "Private Sessions",
              bio: "Personalized programs for mobility, stress relief, and sustainable strength.",
              imageUrl: "/images/product-3.png",
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
        <TestimonialsGrid
          headline="Guidance that feels personal."
          subheadline="Small groups make room for real coaching."
          testimonials={[
            {
              quote:
                "I finally understand alignment without feeling judged. The cues are clear and kind.",
              name: "Taylor N.",
              title: "Member",
              avatarUrl: "/images/product-3.png",
            },
            {
              quote:
                "The restorative teacher is incredible—my shoulders and sleep have improved in weeks.",
              name: "Chris L.",
              title: "Member",
              avatarUrl: "/images/product-3.png",
            },
            {
              quote:
                "Meditation here is practical. I can actually use it at work and at home.",
              name: "Priya D.",
              title: "Member",
              avatarUrl: "/images/product-2.png",
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
          headline="Book with a favorite instructor."
          description="Request a class or private session and we’ll match you with the right teacher."
          ctaLabel="Book Now"
          ctaHref="/contact"
          secondaryCtaLabel="View Services"
          secondaryCtaHref="/services"
        />
      </motion.div>
    </main>
  );
}
