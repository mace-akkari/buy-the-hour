import SignInButton from "@/components/auth/SignInButton";

export default function SignUpSection() {
  return (
    <section id="signup" className="mx-auto max-w-6xl px-4 py-16">
      <div className="grid gap-10 lg:grid-cols-2 items-center">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold">
            Create your account
          </h2>
          <p className="text-xl mt-4 text-white/80">
            Create a{" "}
            <span className="underline decoration-primary/70 underline-offset-4 font-semibold">
              free
            </span>{" "}
            account{" "}
            <span className="underline decoration-primary/70 underline-offset-4 font-semibold">
              today
            </span>{" "}
            to start your journey.
          </p>
          <p className="mt-4 text-white/80">
            <span className="inline-block rounded bg-primary/20 px-2 py-1 text-xs font-bold text-primary">
              Coming Soon
            </span>
          </p>
          <ul className="mt-2 text-white/70 space-y-2">
            <li className="flex items-center gap-2">
              <span>🔓</span>
              Unlock purchase history
            </li>
            <li className="flex items-center gap-2">
              <span>🔓</span>
              Export your data
            </li>
            <li className="flex items-center gap-2">
              <span>🔓</span>
              More premium features with paid plan
            </li>
          </ul>
        </div>

        <div className="flex items-center lg:justify-end">
          <SignInButton
            label="Create your free account with Google"
            className="px-6 py-3"
          />
        </div>
      </div>
    </section>
  );
}
