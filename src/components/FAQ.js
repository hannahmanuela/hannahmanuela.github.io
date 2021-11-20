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
            title: "What are three things that are important to you in the people in your life?",
            content: <p> 
                The first and foremost is (radical) honesty. <br/> 
                I find it difficult and often tiring to always be looking out for implicit 
                signals when around friends and close colleagues. I also think it is a good way to build trust and 
                vulnerability in both personal and professional contexts. <br/>
                <br/>
                The second is curiosity and interest. <br/>
                I very much enjoy sharing my passions with others, and appreciate it when I can infect 
                others with my excitement and share the things I learn. I also have a great deal of 
                respect for learning from and engaging with different and perhaps 
                even friction-inducing alternative interests and perspectives. <br/>
                <br/>
                Lastly I think it is important to me that the people I interact with are humble. <br/>
                In many of the contexts I exist in, I routinely interact with 
                extraordinary talents and intellects. Perhaps especially in the face of this, I value 
                very much in the people that they remain humble and interested in learning - 
                and aware that there is always a possibility to learn, if you just know where to look.
            </p>,
        },
        {
            title: "What is your process for solving difficult problems?",
            content: <p>
                Difficult is my favorite kind of problem. Not only does it make finding the 
                answer more satisfying, but it also is a process I enjoy. <br/>
                <br/>
                For me the two main modes of interacting with a problem are solitary and communal. 
                I prefer to start by thinking about the problem myself, it is too easy to be influenced 
                by others' perspectives if you begin with a discussion. <br/>
                <br/>
                However, perhaps my favorite part of the process is then coming 
                together and engaging with the problem as a team. Each having 
                thought about different approaches, it is fascinating to see what people 
                came up with, and the somewhat socratic process of digesting what other 
                people were thinking is something I truly enjoy. <br/>
                <br/> 
                Generally I would say that my ideal process is simply then 
                a repetition of this kind of cycle: solitary ruminating and working 
                followed by communal engagement with the problem and process.
            </p>
        },
        {
            title: "What do you look for in your roles?",
            content: <p> 
                There for me are two main dimensions of what I look for. One is the 
                people and the other is the structure and possibilities of the role itself. <br/>
                <br/>
                I like to work in the context of a small and close-knit team, 
                where honesty is valued and feedback is encouraged. One of the most 
                important things for me is that I feel comfortable with the team, 
                and enjoy engaging with them. <br/>
                <br/>
                In terms of content, I tend to fully commit myself to a task, 
                and enjoy putting in the time and effort into making a result as 
                good as it can be. I would say that my motto can be summarized as 
                "go big or go home", in the sense that once I am fully committed to 
                something, I don't do it small.
                </p>,
        },
        {
            title: "What is your favorite place to be?",
            content: <p> 
                Generally I love the vibe that libraries and bookstores have. The 
                hushed tones and the excitement of all the knowledge and stories close enough to touch. <br/>
                <br/>
                I also love the kitchen/dining room in the house where I grew up. 
                I haven't always been much of a cook, but the times I have spent there 
                with my family and especially my mother, listening to music and dancing 
                and cooking make that space very special to me.
            </p>,
        },
        {
            title: "What is your favorite quote?",
            content: <p>
                This is a difficult one, but I would have to say almost the entirety of The Love Song of J. Alfred Prufrock, 
                by T.S. Eliot. My favorite stanza: <br/>
                <br/>
                <span style={{fontStyle: "italic"}}>
                And indeed there will be time <br/>
                To wonder, “Do I dare?” and, “Do I dare?” <br/>
                (...) <br/>
                Do I dare <br/>
                Disturb the universe? <br/>
                In a minute there is time <br/>
                For decisions and revisions which a minute will reverse. </span>
            </p>
        },
    ],
};

const config = {
    animate: true
};

const styles = {
    bgColor: "#3A8182",
    titleTextColor: "white",
    arrowColor: "white",
    rowTitleColor: "white",
    rowContentColor: "white"
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
