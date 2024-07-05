'use client'

import Image from "next/image";
import profilePic from '../../images/Chile1.jpg'
import "../app/globals.css";
import {
    FaFolder, FaBookOpen, FaMoon,
    FaTag, FaBook, FaGithub,
    FaLinkedin, FaSun, FaSquareRss,
    FaCircleUser
} from "react-icons/fa6";
import { useTheme } from "next-themes";


export function Sidebar() {
    const { theme, setTheme } = useTheme();
    const changeTheme = () => setTheme(theme === "light" ? "dark" : "light");

    return (
        //         {/* <p className="mt-3">My name is Thomaz Peres, I am a Software Engineer professionally since <strong>october/2020</strong>. Within all those years, I have developed and architected different high performance and scalable applications. I’m a <strong>full-stack developer</strong> with a strong focus on the back-end. I have experience with <strong>.NET Framework/Core, SQL, Docker, Kubernetes, Redis, Azure, Unit/Performance/Automation Tests and Scrum/Kanban</strong>. Also, used TypeScript, JavaScript, HTML, CSS, React, Angular, Tailwind and MixPanel.</p> */}
        <>
            <aside id="sidebar" className="fixed top-0 left-0 flex bg-sidebar h-screen max-w-[17rem] flex-col rounded-r-xl border-r-2 border-r-solid border-r-[#1c213d]">
                <header className="flex flex-col items-center my-10">
                    <a id="photo" href="/">
                        {/* className="rounded min-[320px]:w-60 max-[600px]:w-60 md:w-60 md:h-60"/> */}
                        <Image src={profilePic} width={192} height={192} alt="Me in chile"
                            className="rounded-full" />
                    </a>
                    <h2 className="text-xl font-bold mt-3">Thomaz Peres</h2>
                    <p className="text-xs">Software Engineer</p>
                </header>
                <nav id="nav" className="flex-col grow w-100">
                    <ul className="nav-link-ul">
                        <li className="nav-link-li">
                            <a href="/about" className="nav-link">
                                <FaCircleUser className="size-5" />
                                <span>ABOUT</span>
                            </a>
                        </li>
                        <li className="nav-link-li">
                            <a href="/" className="nav-link">
                                <FaBookOpen className="size-5" />
                                <span>POSTS</span>
                            </a>
                        </li>
                        <li className="nav-link-li">
                            <a href="/" className="nav-link">
                                <FaFolder className="size-5" />
                                <span>PROJECTS</span>
                            </a>
                        </li>
                        <li className="nav-link-li">
                            <a href="/" className="nav-link">
                                <FaTag className="size-5" />
                                <span>TAGS</span>
                            </a>
                        </li>
                        <li className="nav-link-li">
                            <a href="/" className="nav-link">
                                <FaBook className="size-5" />
                                <span>BOOKS</span>
                            </a>
                        </li>
                    </ul>
                </nav>

                <footer className="flex space-x-2 p-7 items-center">
                    <a href="https://www.github.com/Thomaz-Peres"><FaGithub className="size-5" /> </a>
                    <p className="text-xs">•</p>
                    <a href="https://www.linkedin.com/in/thomazperes/"><FaLinkedin className="size-5" /></a>
                    <p className="text-xs">•</p>
                    <a href="/"><FaSquareRss className="size-5" /></a>
                    <p className="text-xs">•</p>
                    <a onClick={changeTheme} href="/"><FaSun className="size-5" /></a>
                    {/* <p className="text-xs">•</p>
                    <a href="https://www.linkedin.com/in/thomazperes/"><FaMoon className="size-5" /></a> */}
                </footer>

            </aside>
        </>
    )
}
