import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/themeProvider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import mixPanel from "@/utils/mixpanel";
import { cookies, headers } from "next/headers";

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
  const headersList = headers();
  const domain = headersList.get('host') || "";
  const fullUrl = headersList.get('referer') || "";

  // console.log(fullUrl);
  // console.log(domain);
  // console.log(headersList.entries());
  
  // const router = useRouter();
  // const isTracked = useRef(false)
    // useEffect(() => {
      // if (!isTracked.current) {
        mixPanel.track_pageview([fullUrl]);
        // isTracked.current = true;
      // };
    // });

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
      </body>
    </html>
  );
}
