import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              {/* <h3>Frontend Developer</h3> */}
              <p>
              A 20-year-old passionate about technology and programming. I specialize in Data Structures and Algorithms (DSA) with proficiency in Java. As a full-stack developer, I thrive on creating dynamic and efficient applications, seamlessly bridging the gap between front-end and back-end development.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              {/* <h3>Backend Developer</h3> */}
              <p>
              With a strong foundation in both the logical aspects of coding and the practicalities of software engineering, I am dedicated to building robust, user-friendly, and scalable solutions. My journey in tech is driven by a commitment to continuous learning and innovation, and I'm always eager to tackle new challenges and contribute to impactful projects.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              {/* <h3>Java Programmer</h3> */}
              <p>
              Let's build something amazing together!
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};