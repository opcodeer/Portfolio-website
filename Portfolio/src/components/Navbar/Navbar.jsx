import React, { useState,useEffect } from "react";

import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled,setScrolled] = useState(false);
  useEffect(()=>{
    const handleScroll = () =>{
      const isScrolled = window.scrollY>0;
      if(isScrolled !== scrolled) setScrolled(true);
    }

    window.addEventListener('scroll',handleScroll);
  },[scrolled]);
  useEffect(() => {
    const handleScrollTop = () => {
      if (window.scrollY === 0) {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScrollTop);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScrollTop);
    };
  }, [scrolled]);
  return (
    <nav className={`${styles.navbar} ${scrolled && styles.navscrolled}`}>
      <a className={styles.title} href="/">
        Portfolio
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};