import BamosFirstViewImg from "@/assets/images/bamosFirstView.jpg"
import styles from './FirstView.module.css';

export default function FirstViewImg() {
    return (
        <div className={styles.FirstViewImg}>
            <img src={BamosFirstViewImg} alt="ファーストビュー画像" />
        </div>
    )
}
