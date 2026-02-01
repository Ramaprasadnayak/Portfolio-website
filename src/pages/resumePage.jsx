import pdf from "../assets/Resume.pdf";
import "../styles/resumePage.css";
export default function ResumePage() {
    return (
        <div className="resumepage">
            <section>
                <h2>My Resume</h2>
                <iframe src={pdf} width="100%" height="800px" style={{ borderRadius: "12px", border: "none", }} title="Resume PDF" />
            </section>
        </div>
    );
}
