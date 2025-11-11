import styles from './BamosHeading.module.css'

export default function BamosHeading({headingText = "sectionTitle"}) {
  return (
    <h2 className={styles.heading}>{headingText}</h2>
  )
}
