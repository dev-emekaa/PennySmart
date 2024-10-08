import { Send, HandHeart } from "lucide-react";
import React from "react";

const Pricing = () => {
  return (
    <section
      className="flex size-full flex-row gap-1 justify-center"
      id="pricing"
    >
      <div className="  flex flex-col gap-4  xs:gap-6 justify-center items-center align-center text-sm lg:text-xl text-gray-2 text-center ">
        <h2 className=" font-semibold text-white pr-2 uppercase">
          What's the fee?{" "}
        </h2>
        <div className="flex flex-row max-xs:text-[10px]">
          <span className=" text-gray-800 ">THERE'S NONE. PennySmart IS 100% FREE</span>
          <HandHeart className="size-6 max-xs:size-4 text-white" />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
