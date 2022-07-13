import { ImageOrSvg } from "../ImageOrSvg/imageOrSvg";
import styles from "./image.module.scss";

export const ImageSection = ({ section }) => {
  const { imageOne, imageTwo } = section.fields;

  return (
    <section className={`${styles.imageSection} no-padding`}>
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
