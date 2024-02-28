import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

export function Header() {
    return (
        <div>
            <div>
                <h2 className="text-4xl font-bold mb-2">Thomaz Peres</h2>
                <div className="flex justify-start h-11 items-center space-x-4 p-1">
                    <p className="font-semibold">Software Engineer</p>
                    <p className="text-xs">•</p>
                    <a href="https://www.github.com/Thomaz-Peres"><GitHubLogoIcon className="size-5" /> </a>
                    <p className="text-xs">•</p>
                    <a href="https://www.linkedin.com/in/thomazperes/"><LinkedInLogoIcon className="size-5" /></a>
                </div>
                {/* <div className="mt-5 w-52 border-t-[3px] hr"/> */}
                <p className="text-xl font-semibold mt-5">Hello!</p>
                <p className="mt-3">My name is Thomaz Peres, I am a Software Engineer professionally since <strong>october/2020</strong>. Within all those years, I have developed and architected different high performance and scalable applications. I’m a <strong>full-stack developer</strong> with a strong focus on the back-end. I have experience with <strong>.NET Framework/Core, SQL, Docker, Kubernetes, Redis, Azure, Unit/Performance/Automation Tests and Scrum/Kanban</strong>. Also, used TypeScript, JavaScript, HTML, CSS, React, Angular, Tailwind and MixPanel.</p>
            </div>

            <div className="mt-5 w-full border-t-[3px] hr"/>
            {/* <Menubar>
                <MenubarMenu>
                <MenubarTrigger>
                    <a href="./about"> About </a>
                </MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger>
                    <a href="./posts"> Posts </a>
                </MenubarTrigger>
            </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger>
                        <a href="https://www.github.com/Thomaz-Peres"><GitHubLogoIcon className="size-5" /> </a>
                    </MenubarTrigger>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger>
                        <a href="https://www.linkedin.com/in/thomazperes/"><LinkedInLogoIcon className="size-5" /></a>
                    </MenubarTrigger>
                </MenubarMenu>
            </Menubar> */}
        </div>
    )
}
