"use client";

import { BiLogoLinkedin, BiLogoGithub } from "react-icons/bi";

const socials = [
  {
    icon: <BiLogoLinkedin />,
    path: "https://www.linkedin.com/in/hanielle-jermayn-chua-0ab448221"
  },
  {
    icon: <BiLogoGithub />,
    path: "https://github.com/haniellejermayn"
  }
];

const Socials = ({ containerStyles, iconStyles }) => {
  const handleClick = (path) => {
    window.open(path);
  };

  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <div
            key={index}
            className={iconStyles}
            onClick={() => handleClick(item.path)}
          >
            {item.icon}
          </div>
        );
      })}
    </div>
  );
};

export default Socials;
