import styles from './intro.module.scss'
import { ImageOrSvg } from '../ImageorSvg/imageOrSvg.js'

export const IntroSection = ({ section, parallax }) => {
  const {
    logoIcon,
    headline,
    subhead,
    mainImage,
    mainImageIcon,
    parallaxOne,
    parallaxTwo
  } = section.fields

  return (
    <section className={styles.introSection}>
      {subhead && <h2>{subhead}</h2>}
      <h1>{headline}</h1>
      <div className={styles.introImageWrapper}></div>
    </section>
  )
}
