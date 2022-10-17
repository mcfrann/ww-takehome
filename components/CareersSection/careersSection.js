import styles from "./careers.module.scss";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Marquee from "react-fast-marquee";

export const CareersSection = ({ section }) => {
  const {
    crawlerText,
    copy: _copy,
    applyButton,
    menuTitle,
    buttonCtaCopy,
  } = section.fields;

  const copy = documentToReactComponents(_copy);
  return <section className={styles.careersSection} id={menuTitle}></section>;
};
