"use client";

import { useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "@/lib/firebase";

export function Greeting() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, setUser);
    return () => unsubscribe();
  }, []);

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
  };

  if (!user) return null;

  return (
    <p className="text-lg font-medium text-accent">
      {getGreeting()},{" "}
      <span className="capitalize">
        {user.displayName?.split(" ")[0] || "Hi there"}.
      </span>
    </p>
  );
}
