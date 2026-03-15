import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-8 border-b border-white/8">
          <div className="flex flex-col gap-2">
            <Image src="/logo-white.svg" alt="Betterfit" width={110} height={30} />
            <p className="text-white/25 text-sm">Growth talent partner. Managed execution.</p>
          </div>

          <nav className="flex items-center gap-6">
            <a href="#how-it-works" className="text-white/35 text-sm hover:text-white/70 transition-colors">
              How it works
            </a>
            <a href="#offers" className="text-white/35 text-sm hover:text-white/70 transition-colors">
              Offers
            </a>
            <a
              href="https://cal.com/betterfit/discovery"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold px-5 py-2 rounded-full border border-white/15 text-white/60 hover:text-white hover:border-white/30 transition-all"
            >
              Book a call
            </a>
          </nav>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6">
          <p className="text-white/20 text-xs">
            &copy; {new Date().getFullYear()} Betterfit. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">Montreal · Remote-first</p>
        </div>
      </div>
    </footer>
  );
}
