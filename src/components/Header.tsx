import {
    Menubar,
    MenubarMenu,
    MenubarTrigger,
} from "@/components/ui/menubar"

import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

export function Header() {
    return (
        <Menubar>
            {/* <MenubarMenu>
                <MenubarTrigger>
                    <a href="./about"> About </a>
                </MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger>
                    <a href="./posts"> Posts </a>
                </MenubarTrigger>
            </MenubarMenu> */}
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
        </Menubar>
    )
}
