import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Sidebar } from "@/components/sidebar";
import { ThemeProvider } from "next-themes";

const fira_Code = JetBrains_Mono({ subsets: ["latin"]});

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
      <body className={cn(fira_Code.className, 'w-full', 'h-full')}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Sidebar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
