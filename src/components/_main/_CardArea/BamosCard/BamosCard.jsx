import ThumbsUpDownButton from "../ThumbsUpDownButton/ThumbsUpDownButton";
import styles from "./BamosCard.module.css";

export default function BamosCard({ author, title, category, image, thumbsUp, thumbsDown }) {

    return (
        <>
            <>
                <div className={styles.cardImg}>
                    <img src={image} alt={title} />
                </div>

                <div className={styles.cardTextArea}>
                    <div className={styles.cardText}>
                        <h3>{`[${category}] ${title}`}</h3>
                        <p>{author}</p>
                    </div>
                    <div className={styles.buttonArea}>
                        <ThumbsUpDownButton init={thumbsUp} GorB={true}/>
                        <ThumbsUpDownButton init={thumbsDown}  GorB={false}/>
                    </div>
                </div>
            </>
        </>
    )
}
