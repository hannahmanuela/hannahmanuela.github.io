import './../App.css';
import theator_summer from "./../theator.jpg"
import vaha_summer from "./../vaha_2020.png"
import amazon_summer from "./../amazon-photo.jpg"


export default function ExperienceProfessional() {
    return (
        <div className="experience-section" id="professional-experience-section">
            <h2 className="section-heading" > Professional Experience </h2>

            <div className="experience-card" >
                <div className="section-text">
                    <h3> Amazon Internship 2022 </h3>
                    <p>
                        I spent the summer of 2022 working in Seattle at Amazon (within AWS). <br />
                        I worked on the Identity team, whose job was to store and manage passwords and password policies for AWS <br />
                        <br />
                        For the internship project, I integrated checks for weak passwords and compromised logins into their existing infrastructure of password management and policies.  <br />
                        Over the summer, I designed and implemented these changes, created a functioning prototype, and made a final presentation to the larger team.
                    </p>
                </div>
                <img className="section-img" style={{ width: "20%", }} src={amazon_summer}></img>
            </div>

            <div className="experience-card" >
                <div className="section-text">
                    <h3> Theator Internship 2021 </h3>
                    <p>
                        I spent the second COVID-summer of 2021 working for a Tel Aviv based company called Theator. <b />
                        I had worked with them previously during my gap year. In this summer I ran and implemented a project to
                        set up an end to end data infrastructure. <br />
                        This included
                        <ul>
                            <li> building a custom coded ETL process from their data lake in elasticsearch to a relational database in Redshift. </li>
                            <li> building a full data warehouse on AWS </li>
                            <li> creating a backend API for that data warehouse </li>
                            <li> and designing dashboards on Metabase </li>
                        </ul>
                    </p>
                </div>
                <img className="section-img" style={{ width: "30%", }} src={theator_summer}></img>
            </div>

            <div className="experience-card" >
                <div className="section-text">
                    <h3> Vaha Internship 2020 </h3>
                    <p>
                        I spent the COVID-summer of 2020 working for a Berlin based company called Vaha. <b />
                        I worked closely with an outside consultant to build from scratch a full data warehouse on Postgresql. <br />
                        This included coming up with customer attribution models and ratings tracking. <br />
                        I also, using that data warehouse, put together dashboards and views for managers and shareholders.
                    </p>
                </div>
                <img className="section-img" style={{ width: "30%", }} src={vaha_summer}></img>
            </div>

        </div>
    )

}