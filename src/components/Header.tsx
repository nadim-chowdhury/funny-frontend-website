import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center shadow-sm">
      <div className="flex items-center space-x-2">
        <span className="text-lg font-semibold text-gray-900">Funny Lab</span>
        <span className="text-xs text-gray-400 hidden sm:inline">
          A playground of silly side projects
        </span>
      </div>
      <nav className="flex items-center space-x-4">
        <Link
          href="https://github.com/nadim-chowdhury"
          target="_blank"
          className="text-xs text-gray-500 hover:text-black transition-colors"
        >
          GitHub
        </Link>
      </nav>
    </header>
  );
}
