export default function Footer() {
  return (
    <footer className="m-4">
      <div className="flex gap-4 flex-col justify-center items-center max-w-4xl py-4 mx-auto border-t border-light/40">
        <div>Links</div>

        <a
          href="https://nzar.dev"
          className="flex items-center gap-1 cursor-pointer group"
        >
          <span className="size-4 bg-primary group-hover:bg-[#0000ff] transition-colors rounded-full"></span>
          <span className="uppercase font-semibold text-primary">Nzar.</span>
        </a>
      </div>
    </footer>
  );
}
