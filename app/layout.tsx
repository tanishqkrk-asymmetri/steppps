import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Jost } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { Pointer } from "@/components/magicui/pointer";
import LS from "@/components/Locomotive";

const geistSans = Jost({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Steppps | A Network for Professional Growth",
  description:
    "Join Steppps to connect with professionals, share knowledge, and advance your career through meaningful interactions and learning opportunities.",
  keywords: [
    "professional network",
    "career growth",
    "networking",
    "professional development",
  ],
  authors: [{ name: "Steppps" }],
  themeColor: "#ffffff",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Steppps | A Network for Professional Growth",
    description:
      "Join Steppps to connect with professionals, share knowledge, and advance your career.",
    url: "https://www.steppps.in",
    siteName: "Steppps",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Steppps | A Network for Professional Growth",
    description:
      "Join Steppps to connect with professionals, share knowledge, and advance your career.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.className}  antialiased`}>
        <main className="p-2">
          <LS></LS>
          {/* <Pointer className="">
          <div className="text-2xl p-1 rounded-full bg-white shadow-md ">
            🚶‍♂️
          </div>
        </Pointer> */}
          <Header></Header>
          {children}
        </main>
      </body>
    </html>
  );
}
