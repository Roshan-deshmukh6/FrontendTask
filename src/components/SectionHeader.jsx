function SectionHeader({ label, title, light = false }) {
  return (
    <div className={`section-header ${light ? "section-header-light" : ""}`}>
      {label && <span className="section-label">{label}</span>}
      <h2 className="section-title">{title}</h2>
    </div>
  );
}

export default SectionHeader;
