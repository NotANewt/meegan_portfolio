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
                <a className="nav-link" href="/meegan_portfolio">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/meegan_portfolio/#skills-section">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/meegan_portfolio/#project-showcase-section">
                  Project Showcase
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/meegan_portfolio/#contact-me-section">
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
