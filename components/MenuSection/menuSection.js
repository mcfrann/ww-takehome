import styles from "./menu.module.scss";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { ImageOrSvg } from "../ImageOrSvg/imageOrSvg.js";

export const MenuSection = ({ section }) => {
  const {
    headline,
    menuDownloadLink,
    foodHighlights,
    menuImage,
    parallaxIconOne,
  } = section.fields;

  return (
    <div className={styles.menuSection}>
      {menuImage && (
        <div className={styles.menuEmbedImage}>
          <ImageOrSvg image={menuImage} />
        </div>
      )}
    </div>
  );
};
