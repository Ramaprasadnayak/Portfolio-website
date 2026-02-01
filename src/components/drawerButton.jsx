import { MdMenu } from "react-icons/md";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/drawer.css";

export default function Drawer({ contents = [] }) {
    const [open, setOpen] = useState(false);
    const drawerRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (open && drawerRef.current && !drawerRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [open]);

    const handleclick = (path) => {
        navigate(path);
        setOpen(false)
    };

    return (
        <div className="mydrawer">
            <button onClick={() => setOpen(true)} className="drawer-btn"><MdMenu size={32} /></button>
            <div ref={drawerRef} className={`drawer ${open ? "open" : ""}`}>
                <h1 style={{ color: "rgb(233, 220, 169)" }}>Portfolio</h1>
                <hr />
                <div className="sets">
                    {
                        contents.map(
                            (content) => (
                                <p className="options" onClick={() => handleclick(content.path)}>{content.icon}{content.name}</p>
                            )
                        )
                    }
                </div>
            </div>

        </div>
    )
}

