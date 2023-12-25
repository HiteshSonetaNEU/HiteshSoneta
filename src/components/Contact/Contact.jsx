import React from "react";

import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={"emailIcon.png"} alt="Email icon" />
          <a href="mailto:soneta.h@northeastern.edu">soneta.h@northeastern.edu</a>
        </li>
        <li className={styles.link}>
          <img
            src={"linkedinIcon.png"}
            alt="LinkedIn icon"
          />
          <a href="https://linkedin.com/in/hitesh-soneta">linkedin.com/in/hitesh-soneta</a>
        </li>
        <li className={styles.link}>
          <img src={"githubIcon.png"} alt="Github icon" />
          <a href="https://github.com/HiteshSonetaNEU">github.com/HiteshSonetaNEU</a>
        </li>
        <li className={styles.link}>
          <img src={"githubIcon.png"} alt="Github icon" />
          <a href="https://github.com/hiteshsoneta">github.com/hiteshsoneta</a>
        </li>
      </ul>
    </footer>
  );
};
