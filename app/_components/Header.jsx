"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

const Header = () => {
  return (
    <div className="p-5 flex justify-between items-center border shadow-sm">
      <div className="flex flex-row items-center ">
        <Image src={"/piggybank.svg"} alt="logo" width={40} height={25} />
        <span className="text-green-2  font-bold text-xl">PennySmart</span>
      </div>

      <div className="flex gap-3  items-center">
        <Link href={"/sign-in"}>
          <Button variant="outline" className="rounded-full">
            Sign In
          </Button>
        </Link>
        <Link href={"/sign-up"}>
          <Button className="rounded-full">Get Started</Button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
