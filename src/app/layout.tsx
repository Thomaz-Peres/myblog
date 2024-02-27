import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/themeProvider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SpeedInsights } from "@vercel/speed-insights/next"

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
          <div className="mt-20 pt-6 max-w-4xl px-5 mx-auto">
            <Header></Header>
            <div className="mt-5">{children}</div>
            <Footer></Footer>
          </div>
        </ThemeProvider>
        <SpeedInsights/>
      </body>
    </html>
  );
}
