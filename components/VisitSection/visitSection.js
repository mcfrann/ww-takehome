import styles from "./visit.module.scss";
import { ImageOrSvg } from "../ImageorSvg/imageOrSvg";
import GoogleMap from "../Location/Map";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRef, useEffect } from "react";

export const VisitSection = ({ section, parallax }) => {
  const {
    sectionImage,
    hoursHeadline,
    hoursGroups,
    parallaxIconOne,
    parallaxIconTwo,
    addressLine1,
    addressLine2,
    zip,
    city,
    stateAbbreviation,
    googleMapLink,
    menuTitle,
    mapLocation,
  } = section.fields;

  const iconOneRef = useRef(null);
  const iconTwoRef = useRef(null);
  const locationSection = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (parallax === true) {
      gsap.to(iconOneRef.current, {
        bottom: "100vh",
        scrollTrigger: {
          trigger: locationSection.current,
          start: "top top",
          end: "bottom center",
          toggleActions: "play none none none",
          scrub: true,
        },
      });
      gsap.to(iconTwoRef.current, {
        bottom: "50vh",
        scrollTrigger: {
          trigger: locationSection.current,
          start: "top top",
          end: "bottom top",
          toggleActions: "play none none none",
          scrub: true,
        },
      });
    }
  }, [parallax, iconOneRef, iconTwoRef, locationSection]);

  const renderAddress = () => {
    return (
      <p>
        {addressLine1}
        {addressLine2 && <br />}
        {addressLine2 && addressLine2}
        <br />
        {city}, {stateAbbreviation} {zip}
      </p>
    );
  };

  const renderAddressWrap = () => {
    if (googleMapLink) {
      return (
        <a
          className={styles.addressLink}
          href={googleMapLink}
          target="blank"
          title="Google Map Link"
        >
          {renderAddress()}
        </a>
      );
    } else {
      return renderAddress();
    }
  };
  return (
    <section
      id={menuTitle}
      className={`${styles.visitSection} ${parallax && styles.parallax}`}
      ref={locationSection}
    >
      <div className={styles.infoColumn}>
        <div className={styles.hoursSection}>
          <div className={styles.hoursContent}>
            <h2 className={styles.hoursSubTitle}>{hoursHeadline}</h2>

            {hoursGroups.map((_field, index) => {
              const field = _field.fields;
              return (
                <div key={index}>
                  {field.title && (
                    <h1 className={styles.hoursTitle}>{field.title}</h1>
                  )}
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
                            {hours.startDay}-{hours.endDay} &nbsp;
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

          <div
            className={`${styles.parallaxImage} ${styles.imageOne}`}
            ref={iconOneRef}
          >
            <ImageOrSvg image={parallaxIconOne} />
          </div>

          {parallax && (
            <div
              className={`${styles.parallaxImage} ${styles.imageTwo}`}
              ref={iconTwoRef}
            >
              <ImageOrSvg image={parallaxIconTwo} />
            </div>
          )}
        </div>
        <div
          className={`${styles.visitSection} ${parallax && styles.parallax}`}
        >
          <h2 className={styles.hoursSubTitle}>location</h2>

          <h1 className={styles.hoursTitle}>VISIT</h1>

          <div
            className={`${styles.hoursContainer} ${
              parallax && styles.parallax
            }`}
          >
            {renderAddressWrap()}
          </div>
          <div className={styles.mapsContainer}>
            {mapLocation && <GoogleMap latandLong={mapLocation} />}
          </div>

          {!parallax && (
            <div
              className={`${styles.parallaxImage} ${styles.imageTwo}`}
              ref={iconTwoRef}
            >
              <ImageOrSvg image={parallaxIconTwo} />
            </div>
          )}
        </div>
      </div>
      <div className={styles.imageColumn}>
        <div className={styles.image}>
          <ImageOrSvg image={sectionImage} cover={true} />
        </div>
      </div>
    </section>
  );
};
