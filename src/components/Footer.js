import resume from "../assets/resume/Meegan_Anderson_Resume.pdf";
import { HashLink } from "react-router-hash-link";

function Footer() {
  return (
    <>
      {/* Section: Action */}
      <div id="action-section" className="section section-medium section-padded">
        <div className="container center-content">
          <p className="action-text font-title">
            Would you like to work with me?
            <br></br>
            <a href={resume} target="_blank" rel="noreferrer" className="btn btn-transparent" tabIndex="-1" role="button">
              Download Resume
            </a>
          </p>
        </div>
      </div>
      {/* Section: Contact Me */}
      <div id="contact-me-section" className="section section-light bg-image-blue-1">
        <div className="container">
          <div>
            <h6 className="font-title">Get in touch</h6>
            <h2 className="font-title">Contact Me</h2>
          </div>

          <div className="row">
            <div className="col-md-5">
              <h3 className="font-title">Let's develop something together!</h3>
              <p>If you like what you've seen so far, you can reach me via the ways listed.</p>
            </div>

            <div className="col-md-6 offset-md-1">
              <ul className="icon-list">
                <li>
                  <i className="fa-solid fa-mobile-screen-button"></i> 630-728-2730
                </li>

                <li>
                  <i className="fa-solid fa-paper-plane"></i>
                  <a href="mailto:meegan.r.anderson@gmail.com">meegan.r.anderson@gmail.com</a>
                </li>
                <li>
                  <i className="fa-brands fa-linkedin"></i>{" "}
                  <a href="https://www.linkedin.com/in/meegan-r-anderson" target="_blank" rel="noreferrer">
                    @meegan-r-anderson
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Section: Footer */}
      <footer id="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h4 className="font-title">Meegan Anderson</h4>
              <p>I am a full stack developer based in Illinois, United States.</p>
            </div>

            <div className="col-md offset-md-1">
              <h4 className="font-title">Useful Links</h4>
              <ul className="footer-links">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <HashLink smooth to="/#skills-section">
                    Skills
                  </HashLink>
                </li>
                <li>
                  <HashLink smooth to="/#project-showcase-section">
                    Project Showcase
                  </HashLink>
                </li>
              </ul>
            </div>

            <div className="col-md">
              <h4 className="font-title">Get in touch</h4>
              <ul className="git-list">
                <li>630-728-2730</li>
                <li>
                  <a href="mailto:meegan.r.anderson@gmail.com">meegan.r.anderson@gmail.com</a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/meegan-r-anderson" target="_blank" rel="noreferrer">
                    @meegan-r-anderson
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
