'use client'

import { useTheme } from "next-themes";
import {
    FaBookOpen, FaMoon, FaSun,
    FaTag, FaBook, FaGithub,
    FaLinkedin, FaHouse
} from "react-icons/fa6";

export function Header() {
    const { theme, setTheme } = useTheme();
    var changeTheme = () => setTheme(theme === "light" ? "dark" : "light")

    return (
        <header className="px-0 py-6 md:justify-smart gap-x-3 flex flex-1 items-center justify-between">
            <a href="/" className="text-base font-bold mb-2">Thomaz's blog</a>
            <div className="flex justify-start items-center space-x-4">

                <a href="https://www.github.com/Thomaz-Peres"><FaGithub className="size-5" /> </a>

                <p className="text-xs">•</p>

                <a href="https://www.linkedin.com/in/thomazperes/"><FaLinkedin className="size-5" /></a>

                <p className="text-xs">•</p>

                <button onClick={changeTheme} className="relative w-5 h-5">
                    <FaSun className="absolute inset-0 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 size-5"/>
                    <FaMoon className="absolute inset-0 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 size-5" />
                </button>
            </div>
        </header>
    )
}
