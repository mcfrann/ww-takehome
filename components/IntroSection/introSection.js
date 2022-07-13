import styles from "./intro.module.scss";
import { ImageOrSvg } from "../ImageOrSvg/imageOrSvg.js";

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

  console.log(section);
  return (
    <section className={`${styles.introSection} no-padding`}>
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
