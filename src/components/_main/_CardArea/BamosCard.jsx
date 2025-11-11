import ThumbsUpDownButton from "./ThumbsUpDownButton";

export default function BamosCard({ author, title, category, image, thumbsUp, thumbsDown }) {

    return (
        <>
            <li className="cardItem">
                <div>
                    <img src={image} alt={title} />
                </div>

                <div>
                    <h3>{`[${category}] ${title}`}</h3>
                    <p>{author}</p>
                </div>

                <ThumbsUpDownButton init={thumbsUp} GorB={true}/>
                <ThumbsUpDownButton init={thumbsDown}  GorB={false}/>
            </li>
        </>
    )
}
