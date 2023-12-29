import './../App.css';
import brown_logo from "./../brown-logo.png"

export default function Education() {
    return (
        <div id="education-section">

            <h2 className="section-heading" > Education </h2>

            <div className="education-card" >
                <div className="section-text">
                    <h3> Brown University <img style={{ width: "5%", paddingLeft: "1%" }} src={brown_logo}></img> </h3>
                </div>
            </div>

        </div>
    )

}