"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { landingNavLinks } from "@/utils";
import MobileNav from "./MobileNav";
import { cn } from "@/lib/utils";

const Header = () => {
  const [currentHash, setCurrentHash] = useState("");

  useEffect(() => {
    setCurrentHash(window.location.hash); // Get the current window hash location
  }, []);

  const handleLinkClick = (hash) => {
    setCurrentHash(hash);
  };

  return (
    <nav className="fixed z-50 w-full bg-white p-5 flex justify-between items-center border shadow-sm">
      <div className="flex flex-row items-center ">
        <Image src={"/piggybank2.svg"} alt="logo" width={40} height={25} />
        <span className="text-green-2  font-bold text-xl">PennySmart</span>
      </div>
      <ul className=" flex flex-center gap-3 max-sm:hidden">
        {landingNavLinks.map((link) => {
          //check if window hash is equal to link href
          const isActive = currentHash === link.href;

          return (
            <li
              key={link.label}
              className="hover:text-green-2 duration-500 ease-in"
            >
              <Link
                href={link.href}
                className={`text-base text-gray-1 font-normal ${
                  isActive && "text-green-2"
                }`}
                onClick={() => handleLinkClick(link.href)}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="flex gap-3  items-center">
        <Link href={"/sign-in"} className=" max-sm:hidden">
          <Button variant="outline" className="rounded-full">
            Sign In
          </Button>
        </Link>
        <Link href={"/sign-up"} className=" max-sm:hidden">
          <Button className="rounded-full hover:bg-green-2 ease-in duration-300">
            Get Started
          </Button>
        </Link>

        <MobileNav />
      </div>
    </nav>
  );
};

export default Header;
