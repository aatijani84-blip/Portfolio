import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
FaEnvelope,
FaPhone,
FaLocationDot,
FaGithub,
FaLinkedinIn,
} from "react-icons/fa6";

export function Contact() {
const form = useRef();
const [status, setStatus] = useState("");

const sendEmail = (e) => {
e.preventDefault();
setStatus("sending");

emailjs
    .sendForm(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    form.current,
    {
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    },
    )
    .then(() => {
    setStatus("success");
    form.current.reset();
    })
    .catch(() => {
    setStatus("error");
    });
};

return (
<section
    id="contact"
    className="bg-white px-6 py-20 text-gray-900 dark:bg-gray-950 dark:text-white"
>
    <div className="mx-auto max-w-6xl">
    <div className="mb-12 flex items-center gap-4">
        <span className="h-1 w-12 rounded-full bg-blue-500"></span>

        <h2 className="text-3xl font-bold sm:text-4xl">Contact Me</h2>
    </div>

    <div className="grid gap-10 md:grid-cols-2">
        <div>
        <h3 className="text-2xl font-bold">Let's Work Together</h3>

        <p className="mt-4 max-w-lg leading-7 text-gray-500 dark:text-gray-400">
            Have a project in mind or want to work together? Feel free to
            reach out. I'm always open to discussing new projects, ideas, and
            opportunities.
        </p>

        <div className="mt-8 space-y-5">
            <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-500/10 text-blue-500">
                <FaEnvelope />
            </div>

            <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                Email
                </p>

                <a
                href="mailto:aatijani84@email.com"
                className="font-medium hover:text-blue-500"
                >
                aatijani84@email.com
                </a>
            </div>
            </div>

            <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-500/10 text-blue-500">
                <FaPhone />
            </div>

            <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                Phone
                </p>

                <a
                href="tel:+233245361908"
                className="font-medium hover:text-blue-500"
                >
                +233 24 536 1908 || +233 20 375 3783
                </a>
            </div>
            </div>

            <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-500/10 text-blue-500">
                <FaLocationDot />
            </div>

            <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                Location
                </p>

                <p className="font-medium">Ghana</p>
            </div>
            </div>
        </div>

        <div className="mt-8 flex gap-3">
            <a
            href="https://github.com/aatijani84-blip"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-300 text-gray-700 transition hover:border-blue-500 hover:bg-blue-500 hover:text-white dark:border-gray-700 dark:text-gray-300"
            >
            <FaGithub />
            </a>

            <a
            href="https://linkedin.com/in/akeem-a-tijani-4130aa36b"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-300 text-gray-700 transition hover:border-blue-500 hover:bg-blue-500 hover:text-white dark:border-gray-700 dark:text-gray-300"
            >
            <FaLinkedinIn />
            </a>
        </div>
        </div>

        <form
        ref={form}
        onSubmit={sendEmail}
        className="rounded-2xl border border-gray-200 bg-gray-50 p-6 dark:border-gray-800 dark:bg-gray-900"
        >
        <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Name
            </label>

            <input
            id="name"
            name="name"
            type="text"
            placeholder="Your name"
            required
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 dark:border-gray-700 dark:bg-gray-950"
            />
        </div>

        <div className="mt-5">
            <label htmlFor="email" className="mb-2 block text-sm font-medium">
            Email
            </label>

            <input
            id="email"
            name="email"
            type="email"
            placeholder="your@email.com"
            required
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 dark:border-gray-700 dark:bg-gray-950"
            />
        </div>

        <div className="mt-5">
            <label
            htmlFor="message"
            className="mb-2 block text-sm font-medium"
            >
            Message
            </label>

            <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Write your message..."
            required
            className="w-full resize-none rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 dark:border-gray-700 dark:bg-gray-950"
            ></textarea>
        </div>

        <button
            type="submit"
            disabled={status === "sending"}
            className="mt-5 w-full rounded-lg bg-blue-500 px-6 py-3 font-medium text-white transition hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-70"
        >
            {status === "sending" ? "Sending..." : "Send Message"}
        </button>

        {status === "success" && (
            <p className="mt-4 text-center text-sm font-medium text-green-500">
            Message sent successfully!
            </p>
        )}

        {status === "error" && (
            <p className="mt-4 text-center text-sm font-medium text-red-500">
            Something went wrong. Please try again.
            </p>
        )}
        </form>
    </div>
    </div>
</section>
);
}
