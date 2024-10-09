import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="w-full pt-12 lg:pt-32 xl:pt-48 ">
      <div className="container px-4 md:px-6 place-content-center w-full ">
        <div className="grid gap-6 md:grid-cols-[1fr_400px] lg:gap-12 lg:grid-cols-[1fr_500px] ">
          <Image
            src="/pennyHomePic.avif"
            width={550}
            height={550}
            alt="Piggy bank with coins in a desert landscape"
            className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full"
          />
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Get your finances under control with{" "}
                <span className="text-green-2">PennySmart</span>
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Track your expenses, create a budget, and get personalized tips
                to improve your financial health.
              </p>
            </div>
            <div className="flex gap-2 min-[400px]:flex-row">
              <Link href={"/sign-in"} className=" ">
                <Button
                  variant="outline"
                  className="rounded-full px-10 sm:px-16"
                >
                  Sign In
                </Button>
              </Link>
              <Link href={"/sign-up"} className=" ">
                <Button className="rounded-full hover:bg-green-2 ease-in duration-300 px-6 sm:px-10">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
