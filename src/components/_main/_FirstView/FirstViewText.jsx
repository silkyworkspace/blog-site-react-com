import BamosFirstViewLogo from "@/assets/images/bamosLogo_white.svg";
import styles from './FirstView.module.css';

export default function FirstViewText() {
    return (
        <div className={styles.FirstViewText}>
            <img src={BamosFirstViewLogo} alt="Bamosファーストビューロゴ" />
        </div>
    )
}
