"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function PurchaseHistory() {
  return (
    <Card className="bg-white/5 border-white/10">
      <CardHeader>
        <CardTitle>Purchase History</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs uppercase tracking-wide text-muted-foreground">
            <span>Date</span>
            <span>Item</span>
            <span>Price</span>
          </div>
          <div className="h-px bg-white/10" />
          <div className="grid grid-cols-3 gap-2 text-sm">
            <span className="opacity-70">—</span>
            <span className="opacity-70">No entries yet</span>
            <span className="opacity-70 text-right">—</span>
          </div>
        </div>

        <div className="pt-2 border-t border-white/10">
          <div className="flex justify-between items-center">
            <span className="font-medium">Total cost of purchases:</span>
            <span className="opacity-70">—</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
