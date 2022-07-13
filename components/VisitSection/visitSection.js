import styles from "./visit.module.scss";
import { ImageOrSvg } from "../ImageorSvg/imageOrSvg";
import GoogleMap from "../../Components/Location/Map";

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
    mapLocation,
  } = section.fields;

  return (
    <section id={menuTitle} className={styles.visitSection}>
      <div className={styles.infoColumn}>
        <div className={styles.hoursSection}>
          <div className={styles.hoursContent}>
            <h3 className={styles.hoursHeadline}>{hoursHeadline}</h3>

            {hoursGroups.map((_field, index) => {
              const field = _field.fields;
              return (
                <div key={index}>
                  <h2 className={styles.hoursTitle}>{field.title}</h2>
                  {field.hours.map((_hours, _index) => {
                    const hours = _hours.fields;
                    if (hours.altText) {
                      return (
                        <div key={_index} className={styles.hoursContainer}>
                          <p>{hours.altText}</p>
                        </div>
                      );
                    } else {
                      return (
                        <div key={_index} className={styles.hoursContainer}>
                          <p>
                            {hours.startDay}-{hours.endDay}
                          </p>
                          <p>
                            {hours.startTime}-{hours.endTime}
                          </p>
                        </div>
                      );
                    }
                  })}
                </div>
              );
            })}
          </div>
          <div className={`${styles.parallaxImage} ${styles.imageOne}`}>
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
          <div className={styles.mapsContainer}>
            {mapLocation && <GoogleMap latandLong={mapLocation} />}
          </div>
          <div className={`${styles.parallaxImage} ${styles.imageTwo}`}>
            <ImageOrSvg image={parallaxIconTwo} />
          </div>
        </div>
      </div>
      <div className={styles.imageColumn}>
        <div className={styles.image}>
          <ImageOrSvg image={sectionImage} />
        </div>
      </div>
    </section>
  );
};
