import BamosCard from "../BamosCard/BamosCard";
import bamosList from "../bamosList";
import styles from "./BamosCardItems.module.css"

export default function BamosCardItems() {
    return (
        <ul className={styles.cardItems}>
            {bamosList.map((item, index) => (
                <li key={index}>
                    <BamosCard
                        author={item.author}
                        title={item.title}
                        category={item.category}
                        image={item.image}
                        thumbsUp={item.thumbsUp}
                        thumbsDown={item.thumbsDown}
                    />
                </li>
            ))}
        </ul>
    )
}
