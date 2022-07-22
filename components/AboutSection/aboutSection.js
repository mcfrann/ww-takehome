import styles from "./about.module.scss";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { ImageOrSvg } from "../ImageorSvg/imageOrSvg.js";
export const AboutSection = ({ section, parallax }) => {
  const { title, copy: _copy, aboutIcon, menuTitle } = section.fields;
  const copy = documentToReactComponents(_copy);
  return (
    <section
      className={`${styles.aboutSection} ${parallax && styles.parallax}`}
      id={menuTitle}
    >
      <div className={styles.aboutWrapper}>
        <div className={styles.aboutSectionContainer}>
          <h1 className={styles.title}>{title}</h1>
          <div className={styles.copy}>{copy}</div>
        </div>
        {aboutIcon && (
          <div className={styles.aboutIcon}>
            <ImageOrSvg image={aboutIcon} />
          </div>
        )}
      </div>
    </section>
  );
};
