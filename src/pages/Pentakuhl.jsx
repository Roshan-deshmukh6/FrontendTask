import { Link } from "react-router-dom";
import PageBanner from "../components/PageBanner";
import SectionHeader from "../components/SectionHeader";
import { IMAGES } from "../constants/images";
import "../styles/pentakuhl.css";

const products = [
  {
    title: "Parcel Shippers",
    text: "Single-use and reusable parcel shippers for temperature-sensitive pharmaceutical products with validated thermal performance.",
  },
  {
    title: "Pallet Shippers",
    text: "Reusable and single-use pallet solutions for bulk pharma with durable, temperature-locked environments.",
  },
  {
    title: "Crēdo Cube™",
    text: "Durable protection across wide temperature ranges using VIPs, PCMs and TICS for long-lasting control.",
  },
];

const services = [
  "Temperature controlled consignments",
  "Clinical Trial Logistics",
  "Cold chain surface transport",
  "ISTA 7D Validated packaging solutions",
  "Maintenance & refurbishment of Peli BioThermal shippers",
  "IOT data loggers for real-time temperature mapping",
];

function Pentakuhl() {
  return (
    <main className="pentakuhl-page">
      <PageBanner
        title="PentaKÜHL"
        subtitle="Cold Chain Packaging Solutions — A Division of Penta Freight"
        bgImage={IMAGES.pentakuhlBanner}
      />

      <section className="pentakuhl-about">
        <div className="container pentakuhl-about-inner">
          <div className="pentakuhl-about-text">
            <img src={IMAGES.pentakuhl} alt="PentaKuhl" className="pentakuhl-logo-large" />
            <span className="section-label">Our Division</span>
            <h2>A Division of Penta Freight</h2>
            <p>
              PentaKÜHL was formed to facilitate and upgrade the cold chain corridor
              in India. As the sole authorised distributor of Peli BioThermal products,
              we offer seamless, quality assured supply chain experiences.
            </p>
            <p>
              We specialise in temperature sensitive shipments of IMP's, Comparators,
              API's, high value finished formulations, and DG samples.
            </p>
          </div>
          <div className="pentakuhl-pelican">
            <img src={IMAGES.pelican} alt="Pelican BioThermal" />
            <h4>Authorised Distributors</h4>
            <p className="pelican-brand">Pelican BioThermal™</p>
            <p>
              Wide range of products addressing pharmaceutical requirements with
              quality standards maintained from origin to destination.
            </p>
          </div>
        </div>
      </section>

      <section className="pentakuhl-products">
        <div className="container">
          <SectionHeader label="Packaging" title="Our Products" />
          <div className="products-grid">
            {products.map((item, i) => (
              <div className="product-card" key={item.title}>
                <span className="product-num">0{i + 1}</span>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pentakuhl-services">
        <div className="container">
          <SectionHeader label="Capabilities" title="Our Services" />
          <ul className="services-list">
            {services.map((item) => (
              <li key={item}>
                <span className="check-icon">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="pentakuhl-logistics">
        <div className="container logistics-inner">
          <div className="logistics-text">
            <span className="section-label section-label-light">Logistics</span>
            <h3>Clinical Trial Logistics</h3>
            <p>
              Managing clinical trial projects for prominent CRO's and Pharmaceutical
              companies in India.
            </p>
            <ul>
              <li>IMPs export to CRO's globally</li>
              <li>Cryogenic biological sample shipping</li>
              <li>RLD imports for Bio Availability studies</li>
              <li>Dedicated import/export teams</li>
              <li>Own fleet of reefer control vehicles</li>
              <li>In-house customs clearance</li>
              <li>8 major airport locations</li>
            </ul>
          </div>
          <div className="logistics-image">
            <img src={IMAGES.cargoPlane} alt="Air cargo cold chain logistics" />
          </div>
        </div>
      </section>

      <section className="pentakuhl-cta">
        <div className="container">
          <h3>Your Trusted Cold Chain Partner in India</h3>
          <p>Precision, reliability, and innovation across every mile.</p>
          <div className="cta-buttons">
            <a href="#contact" className="btn-primary">
              Contact Us
            </a>
            <Link to="/" className="btn-outline-dark">
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Pentakuhl;
