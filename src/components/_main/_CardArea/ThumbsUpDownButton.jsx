import ThumbsUp from "@/assets/images/thumbsUp.svg"
import ThumbsDown from "@/assets/images/thumbsDown.svg"
import isActiveThumbsUp from "@/assets/images/isActive_thumbsUp.svg"
import isActiveThumbsDown from "@/assets/images/isActive_thumbsDown.svg"
import { useState } from "react"

export default function ThumbsUpDownButton({ init = 0, GorB = true }) {
    const [isActive, setIsActive] = useState(false);
    const [count, setCount] = useState(init);

    const handleClick = () => {
        setIsActive(!isActive); // 真偽値を反転
        setCount((prev) => prev + (isActive ? -1 : 1)); // 状態に応じて増減
    }

    let icon;

    if (GorB) {
        icon = isActive ? isActiveThumbsUp : ThumbsUp;
    } else {
        icon = isActive ? isActiveThumbsDown : ThumbsDown;
    }

    return (
        <button onClick={handleClick}>
            <div>
                <img src={icon} alt={GorB ? "ThumbsUp" : "ThumbsDown"} />
            </div>
            <span>{count}</span>
        </button>
    )
}
