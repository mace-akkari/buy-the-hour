"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PoundSterling } from "lucide-react";

function formatTime(hours: number): string {
  const wholeHours = Math.floor(hours);
  const minutes = Math.round((hours - wholeHours) * 60);
  return `${wholeHours}h ${minutes}m`;
}

export function PurchaseCostCalculator({
  purchaseAmount,
  setPurchaseAmount,
  hourlyRate,
  monthlySalary,
}: {
  purchaseAmount: number;
  setPurchaseAmount: (value: number) => void;
  hourlyRate: number;
  monthlySalary: number;
}) {
  const hoursNeeded = purchaseAmount / hourlyRate;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Calculate Purchase Time Cost</CardTitle>
        <CardDescription>
          See how many working hours it takes to pay for your purchases
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="purchase-amount">Purchase Amount (£)</Label>
          <div className="relative">
            <PoundSterling className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              id="purchase-amount"
              type="number"
              placeholder="6.50"
              className="pl-10"
              value={purchaseAmount || ""}
              onChange={(e) =>
                setPurchaseAmount(Number.parseFloat(e.target.value) || 0)
              }
            />
          </div>
        </div>

        <div className="pt-4 border-t">
          <div className="flex justify-between items-center">
            <span className="font-medium">Time Cost:</span>
            <span className="text-xl font-bold">
              {hourlyRate > 0 ? formatTime(hoursNeeded) : "N/A"}
            </span>
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            This is how long you need to work to pay for this purchase
          </p>
        </div>

        {purchaseAmount > 0 && hourlyRate > 0 && (
          <div className="mt-4 p-4 bg-muted rounded-md">
            <p className="text-sm">
              A purchase of £{purchaseAmount.toFixed(2)} will cost you {""}
              {formatTime(hoursNeeded)} of work at an hourly rate of £
              {hourlyRate.toFixed(2)}, based on a monthly take-home pay of £
              {monthlySalary.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
