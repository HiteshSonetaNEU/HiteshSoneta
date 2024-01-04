import React from "react";

import styles from "./About.module.css";

import c from "../../images/About/cursorIcon.png"
import s from "../../images/About/serverIcon.png"



export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={c} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
              "I'm a seasoned frontend developer with a focus on building responsive and optimized sites. My expertise lies in creating visually appealing interfaces that deliver a seamless and efficient user experience."
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={s} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
              "I bring a wealth of expertise in developing high-performance and optimized back-end systems and APIs. My experience is rooted in crafting fast, efficient solutions that seamlessly integrate with diverse applications and enhance overall system functionality."
              </p>
            </div>
          </li><li className={styles.aboutItem}>
            <img src={c} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Android Developer</h3>
              <p>
              Experienced React Native Android Developer adept at crafting cross-platform mobile applications for a seamless user experience. Skilled in building efficient and scalable solutions with a focus on intuitive and visually appealing interfaces.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={c} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Power BI Developer</h3>
              <p>
              "I specialize in developing comprehensive reports featuring interactive visuals and multipage dashboards, elevating data-driven insights. My expertise lies in creating dynamic and user-friendly data presentations to empower effective decision-making."
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
