import umbrellaSS from "../assets/img/do_you_need_an_umbrella_ss.png";

function Umbrella(props) {
  return (
    <>
      {/* Section: Project */}
      <div id="project-details-section" className="section section-light bg-image-red-2">
        <div className="container">
          <div className="row">
            {/* screen shot */}
            <div id="screenshot-img" className="col-sm screenshot-img">
              <img src={umbrellaSS} alt="Screen shot of Do You Need An Umbrella on desktop"></img>
            </div>

            {/* About Project */}
            <div id="about-project-text" className="col-sm">
              <h6 className="font-title">About Project</h6>
              <h2 className="font-title">Do You Need An Umbrella?</h2>
              <div>
                <p>A weather application that uses geolocation or an entered zip code to inform the user if they need an umbrella using text and a weather-related gif.</p>
              </div>
              <div className="row">
                <div className="col-md-7">
                  <ul className="project-links">
                    <li>
                      <strong>Link:</strong>
                      <a href="https://the-camelcasers.github.io/project/" target="_blank" rel="noreferrer">
                        Do You Need An Umbrella?
                      </a>
                    </li>
                    <li>
                      <strong>Source:</strong>
                      <a href="https://github.com/The-camelCasers/project" target="_blank" rel="noreferrer">
                        github.com/The-camelCasers
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="col-md">
                  <a href="https://github.com/The-camelCasers/project/archive/refs/heads/main.zip" target="_blank" rel="noreferrer" className="btn btn-primary" tabIndex="-1" role="button">
                    Download Project
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Umbrella;
