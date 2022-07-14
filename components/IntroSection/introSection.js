import styles from "./intro.module.scss";
import { ImageOrSvg } from "../ImageOrSvg/imageOrSvg.js";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import React from "react";

export const IntroSection = ({ section }) => {
  const {
    logoIcon,
    headline,
    subhead,
    mainImage,
    mainImageIcon,
    parallaxIconOne,
    parallaxIconTwo
  } = section.fields;

  const sectionRef = React.useRef(null);

  // React.useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);
  //   gsap.to(sectionRef, {
  //     x:0,
  //     scrollTrigger: {
  //       trigger: sectionRef,
  //       scrub: true,
  //       pin: true,
  //       pinSpacing: false
  //     }
  //   });
  // }, []);

  return (
    <section className={`${styles.introSection} no-padding`} ref={sectionRef}>
      <div className={styles.introContent}>
        {logoIcon && (
          <div className={styles.logoIcon}>
            <ImageOrSvg image={logoIcon} />
          </div>
        )}
        <div className={styles.description}>
          <h1 className={styles.headline}>{headline}</h1>
          <h2 className={styles.subhead}>{subhead}</h2>
        </div>
      </div>
      <div className={styles.mainImage}>
        <ImageOrSvg image={mainImage} />
      </div>
    </section>
  );
};
