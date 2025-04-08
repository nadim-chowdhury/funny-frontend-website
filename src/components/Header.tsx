import Link from "next/link";

export default function Header() {
  return (
    <div className="w-full bg-gray-900 text-white px-6 py-4 shadow-md flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <span className="text-2xl font-bold">😂 Funny Lab</span>
        <span className="text-sm text-gray-400 hidden sm:inline">
          A playground of silly side projects
        </span>
      </div>

      <div className="flex items-center space-x-4">
        <Link
          href="https://github.com/nadim-chowdhury"
          target="_blank"
          className="text-sm hover:underline hover:text-yellow-300 transition"
        >
          GitHub
        </Link>

        {/* Example button: Theme toggle, etc */}
        <button className="bg-yellow-400 text-black px-3 py-1 rounded-full hover:bg-yellow-300 transition">
          ☀️ Light Mode
        </button>
      </div>
    </div>
  );
}
