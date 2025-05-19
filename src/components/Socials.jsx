"use client";

import { BiLogoLinkedin, BiLogoFacebook, BiLogoGithub } from "react-icons/bi";

const socials = [
  {
    icon: <BiLogoLinkedin />,
    path: "https://www.linkedin.com/in/hanielle-jermayn-chua-0ab448221"
  },
  {
    icon: <BiLogoGithub />,
    path: "https://github.com/haniellejermayn"
  },
  {
    icon: <BiLogoFacebook />,
    path: "https://www.facebook.com/profile.php?id=100005266758624"
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
