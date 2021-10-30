import './../App.css';
import fsabPic from "./../fsab_pic.png"
import brownPic from "./../brown_foto.png"



export default function ExperienceProjects() {
    return (
        <div className="experience-section" id="projects-experience-section">
            <h2 className = "section-heading" > Experience - Projects </h2>

            <div className="experience-card" >
                <div className="section-text">
                    <h3> Full Stack at Brown Project Manager </h3>
                    <p> 
                        This is a year-round extra currilcular activity. As a project manager,
                        I <span style={{fontWeight: "bold"}}> manage teams of 3-4 engineers and designers </span>,
                        building pro-bono projects to build websites / web apps for clients. <br/>
                        <br/>
                        <span style={{fontWeight: "bold"}}> Past projects </span> include <a href="http://www.brownlabmatch.com"> Brown Lab Match </a>
                        and <a href="https://brownclimbingclub.bottone.io"> Brown Climbing Club </a>.
                    </p>
                </div>
                <img className="section-img" style={{width: "15%",}} src={fsabPic}></img>
            </div>

            <div className="experience-card" >
                <div className="section-text">
                    <h3> Deep Forest </h3>
                    <p> 
                        This was the final project for my Deep Learning class. <br/>
                        Some colleagues and I built a deep forest! Check out the <a href={process.env.PUBLIC_URL + '/Deep-F-Poster.pdf'} target = "_blank"> project poster  </a>
                    </p>
                </div>
                <img className="section-img" style={{width: "20%",}} src={brownPic}></img>
            </div>

        </div>
    )
}

