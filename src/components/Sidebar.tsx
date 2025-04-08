import { funnyProjects } from "@/utils/funny-projects-data";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-72 bg-gray-100 p-6 h-screen overflow-y-auto shadow-lg">
      <h2 className="text-2xl font-bold mb-6 px-2">🎭 Funny Lab</h2>
      <ul className="space-y-3">
        {funnyProjects.map((project) => (
          <li key={project.slug}>
            <Link
              href={`/projects/${project.slug}`}
              className="block py-2 px-4 rounded-lg hover:bg-white hover:text-black transition-all duration-200"
            >
              {project.title}
            </Link>
          </li>
        ))}
      </ul>
      <h2 className="font-bold mt-6 px-2">
        &copy;{" "}
        <Link
          href="https://nadim.vercel.app"
          className="hover:text-teal-600 transition-all duration-300 cursor-pointer"
        >
          Nadim Chowdhury
        </Link>
      </h2>
    </div>
  );
}
