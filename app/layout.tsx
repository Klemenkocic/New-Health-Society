import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import localFont from "next/font/local";
import { basePath } from "@/lib/utils";
import Script from "next/script";
import "./globals.css";
import BackgroundBlobs from "@/components/layout/background-blobs";

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
        {/* Microsoft Clarity Analytics */}
        <Script id="clarity-analytics" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "v1ch062djo");
          `}
        </Script>

        <BackgroundBlobs />
        {children}
      </body>
    </html>
  );
}
