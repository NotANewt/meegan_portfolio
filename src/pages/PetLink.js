import petSS from "../assets/img/petlink_ss_homepage.PNG";

function PetLink(props) {
  return (
    <>
      {/* Section: Project */}
      <div id="project-details-section" className="section section-light bg-image-red-2">
        <div class="container">
          <div class="row">
            {/* screen shot */}
            <div id="screenshot-img" className="col-sm screenshot-img">
              <img src={petSS} alt="Screen shot of PetLink on desktop"></img>
            </div>

            {/* About Project */}
            <div id="about-project-text" className="col-sm">
              <h6 className="font-title">About Project</h6>
              <h2 className="font-title">PetLink</h2>
              <div>
                <p>An owner-to-owner rehoming pet application where users can search for adoptable pets as well as add a pet to rehome. Requires signup/login to search for available pets or upload a new pet to rehome.</p>
              </div>
              <div className="row">
                <div className="col-md-7">
                  <ul className="project-links">
                    <li>
                      <strong>Link:</strong>
                      <a href="https://get-post-malone-project-2.herokuapp.com/" target="_blank" rel="noreferrer">
                        PetLink
                      </a>
                    </li>
                    <li>
                      <strong>Source:</strong>
                      <a href="https://github.com/GET-POST-malone/project_2" target="_blank" rel="noreferrer">
                        github.com/GET-POST-Malone
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="col-md">
                  <a href="https://github.com/GET-POST-malone/project_2/archive/refs/heads/main.zip" target="_blank" rel="noreferrer" className="btn btn-primary" tabIndex="-1" role="button">
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
export default PetLink;
