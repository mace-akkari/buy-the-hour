"use client";

import { useRouter } from "next/navigation";

function SavePurchaseButton() {
  const router = useRouter();

  function handleClick() {
    const input = document.getElementById(
      "purchase-amount"
    ) as HTMLInputElement | null;
    if (!input) return;
    const purchaseAmount = input.value.trim();
    if (!purchaseAmount) return;

    sessionStorage.setItem("purchaseAmount", purchaseAmount);
    router.push("/inventory?prefill=1");
  }

  return (
    <button
      type="button"
      className="rounded-md bg-primary px-4 py-2 font-semibold  text-white hover:opacity-90"
      onClick={handleClick}
    >
      Save purchase amount
    </button>
  );
}

export default SavePurchaseButton;
