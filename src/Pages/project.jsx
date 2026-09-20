import { SiReact, SiTailwindcss, SiSupabase } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";
import { MdOpenInNew } from "react-icons/md";

export function Projects() {
const projects = [
  {
    name: "Healthy Meal Planner",
    description:
      "A web application that helps users plan healthy meals, track nutrition, manage weight and water intake, and stay on top of their health goals.",
    lightImage: "/healthy-meal-planner-light.png",
    darkImage: "/healthy-meal-planner-dark.png",
    technologies: [
      {
        name: "React",
        icon: SiReact,
        color: "text-cyan-400",
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "text-cyan-500",
      },
      {
        name: "Supabase",
        icon: SiSupabase,
        color: "text-emerald-500",
      },
    ],
    liveLink: "#",
    githubLink: "https://github.com/aatijani84-blip/HEALTHY_MEAL",
  },
  {
    name: "Luxury Perfumes",
    description:
      "A modern perfume shopping website designed to showcase luxury fragrances with a clean and elegant user experience.",
    lightImage: "/luxury-perfumes-light.png",
    darkImage: "/luxury-perfumes-light.png",
    technologies: [
      {
        name: "React",
        icon: SiReact,
        color: "text-cyan-400",
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "text-cyan-500",
      },
      {
        name: "Mock API",
        icon: MdOpenInNew,
        color: "text-purple-500",
      },
    ],
    liveLink: "https://luxury-perfumes-ten.vercel.app/",
    githubLink: "https://github.com/aatijani84-blip/Luxury-Perfumes",
  },
];

return (
  <section
    id="projects"
    className="bg-gray-100 px-6 py-20 text-gray-900 dark:bg-gray-900 dark:text-white"
  >
    <div className="mx-auto max-w-6xl">
      <div className="mb-10 flex items-center gap-4">
        <span className="h-1 w-12 rounded-full bg-blue-500"></span>

        <h2 className="text-3xl font-bold sm:text-4xl">Projects</h2>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.name}
            className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-gray-800 dark:bg-gray-950"
          >
            <div className="aspect-video overflow-hidden bg-gray-200 dark:bg-gray-800">
              <img
                src={project.lightImage}
                alt={project.name}
                className="block h-full w-full object-cover transition duration-500 hover:scale-105 dark:hidden"
              />

              <img
                src={project.darkImage}
                alt={project.name}
                className="hidden h-full w-full object-cover transition duration-500 hover:scale-105 dark:block"
              />
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold">{project.name}</h3>

              <p className="mt-3 leading-7 text-gray-500 dark:text-gray-400">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                {project.technologies.map((technology) => {
                  const Icon = technology.icon;

                  return (
                    <div
                      key={technology.name}
                      className="flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm font-medium dark:border-gray-800 dark:bg-gray-900"
                    >
                      <Icon className={`text-xl ${technology.color}`} />

                      <span>{technology.name}</span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 flex gap-3">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg bg-blue-500 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-blue-600"
                >
                  <MdOpenInNew className="text-lg" />
                  Live Demo
                </a>

                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:border-blue-500 hover:text-blue-500 dark:border-gray-700 dark:text-gray-300"
                >
                  <FaGithub className="text-lg" />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
}
