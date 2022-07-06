import styles from "./visit.module.scss";
import { ImageOrSvg } from "../ImageorSvg/imageOrSvg";

export const VisitSection = ({ section }) => {
  const {
    sectionImage,
    hoursHeadline,
    hoursGroups,
    parallaxIconOne,
    parallaxIconTwo,
    addressLine1,
    addressLine2,
    zip,
    menuTitle,
  } = section.fields;

  return (
    <div id={menuTitle} className={styles.visitSection}>
      <div className={styles.infoColumn}>
        <div className={styles.hoursSection}>
          <h3 className={styles.hoursHeadline}>{hoursHeadline}</h3>

          {hoursGroups.map((_field, index) => {
            const field = _field.fields;
            return (
              <div key={index}>
                <h2 className={styles.hoursTitle}>{field.title}</h2>
                {field.hours.map((_hours, _index) => {
                  const hours = _hours.fields;

                  return (
                    <div key={_index} className={styles.hoursContainer}>
                      <p>
                        {hours.startDay}-{hours.endDay}
                      </p>
                      <p>
                        {hours.startTime}M-{hours.endTime}M
                      </p>
                    </div>
                  );
                })}
              </div>
            );
          })}
          <div className={styles.parallaxImage}>
            <ImageOrSvg image={parallaxIconOne} />
          </div>
        </div>
        <div className={styles.visitSection}>
          <h2 className={styles.hoursTitle}>VISIT</h2>
          <div className={styles.hoursContainer}>
            <p>
              {addressLine1} {addressLine2}
            </p>
            <p>{zip}</p>
          </div>
          <div className={styles.mapsContainer} />
          <div className={styles.parallaxImage}>
            <ImageOrSvg image={parallaxIconTwo} />
          </div>
        </div>
      </div>
      <div className={styles.imageColumn}>
        <div className={styles.image}>
          <ImageOrSvg image={sectionImage} />
        </div>
      </div>
    </div>
  );
};
