import './../App.css';
import me from "./../me.jpg"
import Typing from 'react-typing-animation'

export default function About() {
    return (
        <div id="about-section">
            <Typing className="section-heading" loop={true}>
                <h2>Hi There! 
                <Typing.Backspace count={10} />
                Welcome to my website :) </h2>
                <Typing.Backspace count={27} />
            </Typing>
            <div className="section-text">
                <p> 
                    Nice to see you :) <br/> 
                    <br/> 
                    As you might have guessed, my name is Hannah. <br/>
                    I was born and raised in <span style={{fontWeight: "bold"}}> Berlin, Germany </span>, 
                    and now <span style={{fontWeight: "bold"}}> study Math and Computer Science at Brown University. </span> <br/>
                    <br/>
                    I'm not sure what I want to do yet. 
                    My experience includes creating <span style={{fontWeight: "bold"}}> data warehouses and integrated 
                    data anlysis pipelines </span> for two startups, as well as being a <span style={{fontWeight: "bold"}}>
                         project manager 
                    for <a href="https://www.fullstackatbrown.com"> Full Stack At Brown</a>. </span> <br/>
                    <br/>
                    My hobbies include photography, ballroom dancing, and martial arts. <br/>
                </p>
            </div>
            <img className="section-img" style={{width: "20%",}} src={me}></img>
        </div>
    )

}