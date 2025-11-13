import BamosLogo from "../_commons/BamosLogo";
import styles from "./Footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.footer}>
        <BamosLogo type="accent"/>
    </footer>
  )
}
