import { HashLink } from "react-router-hash-link";

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
                <HashLink smooth className="nav-link" to="/#skills-section">
                  Skills
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink smooth className="nav-link" to="/#project-showcase-section">
                  Project Showcase
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink smooth className="nav-link" to="/#contact-me-section">
                  Contact
                </HashLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
