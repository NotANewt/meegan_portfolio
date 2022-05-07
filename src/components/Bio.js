import profilePic from "../assets/img/profile-splat.png";
import resume from "../assets/resume/Meegan_Anderson_Resume.pdf";

function Bio() {
  return (
    <>
      {/* Section: Bio */}
      <div id="about-me-section" className="section section-light bg-image-green-1">
        <div className="container">
          <div className="row justify-content-center">
            {/* headshot */}
            <div id="about-me-img" className="col-sm d-none d-sm-block">
              <img src={profilePic} className="image-fluid" alt="Black and white headshot of Meegan."></img>
            </div>

            {/* About Me */}
            <div id="about-me-text" className="col-sm">
              <h6 className="font-title">About Me</h6>
              <h2 className="font-title">Meegan Anderson</h2>
              <div className="">
                <p>I am a full stack web developer and scientist that enjoys video games, yoga, and weight lifting! The logic and problem solving parts of a researcher's life have translated well to development, and I love the challenge and creativity that comes with coding and debugging!</p>
              </div>

              <ul className="bio-links">
                <li>
                  <strong>GitHub:</strong>
                  <a href="https://github.com/NotANewt" target="_blank" rel="noreferrer">
                    github.com/NotANewt
                  </a>
                </li>
                <li>
                  <strong>Phone:</strong> 312-344-3268
                </li>
                <li>
                  <strong>Website:</strong>
                  <a href="https://notanewt.github.io/meegan_portfolio/" target="_blank" rel="noreferrer">
                    notanewt.github.io/portfolio/
                  </a>
                </li>
                <li>
                  <strong>Mail:</strong>
                  <a href="mailto:meegan.r.anderson@gmail.com">meegan.r.anderson@gmail.com</a>
                </li>
                <li>
                  <strong>LinkedIn:</strong>
                  <a href="https://www.linkedin.com/in/meegan-r-anderson" target="_blank" rel="noreferrer">
                    @meegan-r-anderson
                  </a>
                </li>

                <li>
                  <strong>Degree:</strong> MA, BSc
                </li>
              </ul>
              <div>
                {" "}
                <a href={resume} target="_blank" rel="noreferrer" className="btn btn-primary" tabIndex="-1" role="button">
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Bio;
