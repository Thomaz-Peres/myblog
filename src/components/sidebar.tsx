'use client'

import Image from "next/image";
import profilePic from '../../images/Chile1.jpg'
import "../app/globals.css";
import {
    FaFolder, FaBookOpen, FaMoon,
    FaTag, FaBook, FaGithub,
    FaLinkedin, FaSun, FaSquareRss,
    FaCircleUser, FaHouse
} from "react-icons/fa6";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";

const navigations = [
    { name: "home"    , path: "/"        , icon: FaHouse      },
    { name: "about"   , path: "/about"   , icon: FaCircleUser },
    { name: "posts"   , path: "/posts"   , icon: FaBookOpen   },
    { name: "projects", path: "/projects", icon: FaFolder     },
    { name: "tags"    , path: "/tags"    , icon: FaTag        },
    { name: "books"   , path: "/books"   , icon: FaBook       },
]

export function Sidebar() {
    const { theme, setTheme } = useTheme();
    const changeTheme = () => setTheme(theme === "light" ? "dark" : "light");
    var pathName = usePathname();
    var active = (path: string) => path === pathName ? 'active' : "disable";

    return (
        <>
            <aside id="sidebar" className="fixed top-0 left-0 flex bg-sidebar h-full max-w-[17rem] flex-col rounded-r-xl border-r-2 border-r-solid border-r-sidebord">
                <header className="flex flex-col items-center my-10">
                    <a id="photo" href="/">
                        {/* className=""/> */}
                        <Image src={profilePic} width={192} height={192}
                            alt="Me in chile"
                            className="rounded-full"
                        />
                    </a>
                    <h2 className="text-xl font-bold mt-3">Thomaz Peres</h2>
                    <p className="text-xs">Software Engineer</p>
                </header>
                <nav id="nav" className="flex-col grow w-100">
                    <ul className="nav-link-ul">
                        {navigations.map((path) => {
                            let isDisabled = path.path == "/tags" || path.path == "/books";
                            return (
                                <li key={path.name} className="nav-link-li">
                                    <a href={isDisabled ? '/' : path.path} id={path.name} className="nav-link" data-state={active(path.path)}>
                                        <path.icon className="size-5" />
                                        <span>{path.name.toLocaleUpperCase()}</span>
                                    </a>
                                </li>
                            )
                        })
                        }
                    </ul>
                </nav>

                <footer className="flex space-x-2 p-7 items-center justify-center">
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