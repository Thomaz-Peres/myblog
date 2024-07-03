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
            <aside id="sidebar" className="flex bg-little-blue h-dvh w-full max-w-[17rem] flex-col rounded-r-xl border-r-2 border-r-solid border-r-[#1c213d]">
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
                            <a href="/" className="nav-link">
                                <HomeIcon className="size-5" />
                                <span>HOME</span>
                            </a>
                        </li>
                        <li className="nav-link-li">
                            <a href="/" className="nav-link">
                                <HomeIcon className="size-5" />
                                <span>TESTE</span>
                            </a>
                        </li>
                        <li className="nav-link-li">
                            <a href="/" className="nav-link">
                                <HomeIcon className="size-5" />
                                <span>TESTE2</span>
                            </a>
                        </li>
                    </ul>
                </nav>

            </aside>
        </>
    )
}
