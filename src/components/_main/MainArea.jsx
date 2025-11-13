import CardArea from "./_CardArea/CardArea";
import FirstView from "./_FirstView/FirstView";
import FirstViewImg from "./_FirstView/FirstViewImg";
import FirstViewText from "./_FirstView/FirstViewText";
import MainAreaSection from "./MainAreaSection/MainAreaSection";
import BamosButton from "../_commons/BamosButton/BamosButton";
import styles from "./MainArea.module.css"

export default function MainArea() {
    return (
        <div>
            <FirstView>
                <FirstViewImg />
                <FirstViewText />
            </FirstView>

            <MainAreaSection
            headingText="Latest Blog Posts"
            className="cardSection">
                <CardArea />
            </MainAreaSection>

            <MainAreaSection 
            headingText="We Value Your Feedback" className="feedBackSection">
                <p>
                    <span className={styles.text}>We’re gathering feedback from our customers at BAMOS DESIGN.</span>
                    <span className={styles.text}>Please take a moment to share your thoughts — your input helps us make BAMOS DESIGN even better.</span>
                </p>
                <BamosButton label="Feedback"/>
            </MainAreaSection>
        </div>
    )
}
