import './../App.css';
import me from "./../me.jpg"

export default function About() {
    return (
        <div id="about-section">
            <h2 className="section-heading"> Hi There! </h2>
            <div className="section-text">
                <p> 
                    Nice to see you :) <br/> 
                    <br/> 
                    As you might have guessed, my name is Hannah. <br/>
                    I was born and raised in Berlin, Germany, and now study Math and Computer Science at Brown University. <br/>
                    <br/>
                    I'm not sure what I want to do yet. 
                    My experience includes creating data warehouses and integrated 
                    data anlysis pipelines for two startups, as well as being a project manager 
                    for <a href="https://www.fullstackatbrown.com"> Full Stack At Brown</a>. <br/>
                    <br/>
                    My hobbies include photography, ballroom dancing, and martial arts. <br/>
                </p>
            </div>
            <img className="section-img" style={{width: "20%",}} src={me}></img>
        </div>
    )

}