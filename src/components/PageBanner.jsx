import { Link } from "react-router-dom";

function PageBanner({ title, subtitle, bgImage }) {
  return (
    <section
      className="page-banner"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="page-banner-overlay"></div>
      <div className="container page-banner-content fade-up">
        <p className="breadcrumb">
          <Link to="/">Home</Link> / {title}
        </p>
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </section>
  );
}

export default PageBanner;
