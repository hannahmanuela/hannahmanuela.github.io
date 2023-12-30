import './../App.css';
import ednaFig from "./../edna-fig.png"
import funhouseFig from "./../funhouse-fig.png"



export default function ResearchExperience() {
    return (
        <div className="experience-section" id="research-experience-section">
            <h2 className="section-heading" > Research Projects </h2>

            <div className="experience-card" >
                <div className="section-text">
                    <h3> Funhouse </h3>
                    <p>
                     <em> Funhouse won second prize in the SOSP 2023 student research competition! (graduate category)</em> <br/>
                        <br/>
                        Today, many companies have databases that contain sensitive customer data, and their employees need access to that
                        data to do their jobs. However, which data they need, and at what fidelity, changes over time -- for example a
                        customer service representative who is on the phone with a customer needs access to that customer's information,
                        but not others'. Because changing permissions on-the-fly is difficult, employees generally have more access than
                        they actually need at that moment. <br />
                        <br />
                        Funhouse is a new kind of database that by construction redacts data, and is designed around flexible and temporary 
                        upgrades to an employee’s access. Employees have associated redactions that conceptually create a mirror of the database
                        – a redacted version of it. These redactions are automatically applied to any query. What the mirror looks like, ie 
                        what redactions are applied, changes when employees upgrade their access.
                    </p>
                </div>
                <img className="section-img" style={{ width: "30%", }} src={funhouseFig}></img>
            </div>

            <div className="experience-card" >
                <div className="section-text">
                    <h3> Edna </h3>
                    <p>
                        <em> Edna was <a href="https://dl.acm.org/doi/10.1145/3600006.3613146">published</a> SOSP 2023! </em> <br/>
                        <br/>
                        Edna, helps web applications provide users with more control over their data. Currently, web services store user
                        data indefinitely, including sensitive information. This can expose the data to other users of the web service,
                        as well as to attackers or insiders via common web vulnerabilities like SQL injections or compromise of privileged
                        accounts. Edna is a library that helps web applications implement sealing, which removes or dissociates some or
                        all of a user's data, and revealing, which restores the sealed data at a user's request, without breaking the
                        application for other users. Sealing transformations store user data in an encrypted form and make any necessary
                        changes to the application database. Revealing reintroduces the sealed data to the application database. <br />
                    </p>
                </div>
                <img className="section-img" style={{ width: "30%", }} src={ednaFig}></img>
            </div>

        </div>
    )
}

