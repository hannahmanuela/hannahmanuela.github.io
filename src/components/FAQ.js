import './../App.css';
import Faq from "react-faq-component";

const data = {
    title: "FAQ",
    rows: [
        {
            title: "What is the hardest thing you've had to do?",
            content: <p>
                In my gap year, despite being a novice hiker, I decided to hike the Pacific Crest Trail, alone.
            The plan was to spend a month on the trail, covering 500 miles of California's most remote nature.
            I had been warned about heavy snowfall, but decided to go anyway. I arrived at the trailhead with my massive backpack
            carrying all my new gear and food for 8 days. As I started hiking, the trail started being covered by bigger and bigger
            patches of snow, until it fully disappeared. I got out my compass and paper map and looked around for landmarks -
            but all I could see was trees and my footprints in the deep, fresh snow. Overwhelmed, I was tempted to turn back.
            But I didn’t. I continued, approximating where I was and what direction I should be going. I wouldn’t see another person
            for the next four days. <br/>
            <br/>
            That month on the PCT consisted of endless difficulties, both physical - crossing swollen streams, navigating steep icy
            slopes hiding the neatly cut path underneath frozen snow, foot pain from carrying 50 pounds of weight-  and mental  -
            having to constantly convince myself not to quit, to see the positive, and getting accustomed to the loneliness. <br/>
            <br/>
            I learned lessons in ways that I hadn’t expected to, such as realizing what it means to say that “the journey is its
            own reward”. I also gained a heightened sense of self sufficiency, both in the literal sense of carrying everything I
            needed for the week, and in the metaphorical sense of being able to value and enjoy experiences for myself.
            </p>,
        },
        {
            title: "What is the thing you are most proud of?",
            content: <p> answer here </p>,
        },
        {
            title: "What are three things that are important to you in the people in your life?",
            content: <p> answer here </p>,
        },
        {
            title: "What do you look for in your roles?",
            content: <p> answer here </p>,
        },
        {
            title: "What is your favorite place to be?",
            content: <p> answer here </p>,
        },
    ],
};

const config = {
    animate: true
};

const styles = {
    bgColor: "#3A8182"
};

export default function About() {
    return (
        <div id="faq-section">
            <Faq id="faq-content"
                data={data}
                styles={styles}
                config={config}
            />
        </div>
    )
}
