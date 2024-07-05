import React from "react";
import { useTypewriter,Cursor } from 'react-simple-typewriter';
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
export const Hero = () => {
  const [text] = useTypewriter({
    words:['Web Developer','Programmer'],
    loop:{},
    typeSpeed:80,
    deleteSpeed:50,
  });
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm <div id="typewriter">Gautam and I am a passionate</div></h1>
        <div className={styles.description}>
          {text}
         <span className={styles.cursor}><Cursor cursorStyle='</>'/></span>
        </div>
        <div className={styles.profilebox}><a href="https://www.linkedin.com/in/gautam-gautam-47264a273/" target="_blank"><img src={getImageUrl("hero/linkedin.png") } alt="linked in image" className={styles.profile}/></a>
        <a href="https://github.com/opcodeer" target="_blank"><img src={getImageUrl("hero/github.png")} alt="" className={styles.profile}/></a></div>
        <a href={"https://drive.google.com/file/d/1RLHeFGzqxptCVmpo0TY4o4lE9k7rftFS/view"} className={styles.resume} target="_blank">
          Cv/Resume
        </a>
      </div>
      <img
        src={getImageUrl("hero/My image.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};