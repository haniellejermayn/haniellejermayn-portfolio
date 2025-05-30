import { Sometype_Mono } from "next/font/google"; // Imports the font loader
import "./globals.css";

// Component Imports
import MainNav from "@/components/MainNav";
import PageTransition from "@/components/PageTransition";
import RectangleTransition from "@/components/RectangleTransition";
import Gradient from "@/components/Gradient";
import Header from "@/components/Header";

// Initializes the font by calling the imported function
// Downloads the font, optimizes it, and prepares it for use
const sometypeMono = Sometype_Mono({
  variable: "--font-sometype-mono",
  subsets: ["latin"]
});

export const metadata = {
  title: "haniellejermayn",
  description: "My personal portfolio website."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${sometypeMono.variable} antialiased overflow-hidden relative`}
      >
        <Gradient />
        <RectangleTransition />
        <PageTransition>
          <div className="flex items-center justify-center">
            <div className="hidden 2xl:flex w-[285px] h-screen bg-secondary">
              <MainNav />
            </div>
            <div className="w-full max-w-[1130px] px-[15px] mx-auto">
              <Header />
              <div>{children}</div>
            </div>
          </div>
        </PageTransition>
      </body>
    </html>
  );
}
