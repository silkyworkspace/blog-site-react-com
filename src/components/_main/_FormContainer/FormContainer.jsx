import React, { useState } from 'react'
import FormRadioContainer from './FormRadioContainer/FormRadioContainer'
import FormSelectContainer from './FormSelectContainer/FormSelectContainer'
import FormCheckMultiContainer from './FormCheckMultiContainer/FormCheckMultiContainer'
import FormTextareaContainer from './FormTextareaContainer/FormTextareaContainer'
import BamosButton from '../../_commons/BamosButton/BamosButton'
import CloseButton from "../../../assets/images/closeButton.svg"
import styles from "./FormContainer.module.css"

export default function FormContainer({closeModal, setIsOpen}) {

    const [form, setForm] = useState({
        media: "",
        age: "",
        favorite: [],
        comment: "",
    });

    const handleSubmit = () => {
        console.log(JSON.stringify(form, null, 2));
        setIsOpen(false);
    };

    return (
        <>
            <form action="" method='POST' className={styles.form}>

                <FormRadioContainer form={form} setForm={setForm} />
                <FormSelectContainer form={form} setForm={setForm} />
                <FormCheckMultiContainer form={form} setForm={setForm} />
                <FormTextareaContainer form={form} setForm={setForm} />

                <BamosButton label="SUBMIT" onClick={handleSubmit} />
            </form>
            
            <button type='button' className={styles.closeBtn} onClick={closeModal}>
                <img src={CloseButton} alt="閉じるボタン" />
            </button>
        </>
    )
}
