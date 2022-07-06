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
    parallaxIconTwo,
  } = section.fields;

  return (
    <div>
      <div className={styles.introSection}>
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
    </div>
  );
};
