import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-radial from-primary/20 via-transparent to-transparent"
        aria-hidden
      />
      <div className="mx-auto max-w-6xl px-4 py-20 sm:py-28 grid gap-10 sm:grid-cols-2 items-center">
        <div>
          <h1 className="text-4xl sm:text-6xl font-bold leading-tight">
            Convert{" "}
            <span
              className="text-primary"
              style={{ textShadow: "0 0 10px rgba(255, 255, 255, 0.3)" }}
            >
              prices
            </span>{" "}
            into{" "}
            <span
              className="text-primary"
              style={{ textShadow: "0 0 10px rgba(255, 255, 255, 0.3)" }}
            >
              hours
            </span>
            .
          </h1>
          <p className="mt-4 text-base/relaxed text-white/80">
            Your salary-to-time calculator that shows how long you work for
            every purchase. Track an inventory of what you buy and make better
            decisions over time.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link
              href="#signup"
              className="rounded-md border border-white/15 px-5 py-3 hover:bg-white/5 cursor-pointer text-center"
            >
              Create a free account
            </Link>
          </div>
        </div>
        <Image
          src="/heroImage-section.png"
          alt="Preview of the time cost calculator"
          width={600}
          height={400}
          className="rounded-xl border border-white/50 bg-white/5 shadow-xl shadow-primary/70"
          priority
        />
      </div>
    </section>
  );
}
