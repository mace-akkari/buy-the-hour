"use client";

import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebase";

export function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/sign-in");
    // router.push("/sign-up");
  };

  return (
    <button
      onClick={handleLogout}
      className="text-lg text-muted-foreground hover:text-accent transition"
    >
      Log out
    </button>
  );
}
