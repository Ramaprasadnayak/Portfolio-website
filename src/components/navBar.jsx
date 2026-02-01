import { useLocation,useNavigate } from "react-router-dom";
import "../styles/navBar.css";
import Drawer from "./drawerButton";
import { MdHome, MdWork, MdCode, MdSchool, MdDescription, MdContacts } from "react-icons/md";


const navButtons = [
  { name: "Home", path: "/", icon: <MdHome /> },
  { name: "Projects", path: "/project", icon: <MdWork /> },
  { name: "Skills", path: "/skills", icon: <MdCode /> },
  { name: "Certificates", path: "/certificates", icon: <MdSchool /> },
  { name: "Resume", path: "/resume", icon: <MdDescription /> },
  { name: "Contacts", path: "/contacts", icon: <MdContacts /> }
];

export default function NavBar() {
    const location = useLocation();
    const navigate = useNavigate();
    const handleClick=(path)=>{
        navigate(path);
    }
    return (
        <nav className="navbar-container">
            <Drawer contents={navButtons}/>
            <div className="navbar-username">
                <div className="navbar-username-avatar">
                    <h2>RA</h2>
                </div>
                <div className="navbar-username-info">
                    <h5>Ramprasad Nayak</h5>
                    <p style={{fontSize:"12px"}}>Full Stack Developer</p>
                </div>
            </div>
            <div className="navbar-button-container">
                {
                    navButtons.map(
                        (icon) => (
                            <button
                                className={location.pathname === icon.path ? "navbar-button active" : "navbar-button"}
                                onClick={() => handleClick(icon.path)}>
                                <p style={{fontWeight:"bold"}}>{icon.name}</p>
                            </button>
                        )
                    )
                }
            </div>
        </nav>
    )
}