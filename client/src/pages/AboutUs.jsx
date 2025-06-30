import "./AboutUs.css";


export default function AboutUs() {
    const teamMembers = [
        { name: "Joshua Porras", role: "Project Manager", image: "/abtuspictures/porras.jpg", github: "https://github.com/Johsh926" },
        { name: "Roxanne Fama", role: "Full Stack Developer", image: "/abtuspictures/fama.jpg", github: "https://github.com/xaaann" },
        { name: "Mary Louise Fuentes", role: "Generalist", image: "/abtuspictures/mary.jpg", github: "https://github.com/LouisseFuentes" },
        { name: "Mervan Palma", role: "Generalist", image: "/abtuspictures/mervan.jpg", github: "https://github.com/mervanpalma" },
        { name: "Jonamae Gadong", role: "UI/UX", image: "/abtuspictures/gadong.jpg", github: "https://github.com/jonamae090" },
        { name: "Emmanne Angelo Peñas", role: "UI/UX", image: "/abtuspictures/emman.jpg", github: "https://github.com/emmannepenas" },
        { name: "Jheann Kate Robles", role: "UI/UX", image: "/abtuspictures/robles.jpg", github: "https://github.com/jheann0" },
    ];


    return (
        <div className="team-container">
            <h1 className="team-title">Meet the team behind <span className="highlight">ConfirmDen</span></h1>
            <p className="team-description">
                We are second-year students at WIT dedicated to combating the spread of misinformation and fake news on social media platforms.
            </p>
            <p className="team-description">
                Using fact-checking methodologies and AI-powered tools, we analyze trending stories to separate facts from fiction, helping readers make informed decisions about the content they consume.
            </p>
            <p className="team-description">
                Our goal is to promote media literacy and critical thinking skills in an increasingly complex information landscape.
            </p>
           
            <div className="team-grid">
                {teamMembers.map((member, index) => (
                    <div key={index} className="team-card">
                        <img src={member.image} alt={member.name} className="team-image" />
                        <a href={member.github} target="_blank" rel="noopener noreferrer" className="team-name">
                            {member.name}
                        </a>
                        <p className="team-role">{member.role}</p>
                    </div>
                ))}
            </div>


            <div className="learn-more-container">
                <button className="learn-more-btn">Learn more →</button>
            </div>
        </div>
    );
}
