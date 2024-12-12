import Image from "next/image";
import { ChevronRight } from "lucide-react";

import lights from "@/assets/lights.png";
import features from "@/assets/features-product.png";

export default function Features() {
  return (
    <section className="pt-28  px-6 bg-[#fbfcfe] flex flex-col items-center overflow-x-hidden border-b border-light/20">
      <h1 className="flex gap-1 items-center font-bold text-2xl sm:text-4xl">
        <Image src={lights} alt="lights icon" className="size-20 p-2" />
        <span>Simply Powerful</span>
      </h1>

      <p className="text-center text-lg sm:text-xl text-primary px-6 mt-4 max-w-[500px]">
        Things makes it easy. Within the hour, you’ll have everything off your
        mind and neatly organized – from routine tasks to your biggest life
        goals – and you can start focusing on what matters today.
      </p>

      <button className="mt-3 mb-10 flex items-center hover:bg-blue-200/60 font-semibold text-lg sm:text-xl text-[#5c9cf5] p-1 rounded-md transition-colors">
        <span>See features</span>
        <ChevronRight strokeWidth={2.5} />
      </button>

      <Image src={features} alt="features" />
    </section>
  );
}
