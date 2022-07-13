import styles from "./about.module.scss";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { ImageOrSvg } from "../ImageOrSvg/imageOrSvg.js";
export const AboutSection = ({ section }) => {
  const { title, copy: _copy, aboutIcon, menuTitle } = section.fields;
  const copy = documentToReactComponents(_copy);
  return (
    <section className={styles.aboutSection} id={menuTitle}>
      <div className={styles.aboutSectionContainer}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.copy}>{copy}</div>
      </div>
      <div className={styles.aboutIcon}>
        {aboutIcon && <ImageOrSvg image={aboutIcon} />}
      </div>
    </section>
  );
};
