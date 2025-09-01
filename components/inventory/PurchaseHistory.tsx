"use client";

import { useEffect, useState } from "react";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Purchase = { id: string; name: string; cost: number; date: string };

export function PurchaseHistory() {
  const [items, setItems] = useState<Purchase[]>([]);

  // read purchase history from firestore and keep it updated

  useEffect(() => {
    // define a query to get purchase history ordered by date
    const purchaseQuery = query(
      collection(db, "userPurchaseHistory"),
      orderBy("date")
    );

    // start reading data and updates the list whenever it changes
    const unsubscribe = onSnapshot(purchaseQuery, (snapshot) => {
      setItems(
        snapshot.docs.map((document) => ({
          id: document.id,
          ...(document.data() as Omit<Purchase, "id">),
        }))
      );
    });

    // stops the reading data, closes the connection
    return () => unsubscribe();
  }, []);

  return (
    <Card className="bg-white/5 border-white/10">
      <CardHeader>
        <CardTitle>Purchase History</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full text-sm tabular-nums">
            <thead className="text-xs uppercase text-muted-foreground border-b border-white/10 bg-white/5">
              <tr>
                <th className="py-3 pl-4 pr-2 text-left">Date</th>
                <th className="py-3 px-2 text-left">Item</th>
                <th className="py-3 pr-4 pl-2 text-right">Price</th>
              </tr>
            </thead>
            <tbody className="[&>tr:nth-child(even)]:bg-white/5">
              {items.length === 0 ? (
                <tr>
                  <td colSpan={3} className="py-4 px-4 text-center opacity-70">
                    No entries yet
                  </td>
                </tr>
              ) : (
                items.map((purchase) => (
                  <tr key={purchase.id} className="hover:bg-white/10">
                    <td className="py-3 pl-4 pr-2 opacity-80">
                      {new Date(purchase.date).toLocaleDateString("en-GB")}
                    </td>
                    <td className="py-3 px-2 opacity-80">
                      {purchase.name.length > 20
                        ? purchase.name.slice(0, 20) + "…"
                        : purchase.name}
                    </td>
                    <td className="py-3 pr-4 pl-2 text-right opacity-80">
                      £{Number(purchase.cost).toFixed(2)}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
            <tfoot className="border-t border-white/10">
              <tr>
                <td className="py-3 pl-4 pr-2 font-medium" colSpan={2}>
                  Total cost of purchases:
                </td>
                <td className="py-3 pr-4 pl-2 text-right font-semibold">
                  £
                  {items
                    .reduce((total, purchase) => {
                      return total + Number(purchase.cost);
                    }, 0)
                    .toFixed(2)}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}
