import React from 'react';
import Link from 'next/link';

export interface CTAGlassProps {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  className?: string;
}

export default function CTAGlass({
  title = 'Ready to get started?',
  description = 'Reach out and we’ll respond as soon as possible.',
  primaryLabel = 'Contact',
  primaryHref = '/contact',
  secondaryLabel,
  secondaryHref = '/about',
  className,
}: CTAGlassProps) {
  return (
    <section className={className ?? ''}>
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="rounded-3xl border bg-background/60 p-8 shadow-sm backdrop-blur">
          <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
          <p className="mt-2 text-muted-foreground">{description}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={primaryHref}
              className="inline-flex items-center justify-center rounded-xl bg-foreground px-5 py-2.5 text-sm font-medium text-background"
            >
              {primaryLabel}
            </Link>
            {secondaryLabel ? (
              <Link
                href={secondaryHref}
                className="inline-flex items-center justify-center rounded-xl border px-5 py-2.5 text-sm font-medium"
              >
                {secondaryLabel}
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
