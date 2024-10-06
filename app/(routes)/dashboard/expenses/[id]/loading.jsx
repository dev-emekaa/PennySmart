import React from "react";
import { LoaderPinwheel } from "lucide-react";

function loading() {
  return (
    <div className=" h-[500px] w-full flex items-center justify-center">
      <LoaderPinwheel className=" w-24 h-24 animate-spin text-green-1" />
    </div>
  );
}

export default loading;
