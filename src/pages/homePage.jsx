import "../styles/homePage.css";
const skills = [
    { name: "Web Developer" },
    { name: "AI Enthusiast" },
    { name: "Tech Explorer" },
    { name: "Machine Learning" },
    { name: "App Developer" },
]
const information=[
    {name:"Location",key:"Kaup, Karnataka, India",icon:"📍"},
    {name:"Expertise",key:"Web Dev,Problem Solving",icon:"🛠️"},
    {name:"Contact",key:"ramprasadnayak999@gmail.com",icon:"✉️"}
]
export default function HomePage() {
    return (
        <div className="homepage-container">
            <div className="homepage-avatar-container"><div className="homepage-avatar"></div></div>
            <div className="homepage-userinfo">
                <div className="homepage-headding">
                    <h1>Hi, I'm <span>Ramprasad Nayak</span></h1>
                    <div className="typing" style={{ color: "#9CA3AF" }}>Full Stack developer | App Developer | Artificial Intelligence Engineer</div>
                </div>
                <div className="homepage-skills">
                    {
                        skills.map(
                            (skill) => (
                                <div className="homepage-skills-container">
                                    {skill.name}
                                </div>
                            )
                        )
                    }
                </div>
                <div className="homepage-info">
                    {
                        information.map(
                            (info)=>(
                                <div className="homepage-info-container">
                                    <div>{info.icon} {info.name}</div>
                                    <div style={{ color: "#9CA3AF" }}>{info.key}</div>
                                </div>
                            )
                        )
                    }
                </div>
            </div>
        </div>
    )
}