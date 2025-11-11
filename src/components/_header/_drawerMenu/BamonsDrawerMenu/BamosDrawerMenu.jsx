import styles from './BamosDrawerMenu.module.css'
import navLists from './navList.js'

export default function BamosDrawerMenu({isOpen, handleClick}) {

  return (
      <nav className={`${styles.navigationContainer} ${isOpen ? styles.isOpen : ""}`}>
        <ul className={styles.navigationLists}>
          {
            navLists.map((list) => (
              <li key={list.id}><a href="#" onClick={handleClick}>{list.listName}</a></li>
            ))
          }
        </ul>
      </nav>
  )
}
