import './../App.css';
import ednaFig from "./../edna-fig.png"



export default function ResearchExperience() {
    return (
        <div className="experience-section" id="research-experience-section">
            <h2 className="section-heading" > Research Experience </h2>

            <div className="experience-card" >
                <div className="section-text">
                    <h3> Funhouse </h3>
                    <p>
                        Today, many companies have databases that contain sensitive customer data, and their employees need access to that
                        data to do their jobs. However, which data they need, and at what fidelity, changes over time -- for example a
                        customer service representative who is on the phone with a customer needs access to that customer's information,
                        but not others'. Because changing permissions on-the-fly is difficult, employees generally have more access than
                        they actually need at that moment. <br />
                        <br />
                        Funhouse is a new kind of database that fundamentally shows different users different versions of the information
                        it contains. It allows for an anonymized baseline from which users can easily and temporarily upgrade their access.
                        When a user queries Funhouse, she is actually accessing a mirror of the database, an anonymized version of the
                        database that is determined by her user group (e.g.backend dev).A mirror is defined by a set of anonymizations on
                        top of the ground truth database. For example, a mirror might have anonymizations that change users' names,
                        decorrelate a user's bookings from the user, and hide sensitive details such as their credit card
                        information. <br />
                        In order to provide the desired flexibility in permissions, Funhouse supports upgrades, where an individual
                        employee can call on Funhouse to temporarily no longer anonymize certain ground truth data (e.g. a customer service
                        representative can get an upgrade for relevant data related to a specific customer). These upgrades temporarily
                        change the definition of the user's mirror, i.e. she temporarily operates on her own mirror which diverges from
                        her user group's base mirror. Upgrades are audit-logged and require cryptographic material from the affected
                        customer or someone with equivalent access. <br />
                    </p>
                </div>
            </div>

            <div className="experience-card" >
                <div className="section-text">
                    <h3> Edna </h3>
                    <p>
                        Edna, helps web applications provide users with more control over their data. Currently, web services store user
                        data indefinitely, including sensitive information. This can expose the data to other users of the web service,
                        as well as to attackers or insiders via common web vulnerabilities like SQL injections or compromise of privileged
                        accounts. Edna is a library that helps web applications implement sealing, which removes or dissociates some or
                        all of a user's data, and revealing, which restores the sealed data at a user's request, without breaking the
                        application for other users. Sealing transformations store user data in an encrypted form and make any necessary
                        changes to the application database. Revealing reintroduces the sealed data to the application database. <br />
                        <br />
                        A piece I contributed to Edna was a better story for key management that avoids depending on end users to safely
                        store a private key. I designed an authentication scheme that allows users to authenticate (i.e. give the application
                        enough information to regenerate the private key) with either their application password or a share of their private
                        key. To realize this schema, I created a variant of Shamir's Secret Sharing with one share based on the user's
                        password (via a PBKDF) and integrated the new authentication workflow into Edna.
                    </p>
                </div>
                <img className="section-img" style={{ width: "30%", }} src={ednaFig}></img>
            </div>

        </div>
    )
}

