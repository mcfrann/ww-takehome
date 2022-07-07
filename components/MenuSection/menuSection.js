import styles from "./menu.module.scss";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { ImageOrSvg } from "../ImageOrSvg/imageOrSvg.js";

export const MenuSection = ({ section }) => {
  const { menuImage, parallaxIconOne, menuTitle } = section.fields;
  return (
    <div id={menuTitle} className={styles.menuSection}>
      {menuImage && (
        <div className={styles.menuEmbedImage}>
          <ImageOrSvg image={menuImage} />
        </div>
      )}
      <div className={styles.iconsContainer}>
        {parallaxIconOne && (
          <div className={styles.parallaxIconOne}>
            <ImageOrSvg image={parallaxIconOne} />
          </div>
        )}
      </div>
    </div>
  );
};
