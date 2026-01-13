import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import localFont from "next/font/local";
import { basePath } from "@/lib/utils";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const brand = localFont({
  src: [
    {
      path: "./fonts/kobuzan-cy-grotesk-grand-dark.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-brand",
});

export const metadata: Metadata = {
  title: "New Health Society",
  description: "Refining the human engine.",
  icons: {
    icon: `${basePath}/images/nhs-brandmark.svg`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} ${brand.variable} font-sans`}
      >

        <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-[-1]">
          <div className="bg-blob blob-primary top-[-10%] left-[-10%] animate-pulse" style={{ animationDuration: '8s' }}></div>
          <div className="bg-blob blob-accent bottom-[-10%] right-[-10%] animate-pulse" style={{ animationDuration: '10s' }}></div>
          <div className="bg-blob blob-primary top-[40%] right-[20%] opacity-30 animate-pulse" style={{ animationDuration: '12s' }}></div>
        </div>
        {children}
      </body>
    </html>
  );
}
