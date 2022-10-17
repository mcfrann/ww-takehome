import styles from "./about.module.scss";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { ImageOrSvg } from "../ImageorSvg/imageOrSvg.js";

export const AboutSection = ({ section, parallax }) => {
  const { title, copy: _copy, aboutIcon, menuTitle } = section.fields;
  const copy = documentToReactComponents(_copy);
  return <section className={styles.aboutSection} id={menuTitle}></section>;
};
