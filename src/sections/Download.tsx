import Image from "next/image";
import fancysection from "@/assets/fancysection-icon.png";
import iphone from "@/assets/productcard-iphone-watch.svg";
import appstore from "@/assets/appstore-ios-black.svg";

export default function Download() {
  return (
    <section className="pt-28 mb-12 px-6 bg-[#fbfcfe] flex flex-col items-center overflow-x-hidden border-b border-light/20">
      <h1 className="flex gap-1 items-center font-bold text-4xl">
        <Image src={fancysection} alt="lights icon" className="size-20 p-2" />
        <span>Get Things, Get Done</span>
      </h1>

      <p className="text-center text-lg sm:text-xl text-primary px-6 mt-2 max-w-[500px]">
        Whatever it is you want to accomplish in life, Things can help you get
        there. Install the app today and see what you can do!
      </p>

      <div className="flex mt-10">
        <div className="flex flex-col gap-2 items-center justify-center bg-[#f2f5f7] p-5 max-w-56 rounded-2xl">
          <Image
            src={iphone}
            alt="iphone icon"
            className="hover:scale-105 cursor-pointer transition-transform"
          />
          <h3 className="text-center text-xl font-semibold">iPhone & Watch</h3>
          <p className="text-center text-light text-[0.95rem]">
            iOS 15 or later $9.99 (US) <br />
            <a href="" className="underline">
              view in your currency
            </a>
          </p>

          <Image
            src={appstore}
            alt="appstore download"
            className="mt-10 opacity-80 hover:opacity-100 transition-opacity cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
}
