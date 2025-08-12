import React from "react";
import { assets } from "../assets/frontend_assets/assets";
import { ArrowLeftRight, CircleCheckBig, Headset } from "lucide-react";

const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">
      <div>
        <ArrowLeftRight size={50} strokeWidth={2.25} className="w-12 m-auto mb-5 text-black"/>
        <p className="font-semibold">Easy Exchange Policy</p>
        <p className="text-gray-400">We offer hassle free exchange policy</p>
      </div>
      <div>
        <CircleCheckBig size={50} strokeWidth={2.25} className="w-12 m-auto mb-5 text-black"/>
        <p className="font-semibold">7 Day Return Policy</p>
        <p className="text-gray-400">We provide 7 days free return policy</p>
      </div>
      <div>
        <Headset size={50} strokeWidth={2.25} className="w-12 m-auto mb-5 text-black"/>
        <p className="font-semibold">Best Customer Support</p>
        <p className="text-gray-400">We provide 24/7 customer support</p>
      </div>
    </div>
  );
};

export default OurPolicy;
