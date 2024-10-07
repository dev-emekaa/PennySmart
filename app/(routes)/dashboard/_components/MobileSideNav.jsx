"use client";

import React, { useEffect } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { UserButton } from "@clerk/nextjs";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { menuList } from "@/utils";

const MobileSideNav = () => {
  const path = usePathname();

  useEffect(() => {
    console.log(path);
  }, [path]);

  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <Image
            src="/hamburger.svg"
            width={36}
            height={36}
            alt="Hamburger icon"
            className="cursor-pointer md:hidden"
          />
        </SheetTrigger>
        <SheetContent side="right" className="border-none bg-white">
          <div className="h-screen p-5 border shadow-sm">
            <div className="flex flex-row items-center">
              <Image
                src={"./piggybank2.svg"}
                alt="logo"
                width={40}
                height={25}
              />
              <span className="text-green-2 font-bold text-xl">PennySmart</span>
            </div>
            <div className="mt-5">
              {menuList.map((menu, index) => (
                <Link href={menu.path} key={index}>
                  <h2
                    className={`flex gap-2 items-center
                    text-gray-500 font-medium
                    mb-2
                    p-4 cursor-pointer rounded-full
                    hover:text-primary hover:bg-green-100
                    ${path == menu.path && "text-primary bg-green-100"}
                    `}
                  >
                    <menu.icon />
                    {menu.name}
                  </h2>
                </Link>
              ))}
            </div>
            <div
              className="fixed bottom-10 p-5 flex gap-2
            items-center"
            >
              <UserButton />
              Profile
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileSideNav;
