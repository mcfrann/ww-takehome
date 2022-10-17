import { ImageOrSvg } from "../ImageorSvg/imageOrSvg";
import styles from "./image.module.scss";

export const ImageSection = ({ section, parallax }) => {
  const { imageOne, imageTwo } = section.fields;

  return <section className={`${styles.imageSection} no-padding`}></section>;
};
