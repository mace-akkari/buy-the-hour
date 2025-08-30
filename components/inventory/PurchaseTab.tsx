"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AddPurchaseForm } from "@/components/inventory/AddPurchaseForm";
import { PurchaseHistory } from "@/components/inventory/PurchaseHistory";

export function PurchaseTabs() {
  return (
    <Tabs defaultValue="add" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="add">Add purchase</TabsTrigger>
        <TabsTrigger value="history">Purchase History</TabsTrigger>
      </TabsList>

      <TabsContent value="add" className="mt-4">
        <AddPurchaseForm />
      </TabsContent>

      <TabsContent value="history" className="mt-4">
        <PurchaseHistory />
      </TabsContent>
    </Tabs>
  );
}
