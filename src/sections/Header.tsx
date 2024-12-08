import logo from "@/assets/things-logo.svg";
import Image from "next/image";

export default function Header() {
  return (
    <header className="m-4 ">
      <div className="flex justify-between items-center max-w-4xl py-4 mx-auto border-b border-light/40">
        <div id="logo">
          <Image
            src={logo}
            alt="app logo"
            className="h-8 cursor-pointer min-w-[80px] grayscale hover:grayscale-0 hover:bg-neutral-200 p-1 rounded-md transition "
            width={100}
            height={32}
          />
        </div>
        <nav className="flex flex-wrap items-center gap-2 sm:gap-6 font-bold text-sm sm:text-base text-light">
          <a
            href=""
            className="hover:bg-neutral-200 hover:text-[#26344AB3] p-1 rounded-md transition-colors"
          >
            Features
          </a>
          <a
            href=""
            className="hover:bg-neutral-200 hover:text-[#26344AB3] p-1 rounded-md transition-colors"
          >
            Support
          </a>
          <a
            href=""
            className="hover:bg-neutral-200 hover:text-[#26344AB3] p-1 rounded-md transition-colors"
          >
            Blog
          </a>
        </nav>
      </div>
    </header>
  );
}
