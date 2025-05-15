import { BiLogoLinkedin, BiLogoFacebook, BiLogoGithub } from "react-icons/bi";

const socials = [
  {
    icon: <BiLogoLinkedin />,
    path: ""
  },
  {
    icon: <BiLogoGithub />,
    path: ""
  },
  {
    icon: <BiLogoFacebook />,
    path: ""
  }
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <div key={index} className={iconStyles}>
            {item.icon}
          </div>
        );
      })}
    </div>
  );
};

export default Socials;
