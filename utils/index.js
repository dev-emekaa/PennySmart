/**
 * Formats a number into a human-readable string with suffixes (e.g., 1K, 1.5M).
 * @param {number} num - The number to format.
 * @returns {string} - The formatted number as a string.
 */

export const formatNumber = (num) => {
  if (num >= 1e9) {
    return (num / 1e9).toFixed(1).replace(/\.0$/, "") + "B";
  }
  if (num >= 1e6) {
    return (num / 1e6).toFixed(1).replace(/\.0$/, "") + "M";
  }
  if (num >= 1e3) {
    return (num / 1e3).toFixed(1).replace(/\.0$/, "") + "K";
  }
  return num.toString();
};

// make a number have naira sign

export const NairaFormat = (num) => {
  const formatter = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  return formatter.format(num);
};

import {
  LayoutGrid,
  PiggyBank,
  ReceiptText,
  ShieldCheck,
  CircleDollarSign,
  TrendingUp,
  TrendingDownIcon,
} from "lucide-react";

//dashboard menu link

export const menuList = [
  {
    id: 1,
    name: "Dashboard",
    icon: LayoutGrid,
    path: "/dashboard",
  },
  {
    id: 2,
    name: "Incomes",
    icon: CircleDollarSign,
    path: "/dashboard/incomes",
  },
  {
    id: 2,
    name: "Budgets",
    icon: PiggyBank,
    path: "/dashboard/budgets",
  },
  {
    id: 3,
    name: "Expenses",
    icon: ReceiptText,
    path: "/dashboard/expenses",
  },
];

export const landingNavLinks = [
  { href: "#home", label: "Home" },
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export const faqData = [
  {
    sn: 1,
    question: "How does PennySmart work?",
    answer:
      "PennySmart uses artificial intelligence to analyze your spending habits and provide personalized insights and advice. It can help you track your expenses, create a budget, and make informed financial decisions. PennySmart is designed to be easy to use and understand, with a clean, intuitive interface that makes it easy to see your financial picture at a glance.",
  },
  {
    sn: 2,
    question: "Is PennySmart really free?",
    answer: "Yes, PennySmart at the moment is 100% free. ",
  },
  {
    sn: 3,
    question: "Is PennySmart Safe?",
    answer:
      "Yes. PennySmart is a secure platform and your financial data is prevented from unauthorized access and well protected. You have absolutely nothing to worry about. ",
  },
  {
    sn: 4,
    question: "Is PennySmart easy to use? ",
    answer:
      "Yes. PennySmart is designed to be easy to use and understand, with a clean, intuitive interface that makes it easy to see your financial picture at a glance.",
  },
  {
    sn: 5,
    question: "Is PennySmart OpenSource? ",
    answer:
      "Yes. PennySmart is open source. This means that you can check out the code and potentially contribute to the project.  ",
  },
];
