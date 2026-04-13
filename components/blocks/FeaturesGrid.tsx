import React from 'react';

export type FeatureItem = {
  title: string;
  description?: string;
  icon?: React.ReactNode;
};

export interface FeaturesGridProps {
  title?: string;
  subtitle?: string;
  features?: FeatureItem[];
  className?: string;
}

const defaultFeatures: FeatureItem[] = [
  { title: 'Fast setup', description: 'Get started quickly with a clean baseline.' },
  { title: 'Responsive', description: 'Looks great on mobile, tablet, and desktop.' },
  { title: 'Accessible', description: 'Sensible defaults for readable UI.' },
];

export default function FeaturesGrid({
  title = 'Features',
  subtitle,
  features = defaultFeatures,
  className,
}: FeaturesGridProps) {
  return (
    <section className={className ?? ''}>
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-semibold tracking-tight">{title}</h2>
          {subtitle ? <p className="mt-2 text-muted-foreground">{subtitle}</p> : null}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, idx) => (
            <div
              key={idx}
              className="rounded-2xl border bg-background/60 p-6 shadow-sm"
            >
              {f.icon ? <div className="mb-4">{f.icon}</div> : null}
              <h3 className="text-lg font-medium">{f.title}</h3>
              {f.description ? (
                <p className="mt-2 text-sm text-muted-foreground">{f.description}</p>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
