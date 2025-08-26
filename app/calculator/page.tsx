"use client";

import { CalculatorTabs } from "@/components/Calculator/CalculatorTabs";
import { Greeting } from "@/components/Greeting";
import { LogoutButton } from "@/components/LogoutButton";

export default function CalculatorPage() {
  return (
    <main className="min-h-screen px-4 py-8 bg-background text-text">
      <div className="max-w-2xl mx-auto space-y-6">
        <Greeting />
        <LogoutButton />

        <h1 className="text-3xl font-bold text-primary text-center">
          Time Cost Calculator
        </h1>
        <CalculatorTabs />
      </div>
    </main>
  );
}
