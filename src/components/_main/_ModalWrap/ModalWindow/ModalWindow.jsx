import styles from "./ModalWindow.module.css"

import FormContainer from "../../_FormContainer/FormContainer";

export default function ModalWindow({setIsOpen}) {

    const closeModal = () => {
        setIsOpen(false);
    };

  return (
    <div className={styles.modalOverlay} onClick={closeModal}>

        <div className={styles.modalContent}>

            <div className={styles.modalBox} onClick={(e) => e.stopPropagation()}>
                <h2>FEEDBACK</h2>
                <FormContainer closeModal={closeModal} setIsOpen={setIsOpen}/>
            </div>

        </div>
    </div>
  )
}
