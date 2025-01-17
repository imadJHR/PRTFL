import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

import { ThemeProvider } from "@/components/ui/theme-provider";
import MobileNav from "@/components/ui/navigation/mobile-nav";
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "imad johar Prtfolio",
  description: "fullstack portfolio with NextJs,Sanity,Shadcn-ui, and Typescript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="scroll-smooth selection:bg-primary selection:text-white "
    >
      <body
        className={cn(
          "relative text-muted-foreground overflow-x-hidden",
          inter.className
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          
          <MobileNav />
          
          {children}
          
         
         
        </ThemeProvider>
      </body>
    </html>
  );
}
