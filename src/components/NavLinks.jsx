"use client"

import Link from 'next/link';
import React from 'react';
import { usePathname } from "next/navigation";

const links = [
  {
    name: "home",
    path: "/"
  },
  {
    name: "about",
    path: "/about"
  },
  {
    name: "experience",
    path: "/experience"
  },
  {
    name: "projects",
    path: "/projects"
  },
  {
    name: "contact",
    path: "/contact"
  }
];

const NavLinks = ({ containerStyles }) => {
  const pathname = usePathname();
  return (
    <ul className={containerStyles}>
      {links.map((link, index) => {
        // Determine if the current link matches the active route
        const isActive = pathname === link.path;

        // Calculate the number of chars in the link name
        const charLength = link.name.length;

        // Set the line width based on character length
        const lineWidth = charLength > 5 ? "after:w-[120%]" : "after:w-[80%]"; 

        return (
          <Link href={link.path} key={index} className={`link ${isActive && `${lineWidth} active-link`}`}>
            <span className="relative z-10">{link.name}</span>
          </Link>
        );
      })}
    </ul>
  );
};

export default NavLinks;