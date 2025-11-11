import CardArea from "./_CardArea/CardArea";
import FirstView from "./_FirstView/FirstView";
import FirstViewImg from "./_FirstView/FirstViewImg";
import FirstViewText from "./_FirstView/FirstViewText";
import MainAreaSection from "./MainAreaSection";

export default function MainArea() {
    return (
        <div>
            <FirstView>
                <FirstViewImg />
                <FirstViewText />
            </FirstView>

            <MainAreaSection headingText="Latest Blog Posts">
                <CardArea />
            </MainAreaSection>

            <MainAreaSection headingText="We Value Your Feedback">
                <p>後でFeedbackコンポーネントを入れます</p>
            </MainAreaSection>
        </div>
    )
}
