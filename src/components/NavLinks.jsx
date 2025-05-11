import Link from 'next/link';
import React from 'react';

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
  return (
    <ul className={containerStyles}>
      {links.map((link, index) => {
        return (
          <Link href={link.path} key={index}>
            {link.name}
          </Link>
        );
      })}
    </ul>
  );
};

export default NavLinks;