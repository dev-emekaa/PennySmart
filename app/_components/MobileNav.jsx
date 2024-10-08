"use client";

import React, { useEffect, useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import Image from "next/image";
import Link from "next/link";
import { landingNavLinks } from "@/utils";
import { Button } from "@/components/ui/button";

const MobileNav = () => {
  const [currentHash, setCurrentHash] = useState("");

  useEffect(() => {
    setCurrentHash(window.location.hash); // Get the current window hash location
  }, []);

  const handleLinkClick = (hash) => {
    setCurrentHash(hash);
  };

  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <Image
            src="/hamburger.svg"
            width={36}
            height={36}
            alt="Hamburger icon"
            className="cursor-pointer sm:hidden"
          />
        </SheetTrigger>
        <SheetContent side="right" className="border-none bg-white sm:hidden">
          <div className="h-screen p-5 border shadow-sm flex flex-col">
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
              {landingNavLinks.map((link) => {
                //check if window hash is equal to link href
                const isActive = currentHash === link.href;

                return (
                  <SheetClose asChild key={link.label}>
                    <Link
                      href={link.href}
                      onClick={() => handleLinkClick(link.href)}
                    >
                      <h2
                        className={`flex gap-2 items-center
                    text-gray-500 font-medium
                    mb-2
                    p-4 cursor-pointer rounded-full
                    hover:text-primary hover:bg-green-100
                   
                    ${isActive && "bg-green-100"}`}
                      >
                        {link.label}
                      </h2>
                    </Link>
                  </SheetClose>
                );
              })}
            </div>
            <div
              className="w-full  p-5 flex flex-col justify-self-end gap-2
            items-center"
            >
              <Link href={"/sign-in"} className=" w-full">
                <Button className="w-full  rounded-full px-8 bg-white text-black border outline-none hover:bg-gray-200 ease-in duration-300">
                  Sign In
                </Button>
              </Link>
              <Link href={"/sign-up"} className=" w-full">
                <Button className="w-full rounded-full hover:bg-green-2 ease-in duration-300">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
