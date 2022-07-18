import styles from "./intro.module.scss";
import { ImageOrSvg } from "../ImageOrSvg/imageOrSvg.js";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import React from "react";

export const IntroSection = ({ section, parallax }) => {
  const {
    logoIcon,
    headline,
    subhead,
    mainImage,
    mainImageIcon,
    parallaxOne,
    parallaxTwo,
  } = section.fields;

  const iconOneRef = React.useRef(null);
  const iconTwoRef = React.useRef(null);

  React.useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(iconOneRef.current, {
      y: "200px",
      x: 200,
      duration: 1,
      scrollTrigger: {
        trigger: iconOneRef.current,
        scrub: true,
      },
    });
    gsap.from(iconTwoRef.current, {
      y: "200px",
      x: -200,
      duration: 1,
      scrollTrigger: {
        trigger: iconTwoRef.current,
        scrub: true,
      },
    });
  }, []);

  console.log(parallax);
  return (
    <section className={`${styles.introSection} no-padding`}>
      <div className={styles.introContent}>
        {logoIcon && (
          <dic className={styles.logoIcon}>
            <ImageOrSvg image={logoIcon} />
          </dic>
        )}
        <div className={styles.description}>
          <h1 className={styles.headline}>{headline}</h1>
          <h2 className={styles.subhead}>{subhead}</h2>
        </div>
        <div className={styles.parallaxIconOne} ref={iconOneRef}>
          <ImageOrSvg image={parallaxOne} />
        </div>
        <div className={styles.parallaxIconTwo} ref={iconTwoRef}>
          <ImageOrSvg image={parallaxTwo} />
        </div>
      </div>

      {mainImageIcon?.fields?.title && (
        <div className={styles.mainImageIconOuter}>
          <div className={styles.mainImageIcon}>
            <ImageOrSvg image={mainImage} />
            <div className={styles.icon}>
              <ImageOrSvg image={mainImageIcon} />
            </div>
          </div>
        </div>
      )}
      {!mainImageIcon?.fields?.title && (
        <div className={styles.mainImage}>
          <ImageOrSvg image={mainImage} />
        </div>
      )}
    </section>
  );
};
