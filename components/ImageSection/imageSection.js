import { ImageOrSvg } from "../ImageOrSvg/imageOrSvg";
import styles from "./image.module.scss";

export const ImageSection = ({ section, parallax }) => {
  const { imageOne, imageTwo } = section.fields;

  return (
    <section
      className={`${styles.imageSection} no-padding ${
        parallax && styles.parallax
      }`}
    >
      <div className={!imageTwo ? styles.stretch : ""}>
        <ImageOrSvg image={imageOne} />
      </div>
      {imageTwo && (
        <div>
          <ImageOrSvg image={imageTwo} />
        </div>
      )}
    </section>
  );
};
