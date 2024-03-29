import './../App.css';

export default function Header() {
    return (
        <nav id="header-bar">
            <a className="header-option" id="about-header-option" href="#about-section"> About </a>
            <a className="header-option" id="research-experience-header-option" href="#research-experience-section"> Research Projects </a>
            <a className="header-option" id="professional-experience-header-option" href="#professional-experience-section"> Professional Experience </a>
            {/* <a className="header-option" id="education-header-option" href="#education-section"> Education </a> */}
            {/* <a className="header-option" id="faq-header-option" href="#faq-section"> FAQ </a> */}
        </nav>
    )
}