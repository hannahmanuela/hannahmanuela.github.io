import './../App.css';
import email_logo from './../email-logo.png'
import github_logo from './../github-logo.png'
import linkedin_logo from './../linkedin-logo.png'


export default function Footer() {
    return(
        <div id="footer">
            <div id="footer-contact-info"> 
                <a className="contact-info" href='mailto:hannah_gross@brown.edu'> 
                    <img src={email_logo} style={{width: "3vw",}}/>
                </a>
                <a className="contact-info" href="https://github.com/hannahmanuela"> 
                    <img src={github_logo} style={{width: "4vw",}}/>
                </a>
                <a className="contact-info" href="https://www.linkedin.com/in/hannah-mn-gross/"> 
                    <img src={linkedin_logo} style={{width: "2vw",}}/>
                </a>
            </div>
            <div>
                <span> Site designed and made by Hannah Gross </span>
            </div>
        </div>
    )
}