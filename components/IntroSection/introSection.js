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
    <div className={styles.introSection}>
      {logoIcon && (
        <div className={styles.logoIcon}>
          <ImageOrSvg image={logoIcon} />
        </div>
      )}
      {/* Intro content  here */}
    </div>
  );
};
