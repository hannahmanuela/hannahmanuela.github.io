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
                        classes, projects?
                    </p>
                </div>
                {/* <img className="section_img" style={{width: "5%",}} src={gap_year_pic}></img> */}
            </div>



        </div>
    )

}