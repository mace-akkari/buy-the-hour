import Link from "next/link";
import SignInButton from "@/components/auth/SignInButton";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur">
      <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link
          href="/"
          aria-label="Go to homepage"
          className="flex items-center gap-2"
        >
          <span
            className="inline-block h-8 w-8 rounded-md bg-primary/20"
            aria-hidden
          />
          <span className="font-semibold">Buy the Hour</span>
        </Link>
        <div className="flex items-center gap-3">
          <SignInButton />
        </div>
      </nav>
    </header>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <p className="text-center text-white/70 text-sm">
          © <time dateTime={String(year)}>{year}</time> Buy the Hour
        </p>
      </div>
    </footer>
  );
}
