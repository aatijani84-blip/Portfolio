import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
faCode,
faServer,
faRocket,
faLightbulb,
faLocationDot,
faGraduationCap,
faBriefcase,
} from "@fortawesome/free-solid-svg-icons";

export function About() {
return (
<section
    id="about"
    className="bg-gray-100 px-6 py-20 text-gray-900 dark:bg-gray-900 dark:text-white"
>
    <div className="mx-auto max-w-6xl">
    <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
        {/* About Me */}
        <div>
        <div className="flex items-center gap-4">
            <span className="h-1 w-12 rounded-full bg-blue-500"></span>

            <h2 className="text-3xl font-bold sm:text-4xl">About Me</h2>
        </div>

        <p className="mt-6 leading-7 text-gray-600 dark:text-gray-400">
            I am a passionate Full Stack Developer with a strong foundation in
            both frontend and backend technologies. I enjoy creating modern,
            responsive, and user-friendly web applications that solve
            real-world problems. With a keen eye for detail and a commitment
            to continuous learning, I strive to turn ideas into working
            products while staying up-to-date with the latest industry trends.
            I am always eager to take on new challenges and contribute to
            innovative projects that make a positive impact.
        </p>

        <div className="mt-8 grid gap-5 sm:grid-cols-3">
            <div className="flex items-start gap-3">
            <FontAwesomeIcon
                icon={faLocationDot}
                className="mt-1 text-blue-500"
            />

            <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                Location
                </p>
                <p className="mt-1 font-medium">Ghana</p>
            </div>
            </div>

            <div className="flex items-start gap-3">
            <FontAwesomeIcon
                icon={faGraduationCap}
                className="mt-1 text-blue-500"
            />

            <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                Education
                </p>
                <p className="mt-1 font-medium">Computer Engineering</p>
            </div>
            </div>

            <div className="flex items-start gap-3">
            <FontAwesomeIcon
                icon={faBriefcase}
                className="mt-1 text-blue-500"
            />

            <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                Experience
                </p>
                <p className="mt-1 font-medium">1+ years</p>
            </div>
            </div>
        </div>
        </div>

        {/* What I Do */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950 sm:p-8">
        <h3 className="text-2xl font-bold">What I Do</h3>

        <div className="mt-6 space-y-6">
            <div className="flex gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-500 dark:bg-blue-500/10">
                <FontAwesomeIcon icon={faCode} />
            </div>

            <div>
                <h4 className="font-semibold">Frontend Development</h4>

                <p className="mt-1 text-sm leading-6 text-gray-500 dark:text-gray-400">
                Creating responsive and interactive user interfaces.
                </p>
            </div>
            </div>

            <div className="flex gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-500 dark:bg-blue-500/10">
                <FontAwesomeIcon icon={faServer} />
            </div>

            <div>
                <h4 className="font-semibold">Backend Development</h4>

                <p className="mt-1 text-sm leading-6 text-gray-500 dark:text-gray-400">
                Building APIs, databases, and reliable backend systems.
                </p>
            </div>
            </div>

            <div className="flex gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-500 dark:bg-blue-500/10">
                <FontAwesomeIcon icon={faRocket} />
            </div>

            <div>
                <h4 className="font-semibold">Build & Deploy</h4>

                <p className="mt-1 text-sm leading-6 text-gray-500 dark:text-gray-400">
                Building, deploying, and maintaining web applications.
                </p>
            </div>
            </div>

            <div className="flex gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-500 dark:bg-blue-500/10">
                <FontAwesomeIcon icon={faLightbulb} />
            </div>

            <div>
                <h4 className="font-semibold">Problem Solving</h4>

                <p className="mt-1 text-sm leading-6 text-gray-500 dark:text-gray-400">
                Finding practical solutions to technical challenges.
                </p>
            </div>
            </div>
        </div>
        </div>
    </div>
    </div>
</section>
);
}
