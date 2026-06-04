import { Link } from "react-router-dom";
import HeroSlider from "../components/HeroSlider";
import TransportSection from "../components/TransportSection";
import SectionHeader from "../components/SectionHeader";
import { IMAGES } from "../constants/images";
import "../styles/home.css";

const stats = [
  { number: "25+", label: "Years of Service" },
  { number: "8", label: "Branch Offices" },
  { number: "106+", label: "Team Members" },
  { number: "ISO", label: "Certified Quality" },
];

const features = [
  {
    title: "Professional Management",
    text: "Experienced, efficient and streamlined shipment management with 24/7 availability.",
    icon: "01",
  },
  {
    title: "Licensed Customs Agents",
    text: "Licensed customs house agents with strong relations with authorities worldwide.",
    icon: "02",
  },
  {
    title: "Efficient Pricing",
    text: "Competitive pricing and capacity assurance with carriers for lower supply chain costs.",
    icon: "03",
  },
  {
    title: "Contemporary Warehouse",
    text: "Dedicated temperature-controlled transit warehouse for reliable, flexible operations.",
    icon: "04",
  },
  {
    title: "Quality and Security",
    text: "ISO certified and CTPAT compliant organization creating value through partnerships.",
    icon: "05",
  },
  {
    title: "25 Years of Service",
    text: "India's leading freight forwarder embracing industry advancements for two decades.",
    icon: "06",
  },
];

const services = [
  { id: "air-freight", title: "Air Freight", image: IMAGES.cargoPlane, text: "Global air cargo with priority handling and time-critical deliveries." },
  { id: "sea-freight", title: "Sea Freight", image: IMAGES.cargoShip, text: "Cost-effective ocean freight for FCL and LCL shipments worldwide." },
  { id: "multi-modal", title: "Multi Modal", image: IMAGES.seaPort, text: "Seamless air, sea, and road integration for end-to-end logistics." },
  { id: "project-cargo", title: "Project Cargo", image: IMAGES.cargoShip, text: "Specialized handling for oversized and heavy-lift project shipments." },
  { id: "custom-broking", title: "Custom Broking", image: IMAGES.airplane, text: "Licensed customs clearance with expert documentation support." },
  { id: "transit-warehouse", title: "Transit Warehouse", image: IMAGES.seaPort, text: "Temperature-controlled warehousing near Mumbai Air Cargo Complex." },
];

const testimonials = [
  {
    logo: IMAGES.sunPharma,
    name: "Sun Pharma",
    quote:
      "Penta Freight is a pioneer in various ways: They were amongst the first forwarders to become our Premium Partner and so far they are the only one in India. They retain the highest levels of expertise for Pharmaceutical and Healthcare logistics.",
  },
  {
    logo: IMAGES.watsonPharma,
    name: "Watson Pharma",
    quote:
      "Penta Freight has consistently demonstrated professionalism in managing our international shipments. Their team understands pharmaceutical logistics and delivers reliable, compliant solutions every time.",
  },
];

function Home() {
  return (
    <main className="home-page">
      <HeroSlider />

      <section className="stats-bar">
        <div className="container stats-grid">
          {stats.map((item) => (
            <div className="stat-item" key={item.label}>
              <span className="stat-number">{item.number}</span>
              <span className="stat-label">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <TransportSection />

      <section className="about-intro" id="about">
        <div className="container about-grid">
          <div className="about-image-wrap">
            <img src={IMAGES.cargoPlane} alt="Air freight logistics" className="about-image" />
            <div className="about-badge">
              <span className="badge-year">1993</span>
              <span className="badge-text">Established</span>
            </div>
          </div>
          <div className="about-text">
            <span className="section-label">About Us</span>
            <h2>Why Penta Freight?</h2>
            <p>
              Penta Freight Pvt. Ltd. was incorporated in 1993 by young professionals from
              the cargo industry. From a modest beginning, we attained the distinction of
              being one of India's leading freight forwarders with pan-India presence.
            </p>
            <p>
              We provide air freight, sea freight, multimodal transport, project cargo,
              customs broking, and transit warehousing across pharmaceuticals, chemicals,
              engineering, electronics, automotive, energy, and textiles.
            </p>
            <ul className="about-list">
              <li>ISO 9001:2015 Certified</li>
              <li>CTPAT Compliant</li>
              <li>FIATA & IATA Certified Agent</li>
            </ul>
            <a href="#contact" className="btn-primary">
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <SectionHeader label="Our Strengths" title="Why Choose Us" />
          <div className="features-grid">
            {features.map((item) => (
              <div className="feature-card" key={item.title}>
                <div className="feature-icon-wrap">
                  <span className="feature-icon">{item.icon}</span>
                </div>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <SectionHeader label="What We Offer" title="Our Services" />
          <div className="services-grid">
            {services.map((item) => (
              <div className="service-card" id={item.id} key={item.id}>
                <div className="service-image">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="service-body">
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                  <span className="service-link">Learn more →</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <div className="container">
          <SectionHeader label="Client Voices" title="Testimonials" light />
          <div className="testimonials-grid">
            {testimonials.map((item) => (
              <div className="testimonial-card" key={item.name}>
                <div className="quote-mark">"</div>
                <img src={item.logo} alt={item.name} className="testimonial-logo" />
                <blockquote>{item.quote}</blockquote>
                <cite>— {item.name}</cite>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pentakuhl-banner">
        <div className="container pentakuhl-card">
          <div className="pentakuhl-text">
            <span className="section-label">Cold Chain Division</span>
            <h3>A Division of Penta Freight</h3>
            <p>
              PentaKÜHL specializes in temperature-sensitive pharmaceutical solutions
              with a unique range of passive packaging products.
            </p>
            <Link to="/pentakuhl" className="btn-primary">
              Explore PentaKÜHL →
            </Link>
          </div>
          <div className="pentakuhl-images">
            <img src={IMAGES.pentakuhl} alt="PentaKuhl" className="pentakuhl-img" />
            <div className="pelican-box">
              <img src={IMAGES.pelican} alt="Pelican BioThermal" />
              <p>Authorised Distributors for Pelican</p>
            </div>
          </div>
        </div>
      </section>

      <section className="partners-section">
        <div className="container">
          <p className="partners-title">Trusted By Industry Leaders</p>
          <div className="partners-inner">
            <img src={IMAGES.pharmaAero} alt="Pharma.Aero" className="partner-logo" />
            <img src={IMAGES.sunPharma} alt="Sun Pharma" className="partner-logo" />
            <img src={IMAGES.watsonPharma} alt="Watson Pharma" className="partner-logo" />
            <img src={IMAGES.pelican} alt="Pelican" className="partner-logo" />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
