import { Link } from "react-router-dom";
import { IMAGES } from "../constants/images";
import "../styles/footer.css";

function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="container footer-grid">
        <div className="footer-col">
          <img src={IMAGES.logo} alt="Penta Freight" className="footer-logo" />
          <p>
            Penta Freight Pvt. Ltd. — India's leading freight forwarder since 1993.
            ISO certified and CTPAT compliant logistics partner delivering goodwill worldwide.
          </p>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/industries">Industries</Link>
          <Link to="/pentakuhl">Pentakuhl</Link>
          <a href="#about">About Us</a>
        </div>

        <div className="footer-col">
          <h4>Services</h4>
          <a href="#air-freight">Air Freight</a>
          <a href="#sea-freight">Sea Freight</a>
          <a href="#multi-modal">Multi Modal Transport</a>
          <a href="#project-cargo">Project Cargo</a>
        </div>

        <div className="footer-col">
          <h4>Contact Us</h4>
          <p>Andheri Kurla Road, Marol</p>
          <p>Andheri (East), Mumbai 400059</p>
          <p>+91 22 2837 4242</p>
          <p>info@pentafreight.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>© {new Date().getFullYear()} Penta Freight Pvt. Ltd. — We Deliver Goodwill</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
