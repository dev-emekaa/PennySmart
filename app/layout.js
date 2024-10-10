import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "PennySmart",
  description: "Take control of your finances with PennySmart. AI Personal Finance Assistant with Expense Tracking, Budget Planning, and Personalised Financial Insights.",
  icons: {
    icon: "/piggybank2.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ClerkProvider
        publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
        signOutRedirectUrl="/"
        signInUrl="/sign-in"
        signUpUrl="/sign-up"
      >
        <body className={`${outfit.className} scroll-smooth`}>
          <Toaster />
          {children}
        </body>
      </ClerkProvider>
    </html>
  );
}
