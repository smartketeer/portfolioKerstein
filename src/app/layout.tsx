import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import LordiconProvider from "@/components/LordiconProvider";
import { ThemeProvider } from "@/components/ThemeProvider";
import FloatingButterfly from "@/components/FloatingButterfly";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kerstein Kyle Violon - Portfolio",
  description: "Professional portfolio of Kerstein Kyle Violon, showcasing interactive, modern, and aesthetic web design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} antialiased scroll-smooth`} suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground font-sans overflow-x-hidden transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <FloatingButterfly />
          <LordiconProvider>{children}</LordiconProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
