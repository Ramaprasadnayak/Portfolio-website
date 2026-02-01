import {  MdRocketLaunch } from "react-icons/md";
import "../styles/projectPage.css";
import ProjectComponent from "../components/projectComponent";
import bustracker from "../assets/bustracker.png"
import chatterbro from "../assets/chatterbro.png";
import leetcode from "../assets/leetcode.png";
import electrohub from "../assets/electrohub.png";

const projects=[
    {
        name:"ChaterBro",
        img:chatterbro,
        tech:{
            tech1:"Flutter",
            tech2:"Firebase-Auth",
            tech3:"Firebase-FireStore"
        },
        info:"A real-time chat application built with Flutter, using Firebase Authentication for secure user login and Cloud Firestore for real-time messaging and data synchronization."
    },
    {
        name:"ElectroHub",
        img:electrohub,
        tech:{
            tech1:"React",
            tech2:"Mysql",
            tech3:"Express",
            tech4:"nodeJs"
        },
        info:"Built ElectroHub, a full-featured e-commerce platform using modern web technologies. Implemented user authentication, dynamic product catalog, shopping cart, order management, and responsive UI for seamless online shopping across devices."
    },
    {
        name:"BusTracker",
        img:bustracker,
        tech:{
            tech1:"Flutter",
            tech2:"MongoDB",
            tech3:"SpringBoot",
            tech4:"Docker",
        },
        info:"Bus Tracker application using Flutter that allows users to view bus routes and track bus locations in real time. Focused on responsive UI design and efficient data handling for smooth performance."
    },
    {
        name:"Leet-Code",
        img:leetcode,
        tech:{
            tech1:"React",
            tech2:"MongoDB",
            tech3:"ExpressJs",
            tech4:"NodeJs",
            tech5:"Docker",
        },
        info:"Developed a LeetCode-like coding practice web application using React, allowing users to browse problems, view descriptions, and track progress through an interactive UI."
    }
];
export default function Projects(){
    return(
        <div className="projectpage">
            <div className="project-container">
                <h1><MdRocketLaunch color="red"/>Projects</h1>
                <p>A collection of my major works -</p>
                <div className="project-list">
                    {
                        projects.map(
                            (project,index)=>(
                                <ProjectComponent key={index} name={project.name} img={project.img} info={project.info} tech={project.tech}/>
                            )
                        )
                    }
                </div>
            </div>
        </div>
    )
}