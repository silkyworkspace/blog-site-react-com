import styles from "./BamosButton.module.css"

export default function BamosButton({
    label = "button",
    onClick = () => console.log("このボタンはonClickが設定されていません"),}) {
  return (
    <button onClick={onClick} className={styles.button}>
        {label}
    </button>
  )
}
