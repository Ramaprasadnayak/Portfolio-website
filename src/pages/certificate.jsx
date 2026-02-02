import "../styles/certificate.css";
import angular from "../assets/certificates/angular.png";
import hackseek from "../assets/certificates/hackandseek.png";
import datascience from "../assets/certificates/datascience.png";
const certificates = [
  {
    id: 1,
    title: "Angular Workshop",
    org: "Web Development Training",
    image: angular,
  },
  {
    id: 2,
    title: "Hack & seek",
    org: "Event",
    image: hackseek,
  },
  {
    id:3,
    title:"Job ready data Science",
    org:"Data Science",
    image: datascience
  }
];

export default function Certificate() {
  return (
    <div className="certificate-page">
      <h1 className="certificate-title">My Certificates</h1>

      <div className="certificate-grid">
        {certificates.map((cert) => (
          <div className="certificate-card" key={cert.id}>
            <img src={cert.image} alt={cert.title} />
            <h3>{cert.title}</h3>
            <p>{cert.org}</p>
          </div>
        ))}
      </div>
    </div>
  );
}