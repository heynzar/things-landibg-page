import Image from "next/image";
import hero from "@/assets/hero.png";
import play from "@/assets/play.svg";

export default function Hero() {
  return (
    <section className="my-14 flex flex-col items-center">
      <div>
        <Image src={hero} alt="Big Logo" className="w-[200px] sm:w-[240px]" />
      </div>

      <p className="text-center text-xl sm:text-2xl text-primary px-6 mt-9 max-w-[500px]">
        Things is the award-winning personal task manager that helps you plan
        your day, manage your projects, and make real progress toward your
        goals.
      </p>

      <button className="mt-3 flex items-start gap-2 hover:bg-blue-200/60 font-semibold text-xl sm:text-2xl text-[#5c9cf5] p-2 rounded-md transition-colors">
        <Image alt="play" src={play} className="size-8" />
        Watch Introduction Video
      </button>
    </section>
  );
}