import styles from "./BamosDrawerButton.module.css";


export default function BamosDrawerButton({isOpen, handleClick}) {
  return (
    <>
      <button className={styles.drawerBtn} onClick={handleClick}>

        <span className={styles.drawerBtnContent}>
          <span className={`${styles.drawerBtnIcon} ${isOpen ? styles.isOpen : ""}`}>
            <span></span>
            <span></span>
          </span>
          <span className={styles.drawerBtnText}>
            {isOpen ? "CLOSE" : "MENU"}
          </span>
        </span>

      </button>
    </>
  )
}
