import {formatNumber} from "@/utils";
import getFinancialAdvice from "@/utils/getFinancialAdvice";
import {
  PiggyBank,
  ReceiptText,
  Wallet,
  Sparkles,
  CircleDollarSign,
} from "lucide-react";
import React, { useEffect, useState } from "react";

function CardInfo({ budgetList, incomeList }) {
  const [totalBudget, setTotalBudget] = useState(0);
  const [totalSpend, setTotalSpend] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);
  const [financialAdvice, setFinancialAdvice] = useState("");

  useEffect(() => {
    if (budgetList.length > 0 || incomeList.length > 0) {
      CalculateCardInfo();
    }
  }, [budgetList, incomeList]);

  // useEffect(() => {
  //   if (totalBudget > 0 || totalIncome > 0 || totalSpend > 0) {
  //     const fetchFinancialAdvice = async () => {
  //       const advice = await getFinancialAdvice(
  //         totalBudget,
  //         totalIncome,
  //         totalSpend
  //       );
  //       setFinancialAdvice(advice);
  //     };

  //     fetchFinancialAdvice();
  //   }

  // }, [totalBudget, totalIncome, totalSpend]);

  const CalculateCardInfo = () => {
    console.log(budgetList);
    let totalBudget_ = 0;
    let totalSpend_ = 0;
    let totalIncome_ = 0;

    budgetList.forEach((element) => {
      totalBudget_ = totalBudget_ + Number(element.amount);
      totalSpend_ = totalSpend_ + element.totalSpend;
    });

    incomeList.forEach((element) => {
      totalIncome_ = totalIncome_ + element.totalAmount;
    });

    setTotalIncome(totalIncome_);
    setTotalBudget(totalBudget_);
    setTotalSpend(totalSpend_);
  };



  const cardData = [
    {
      title: "Total Budget",
      value: formatNumber(totalBudget),
      icon: <PiggyBank size={24} className="bg-green-2 p-3 h-12 w-12 rounded-full text-white" />,
    },
    {
      title: "Total Expenses",
      value: formatNumber(totalSpend),
      icon: <ReceiptText size={24} className="bg-green-2 p-3 h-12 w-12 rounded-full text-white" />,
    },
    {
      title: "No of Budget",
      value: budgetList?.length,
      icon: <Wallet size={24} className="bg-green-2 p-3 h-12 w-12 rounded-full text-white" />,
    },
    {
      title: "Total Monthly Income",
      value: formatNumber(totalIncome),
      icon: <CircleDollarSign size={24} className="bg-green-2 p-3 h-12 w-12 rounded-full text-white" />,
    },
  ];
  return (
    <div>
      {budgetList?.length > 0 ? (
        <div>
          <div className="p-7 border mt-4 -mb-1 rounded-2xl flex items-center justify-between">
            <div className={!financialAdvice && "hidden"}>
              <div className="flex mb-2 flex-row space-x-1 items-center ">
                <h2 className="text-md "> PennySmart AI</h2>
                <Sparkles className="rounded-full text-white w-10 h-10 p-2 bg-gradient-to-r  from-pink-500   via-red-500   to-yellow-500   background-animate" />
              </div>
              <h2 className="font-light text-md">
                {financialAdvice || "Loading financial advice..."}
              </h2>
            </div>
          </div>

          <div className="mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {cardData.map((data) => (
              <div key={data.title} className="p-7 border rounded-2xl flex items-center justify-between">
                <div>
                  <h2 className="text-sm">{data.title}</h2>
                  <h2 className="font-bold text-2xl">
                   {data.title !== "No of Budget" ? "₦" : ""} {data.value}
                  </h2>
                </div>
                {data.icon}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[1, 2, 3].map((item, index) => (
            <div
              className="h-[110px] w-full bg-slate-200 animate-pulse rounded-lg"
              key={index}
            ></div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CardInfo;
