"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { HeroMinimal } from "@/components/blocks/HeroMinimal";
import { BentoGrid } from "@/components/ui/effects/BentoGrid";
import { FeaturesGrid } from "@/components/blocks/FeaturesGrid";
import { StickyScroll as StickyScrollReveal } from "@/components/ui/effects/StickyScrollReveal";
import { TestimonialsGrid } from "@/components/blocks/TestimonialsGrid";
import { FAQAccordion } from "@/components/blocks/FAQAccordion";
import { CTAGlass } from "@/components/blocks/CTAGlass";

const sectionVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export default function HomePage() {
  return (
    <main>
      {/* HERO (mandatory component) */}
      <div className="relative">
        {/* Background image + dark overlay for readability; hero text must be white */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/hero.png"
            alt="Serene studio atmosphere"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-black/70" />
        </div>

        <div className="py-10 md:py-16">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="text-white">
              <HeroMinimal
                headline="Elevate your practice. Find your inner rhythm."
                subheadline="ZenFlow Studio is a premium yoga and meditation sanctuary—minimalist, calm, and intentionally curated for modern life."
                primaryCta={{ label: "View Services", href: "/services" }}
                secondaryCta={{ label: "See Pricing", href: "/pricing" }}
                imageUrl="/images/product-1.png"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bento overview */}
      <motion.section
        className="py-20 md:py-28 bg-background"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container mx-auto max-w-7xl px-4">
          <div className="max-w-2xl">
            <p className="label-md text-xs text-muted-foreground">The Tectonic Sanctuary</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight display-lg">
              A curated space for breath, balance, and clarity.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Minimalist Japanese-inspired design meets precise instruction—so you can slow down,
              reset, and move with intention.
            </p>
          </div>

          <div className="mt-12">
            <BentoGrid className="gap-5">
              {/* Using children slots without creating new components */}
              <div className="rounded-2xl bg-card shadow-soft p-6 md:col-span-2">
                <p className="label-md text-xs text-muted-foreground">Signature</p>
                <h3 className="mt-2 text-2xl font-semibold">Flow + Stillness</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  Vinyasa, restorative, and meditation sessions designed to complement each other.
                </p>
                <div className="mt-6 relative h-44 w-full overflow-hidden rounded-xl">
                  <Image
                    src="/images/product-2.png"
                    alt="Yoga practice"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="rounded-2xl bg-muted/60 p-6">
                <p className="label-md text-xs text-muted-foreground">Weekly</p>
                <h3 className="mt-2 text-2xl font-semibold">Structured Schedule</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  A clean rhythm of classes—morning energy, midday reset, evening unwind.
                </p>
              </div>

              <div className="rounded-2xl bg-muted/60 p-6">
                <p className="label-md text-xs text-muted-foreground">Private</p>
                <h3 className="mt-2 text-2xl font-semibold">1:1 Sessions</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  Personalized programming for mobility, stress relief, and mindful strength.
                </p>
              </div>
            </BentoGrid>
          </div>
        </div>
      </motion.section>

      {/* Features */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <FeaturesGrid
          badge="Studio Experience"
          headline="Premium instruction, minimalist calm."
          subheadline="Everything is designed to feel spacious and intentional—so your practice can be, too."
          features={[
            {
              icon: "🧘",
              title: "Small-group classes",
              description: "More attention, better alignment cues, and a quieter room.",
            },
            {
              icon: "🌿",
              title: "Breath-led sequencing",
              description: "Move with precision—flow that feels grounded, not rushed.",
            },
            {
              icon: "🕯️",
              title: "Meditation built-in",
              description: "Short, practical mindfulness woven into every session.",
            },
            {
              icon: "📅",
              title: "Clear weekly rhythm",
              description: "A schedule that supports consistency without overwhelm.",
            },
            {
              icon: "🤍",
              title: "Japanese-inspired sanctuary",
              description: "Tonal palette, natural textures, and a calm editorial layout.",
            },
            {
              icon: "🎧",
              title: "Sound + silence balance",
              description: "Curated soundscapes where they help—silence where it matters.",
            },
          ]}
        />
      </motion.div>

      {/* Sticky scroll reveal: featured classes */}
      <motion.section
        className="py-20 md:py-28 bg-background"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container mx-auto max-w-7xl px-4">
          <div className="max-w-2xl">
            <p className="label-md text-xs text-muted-foreground">Featured Classes</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight display-lg">
              Discover your path.
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Choose a class style that matches your season—energize, restore, or return to stillness.
            </p>
          </div>

          <div className="mt-12">
            <StickyScrollReveal
              content={[
                {
                  title: "Flow (Vinyasa)",
                  description:
                    "Breath-led sequences that build heat and clarity—strong, smooth, and grounded.",
                  content: (
                    <div className="relative h-64 w-full overflow-hidden rounded-2xl">
                      <Image
                        src="/images/product-3.png"
                        alt="Vinyasa flow"
                        fill
                        className="object-cover"
                      />
                    </div>
                  ),
                },
                {
                  title: "Restorative",
                  description:
                    "Longer holds, supportive props, and nervous-system downshifting for deep recovery.",
                  content: (
                    <div className="relative h-64 w-full overflow-hidden rounded-2xl">
                      <Image
                        src="/images/product-1.png"
                        alt="Restorative yoga"
                        fill
                        className="object-cover"
                      />
                    </div>
                  ),
                },
                {
                  title: "Meditation Foundations",
                  description:
                    "Simple, repeatable techniques—breath, body scan, and attention training for daily life.",
                  content: (
                    <div className="relative h-64 w-full overflow-hidden rounded-2xl">
                      <Image
                        src="/images/product-3.png"
                        alt="Meditation practice"
                        fill
                        className="object-cover"
                      />
                    </div>
                  ),
                },
              ]}
            />
          </div>
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <TestimonialsGrid
          headline="A calmer week starts here."
          subheadline="Members describe ZenFlow as their reset button—quiet, premium, and deeply effective."
          testimonials={[
            {
              quote:
                "The studio feels like stepping into a sanctuary. The pacing is perfect—strong without being frantic.",
              name: "Aiko M.",
              title: "Member • Vinyasa + Meditation",
              avatarUrl: "/images/product-1.png"
            },
            {
              quote:
                "Restorative nights have changed my sleep. The cues are precise and the room is beautifully minimal.",
              name: "Jordan K.",
              title: "Member • Restorative",
              avatarUrl: "/images/product-2.png"
            },
            {
              quote:
                "I came for flexibility, stayed for the calm. The meditation foundations are practical and grounding.",
              name: "Sam R.",
              title: "Member • Foundations",
              avatarUrl: "/images/product-3.png"
            }
          ]}
        />
      </motion.div>

      {/* FAQ */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <FAQAccordion
          headline="Frequently asked questions"
          subheadline="Simple answers—so you can arrive with ease."
          items={[
            {
              question: "Do I need experience to start?",
              answer:
                "Not at all. We offer beginner-friendly options and clear alignment cues. Start with Foundations or Restorative.",
            },
            {
              question: "What should I bring?",
              answer:
                "Wear comfortable clothing. Mats and props are available in-studio; you’re welcome to bring your own.",
            },
            {
              question: "How do bookings work?",
              answer:
                "Book via the contact form and we’ll confirm your class and membership details. You can also request a private session.",
            },
            {
              question: "Is meditation religious?",
              answer:
                "No—our meditation is secular and technique-based, focused on breath, attention, and stress reduction.",
            },
          ]}
        />
      </motion.div>

      {/* CTA (mandatory component) */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <CTAGlass
          headline="Ready to book your first class?"
          description="Tell us your goals and preferred times—we’ll recommend the best starting point."
          ctaLabel="Book a Class"
          ctaHref="/contact"
          secondaryCtaLabel="Explore Pricing"
          secondaryCtaHref="/pricing"
        />
      </motion.div>
    </main>
  );
}
