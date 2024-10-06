import React from "react";
import { db } from "@/utils/dbConfig";
import { Incomes } from "@/utils/schema";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Pen, PenBox, Trash } from "lucide-react";
import { eq } from "drizzle-orm";

const IncomeButtons = ({ incomeInfo, refreshData }) => {
  const deleteIncome = async () => {
    const deleteIncomeResult = await db
      .delete(Incomes)
      .where(eq(Incomes.id, incomeInfo.id))
      .returning();

    if (deleteIncomeResult) {
      toast("Income Deleted !");
      refreshData();
    }
  };

  return (
    <div className="flex gap-2 w-full h-full items-end max-sm:pl-6 justify-end">
      {/* <EditBudget incomeInfo={incomeInfo} refreshData={() => getBudgetInfo()} /> */}

      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button
            variant="outline"
            className=" flex gap-1.5 sm:gap-2 max-sm:py-1 max-sm:px-2 text-xs rounded-2xl text-[#e86f51] hover:bg-black hover:text-[#e86f51] w-fit"
          >
            <Trash className="w-4" /> Delete
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              current income and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={() => deleteIncome()}>
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default IncomeButtons;
