"use client";

import { useRouter } from "next/navigation";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "@/lib/firebase";

export default function SignInPage() {
  const router = useRouter();

  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      router.push("/calculator");
    } catch (error) {
      console.error("Google sign-in error:", error);
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4">
      <button
        onClick={handleGoogleSignIn}
        className="bg-primary text-white px-6 py-2 rounded-md hover:bg-blue-700 cursor-pointer"
      >
        Sign in with Google
      </button>
    </main>
  );
}
