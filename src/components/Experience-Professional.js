import './../App.css';
import theator_summer from "./../theator.jpg"
import vaha_summer from "./../vaha_2020.png"


export default function ExperienceProfessional() {
    return (
        <div className="experience-section" id="professional-experience-section">
            <h2 className = "section-heading" > Experience - Professional </h2>

            <div className="experience-card" >
                <div className="section-text">
                    <h3> Vaha Internship 2020 </h3>
                    <p> 
                        I spent the COVID-summer of 2020 working for a Berlin based company called Vaha. <b/>
                        I worked closely with an outside consultant to <span style={{fontWeight: "bold"}}> build from scratch a full data warehouse on Postgresql. </span>  <br/>
                        This included coming up with <span style={{fontWeight: "bold"}}> customer attribution models and trackings ratings. </span>  <br/>
                        I also, using that data warehouse, put together <span style={{fontWeight: "bold"}}> dashboards and views for managers and shareholders. </span> 
                    </p>
                </div>
                <img className="section-img" style={{width: "30%",}} src={vaha_summer}></img>
            </div>

            <div className="experience-card" >
                <div className="section-text">
                    <h3> Theator Internship 2021 </h3>
                    <p> 
                        I spent the second COVID-summer of 2021 working for a Tel Aviv based company called Theator. <b/>
                        I had worked with them previously during my gap year. In this summer I ran and implemented a project to
                        set up an <span style={{fontWeight: "bold"}}> end to end data infrastructure </span>. <br/>
                        This included 
                        <ul>
                            <li> building a <span style={{fontWeight: "bold"}}> custom coded ETL process </span> from their data lake in elasticsearch to the realtional database in Redshift. </li>
                            <li> building a <span style={{fontWeight: "bold"}}> full data warehouse </span> on AWS </li>
                            <li> creating a <span style={{fontWeight: "bold"}}> backend API </span> for that data warehouse </li>
                            <li> and designing <span style={{fontWeight: "bold"}}> dashboards </span> on Metabase </li>
                        </ul>
                    </p>
                </div>
                <img className="section-img" style={{width: "30%",}} src={theator_summer}></img>
            </div>

        </div>
    )

}