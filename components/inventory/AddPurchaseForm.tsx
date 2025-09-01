"use client";

import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar, PoundSterling, Tag } from "lucide-react";

export function AddPurchaseForm() {
  const [highlight, setHighlight] = useState(false);
  const [newItem, setNewItem] = useState({ name: "", cost: "", date: "" });

  useEffect(() => {
    const purchaseAmountUrl =
      typeof window !== "undefined"
        ? sessionStorage.getItem("purchaseAmount")
        : null;

    if (purchaseAmountUrl) {
      setNewItem((prev) => ({ ...prev, cost: purchaseAmountUrl }));
      setHighlight(true);
      sessionStorage.removeItem("purchaseAmount");
    }
  }, []);

  return (
    <Card className="bg-white/5 border-white/10">
      <CardHeader>
        <CardTitle>Add Purchase</CardTitle>
        <CardDescription>Save a purchase to your inventory.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="purchase-name">Name of purchase</Label>
          <div className="relative">
            <Tag className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              id="purchase-name"
              type="text"
              placeholder="Costa Coffee"
              className="pl-10"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="purchase-cost">Cost of purchase</Label>
          <div className="relative">
            <PoundSterling className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              value={newItem.cost}
              id="purchase-cost"
              type="number"
              inputMode="decimal"
              placeholder="4.75"
              className={`pl-10 ${highlight ? "border-2 border-primary" : ""}`}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="purchase-date">Date of purchase</Label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              value={newItem.date}
              id="purchase-date"
              type="date"
              className="pl-10"
            />
          </div>
        </div>

        <div className="pt-2">
          <button
            type="button"
            onClick={(e) => {}}
            className="w-full rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:opacity-90"
          >
            Save to Inventory
          </button>
        </div>
      </CardContent>
    </Card>
  );
}

export default AddPurchaseForm;
