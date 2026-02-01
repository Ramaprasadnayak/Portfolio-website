import "../styles/contact.css";

export default function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-card">
        <h1>Contact Me</h1>

        <div className="contact-item">
          <p>🐙 GitHub</p>
          <a href="https://github.com/Ramaprasadnayak" target="_blank">
            https://github.com/Ramaprasadnayak
          </a>
        </div>

        <div className="contact-item">
          <p>💼 LinkedIn</p>
          <a href="https://www.linkedin.com/in/ramprasad-nayak-a7b90b293" target="_blank">
            https://www.linkedin.com/in/ramprasad-nayak-a7b90b293
          </a>
        </div>

        <div className="contact-item">
          <p>📞 Phone</p>
          <span>+91 8277615951</span>
        </div>

        <div className="contact-item">
          <p>📧 Email</p>
          <span>ramprasadnayak999@gmail.com</span>
        </div>
      </div>
    </div>
  );
}
