import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Table, TableHead, TableHeader } from "@/components/ui/table";
import { Header } from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Thomaz",
  description: "Thomaz Blog's",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, 'w-full')}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <div className="p-6 max-w-4xl mx-auto">
            <Header></Header>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
