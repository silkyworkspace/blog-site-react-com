import BamosHeading from "../_commons/BamosHeadings/BamosHeading";

export default function MainAreaSection({children, headingText}) {
  return (
    <section>
        <BamosHeading headingText={headingText}/>
        {children}
    </section>
  )
}
