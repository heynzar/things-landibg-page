import Image from "next/image";
import fancysection from "@/assets/fancysection-icon.png";
import appstore from "@/assets/appstore-ios-black.svg";

import iphone from "@/assets/productcard-iphone-watch.svg";
import ipad from "@/assets/productcard-ipad.svg";
import mac from "@/assets/productcard-mac.svg";
import vision from "@/assets/productcard-vision.svg";

import appstoreMac from "@/assets/appstore-mac-black.svg";
import appstoreTrial from "@/assets/appstore-trial.svg";

const downloaddata = [
  {
    image: mac,
    title: "Mac",
    desc: "macOS 10.15 or later",
    span: "$49.99 (US)",
    downloadbtn: [appstoreTrial, appstoreMac],
  },
  {
    image: iphone,
    title: "iPhone & Watch",
    desc: "iOS 15 or later",
    span: "$9.99 (US)",
    downloadbtn: [appstore],
  },
  {
    image: ipad,
    title: "iPad",
    desc: "iPadOS 15 or later",
    span: "$19.99 (US)",
    downloadbtn: [appstore],
  },
  {
    image: vision,
    title: "Vision Pro",
    desc: "visionOS 1.0 or later",
    span: "$29.99 (US)",
    downloadbtn: [appstore],
  },
];

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

      <div className="flex gap-5 flex-wrap justify-center items-center mt-10">
        {downloaddata.map(({ title, desc, image, span, downloadbtn }) => {
          return (
            <div
              key={title}
              className="flex flex-col gap-2 items-center justify-center bg-[#f2f5f7] p-5 max-w-56 rounded-2xl"
            >
              <Image
                src={image}
                alt="iphone icon"
                className="hover:scale-105 cursor-pointer transition-transform"
              />
              <h3 className="text-center text-xl font-semibold">{title}</h3>
              <p
                className={`${
                  downloadbtn.length > 1 ? "mb-2" : "mb-14"
                } text-center  text-light text-[0.95rem]`}
              >
                <span>{desc}</span> <br /> <span>{span}</span>
                <br />
                <a href="" className="underline">
                  view in your currency
                </a>
              </p>
              {downloadbtn.map((btn, index) => (
                <Image
                  key={index}
                  src={btn}
                  alt="appstore download"
                  className="opacity-80 hover:opacity-100 transition-opacity cursor-pointer"
                />
              ))}
            </div>
          );
        })}
      </div>
    </section>
  );
}
