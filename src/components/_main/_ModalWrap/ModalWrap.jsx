import { useState } from "react";
import BamosButton from "../../_commons/BamosButton/BamosButton";
import ModalWindow from "./ModalWindow/ModalWindow";
// import styles from "./ModalWrap.module.css"

export default function ModalWrap() {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

  return (
    <div>
        <BamosButton
        label="FEEDBACK"
        onClick={handleClick}/>

        {isOpen && (
            <ModalWindow setIsOpen={setIsOpen}/>
        )}
        
    </div>
  )
}
