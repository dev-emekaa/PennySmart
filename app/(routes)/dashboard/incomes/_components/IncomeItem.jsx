import { NairaFormat } from "@/utils";
import Link from "next/link";
import React from "react";
import IncomeButtons from "./IncomeButtons";

function IncomeItem({ income, refreshData }) {
  const calculateProgressPerc = () => {
    const perc = (income.totalSpend / income.amount) * 100;
    return perc > 100 ? 100 : perc.toFixed(2);
  };
  return (
    <div
      className="flex flex-col gap-2 p-4 border rounded-2xl
    hover:shadow-md cursor-pointer min-h-[140px]"
    >
      <div className="flex gap-2 items-center justify-between">
        <div className="flex gap-2 items-center">
          <h2
            className="text-2xl p-2 px-3
              bg-slate-100 rounded-full 
              "
          >
            {income?.icon}
          </h2>
          <div>
            <h2 className="font-bold">{income.name}</h2>
          </div>
        </div>
        <h2 className="font-bold text-primary text-base">
          {" "}
          ${(income.amount)}
        </h2>
      </div>
      <IncomeButtons incomeInfo={income} refreshData={refreshData} />
    </div>
  );
}

export default IncomeItem;
