import pickaflickSS from "../assets/img/pickaflick_group_ss.png";

function PickAFlick(props) {
  return (
    <>
      {/* Section: Project */}
      <div id="project-details-section" className="section section-light bg-image-red-2">
        <div className="container">
          <div className="row">
            {/* screen shot */}
            <div id="screenshot-img" className="col-sm screenshot-img">
              <img src={pickaflickSS} alt="Screen shot of Do You Need An Umbrella on desktop"></img>
            </div>

            {/* About Project */}
            <div id="about-project-text" className="col-sm">
              <h6 className="font-title">About Project</h6>
              <h2 className="font-title">Pick A Flick</h2>
              <div>
                <p>An app where users can add dealbreakers and movies to their profile, create a group, invite other users to the group, add user movies to the group, remove group movies with users' dealbreakers, and then randomly pick a final movie to watch.</p>
              </div>
              <div className="row">
                <div className="col-md-7">
                  <ul className="project-links">
                    <li>
                      <strong>Link:</strong>
                      <a href="https://pick-a-flick-app.herokuapp.com/" target="_blank" rel="noreferrer">
                        Pick A Flick
                      </a>
                    </li>
                    <li>
                      <strong>Source:</strong>
                      <a href="https://github.com/NotANewt/pick_a_flick" target="_blank" rel="noreferrer">
                        github.com/NotANewt
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="col-md">
                  <a href="https://github.com/NotANewt/pick_a_flick/archive/refs/heads/main.zip" target="_blank" rel="noreferrer" className="btn btn-primary" tabIndex="-1" role="button">
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
export default PickAFlick;
