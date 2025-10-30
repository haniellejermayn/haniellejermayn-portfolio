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
  BiLogoAws,
  BiLogoSpringBoot,
  BiLogoGithub
} from "react-icons/bi";
import {
  SiCardano,
  SiMysql,
  SiHaskell,
  SiCypress,
  SiPostman,
  SiJira,
  SiSupabase,
  SiKotlin,
  SiFirebase,
  SiSqlite,
  SiExpress
} from "react-icons/si";
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
      { icon: <RiAngularjsFill />, name: "Angular" },
      { icon: <RiTailwindCssFill />, name: "Tailwind CSS" },
      { icon: <RiHtml5Fill />, name: "HTML5" },
      { icon: <RiCss3Fill />, name: "CSS3" }
    ]
  },
  {
    category: "Backend",
    items: [
      { icon: <RiNodejsFill />, name: "Node.js" },
      { icon: <SiExpress />, name: "Express.js" },
      { icon: <BiLogoSpringBoot />, name: "Spring Boot" },
      { icon: <BiLogoMongodb />, name: "MongoDB" },
      { icon: <SiMysql />, name: "MySQL" },
      { icon: <SiSupabase />, name: "Supabase" }
    ]
  },
  {
    category: "Programming Languages",
    items: [
      { icon: <BiLogoJavascript />, name: "JavaScript" },
      { icon: <BiLogoTypescript />, name: "TypeScript" },
      { icon: <BiLogoPython />, name: "Python" },
      { icon: <RiJavaFill />, name: "Java" },
      { icon: <SiKotlin />, name: "Kotlin" },
      { icon: <TbSql />, name: "SQL" },
      { icon: <FaCopyright />, name: "C" },
      { icon: <SiHaskell />, name: "Haskell" }
    ]
  },
  {
    category: "Tools & Other Technologies",
    items: [
      { icon: <BiLogoGit />, name: "Git" },
      { icon: <BiLogoGithub />, name: "GitHub Actions (CI/CD)" },
      { icon: <BiLogoDocker />, name: "Docker" },
      { icon: <BiLogoAws />, name: "AWS Lambda" },
      { icon: <SiCypress />, name: "Cypress" },
      { icon: <SiPostman />, name: "Postman" },
      { icon: <SiJira />, name: "Jira" },
      { icon: <SiCardano />, name: "Cardano" }
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
                    <div
                      key={skill.name}
                      className="flex flex-col items-center gap-2 w-20"
                    >
                      {/* Desktop: Tooltip */}
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger className="w-16 h-16 rounded-full flex items-center justify-center bg-tertiary/70 group">
                            <div className="text-3xl group-hover:text-accent-hover transition-all duration-300">
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent className="hidden md:block">
                            <p className="text-lg">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>

                      {/* Mobile: Label below icon */}
                      <span className="md:hidden text-xs text-white/70 text-center leading-tight">
                        {skill.name}
                      </span>
                    </div>
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
