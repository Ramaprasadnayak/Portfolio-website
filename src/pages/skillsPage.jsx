import "../styles/skillsPage.css";
import { icons } from "../assets/icons";
const programming = [
    { name: "C", icon: icons.c, level: 70 },
    { name: "Python", icon: icons.python, level: 75 },
    { name: "Java", icon: icons.java, level: 70 },
    { name: "Dart", icon: icons.dart, level: 65 },
    { name: "JavaScript", icon: icons.js, level: 80 }
]

const web = [
    { name: "HTML", icon: icons.html5, level: 85 },
    { name: "CSS", icon: icons.css, level: 80 },
    { name: "React", icon: icons.react, level: 75 },
    { name: "Node.js", icon: icons.node, level: 70 },
    { name: "Express", icon: icons.express, level: 65 }
]

const database= [
    { name: "MySQL", icon: icons.sql, level: 70 },
    { name: "MongoDB", icon: icons.mongo, level: 75 },
    { name: "Firebase", icon: icons.firebase, level: 65 }
]

const ml= [
    { name: "TensorFlow", icon: icons.tensor },
    { name: "OpenCV", icon: icons.opencv },
    { name: "Scikit-learn", icon: icons.sklearn },
    { name: "Matplotlib", icon: icons.matplotlib }
]

const mobile= [
    { name: "Flutter", icon: icons.flutter, level: 70 },
    { name: "Firebase", icon: icons.firebase, level: 65 }
]

export default function SkillPage() {
    return (
        <div className="skillspage">
            <div className="skillpage-container">

                <div className="skillpage-row">
                    <h3>Programming languages</h3>
                    <div className="skillpage-programming">
                    {
                        programming.map(
                            (skill)=>(
                                <div className="skillpage-skills">
                                    <img src={skill.icon} alt={skill.name} draggable={false}/>
                                    <h3>{skill.name}</h3>
                                </div>
                            )
                        )
                    }
                    </div>
                    <hr />
                </div>


                <div className="skillpage-row">
                    <h3>Web development</h3>
                    <div className="skillpage-programming">
                    {
                        web.map(
                            (skill)=>(
                                <div className="skillpage-skills">
                                    <img src={skill.icon} alt={skill.name} draggable={false}/>
                                    <h3>{skill.name}</h3>
                                </div>
                            )
                        )
                    }
                    </div>
                    <hr />
                </div>


                <div className="skillpage-row">
                    <h3>Database</h3>
                    <div className="skillpage-programming">
                    {
                        database.map(
                            (skill)=>(
                                <div className="skillpage-skills">
                                    <img src={skill.icon} alt={skill.name} draggable={false}/>
                                    <h3>{skill.name}</h3>
                                </div>
                            )
                        )
                    }
                    </div>
                    <hr />
                </div>


                <div className="skillpage-row">
                    <h3>Machine Learning</h3>
                    <div className="skillpage-programming">
                    {
                        ml.map(
                            (skill)=>(
                                <div className="skillpage-skills">
                                    <img src={skill.icon} alt={skill.name} draggable={false}/>
                                    <h3>{skill.name}</h3>
                                </div>
                            )
                        )
                    }
                    </div>
                    <hr />
                </div>


                <div className="skillpage-row">
                    <h3>Mobile Development</h3>
                    <div className="skillpage-programming">
                    {
                        mobile.map(
                            (skill)=>(
                                <div className="skillpage-skills">
                                    <img src={skill.icon} alt={skill.name} draggable={false}/>
                                    <h3>{skill.name}</h3>
                                </div>
                            )
                        )
                    }
                    </div>
                    <hr />
                </div>

            </div>
        </div>
    )
}