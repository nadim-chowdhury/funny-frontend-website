"use client";

import { useState } from "react";
import { funnyProjects } from "@/utils/funny-projects-data";
import Link from "next/link";

export default function Sidebar() {
  const [search, setSearch] = useState("");
  const filteredProjects = funnyProjects.filter((project) =>
    project.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <aside className="w-64 min-w-[16rem] h-screen sticky top-0 bg-white border-r border-gray-200 flex flex-col px-4 py-6 shadow-sm">
      <div className="mb-8">
        <h2 className="text-xl font-bold tracking-tight text-gray-900 mb-1">
          Funny Lab
        </h2>
        <input
          type="text"
          placeholder="Search projects..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full mt-2 px-3 py-2 rounded-md border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
        />
      </div>
      <nav className="flex-1 overflow-y-auto">
        <ul className="space-y-1">
          {filteredProjects.map((project) => (
            <li key={project.slug}>
              <Link
                href={`/projects/${project.slug}`}
                className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 hover:text-black transition-colors text-sm font-medium"
              >
                {project.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <footer className="mt-8 pt-4 border-t border-gray-100 text-xs text-gray-400">
        &copy; {new Date().getFullYear()}{" "}
        <Link href="https://nadim.vercel.app" className="hover:underline">
          Nadim Chowdhury
        </Link>
      </footer>
    </aside>
  );
}
