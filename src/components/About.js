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
                    I was born and raised in <span style={{ fontWeight: "bold" }}> Berlin (Germany)</span>,
                    and now <span style={{ fontWeight: "bold" }}> study Math and Computer Science at Brown University. </span> <br />
                    <br />
                    I want to go into <span style={{ fontWeight: "bold" }}> computer systems </span>, but have experience and interests in many different fields of computer science. <br />
                    < br />
                    My <span style={{ fontWeight: "bold" }}> industry experience </span> includes creating data warehouses and integrated
                    data anlysis pipelines for two startups, as well as interning at Amazon. <br />
                    <br />
                    My <span style={{ fontWeight: "bold" }}> research experience </span> includes being part of the <a href="https://explorecsr.cs.brown.edu/systems/index.html">
                        exploreCSR program</a> at Brown,
                    as well as part of the larger <a href="https://etos.cs.brown.edu/"> Etos systems group</a>. <br />
                    I have worked on two research projects so far, outlined in the <a href="#research-experience-section">research experience section</a>. <br />
                    <br />
                    My hobbies include photography, ballroom dancing, and martial arts. <br />
                    <br />
                    <br />
                    You can find here <a href={process.env.PUBLIC_URL + '/CV-Hannah-Gross.pdf'} target="_blank"> my CV</a> <br />
                    <br />
                    <br />
                    <div id="footer-contact-info">
                        <a className="contact-info" href='mailto:hannah_gross@brown.edu'>
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
            <img className="section-img" style={{ width: "20%", }} src={me}></img>
        </div>
    )

}