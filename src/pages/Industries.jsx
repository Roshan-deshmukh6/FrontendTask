import PageBanner from "../components/PageBanner";
import SectionHeader from "../components/SectionHeader";
import { IMAGES } from "../constants/images";
import "../styles/industries.css";

const industries = [
  {
    title: "Pharmaceutical",
    image: IMAGES.pharma,
    text: "GDP-certified handling, cold chain expertise, and dedicated PentaKÜHL division for temperature-controlled shipments.",
  },
  {
    title: "Chemical",
    image: IMAGES.chemical,
    text: "Certified personnel handle dangerous and hazardous goods with full international compliance and safety standards.",
  },
  {
    title: "Engineering",
    image: IMAGES.engineering,
    text: "Engineering goods with specialized documentation, project cargo handling, and multimodal transport solutions.",
  },
  {
    title: "Electronics",
    image: IMAGES.electronics,
    text: "Time-sensitive electronics with secure packaging, priority routing, and tracking across global destinations.",
  },
  {
    title: "Automobile",
    image: IMAGES.automobile,
    text: "Automotive logistics including spare parts, components, and finished goods with efficient supply chain management.",
  },
  {
    title: "Energy",
    image: IMAGES.energy,
    text: "Energy sector cargo for oil, gas, and renewable energy projects with specialized handling worldwide.",
  },
  {
    title: "Textiles",
    image: IMAGES.textiles,
    text: "Textile exports from India to global markets with competitive rates and comprehensive customs support.",
  },
];

function Industries() {
  return (
    <main className="industries-page">
      <PageBanner
        title="Industries"
        subtitle="Specialized logistics solutions tailored for every sector"
        bgImage={IMAGES.industriesBanner}
      />

      <section className="industries-intro">
        <div className="container intro-box">
          <SectionHeader
            label="Sector Expertise"
            title="Industries We Serve"
          />
          <p className="intro-text">
            Penta Freight serves diverse industries with tailored freight forwarding
            solutions. Our expertise spans air, sea, and multimodal transport with
            ISO certification and CTPAT compliance.
          </p>
        </div>
      </section>

      <section className="industries-list">
        <div className="container">
          {industries.map((item, index) => (
            <div
              className={`industry-row ${index % 2 === 1 ? "reverse" : ""}`}
              key={item.title}
            >
              <div className="industry-image">
                <img src={item.image} alt={item.title} />
                <span className="industry-number">{String(index + 1).padStart(2, "0")}</span>
              </div>
              <div className="industry-content">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="industries-cta">
        <div className="container cta-inner">
          <h3>Need industry-specific logistics support?</h3>
          <p>Our team delivers customized freight forwarding solutions worldwide.</p>
          <a href="#contact" className="btn-primary">
            Contact Us Today
          </a>
        </div>
      </section>
    </main>
  );
}

export default Industries;
