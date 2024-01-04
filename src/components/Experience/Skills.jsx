import React from "react";
import { IoLogoHtml5,IoLogoCss3,IoLogoJavascript,IoLogoNodejs,IoLogoPython    } from "react-icons/io";
import { GrGraphQl } from "react-icons/gr";
import { IoLogoReact } from "react-icons/io5";
import { SiNestjs,SiJenkins,SiMysql,SiMongodb   } from "react-icons/si";
import { Icon } from '@iconify/react';
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";


export const Skills = () => {

  const returnIcon=(x)=>{
    switch(x){
      case 'HTML':
        return <IoLogoHtml5 size={60}/>;
      case 'CSS':
          return <IoLogoCss3 size={60}/>; 
      case 'Javascript':
        return <IoLogoJavascript  size={60}/>; 
      case 'React':
        return <IoLogoReact   size={60}/>;
      case 'Node':
        return <IoLogoNodejs   size={60}/>;
      case 'GraphQL':
        return <GrGraphQl   size={60}/>;
      case 'Nest.js':
        return <SiNestjs   size={60}/>;
      case 'Jenkins':
        return <SiJenkins   size={60}/>;  
      case 'Python':
        return <IoLogoPython    size={60}/>;
      case 'MySQL':
        return <SiMysql    size={60}/>;  
      case 'MongoDB':
        return <SiMongodb    size={60}/>;
      case 'Power BI':
        return <Icon icon="simple-icons:powerbi" height={60}/>;      
    }
  }
  return (
    <section className={styles.container} id="skills">
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  {returnIcon(skill.title)}
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
