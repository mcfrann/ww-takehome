import styles from "./about.module.scss";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { ImageOrSvg } from "../ImageOrSvg/imageOrSvg.js";
export const AboutSection = ({ section }) => {
  const { title, copy, aboutIcon } = section.fields;

  return (
    <div className={styles.aboutSection}>
      {/* About contnet here */}
      {aboutIcon && <ImageOrSvg image={aboutIcon} />}
    </div>
  );
};
