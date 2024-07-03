import { GitHubLogoIcon, LinkedInLogoIcon, HomeIcon } from "@radix-ui/react-icons";
import { Menubar, MenubarMenu, MenubarTrigger } from "@radix-ui/react-menubar";
import Image from "next/image";
import profilePic from '../../images/Chile1.jpg'
import "../app/globals.css";

export function Sidebar() {
    return (
        // <>
        //     <div>
        //         
        //         <div className="flex justify-start h-11 items-center space-x-4 p-1">
        //             <p className="font-semibold">Software Engineer</p>
        //             <p className="text-xs">•</p>
        //             <a href="https://www.github.com/Thomaz-Peres"><GitHubLogoIcon className="size-5" /> </a>
        //             <p className="text-xs">•</p>
        //             <a href="https://www.linkedin.com/in/thomazperes/"><LinkedInLogoIcon className="size-5" /></a>
        //         </div>
        //         {/* <p className="mt-3">My name is Thomaz Peres, I am a Software Engineer professionally since <strong>october/2020</strong>. Within all those years, I have developed and architected different high performance and scalable applications. I’m a <strong>full-stack developer</strong> with a strong focus on the back-end. I have experience with <strong>.NET Framework/Core, SQL, Docker, Kubernetes, Redis, Azure, Unit/Performance/Automation Tests and Scrum/Kanban</strong>. Also, used TypeScript, JavaScript, HTML, CSS, React, Angular, Tailwind and MixPanel.</p> */}
        //     </div>

        //     <div className="mt-5 w-full border-t-[3px] hr"/>
        // </>

        <>
            <aside id="sidebar" className="flex bg-gray-900 h-dvh w-full max-w-[20rem] flex-col rounded-r-xl">
                <header className="flex flex-col items-center mt-10">
                    <a id="photo" href="/">
                        {/* className="rounded min-[320px]:w-60 max-[600px]:w-60 md:w-60 md:h-60"/> */}
                        <Image src={profilePic} width={192} height={192} alt="Me in chile"
                            className="rounded-full" />
                    </a>
                    <h2 className="text-xl font-bold mt-3">Thomaz Peres</h2>
                    <p className="text-xs">Software Engineer</p>
                </header>
                <nav id="nav" className="flex flex-col pl-10 mt-10">
                    <ul>
                        <li className="opacity-85">
                            <a href="/" className="nav-link"><HomeIcon className="size-6" /> <span>HOME</span></a>
                        </li>
                    </ul>
                </nav>

            </aside>
        </>
    )
}
