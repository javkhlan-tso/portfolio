import Image from "next/image";

type Project = {
  image: string;
  title: string;
  subtitle: string;
  href?: string;
};

const projects: Project[] = [
  {
    image: "/project-ycdirectory.png",
    title: "YC Directory",
    subtitle:
      "A directory of great startup pitches created by the community, built for founders to showcase their ideas and connect with investors.",
    href: "https://github.com/javkhlan-tso",
  },
  {
    image: "/project-zendsolv.png",
    title: "Zendsolv",
    subtitle:
      "A production-grade company website for a digital solutions firm specializing in web development and end-to-end AI systems.",
    href: "https://github.com/javkhlan-tso",
  },
];

function ProjectCard({ image, title, subtitle, href }: Project) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl bg-white dark:bg-neutral-900 shadow-md shadow-black/10 dark:shadow-black/30 ring-1 ring-black/5 dark:ring-white/10 transition-transform duration-200">
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col gap-2 p-6">
        <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
          {subtitle}
        </p>

        <div className="mt-4">
          <a
            href={href ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-neutral-900 dark:bg-white px-5 py-2 text-sm font-semibold text-white dark:text-neutral-900 transition-all duration-200 hover:px-7"
          >
            View Project
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="bg-neutral-100 dark:bg-neutral-800/60 px-8 py-24 md:px-20 lg:px-32">
      <h2 className="mb-12 text-3xl font-bold text-neutral-900 dark:text-white md:text-4xl">
        🚀 Shipped Projects.
      </h2>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
