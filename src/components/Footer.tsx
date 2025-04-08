import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-gray-900 text-gray-300 py-6 px-4 mt-auto">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
        <div className="mb-4 md:mb-0">
          © {new Date().getFullYear()} Funny Lab 😂 – Built with ❤️ using
          Next.js & Tailwind CSS
        </div>

        <div className="flex space-x-4">
          <Link
            href="https://github.com/nadim-chowdhury"
            target="_blank"
            className="hover:text-yellow-300 transition"
          >
            GitHub
          </Link>
          <Link href="/about" className="hover:text-yellow-300 transition">
            About
          </Link>
          <Link href="/contact" className="hover:text-yellow-300 transition">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
