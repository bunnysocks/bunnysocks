import Link from "next/link";
import { Button } from "./ui/button";

const projectsData = [
  {
    title: "SubTrack",
    description:
      "FormVibe is a platform that allows users to create and share forms with their friends.",
    link: "",
    code: "https://github.com/bunnysocks/SubTrack",
    previewVideo: "/videos/SubTrackProjectPreview.mp4",
    technologies: [
      "Next.js",
      "TypeScript",
      "pgSQL",
      "Prisma"
    ],
  },
  {
    title: "Erasr",
    description:
      "A real-time collaborative canvas for creating diagrams and documents together in one shared workspace.",
    link: "",
    code: "https://github.com/bunnysocks/Erasr",
    previewVideo: "/videos/ErasrPreview.mp4",
    technologies: ["TypeScript", "Websockets", "Konva.js", "Yjs", "pgSQL", "Redis"],
  },
  {
    title: "Bittorrent-client",
    description:
      "",
    link: "",
    code: "https://github.com/bunnysocks/bittorrent-client",
    previewVideo: "/videos/BittorrentPreview.mp4",
    technologies: [
      "JavaScript",
      "Bash",
    ],
  },
  {
    title: "Caching-Proxy",
    description:
      "",
    link: "",
    code: "https://github.com/bunnysocks/caching-proxy",
    previewVideo: "/videos/CachingProxyPreview.mp4",
    technologies: [
      "JavaScript",
    ],
  },
];

function Projects() {
  return (
    <div className="flex flex-col gap-4 w-full pt-6">
      <h1 className="text-2xl font-bold">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="flex flex-col border rounded-md dark:border-gray-700"
          >
            <video
              src={project.previewVideo}
              autoPlay
              muted
              loop
              className="rounded-t-md"
            />
            <div className="flex flex-col gap-3 p-4 grow">
              <h2 className="text-xl font-bold">{project.title}</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-[4px]">
                {project.technologies.map((technology, index) => (
                  <span
                    key={index}
                    className="bg-slate-100 text-gray-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>
              <div className="flex gap-2 mt-auto">
                <Link href={project.link}>
                  <Button variant="default">Live</Button>
                </Link>
                <Link href={project.code}>
                  <Button variant="outline">Code</Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;