function Header() {
  return (
    <>
      {/* Section: Nav */}
      <nav className="navbar navbar-expand-lg navbar-dark">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="container">
          <div className="collapse navbar-collapse font-title" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./#skills-section">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./#project-showcase-section">
                  Project Showcase
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./#contact-me-section">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
