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

  return (
    <section id={menuTitle} className={styles.visitSection}>
      <div className={styles.gridItemOne}></div>
      <div className={styles.gridItemTwo}></div>
      <div className={styles.gridItemThree}></div>
      <div className={styles.gridItemFour}></div>
    </section>
  )
}
