import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-[#21262d] bg-[#0d1117] py-12 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <Image src="/logo-white.svg" alt="Betterfit" width={100} height={28} />
          <p className="text-[#8b949e] text-sm">Better talent. Better value.</p>
        </div>

        <nav className="flex items-center gap-6">
          <a href="#model" className="text-[#8b949e] text-sm hover:text-[#f0f6fc] transition-colors">
            How it works
          </a>
          <a href="#offers" className="text-[#8b949e] text-sm hover:text-[#f0f6fc] transition-colors">
            Pricing
          </a>
          <a
            href="https://cal.com/betterfit/discovery"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8b949e] text-sm hover:text-[#f0f6fc] transition-colors"
          >
            Contact
          </a>
        </nav>

        <p className="text-[#8b949e] text-xs">
          &copy; {new Date().getFullYear()} Betterfit. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
