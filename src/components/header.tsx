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
                {/* <div className="mt-5 w-52 border-t hr border-black-300"/> */}
                <p className="mt-5">My name is Thomaz Peres, I am a</p>
            </div>

            <div className="mt-5 w-full border-t hr border-black-300"/>
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
