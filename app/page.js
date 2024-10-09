"use client";

import { useRouter } from "next/navigation";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import { useUser } from "@clerk/nextjs";
import React, { useEffect } from "react";
import { toast } from "sonner";
import Footer from "./_components/Footer";
import Pricing from "./_components/Pricing";
import Faq from "./_components/Faq";
import Features from "./_components/Features";

const Home = () => {
  const router = useRouter();
  const { user, isSignedIn } = useUser();

  //redirect user to dashboard if signed in
  useEffect(() => {
    if (user && isSignedIn) {
      toast.success(`Welcome ${user.firstName}`, 500);
      return router.push("/dashboard");
    }
  }, [user, isSignedIn]);

  return (
    <main className="relative p-0 m-0">
      <Header />

      <section className=" sm:px-16 px-8 py-12 bg-white" id="home">
        <Hero />
      </section>

      <section className="sm:px-16 px-8 py-12 bg-white" id="features">
        <Features />
      </section>

      <section className="sm:px-16 px-8 py-16 bg-green-2" >
        <Pricing />
      </section>

      <section className="sm:px-16 px-8 py-12 bg-gray-2" id="faq">
        <Faq />
      </section>
      <section className="sm:px-16 px-8 py-5 bg-green-2" id="footer">
        <Footer />
      </section>
    </main>
  );
};

export default Home;
