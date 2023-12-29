import './../App.css';
import me from "./../me.jpg"
import Typing from 'react-typing-animation'
import email_logo from './../email-logo.png'
import github_logo from './../github-logo.png'
import linkedin_logo from './../linkedin-logo.png'

export default function About() {
    return (
        <div id="about-section">
            <Typing className="section-heading" loop={true}>
                <h2>Hi There!
                    <Typing.Delay ms={300} />
                    <Typing.Backspace count={14} />
                    Welcome to my website :) </h2>
                <Typing.Delay ms={300} />
                <Typing.Backspace count={27} />
            </Typing>
            <div className="section-text">
                <p>
                    About me <br />
                    <br />
                    I am currently a PhD student in the <a href="https://pdos.csail.mit.edu/">PDOS group</a> at MIT,
                    where my advisor is <a href="https://people.csail.mit.edu/kaashoek/">Frans Kaashoek</a> <br />
                    <br />
                    I did my undergraduate degree at Brown University, where I was part of 
                    the <a href="https://explorecsr.cs.brown.edu/systems/index.html">exploreCSR program</a>,
                    as well as the <a href="https://etos.cs.brown.edu/">Etos group</a>. <br />
                    < br />
                    My industry experience includes creating data warehouses and integrated data anlysis pipelines for two startups, 
                    as well as interning at Amazon. <br />
                    <br />
                    My hobbies include photography, ballroom dancing, and martial arts. <br />
                    <br />
                    <br />
                    <div id="footer-contact-info">
                        <a className="contact-info" href='mailto:hmng@mit.edu'>
                            <img src={email_logo} style={{ width: "3vw", }} />
                        </a>
                        <a className="contact-info" href="https://github.com/hannahmanuela">
                            <img src={github_logo} style={{ width: "4vw", }} />
                        </a>
                        <a className="contact-info" href="https://www.linkedin.com/in/hannah-mn-gross/">
                            <img src={linkedin_logo} style={{ width: "2vw", }} />
                        </a>
                    </div>
                </p>
            </div>
            <img className="section-img" style={{ width: "28%", }} src={me}></img>
        </div>
    )

}