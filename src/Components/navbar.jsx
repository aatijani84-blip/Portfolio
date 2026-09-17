import { Menu, X, Sun, Moon } from "lucide-react";
import { useState } from "react";

export function Navbar() {
const [isOpen, setIsOpen] = useState(false);
const [darkMode, setDarkMode] = useState(true);

const toggleTheme = () => {
setDarkMode((prev) => {
    const newMode = !prev;

    if (newMode) {
    document.documentElement.classList.add("dark");
    } else {
    document.documentElement.classList.remove("dark");
    }

    return newMode;
});
};

return (
<header className="fixed top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur dark:border-gray-800 dark:bg-gray-950/95">
    <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
    <a
        href="#home"
        className="text-lg font-bold tracking-tight text-gray-900 dark:text-white sm:text-xl"
    >
        AHMED <span className="text-blue-500">TIJANI AKEEM</span>
    </a>

    <div className="hidden items-center gap-8 md:flex">
        <a
        href="#home"
        className="text-sm font-medium text-gray-700 transition hover:text-blue-500 dark:text-gray-300"
        >
        Home
        </a>

        <a
        href="#about"
        className="text-sm font-medium text-gray-700 transition hover:text-blue-500 dark:text-gray-300"
        >
        About
        </a>

        <a
        href="#skills"
        className="text-sm font-medium text-gray-700 transition hover:text-blue-500 dark:text-gray-300"
        >
        Skills
        </a>

        <a
        href="#projects"
        className="text-sm font-medium text-gray-700 transition hover:text-blue-500 dark:text-gray-300"
        >
        Projects
        </a>

        <a
        href="#contact"
        className="text-sm font-medium text-gray-700 transition hover:text-blue-500 dark:text-gray-300"
        >
        Contact
        </a>

        <button
        type="button"
        onClick={toggleTheme}
        aria-label="Toggle theme"
        className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-300 text-gray-700 transition hover:border-blue-500 hover:text-blue-500 dark:border-gray-700 dark:text-gray-300"
        >
        {darkMode ? <Sun size={19} /> : <Moon size={19} />}
        </button>
    </div>

    <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
        className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-300 text-gray-700 transition hover:border-blue-500 hover:text-blue-500 dark:border-gray-700 dark:text-gray-300 md:hidden"
    >
        {isOpen ? <X size={22} /> : <Menu size={22} />}
    </button>
    </nav>

    {isOpen && (
    <div className="border-t border-gray-200 bg-white px-6 py-5 dark:border-gray-800 dark:bg-gray-950 md:hidden">
        <div className="flex flex-col gap-4">
        <a
            href="#home"
            onClick={() => setIsOpen(false)}
            className="text-gray-700 transition hover:text-blue-500 dark:text-gray-300"
        >
            Home
        </a>

        <a
            href="#about"
            onClick={() => setIsOpen(false)}
            className="text-gray-700 transition hover:text-blue-500 dark:text-gray-300"
        >
            About
        </a>

        <a
            href="#skills"
            onClick={() => setIsOpen(false)}
            className="text-gray-700 transition hover:text-blue-500 dark:text-gray-300"
        >
            Skills
        </a>

        <a
            href="#projects"
            onClick={() => setIsOpen(false)}
            className="text-gray-700 transition hover:text-blue-500 dark:text-gray-300"
        >
            Projects
        </a>

        <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="text-gray-700 transition hover:text-blue-500 dark:text-gray-300"
        >
            Contact
        </a>

        <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="flex w-fit items-center gap-3 rounded-lg border border-gray-300 px-4 py-2 text-gray-700 transition hover:border-blue-500 hover:text-blue-500 dark:border-gray-700 dark:text-gray-300"
        >
            {darkMode ? <Sun size={19} /> : <Moon size={19} />}
            <span>{darkMode ? "Light Mode" : "Dark Mode"}</span>
        </button>
        </div>
    </div>
    )}
</header>
);
}
