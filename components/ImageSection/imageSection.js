import { ImageOrSvg } from "../ImageOrSvg/imageOrSvg";
import styles from "./image.module.scss";

export const ImageSection = ({ section }) => {
  const { imageOne, imageTwo } = section.fields;

  return (
    <div className={styles.imageSection}>
      <div className={!imageTwo ? styles.stretch : ""}>
        <ImageOrSvg image={imageOne} />
      </div>
      {imageTwo && (
        <div>
          <ImageOrSvg image={imageTwo} />
        </div>
      )}
    </div>
  );
};
