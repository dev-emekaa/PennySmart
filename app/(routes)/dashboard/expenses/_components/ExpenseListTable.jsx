import { db } from "@/utils/dbConfig";
import { Expenses } from "@/utils/schema";
import { eq } from "drizzle-orm";
import { Trash } from "lucide-react";
import React from "react";
import { toast } from "sonner";
import loading from "../../loading";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";
import { NairaFormat } from "@/utils";

function ExpenseListTable({ expensesList, refreshData }) {
  const deleteExpense = async (expense) => {
    const result = await db
      .delete(Expenses)
      .where(eq(Expenses.id, expense.id))
      .returning();

    if (result) {
      toast("Expense Deleted!");
      refreshData();
    }
  };

  //Getting Total Amount of Expenses
  const totalAmount = expensesList.reduce((accumulator, expense) => {
    return accumulator + Number(expense.amount);
  }, 0);

  return (
    <>
      {expensesList ? (
        <Table>
          <TableCaption>A list of your latest expenses.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Name</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {expensesList.map((expense) => (
              <TableRow key={expense.name}>
                <TableCell className="font-medium">{expense.name}</TableCell>
                <TableCell>${(expense.amount)}</TableCell>
                <TableCell>{expense.createdAt}</TableCell>
                <TableCell className="text-red-500 text-right cursor-pointer">
                  <Dialog>
                    <DialogTrigger className="rounded-2xl border  px-4 py-2 text-[#e86f51]">
                      Delete
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Are you absolutely sure?</DialogTitle>
                        <DialogDescription>
                          This action cannot be undone. This will permanently
                          delete this expense from the Expense List.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="flex gap-2 py-2">
                        <Button
                          variant="outline"
                          className="rounded-2xl text-[#e86f51] hover:bg-black hover:text-[#e86f51] w-fit"
                          onClick={() => deleteExpense(expense)}
                        >
                          Delete!
                        </Button>
                        <DialogClose asChild>
                          <Button
                            variant="outline"
                            className="rounded-2xl text-green-1 hover:bg-black hover:text-green-1 w-fit"
                          >
                            Cancel
                          </Button>
                        </DialogClose>
                      </div>
                    </DialogContent>
                  </Dialog>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell className="text-right">${totalAmount}</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      ) : (
        <loader />
      )}
    </>
    // <div className="mt-3">
    //   <h2 className="font-bold text-lg">Latest Expenses</h2>
    //   <div className="grid grid-cols-4 rounded-tl-xl rounded-tr-xl bg-slate-200 p-2 mt-3">
    //     <h2 className="font-bold">Name</h2>
    //     <h2 className="font-bold">Amount</h2>
    //     <h2 className="font-bold">Date</h2>
    //     <h2 className="font-bold">Action</h2>
    //   </div>
    //   {expensesList.map((expenses, index) => (
    //     <div className="grid grid-cols-4 bg-slate-50 rounded-bl-xl rounded-br-xl p-2">
    //       <h2>{expenses.name}</h2>
    //       <h2>{expenses.amount}</h2>
    //       <h2>{expenses.createdAt}</h2>
    //       <h2
    //         onClick={() => deleteExpense(expenses)}
    //         className="text-red-500 cursor-pointer"
    //       >
    //         Delete
    //       </h2>
    //       {/* <h2>
    //         <Trash
    //           className="text-red-500 cursor-pointer"
    //           onClick={() => deleteExpense(expenses)}
    //         />
    //       </h2> */}
    //     </div>
    //   ))}
    // </div>
  );
}

export default ExpenseListTable;
