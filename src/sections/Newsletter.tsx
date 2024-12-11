import Image from "next/image";
import { ChevronRight } from "lucide-react";

import newsletter from "@/assets/newsletter.png";

export default function Newsletter() {
  return (
    <section className="py-28 bg-[#f2f5f7] flex flex-col items-center overflow-x-hidden border-b border-light/20">
      <h1 className="flex gap-1 items-center font-bold text-2xl sm:text-4xl">
        <Image src={newsletter} alt="lights icon" className="size-20 p-2" />
        <span>Things Newsletter</span>
      </h1>

      <p className="text-center text-lg sm:text-xl text-primary px-6 mt-4 max-w-[500px]">
        Subscribe to our newsletter to stay up-to-date on Things’ latest news.
        We only send it out a few times per year when we have something
        interesting to tell you.
      </p>

      <label htmlFor="mail" className="hidden">
        E-mail
      </label>
      <input
        placeholder="me@example.com"
        className="px-2 outline-[#4f91fb] w-full border border-light max-w-[500px] bg-white h-9 rounded-lg mt-10 mb-5"
        type="email"
        name="mail"
        id="mail"
      />

      <p className="text-light max-w-[500px] leading-5 tracking-tight">
        Your privacy is very important to us. We’ll only ever use your address
        to send you this newsletter, and you can{" "}
        <a href="" className="underline">
          unsubscribe
        </a>{" "}
        at any time. See our{" "}
        <a href="" className="underline">
          Privacy Policy
        </a>
        .
      </p>
      <button className="mt-3 mb-10 flex items-center text-white font-semibold text-lg bg-[#4f91fb] hover:bg-[#66a1ff] py-1 px-4 rounded-md transition-colors">
        <span>Subscribe</span>
      </button>
    </section>
  );
}
