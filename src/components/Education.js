import './../App.css';
import gap_year_pic from "./../gap_year.png"

export default function Education() {
    return (
        <div id="education-section">
            
            <h2 className = "section-heading" > Education </h2>

            <div className="education-card" >
                <div className="section-text">
                    <h3> Brown University </h3>
                    <p> 
                        The following are my favorite classes that I've taken so far. <br/>
                        <br/>
                        In Computer Science:
                        <ul>
                            <li> Introduction to Computer Systems </li>
                            <li> Discrete Structures and Probability </li>
                            <li> Deep Learning </li>
                            <li> Systems Security (w/ extra lab component) </li>
                            <li> Probabilistic Methods in Computer Science </li>
                            <li> Design and Analysis of Algorithms </li>
                        </ul>

                        In Mathematics:
                        <ul>
                            <li> Honors Linear Algebra </li>
                            <li> Abstract Algebra </li>
                            <li> Statistical Inference </li>
                            <li> Topology </li>
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
                {/* <img className="section_img" style={{width: "5%",}} src={gap_year_pic}></img> */}
            </div>



        </div>
    )

}