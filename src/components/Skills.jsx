import {
  RiReactjsFill,
  RiNextjsFill,
  RiHtml5Fill,
  RiCss3Fill,
  RiTailwindCssFill,
  RiNodejsFill,
  RiJavaFill,
  RiAngularjsFill
} from "react-icons/ri";
import {
  BiLogoJavascript,
  BiLogoTypescript,
  BiLogoDocker,
  BiLogoGit,
  BiLogoPython,
  BiLogoMongodb,
  BiLogoGoogle,
  BiLogoMicrosoft
} from "react-icons/bi";
import { SiCardano, SiMysql, SiHaskell } from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { FaCopyright } from "react-icons/fa";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";

const skills = [
  {
    category: "Frontend",
    items: [
      { icon: <RiReactjsFill />, name: "React" },
      { icon: <RiNextjsFill />, name: "Next.js" },
      { icon: <RiHtml5Fill />, name: "HTML5" },
      { icon: <RiCss3Fill />, name: "CSS3" },
      { icon: <RiTailwindCssFill />, name: "Tailwind CSS" },
      { icon: <RiAngularjsFill />, name: "Angular" }
    ]
  },
  {
    category: "Backend",
    items: [
      { icon: <RiNodejsFill />, name: "Node.js" },
      { icon: <BiLogoMongodb />, name: "MongoDB" },
      { icon: <SiMysql />, name: "MySQL" }
    ]
  },
  {
    category: "Languages",
    items: [
      { icon: <BiLogoJavascript />, name: "JavaScript" },
      { icon: <BiLogoTypescript />, name: "TypeScript" },
      { icon: <BiLogoPython />, name: "Python" },
      { icon: <RiJavaFill />, name: "Java" },
      { icon: <TbSql />, name: "SQL" },
      { icon: <FaCopyright />, name: "C" },
      { icon: <SiHaskell />, name: "Haskell" }
    ]
  },
  {
    category: "Tools & Technologies",
    items: [
      { icon: <BiLogoGit />, name: "Git" },
      { icon: <SiCardano />, name: "Cardano" },
      { icon: <BiLogoDocker />, name: "Docker" }
    ]
  },
  {
    category: "Office Applications",
    items: [
      { icon: <BiLogoGoogle />, name: "Google Workspace" },
      { icon: <BiLogoMicrosoft />, name: "Microsoft Office" }
    ]
  }
];

const Skills = () => {
  return (
    <div>
      <h2 className="h2 mb-8">
        My <span className="text-accent-light">Skills</span>
      </h2>
      <div>
        {skills.map((skillCategory) => {
          return (
            <div key={skillCategory.category} className="mb-8">
              <h3 className="text-lg text-white/70 font-semibold mb-4">
                {skillCategory.category}
              </h3>
              <div className="flex flex-wrap gap-6 max-w-sm xl:max-w-none">
                {skillCategory.items.map((skill) => {
                  return (
                    <TooltipProvider key={skill.name}>
                      <Tooltip>
                        <TooltipTrigger className="w-16 h-16 rounded-full flex items-center justify-center bg-tertiary/70 group z-50">
                          <div className="text-3xl group-hover:text-accent-hover transition-all duration-300 z-40">
                            {skill.icon}
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="text-lg z-1000">{skill.name}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
