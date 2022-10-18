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

  console.log(hoursGroups)

  return (
    <section id={menuTitle} className={styles.visitSection}>
      <div className={styles.gridItemOne}>
        <h2>{hoursHeadline}</h2>
      </div>
      <div className={styles.gridItemTwo}></div>
      <div className={styles.gridItemThree}></div>
      <div className={styles.gridItemFour}></div>
    </section>
  )
}
