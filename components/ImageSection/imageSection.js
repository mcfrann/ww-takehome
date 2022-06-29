import styles from "./image.module.scss";

export const ImageSection = ({ section }) => {
  const { title, copy, aboutIcon } = section.fields;

  return (
    <div className={styles.imageSection}>
      {/* About contnet here */}
      {aboutIcon && <ImageOrSvg image={aboutIcon} />}
    </div>
  );
};
