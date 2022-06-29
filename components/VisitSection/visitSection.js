import styles from "./visit.module.scss";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
const { ScrollTrigger } = require("gsap/dist/ScrollTrigger");

export const VisitSection = ({ section }) => {
  const sectionRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    // when the sectionRef hits the top of the page the imageColumn needs to lock
    // into place until you get through the info Column scroll length
  }, [sectionRef]);

  return (
    <div className={styles.visitSection} ref={sectionRef}>
      <div className={styles.infoColumn}>
        <div className={styles.hoursSection}></div>
        <div className={styles.visitSection}></div>
      </div>
      <div className={styles.imageColumn}></div>
    </div>
  );
};
