import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";
import MobileSideNav from "./MobileSideNav";

function DashboardHeader() {
  return (
    <div className="p-5 shadow-sm border-b flex justify-between">
      <div className="flex flex-row items-center md:hidden">
        <Image src={"/piggybank2.svg"} alt="logo" width={40} height={25} />
        <span className="text-green-2  font-bold text-xl">PennySmart</span>
      </div>
      <div className="flex w-full gap-3 justify-end">
        <UserButton />
        <MobileSideNav />
      </div>
    </div>
  );
}

export default DashboardHeader;
