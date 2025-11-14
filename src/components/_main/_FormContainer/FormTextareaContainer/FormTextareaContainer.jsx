// import styles from "./FormTextareaContainer.module.css"

export default function FormTextareaContainer({ form, setForm }) {

  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <fieldset>
      <legend>
        Message
      </legend>
      <textarea
        name="comment"
        id="comment"
        cols="30"
        rows="2"
        value={form.comment}
        onChange={handleForm}
      ></textarea>
    </fieldset>
  )
}
