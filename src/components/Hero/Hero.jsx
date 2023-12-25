import React from "react";

import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Hitesh</h1>
        <p className={styles.description}>
        I'm an adept full-stack developer with a genuine passion for crafting exceptional user experiences. Whether it's building engaging Web apps or innovative Android applications, and designing robust back-end architecture, I am driven by the art of transforming concepts into reality. With a solid foundation in Progressive Web Apps and microservices, I offer three years of hands-on skills in software development. Reach out if you'd like to learn more!
        </p>
        <p className={styles.description}>
          Currently Pursuing MS Software Engineering Systems at Northeastern University, Seeking Co-op for summer 2024
        </p>
      </div>
      
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
