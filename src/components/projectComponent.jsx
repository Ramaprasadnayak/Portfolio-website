import "../styles/pcomponent.css";
import { MdCode } from "react-icons/md";

export default function ProjectComponent({ name = "", img = null, info = "", tech = {} }) {
    return (
        <div className="projectcomponent-container">
            <div className="projectcomponent-image">
                <img src={img} alt="project image" />
            </div>
            <div className="projectcomponent-info">
                <h3>{name}</h3>
                <p>{info}</p>
                <div className="projectcomponent-tech-container">
                    {
                        Object.values(tech).map(
                            (item,index) => (
                                <div key={index} className="projectcomponent-tech">
                                    {item}
                                </div>
                            )
                        )
                    }
                </div>
                <div style={{display:"flex",justifyContent:"end"}}>
                    <button className="projectcomponent-button"><MdCode/>code</button>
                </div>
            </div>
        </div>
    )
}