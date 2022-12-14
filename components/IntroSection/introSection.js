import styles from './intro.module.scss';
import { ImageOrSvg } from '../ImageorSvg/imageOrSvg.js';

export const IntroSection = ({ section }) => {
  const {
    headline,
    subhead,
    mainImage,
    mainImageIcon,
    parallaxOne,
    parallaxTwo
  } = section.fields;

  return (
    <section className={styles.introSection}>
      {subhead && <h2>{subhead}</h2>}
      <h1>{headline}</h1>
      <div className={styles.introImageWrapper}>
        <div className={styles.parallaxOne}>
          <ImageOrSvg image={parallaxOne} />
        </div>
        <div className={styles.outerImageWrapper}>
          <div className={styles.innerImageWrapper}>
            <ImageOrSvg image={mainImage} />
          </div>
        </div>
        <div className={styles.mainImageIcon}>
          <ImageOrSvg image={mainImageIcon} />
        </div>
        <div className={styles.parallaxTwo}>
          <ImageOrSvg image={parallaxTwo} />
        </div>
      </div>
    </section>
  );
};
