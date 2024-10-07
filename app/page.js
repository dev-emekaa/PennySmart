"use client";

import { useRouter } from "next/navigation";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import { useUser } from "@clerk/nextjs";
import React, { useEffect } from "react";

const Home = () => {
  
  const router = useRouter();
  const { user, isSignedIn } = useUser();

  //redirect user to dashboard if signed in
  useEffect(() => {
    if (user && isSignedIn) {
      return router.push("/dashboard");
    }
  }, [user, isSignedIn]);

  return (
    <div>
      <Header />
      <Hero />
    </div>
  );
};

export default Home;
