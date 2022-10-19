import styles from './visit.module.scss'
import { ImageOrSvg } from '../ImageorSvg/imageOrSvg'
import GoogleMap from '../Location/Map'
import Image from 'next/image'
import FlourPic from '../../public/flour.jpg'

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

  return (
    <section id={menuTitle} className={styles.visitSection}>
      <div className={styles.gridItemOne}>
        <h2 className={styles.visitInfo}>{hoursHeadline}</h2>
        <h1 className={styles.visitInfo}>Hours</h1>
        <p className={styles.details}>
          {days} {hours}
        </p>
      </div>
      <div className={styles.gridItemTwo}>
        <div className={styles.imageWrapper}>
          <ImageOrSvg image={sectionImage} />
        </div>
      </div>
      <div className={styles.gridItemThree}>
        <h2 className={styles.visitInfo}>
          {city}, {stateAbbreviation}
        </h2>
        <h1 className={styles.visitInfo}>{addressLine1}</h1>
        <p className={styles.details}>{zip}</p>
        <div className={styles.mapContainer}>
          <GoogleMap latandLong={mapLocation} />
        </div>
      </div>
      <div className={styles.gridItemFour}>
        <div className={styles.imageWrapper}>
          <Image
            src={FlourPic}
            alt={'flour photo'}
            width={'1138'}
            height={'1678'}
            layout={'intrinsic'}
            objectFit={'cover'}
          />
        </div>
      </div>
    </section>
  )
}
