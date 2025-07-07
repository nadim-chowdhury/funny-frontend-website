import { notFound } from "next/navigation";
import { funnyProjects } from "@/utils/funny-projects-data";
import DadJoke from "@/components/projects/dad-joke";
import MemeGenerator from "@/components/projects/meme-generator";
import ComplimentGenerator from "@/components/projects/compliment-generator";
import UselessButton from "@/components/projects/useless-button";

// import DadJoke from "@/projects/dad-joke/DadJoke";
// import MemeGenerator from "@/projects/meme-generator/MemeGenerator";
// import Magic8Ball from "@/projects/magic-8-ball/Magic8Ball";

type ProjectMap = {
  [key: string]: React.ComponentType;
};

const projectComponents: ProjectMap = {
  "dad-joke": DadJoke,
  "meme-generator": MemeGenerator,
  "compliment-generator": ComplimentGenerator,
  "useless-button": UselessButton,
  // "magic-8-ball": Magic8Ball,
  // ... map other slugs to their components
};

interface Props {
  params: { slug: string };
}

export default function ProjectSlug({ params }: Props) {
  const { slug } = params;

  const ProjectComponent = projectComponents[slug];

  if (!ProjectComponent) {
    return notFound(); // 404 if no matching component
  }

  const title =
    funnyProjects.find((p) => p.slug === slug)?.title || "Unknown Project";

  return (
    <div className="p-6 w-full">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <div className="bg-white shadow-lg rounded-xl p-4">
        <ProjectComponent />
      </div>
    </div>
  );
}
