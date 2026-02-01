import "../styles/certificate.css";

const certificates = [
  {
    id: 1,
    title: "Angular Workshop",
    org: "Web Development Training",
    image: "src/assets/certificates/angular.png",
  },
  {
    id: 2,
    title: "Hack & seek",
    org: "Event",
    image: "src/assets/certificates/hackandseek.png",
  },
  {
    id:3,
    title:"Job ready data Science",
    org:"Data Science",
    image:"src/assets/certificates/datascience.png"
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