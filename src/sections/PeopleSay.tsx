import { ChevronRight, Instagram } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import whatpeoplearesaying from "@/assets/whatpeoplearesaying.png";
import { whatpeoplearesayingData } from "@/utils/appData";

export default function PeopleSay() {
  return (
    <section className="py-28 px-6 bg-[#f2f5f7] flex flex-col items-center overflow-x-hidden border-b border-light/20">
      <h1 className="flex gap-1 items-center font-bold text-2xl sm:text-4xl">
        <Image
          src={whatpeoplearesaying}
          alt="what people are saying icon"
          className="size-20 p-2"
        />
        <span>What People Are Saying</span>
      </h1>

      <p className="text-center text-lg sm:text-xl text-primary px-6 mt-4 max-w-[500px]">
        For more than a decade, Things has been helping people around the world
        get organized and achieve their goals. We love to hear it!
      </p>

      <div className="flex items-center gap-2 my-5">
        <button className="flex items-center hover:bg-blue-200/60 font-semibold text-lg sm:text-xl text-[#5c9cf5] py-1 px-3 rounded-md transition-colors">
          <Instagram strokeWidth={2} className="size-7" />
        </button>
        <button className="flex items-center hover:bg-blue-200/60 font-semibold text-lg sm:text-xl text-[#5c9cf5] py-1 px-3 rounded-md transition-colors">
          <Instagram strokeWidth={2} className="size-7" />
        </button>
        <button className="flex items-center hover:bg-blue-200/60 font-semibold text-lg sm:text-xl text-[#5c9cf5] py-1 px-3 rounded-md transition-colors">
          <Instagram strokeWidth={2} className="size-7" />
        </button>
        <button className="flex items-center hover:bg-blue-200/60 font-semibold text-lg sm:text-xl text-[#5c9cf5] py-1 px-3 rounded-md transition-colors">
          <Instagram strokeWidth={2} className="size-7" />
        </button>
      </div>

      <div className="flex justify-center gap-4 items-center">
        <div>
          <ChevronRight className="size-14 rotate-180 cursor-pointer hover:text-blue-400 transition-colors" />
        </div>
        <div className="flex justify-center gap-4 items-center flex-wrap my-5 max-w-3xl">
          {whatpeoplearesayingData.map(
            (
              {
                name,
                date,
                avatar,
                desc,
                tags,
                link,
              }: {
                name: string;
                date: string;
                avatar: StaticImageData;
                desc: string;
                tags: string[];
                link: string;
              },
              index
            ) => (
              <div
                key={index}
                className=" bg-white shadow-lg p-3 rounded-xl sm:flex-[1_0_45%] flex-grow max-w-sm"
              >
                <p className="text-[15px]">
                  {tags.map((tag) => (
                    <a
                      href={`https://x.com/${tag}`}
                      className="hover:underline transition text-light"
                    >
                      {tag}
                    </a>
                  ))}
                  {desc}
                </p>

                <a
                  href={`https://x.com/${link}`}
                  className="flex items-center gap-2 mt-4"
                >
                  <Image
                    src={avatar}
                    alt="avatar"
                    className="size-9 rounded-md"
                  />

                  <div className="flex flex-col text-sm text-black/60">
                    <span className="font-bold -mb-1">{name}</span>
                    <span>{date}</span>
                  </div>
                </a>
              </div>
            )
          )}
        </div>
        <div>
          <ChevronRight className="size-14 cursor-pointer hover:text-blue-400 transition-colors" />
        </div>
      </div>
    </section>
  );
}
