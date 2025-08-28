import Image from "next/image";

export default function ValueSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <article className="rounded-2xl border border-white/20 bg-white/5 p-8 md:p-10 grid items-center gap-8 md:grid-cols-2">
        <header className="order-2 md:order-1">
          <h2 className="text-3xl md:text-4xl font-bold">
            Make time your metric
          </h2>
          <p className="mt-4 max-w-prose leading-relaxed text-white/80">
            Once you see prices as hours, you can prioritise with confidence.
            Small changes add up across a month or a year.
          </p>
        </header>

        <figure className="order-1 md:order-2">
          <Image
            src="/valueImage-section.png"
            alt="Calculator showing time cost for a purchase"
            width={800}
            height={534}
            sizes="(max-width: 768px) 100vw, 600px"
            className="w-full h-auto rounded-xl shadow-lg ring-1 ring-white/20"
          />
          <figcaption className="sr-only">
            Example of converting a purchase price into hours of work.
          </figcaption>
        </figure>
      </article>
    </section>
  );
}
