import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { whatpeoplearesayingData } from "@/utils/appData";
import Image, { StaticImageData } from "next/image";

export default function Testimonials() {
  return (
    <section className="py-28 px-6 bg-white flex flex-col items-center overflow-x-hidden border-b border-light/20">
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        className="bg-[#f2f5f7] rounded-xl w-full flex justify-center items-center max-w-screen-md h-60"
      >
        <CarouselContent className="-ml-1 ">
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
              <CarouselItem
                key={index}
                className=" rounded-2xl p-10 flex justify-center items-center"
              >
                <div className="transition-all duration-500 bg-white shadow-lg p-3 rounded-xl sm:flex-[1_0_45%] flex-grow max-w-sm">
                  <p className="text-[15px]">
                    {tags.map((tag, index) => (
                      <a
                        key={index}
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
              </CarouselItem>
            )
          )}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
