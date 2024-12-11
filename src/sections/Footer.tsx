import { footerLinks } from "@/utils/appData";

export default function Footer() {
  return (
    <footer className="m-4">
      <div className="flex gap-4 flex-col max-w-4xl pt-10 pb-2 text-light text-[15px] mx-auto border-t border-light/40">
        <div className="flex gap-6 max-w-4xl items-start justify-center flex-wrap">
          {footerLinks.map(
            (
              {
                name,
                links,
              }: {
                name: string;
                links: {
                  a: string;
                  href: string;
                }[];
              },
              index
            ) => (
              <div className="flex flex-col gap-2 flex-[1_0_45%] md:flex-1 flex-grow w-full sm:max-w-sm">
                <span className="font-bold">{name}</span>
                <ul id="list" key={index}>
                  {links.map((link) => (
                    <li>
                      <a
                        href={link.href}
                        className="hover:text-[#4f91fb] transition-colors"
                      >
                        {link.a}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>

        <a
          href="https://nzar.dev"
          className="flex items-center justify-center gap-1 cursor-pointer hover:scale-105"
        >
          <span className="size-4 bg-light transition-colors rounded-full"></span>
          <span className="uppercase font-semibold text-light">Nzar.</span>
        </a>
      </div>
    </footer>
  );
}
