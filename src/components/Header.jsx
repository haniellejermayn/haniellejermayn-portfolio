import React from "react";
import Logo from "@/components/Logo";
import Socials from "@/components/Socials";
import { CiMenuFries } from "react-icons/ci";
import { MdFileDownload } from "react-icons/md";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet";

import NavLinks from "@/components/NavLinks";

const Header = () => {
  return (
    <header className="2xl:hidden relative z-40 left-0 top-0 right-0">
      <div className="container mx-auto">
        <div className="flex items-center justify-between py-6">
          {/* Logo */}
          <Logo />
          {/* Nav Mobile - (Sheet Component) */}
          <Sheet>
            <SheetTrigger className="cursor-pointer text-[30px] text-white z-[1000]">
              <CiMenuFries />
            </SheetTrigger>
            <SheetContent
              className="bg-primary border-0 flex flex-col justify-between items-center pt-16 pb-20"
              side="left"
            >
              <SheetHeader>
                <SheetTitle>
                  <Logo />
                </SheetTitle>
                <SheetDescription className="sr-only">
                  Navigation Menu
                </SheetDescription>
              </SheetHeader>
              <NavLinks containerStyles="flex flex-col gap-8 max-w-[100px]" />
              <div>
                <a
                  href="/assets/Chua Resume.pdf"
                  download
                  className="btn btn-lg btn-tertiary my-8"
                >
                  <div className="flex items-center gap-3">
                    <span>Download CV</span>
                    <MdFileDownload className="text-xl"></MdFileDownload>
                  </div>
                </a>
                <Socials
                  containerStyles="flex gap-4 item-center justify-center"
                  iconStyles="bg-accent text-white hover:bg-accent-hover transition w-[40px] h-[40px] 
                  text-[20px] flex items-center justify-center rounded-full cursor-pointer"
                />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
