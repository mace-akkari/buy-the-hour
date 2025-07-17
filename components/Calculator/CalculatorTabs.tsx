"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HourlyRateCalculator } from "@/components/Calculator/HourlyRateCalculator";
import { PurchaseCostCalculator } from "@/components/Calculator/PurchaseCostCalculator";

export function CalculatorTabs() {
  const [tabValue, setTabValue] = useState("calculator");
  const [monthlySalary, setMonthlySalary] = useState<number>(0);
  const [workingHoursPerWeek, setWorkingHoursPerWeek] = useState<number>(0);
  const [purchaseAmount, setPurchaseAmount] = useState<number>(0);

  const yearlyNetSalary = monthlySalary * 12;
  const totalWorkingHoursPerYear = workingHoursPerWeek * 52;
  const hourlyRate =
    totalWorkingHoursPerYear > 0
      ? yearlyNetSalary / totalWorkingHoursPerYear
      : 0;

  return (
    <Tabs value={tabValue} onValueChange={setTabValue} className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="calculator">Salary Calculator</TabsTrigger>
        <TabsTrigger value="purchase">Purchase Cost</TabsTrigger>
      </TabsList>

      <TabsContent value="calculator">
        <HourlyRateCalculator
          monthlySalary={monthlySalary}
          setMonthlySalary={setMonthlySalary}
          workingHoursPerWeek={workingHoursPerWeek}
          setWorkingHoursPerWeek={setWorkingHoursPerWeek}
          hourlyRate={hourlyRate}
          setTabValue={setTabValue}
        />
      </TabsContent>

      <TabsContent value="purchase">
        <PurchaseCostCalculator
          purchaseAmount={purchaseAmount}
          setPurchaseAmount={setPurchaseAmount}
          hourlyRate={hourlyRate}
          monthlySalary={monthlySalary}
          setTabValue={setTabValue}
        />
      </TabsContent>
    </Tabs>
  );
}
