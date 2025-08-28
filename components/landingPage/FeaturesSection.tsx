interface FeatureProps {
  title: string;
  text: string;
}

function Feature({ title, text }: FeatureProps) {
  return (
    <article className="rounded-xl border border-white/10 bg-white/5 p-6">
      <h3 className="text-xl font-semibold text-primary">{title}</h3>
      <p className="mt-2 text-white/80 text-lg">{text}</p>
    </article>
  );
}

const features: FeatureProps[] = [
  {
    title: "See true cost",
    text: "Convert any price into hours at your pay rate so decisions are simpler.",
  },
  {
    title: "Build purchase history",
    text: "Add items to your inventory so you can review purchases.",
  },
  {
    title: "Upgrade when ready",
    text: "Free calculator once signed in. Paid plan unlocks storage, export and more.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <Feature key={feature.title} {...feature} />
        ))}
      </div>
    </section>
  );
}
