import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-6 px-4 mt-auto">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
        <div className="mb-4 md:mb-0">
          © {new Date().getFullYear()} Funny Lab – Built with Next.js & Tailwind
          CSS
        </div>
        <div className="flex space-x-4">
          <Link
            href="https://github.com/nadim-chowdhury"
            target="_blank"
            className="hover:text-black transition-colors"
          >
            GitHub
          </Link>
          <Link href="/about" className="hover:text-black transition-colors">
            About
          </Link>
          <Link href="/contact" className="hover:text-black transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
