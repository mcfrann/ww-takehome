import { useEffect } from "react";
import styles from "./menu.module.scss";
import { ImageOrSvg } from "../ImageorSvg/imageOrSvg.js";

export const MenuSection = ({ section, orderButton, parallax }) => {
  const {
    menuImage,
    parallaxIconOne,
    menuTitle,
    foodHighlights,
    headline,
    menuDownloadLink,
  } = section.fields;

  return <section id={menuTitle} className={styles.menuSection}></section>;
};
