import weatherSS from "../assets/img/weather_dashboard_ss.png";

function TechTalk(props) {
  return (
    <>
      {/* Section: Project */}
      <div id="project-details-section" className="section section-light bg-image-red-2">
        <div className="container">
          <div className="row">
            {/* screen shot */}
            <div id="screenshot-img" className="col-sm screenshot-img">
              <img src={weatherSS} alt="Screen shot of Weather Dashboard on desktop"></img>
            </div>

            {/* About Project */}
            <div id="about-project-text" className="col-sm">
              <h6 className="font-title">About Project</h6>
              <h2 className="font-title">Weather Dashboard</h2>
              <div>
                <p>A weather application where users can share their location information and be shown the current weather and five-day forecast and/or search by zip code.</p>
              </div>
              <div className="row">
                <div className="col-md-7">
                  <ul className="project-links">
                    <li>
                      <strong>Link:</strong>
                      <a href="https://notanewt.github.io/hw6_weather_dashboard/" target="_blank" rel="noreferrer">
                        Weather Dashboard
                      </a>
                    </li>
                    <li>
                      <strong>Source:</strong>
                      <a href="https://github.com/NotANewt/hw6_weather_dashboard" target="_blank" rel="noreferrer">
                        github.com/NotANewt/
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="col-md">
                  <a href="https://github.com/NotANewt/hw6_weather_dashboard/archive/refs/heads/main.zip" target="_blank" rel="noreferrer" className="btn btn-primary" tabIndex="-1" role="button">
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
export default TechTalk;
