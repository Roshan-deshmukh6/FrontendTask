import { IMAGES } from "../constants/images";
import SectionHeader from "./SectionHeader";
import "../styles/transport.css";

const modes = [
  {
    id: "air-freight",
    image: IMAGES.cargoPlane,
    icon: "✈",
    title: "Air Freight",
    text: "Time-critical cargo via global airline networks. Priority handling, express clearance, and door-to-airport delivery for urgent shipments.",
    features: ["IATA Certified Agent", "Express & Standard", "Pharma & DG Cargo"],
  },
  {
    id: "sea-freight",
    image: IMAGES.cargoShip,
    icon: "⚓",
    title: "Sea Freight",
    text: "Full container (FCL) and less-than-container (LCL) ocean freight. Reliable schedules with leading shipping lines worldwide.",
    features: ["FCL & LCL", "Global Ports", "Project & Bulk Cargo"],
  },
];

function TransportSection() {
  return (
    <section className="transport-section" id="transport">
      <div className="container">
        <SectionHeader label="Global Reach" title="Air & Sea Transport" />
        <div className="transport-grid">
          {modes.map((item) => (
            <article className="transport-card" key={item.id}>
              <div className="transport-image">
                <img src={item.image} alt={item.title} />
                <span className="transport-icon">{item.icon}</span>
              </div>
              <div className="transport-body">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <ul>
                  {item.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <a href={`#${item.id}`} className="transport-link">
                  View service details →
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="transport-banner">
          <img src={IMAGES.seaPort} alt="Shipping port" className="transport-banner-bg" />
          <div className="transport-banner-overlay"></div>
          <div className="transport-banner-text">
            <img src={IMAGES.airplane} alt="Airplane" className="transport-banner-plane" />
            <h3>Multimodal Logistics</h3>
            <p>
              Seamlessly combine air, sea, and road transport for end-to-end supply
              chain solutions across 8 branch offices in India and global partners.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TransportSection;
