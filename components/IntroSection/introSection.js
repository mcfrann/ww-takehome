import styles from "./intro.module.scss";
import { ImageOrSvg } from "../ImageorSvg/imageOrSvg.js";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRef, useEffect } from "react";

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

  const iconOneRef = useRef(null);
  const iconTwoRef = useRef(null);
  const sectionRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(iconOneRef.current, {
      y: "0vh",
      scrollTrigger: {
        start: "top top",
        end: "bottom center",
        trigger: sectionRef.current,
        scrub: true,
      },
    });
    gsap.to(iconTwoRef.current, {
      y: "20vh",
      scrollTrigger: {
        start: "top top",
        end: "bottom top",
        trigger: sectionRef.current,
        scrub: true,
      },
    });
  }, []);

  return (
    <section className={`${styles.introSection}`} ref={sectionRef}>
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
          </div>
          <div className={styles.icon}>
            <ImageOrSvg image={mainImageIcon} />
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
