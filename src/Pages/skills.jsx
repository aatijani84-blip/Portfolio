import {
SiHtml5,
SiCss,
SiJavascript,
SiReact,
SiTailwindcss,
SiSupabase,
SiGit,
SiGithub,
} from "react-icons/si";

export function Skills() {
const skills = [
{
    name: "HTML",
    icon: SiHtml5,
    color: "text-orange-500",
    description: "Building semantic and accessible web structures.",
},
{
    name: "CSS",
    icon: SiCss,
    color: "text-blue-500",
    description: "Creating responsive and visually appealing designs.",
},
{
    name: "JavaScript",
    icon: SiJavascript,
    color: "text-yellow-400",
    description: "Adding functionality and interactive experiences.",
},
{
    name: "React",
    icon: SiReact,
    color: "text-cyan-400",
    description: "Building modern and reusable user interfaces.",
},
{
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "text-cyan-500",
    description: "Creating responsive interfaces with utility-first CSS.",
},
{
    name: "Supabase",
    icon: SiSupabase,
    color: "text-emerald-500",
    description:
    "Working with databases, authentication, and backend services.",
},
{
    name: "Git",
    icon: SiGit,
    color: "text-orange-600",
    description:
    "Managing code versions and tracking changes throughout development.",
},
{
    name: "GitHub",
    icon: SiGithub,
    color: "text-gray-900 dark:text-white",
    description:
    "Hosting repositories and collaborating on software projects.",
},
];

return (
<section
    id="skills"
    className="bg-white px-6 py-20 text-gray-900 dark:bg-gray-950 dark:text-white"
>
    <div className="mx-auto max-w-6xl">
    <div className="mb-12 flex items-center gap-4">
        <span className="h-1 w-12 rounded-full bg-blue-500"></span>
        <h2 className="text-3xl font-bold sm:text-4xl">My Skills</h2>
    </div>

    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => {
        const Icon = skill.icon;

        return (
            <div
            key={skill.name}
            className="rounded-2xl border border-gray-200 bg-gray-50 p-6 transition hover:-translate-y-1 hover:border-blue-500 hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
            >
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-3xl text-blue-500 dark:bg-blue-500/10">
                <Icon className={`text-5xl ${skill.color}`} />
            </div>

            <h3 className="text-lg font-semibold">{skill.name}</h3>

            <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400">
                {skill.description}
            </p>
            </div>
        );
        })}
    </div>
    </div>
</section>
);
}
