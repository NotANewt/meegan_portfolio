import quizSS from "../assets/img/code_quiz_ss.png";

function Quiz(props) {
  return (
    <>
      {/* Section: Project */}
      <div id="project-details-section" className="section section-light bg-image-red-2">
        <div className="container">
          <div className="row">
            {/* screen shot */}
            <div id="screenshot-img" className="col-sm screenshot-img">
              <img src={quizSS} alt="Screen shot of Code Quiz on desktop"></img>
            </div>

            {/* About Project */}
            <div id="about-project-text" className="col-sm">
              <h6 className="font-title">About Project</h6>
              <h2 className="font-title">Code Quiz</h2>
              <div>
                <p>A timed quiz application that tests a user's knowledge of coding and stores high scores.</p>
              </div>
              <div className="row">
                <div className="col-md-7">
                  <ul className="project-links">
                    <li>
                      <strong>Link:</strong>
                      <a href="https://notanewt.github.io/hw4_code_quiz/" target="_blank" rel="noreferrer">
                        Code Quiz
                      </a>
                    </li>
                    <li>
                      <strong>Source:</strong>
                      <a href="https://github.com/NotANewt/hw4_code_quiz" target="_blank" rel="noreferrer">
                        github.com/NotANewt
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="col-md">
                  {" "}
                  <a href="https://github.com/NotANewt/hw4_code_quiz/archive/refs/heads/main.zip" target="_blank" rel="noreferrer" className="btn btn-primary" tabIndex="-1" role="button">
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
export default Quiz;
