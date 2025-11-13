import BamosHeading from "../../_commons/BamosHeadings/BamosHeading";
import styles from "./MainAreaSection.module.css";

export default function MainAreaSection({children, headingText, className}) {
  return (
      // className が truthy（値がある）→ その値を使う
      // className が falsy（undefined, null, "" など）→ 空文字列 "" を使う
    <section className={`${styles.section} ${className || ""}`}>
        <BamosHeading headingText={headingText}/>
        {children}
    </section>
  )
}
