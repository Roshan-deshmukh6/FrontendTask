import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IMAGES } from "../constants/images";

const slides = [
  {
    image: IMAGES.cargoPlane,
    title: "Air Freight",
    subtitle: "Fast, Reliable Global Air Cargo Solutions",
  },
  {
    image: IMAGES.cargoShip,
    title: "Sea Freight",
    subtitle: "Cost-Effective Ocean Shipping Worldwide",
  },
  {
    image: IMAGES.seaPort,
    title: "Providing Specialized",
    subtitle: "Freight Forwarding Services",
  },
];

function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index) => setCurrent(index);

  return (
    <section className="hero-slider">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === current ? "active" : ""}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="slide-overlay"></div>
          <div className="slide-content container">
            <span className="hero-badge">We Deliver Goodwill</span>
            <h1>{slide.title}</h1>
            <h2>{slide.subtitle}</h2>
            <div className="hero-buttons">
              <a href="#transport" className="btn-primary">
                Our Transport
              </a>
              <Link to="/industries" className="btn-outline">
                Our Industries
              </Link>
            </div>
          </div>
        </div>
      ))}

      <div className="slider-progress">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={index === current ? "progress-bar active" : "progress-bar"}
            onClick={() => goTo(index)}
            aria-label={`Slide ${index + 1}`}
          >
            <span className="progress-fill"></span>
          </button>
        ))}
      </div>

      <button
        type="button"
        className="slider-arrow prev"
        onClick={() => goTo((current - 1 + slides.length) % slides.length)}
        aria-label="Previous"
      >
        ←
      </button>
      <button
        type="button"
        className="slider-arrow next"
        onClick={() => goTo((current + 1) % slides.length)}
        aria-label="Next"
      >
        →
      </button>
    </section>
  );
}

export default HeroSlider;
