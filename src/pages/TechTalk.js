import techSS from "../assets/img/techtalk_ss_home.png";

function TechTalk(props) {
  return (
    <>
      <div id="project-details-section" className="section section-light bg-image-red-2">
        <div className="container">
          <div className="row">
            {/* screen shot */}
            <div id="screenshot-img" className="col-sm screenshot-img">
              <img src={techSS} alt="Screen shot of home page of Tech Talk on desktop"></img>
            </div>

            {/* About Project */}
            <div id="about-project-text" className="col-sm">
              <h6 className="font-title">About Project</h6>
              <h2 className="font-title">Tech Talk</h2>
              <div>
                <p>A CMS-style blog site where users can make their own blog posts, view posts written by other users and leave a comment. A user can also update and/or delete their own blog posts and delete comments made on their own posts.</p>
              </div>
              <div className="row">
                <div className="col-md-7">
                  <ul className="project-links">
                    <li>
                      <strong>Link:</strong>
                      <a href="https://meegan-tech-blog.herokuapp.com/" target="_blank" rel="noreferrer">
                        Tech Talk
                      </a>
                    </li>
                    <li>
                      <strong>Source:</strong>
                      <a href="https://github.com/NotANewt/hw14_tech_blog" target="_blank" rel="noreferrer">
                        github.com/NotANewt
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="col-md">
                  <a href="https://github.com/NotANewt/hw14_tech_blog/archive/refs/heads/main.zip" target="_blank" rel="noreferrer" class="btn btn-primary" tabIndex="-1" role="button">
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
