import type { Metadata } from "next";

import { Geist_Mono, Inter, Newsreader } from "next/font/google";

import "./globals.css";
import { Footer } from "./components/footer";
import { Header } from "./components/headers/header";
import { ThemeProvider } from "./components/theme-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Codepine | Pine Lab",
  description: "A personal workshop for building and experimenting with software. Some projects ship, some stay experiments, all are built with curiosity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script defer src="https://cloud.umami.is/script.js" data-website-id="5c5f4d9a-5dc7-46a5-8ce6-277933d2e802"></script>
      </head>
      <body
        className={`${inter.variable} ${newsreader.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <div className="font-sans min-h-screen p-8 pb-20 gap-16 sm:p-20 w-full flex justify-center">
            {children}
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
