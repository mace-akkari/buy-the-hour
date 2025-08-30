"use client";

import { Greeting } from "@/components/Greeting";
import { LogoutButton } from "@/components/auth/LogoutButton";
import { PurchaseTabs } from "@/components/inventory/PurchaseTab";

export default function InventoryPage() {
  return (
    <main className="min-h-screen px-4 py-8 bg-background text-text">
      <div className="max-w-2xl mx-auto space-y-6">
        <Greeting />
        <LogoutButton />

        <header className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-primary">Inventory</h1>
          <p className="text-sm text-muted-foreground">
            Add purchases and review your saved history.
          </p>
        </header>

        <PurchaseTabs />
      </div>
    </main>
  );
}
