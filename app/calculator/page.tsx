import { CalculatorTabs } from "@/components/Calculator/CalculatorTabs";

export default function CalculatorPage() {
  return (
    <main className="min-h-screen px-4 py-8 bg-background text-text">
      <div className="max-w-2xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-primary text-center">
          Time Cost Calculator
        </h1>
        <CalculatorTabs />
      </div>
    </main>
  );
}
