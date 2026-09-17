import {
FaGithub,
FaLinkedinIn,
FaInstagram,
FaFacebookF,
FaXTwitter,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Navbar } from "../Components/navbar";
import { About } from "./about";
import { Skills } from "./skills";

export function Home() {
return (
<div className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-white">
    <Navbar />

    <main
    id="home"
    className="mx-auto flex min-h-screen max-w-6xl items-center px-6 pt-20 md:pt-4"
    >
    <section className="grid w-full items-center gap-12 md:grid-cols-2 md:gap-8 py-4 md:py-0">
        <div>
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-500">
            Hello, I'm
        </p>

        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Ahmed <span className="text-blue-500">Tijani Akeem</span>
        </h1>

        <h2 className="mt-4 text-2xl font-semibold text-gray-700 dark:text-gray-300 sm:text-3xl">
            Full Stack Developer
        </h2>

        <p className="mt-6 max-w-xl text-base leading-7 text-gray-600 dark:text-gray-400 sm:text-lg">
            I build modern, responsive and user-friendly web applications that
            solve real problems. I enjoy turning ideas into working products
            and continuously learning new technologies.
        </p>

        <div className="mt-8">
            <div className="flex flex-wrap gap-4">
            <a
                href="#projects"
                className="rounded-lg bg-blue-500 px-6 py-3 font-medium text-white transition hover:bg-blue-600"
            >
                View Projects
            </a>

            <a
                href="/cv.pdf"
                download=""
                className="rounded-lg border border-gray-300 px-6 py-3 font-medium transition hover:border-blue-500 hover:text-blue-500 dark:border-gray-700"
            >
                Download CV
            </a>
            </div>

            <div className="mt-6 flex items-center gap-4">
            <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-gray-700 transition hover:border-blue-500 hover:bg-blue-500 hover:text-white dark:border-gray-700 dark:text-gray-300"
            >
                <FaGithub />
            </a>

            <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-gray-700 transition hover:border-blue-500 hover:bg-blue-500 hover:text-white dark:border-gray-700 dark:text-gray-300"
            >
                <FaLinkedinIn />
            </a>

            <a
                href="https://instagram.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-gray-700 transition hover:border-blue-500 hover:bg-blue-500 hover:text-white dark:border-gray-700 dark:text-gray-300"
            >
                <FaInstagram />
            </a>

            <a
                href="https://facebook.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-gray-700 transition hover:border-blue-500 hover:bg-blue-500 hover:text-white dark:border-gray-700 dark:text-gray-300"
            >
                <FaFacebookF />
            </a>

            <a
                href="https://x.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-gray-700 transition hover:border-blue-500 hover:bg-blue-500 hover:text-white dark:border-gray-700 dark:text-gray-300"
            >
                <FaXTwitter />
            </a>

            <a
                href="mailto:yourname@gmail.com"
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-gray-700 transition hover:border-blue-500 hover:bg-blue-500 hover:text-white dark:border-gray-700 dark:text-gray-300"
            >
                <MdEmail />
            </a>
            </div>
        </div>
        </div>

        <div className="flex justify-center md:justify-end">
        <div className="flex h-64 w-64 items-center justify-center rounded-full border-2 border-blue-500 bg-gray-100 dark:bg-gray-900 sm:h-80 sm:w-80">
            <span className="text-gray-500 dark:text-gray-400">PHOTO</span>
        </div>
        </div>
    </section>
    </main>

    <About />

    <Skills />
</div>
);
}
