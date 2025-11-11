import BamosCard from "./BamosCard";
import bamosList from "./bamosList";

export default function BamosCardItems() {
    return (
        <div>
            {bamosList.map((item, index) => (
                <ul key={index}>
                    <BamosCard
                        author={item.author}
                        title={item.title}
                        category={item.category}
                        image={item.image}
                        thumbsUp={item.thumbsUp}
                        thumbsDown={item.thumbsDown}
                    />
                </ul>
            ))}
        </div>
    )
}
