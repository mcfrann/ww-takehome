import styles from './visit.module.scss'
import { ImageOrSvg } from '../ImageorSvg/imageOrSvg'
import GoogleMap from '../Location/Map'

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
    mapLocation
  } = section.fields

  const days = `${hoursGroups[0].fields.hours[0].fields.startDay} - ${hoursGroups[0].fields.hours[0].fields.endDay}`
  const hours = `${hoursGroups[0].fields.hours[0].fields.startTime} - ${hoursGroups[0].fields.hours[0].fields.endTime}`
  console.log(googleMapLink, mapLocation)

  return (
    <section id={menuTitle} className={styles.visitSection}>
      <div className={styles.gridItemOne}>
        <h2 className={styles.visitInfo}>{hoursHeadline}</h2>
        <h1 className={styles.visitInfo}>Hours</h1>
        <p className={styles.details}>
          {days} {hours}
        </p>
      </div>
      <div className={styles.gridItemTwo}></div>
      <div className={styles.gridItemThree}>
        <h2 className={styles.visitInfo}>
          {city}, {stateAbbreviation}
        </h2>
        <h1 className={styles.visitInfo}>{addressLine1}</h1>
        <p className={styles.details}>{zip}</p>
        <GoogleMap latandLong={mapLocation} />
      </div>
      <div className={styles.gridItemFour}></div>
    </section>
  )
}
