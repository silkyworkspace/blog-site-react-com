import React, { useState } from 'react'
import FormRadioContainer from './FormRadioContainer/FormRadioContainer'
import FormSelectContainer from './FormSelectContainer/FormSelectContainer'
import FormCheckMultiContainer from './FormCheckMultiContainer/FormCheckMultiContainer'
import FormTextareaContainer from './FormTextareaContainer/FormTextareaContainer'
import BamosButton from '../../_commons/BamosButton/BamosButton'
// import styles from "./FormContainer.module.css"

export default function FormContainer({closeModal}) {

    const [form, setForm] = useState({
        media: "",
        age: "",
        favorite: [],
        comment: "",
    });

    const handleSubmit = () => {
        console.log('入力されたフォームの情報が出力されます');
    };

    return (
        <>
            <form action="" method='POST'>

                <FormRadioContainer form={form} setForm={setForm} />
                <FormSelectContainer form={form} setForm={setForm} />
                <FormCheckMultiContainer form={form} setForm={setForm} />
                <FormTextareaContainer form={form} setForm={setForm} />

                <BamosButton label="SUBMIT" onClick={handleSubmit} />
            </form>
            
            <button type='button' onClick={closeModal}>×</button>
        </>
    )
}
