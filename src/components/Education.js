import './../App.css';
import brown_logo from "./../brown-logo.png"

export default function Education() {
    return (
        <div id="education-section">

            <h2 className="section-heading" > Education </h2>

            <div className="education-card" >
                <div className="section-text">
                    <h3> Brown University <img style={{ width: "5%", paddingLeft: "1%" }} src={brown_logo}></img> </h3>

                    <p>
                        The following are my favorite classes that I've taken so far. <br />
                        <br />
                        In Computer Science:
                        <ul>
                            <li> Computer Networks </li>
                            <li> Design and Implementation of Programming Languages </li>
                            <li> Systems Security (w/ extra lab component) </li>
                            <li> Introduction to Computer Systems </li>
                        </ul>

                        In Mathematics:
                        <ul>
                            <li> Cryptography </li>
                            <li> Topology </li>
                            <li> Graph Theory </li>
                        </ul>

                        In other departments:
                        <ul>
                            <li> Philosophy of Attention </li>
                            <li> Russia: Reforms to World Wars </li>
                            <li> Topics in Constitutional Law </li>
                            <li> Cyber Security: Strategy and Policy </li>
                        </ul>
                    </p>
                </div>
            </div>

        </div>
    )

}