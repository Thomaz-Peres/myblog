import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/themeProvider";
import { Sidebar } from "@/components/sidebar";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Thomaz",
  description: "Thomaz Blog's",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className, 'w-full', 'h-full')}>
        <ThemeProvider attribute="class" defaultTheme="dark">
            <Sidebar></Sidebar>
            {/* <div className="mt-5">{children}</div> */}
            <Footer></Footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
