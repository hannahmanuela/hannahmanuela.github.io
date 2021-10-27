import './../App.css';
import me from "./../me.jpg"

export default function Experience() {
    return (
        <div id="experience_section">
            <h2> Experience </h2>
            <div className="experience_card" >
                <div className="section_text">
                    <h3> Gap Year </h3>
                    <p> 
                        I deferred Brown after high school, and took a gap year. <br/>
                        <br/>
                        The year consisted of two internships, a major hike, and a whole bunch of travelling. <br/>
                        <br/>
                        The first internship was a <span style={{fontWeight: "bold"}}> four month internship in Berlin, Germany. </span> 
                        I worked as an executive assistant to founder and CEO, organizing events and day-to-day logistics. 
                        I also under my own initiative set up a CRM database, and built a website using wordpress. <br/>
                        <br/>
                        The second was a <span style={{fontWeight: "bold"}}> three month internship in Tel Aviv, Israel. </span> 
                        I programmed building blocks for data post-processing, as well as tackling simple computer vision tasks. 
                        I was also able to use ML models to preedict surgery length. <br/>
                        <br/>
                        On a more personal note, I spent a month hiking 500 miles of the <a href="https://en.wikipedia.org/wiki/Pacific_Crest_Trail"> PCT </a>.
                        This was a truly incredible experience. 
                    </p>
                </div>
                <img className="section_img" src={me}></img>
            </div>
        </div>
    )

}