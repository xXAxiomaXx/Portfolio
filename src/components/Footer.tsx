import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-zinc-900 select-none bg-black">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          <Link href="/" className="text-2xl font-black cursor-default text-white tracking-wider">
            &lt; EM /&gt;
          </Link>

          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-gray-400">
            <Link href="#about" className="hover:text-white transition-colors">About</Link>
            <Link href="#projects" className="hover:text-white transition-colors">Projects</Link>
            <Link href="#contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
          
        </div>
        
        <div className="mt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()}{" "}
          <Link href="/" className="hover:text-white transition-colors">EM Dev</Link> | All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}