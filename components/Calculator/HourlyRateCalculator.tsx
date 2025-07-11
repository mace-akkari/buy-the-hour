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
import { PoundSterling, Clock } from "lucide-react";

export function HourlyRateCalculator({
  monthlySalary,
  workingHoursPerWeek,
  setMonthlySalary,
  setWorkingHoursPerWeek,
  hourlyRate,
  yearlyNetSalary,
  totalWorkingHoursPerYear,
}: {
  monthlySalary: number;
  workingHoursPerWeek: number;
  setMonthlySalary: (value: number) => void;
  setWorkingHoursPerWeek: (value: number) => void;
  hourlyRate: number;
  yearlyNetSalary: number;
  totalWorkingHoursPerYear: number;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Calculate Your Hourly Rate</CardTitle>
        <CardDescription>
          Enter your monthly take-home pay and weekly working hours to see your
          actual hourly rate after tax.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="monthly-salary">Monthly Take-Home Pay (£)</Label>
          <div className="relative">
            <PoundSterling className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              id="monthly-salary"
              type="number"
              placeholder="2500"
              className="pl-10"
              value={monthlySalary || ""}
              onChange={(e) =>
                setMonthlySalary(Number.parseFloat(e.target.value) || 0)
              }
            />
          </div>
          <p className="text-xs text-muted-foreground">
            Your take-home pay after taxes and deductions
          </p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="working-hours">Working Hours Per Week</Label>
          <div className="relative">
            <Clock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              id="working-hours"
              type="number"
              placeholder="37"
              className="pl-10"
              value={workingHoursPerWeek || ""}
              onChange={(e) =>
                setWorkingHoursPerWeek(Number.parseFloat(e.target.value) || 0)
              }
            />
          </div>
        </div>

        <div className="pt-4 border-t">
          <div className="flex justify-between items-center">
            <span className="font-medium">Your Hourly Rate:</span>
            <span className="text-xl font-bold">£{hourlyRate.toFixed(2)}</span>
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            Based on £{monthlySalary.toFixed(2)} monthly (£
            {yearlyNetSalary.toFixed(2)} yearly) and {totalWorkingHoursPerYear}
            working hours per year
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
