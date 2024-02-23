import {
    Menubar,
    MenubarMenu,
    MenubarTrigger,
} from "@/components/ui/menubar"

export function Header() {
    return (
        <div className="flex justify-center">
            <Menubar>
                <MenubarMenu>
                    <MenubarTrigger>About</MenubarTrigger>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger>Posts</MenubarTrigger>
                </MenubarMenu>
            </Menubar>
        </div>
    )
}
