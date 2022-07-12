import techIcon from "../assets/img/icon-tech.png";
import petIcon from "../assets/img/icon-pet.png";
import weatherIcon from "../assets/img/icon-weather.png";
import employeeIcon from "../assets/img/icon-employee.png";
import umbrellaIcon from "../assets/img/icon-umbrella.png";
import quizIcon from "../assets/img/icon-quiz.png";

function Showcase() {
  return (
    <>
      {/* Section: Project Showcase */}
      <div id="project-showcase-section" className="section section-light bg-image-red-1">
        <div className="container">
          <div id="about-me-text">
            <h6 className="font-title">Recent projects completed</h6>
            <h2 className="font-title">Project Showcase</h2>
          </div>

          <div className="project-gallery">
            {/* Pick A Flick */}
            <div className="project-item">
              <div className="project-details">
                <h3>Pick A Flick</h3>
                <p>Choose a movie to watch with friends employing user input, anonymous veto, and a final random movie selection.</p>
                <ul>
                  <li>MEARN Stack</li>
                  <li>JavaScript</li>
                  <li>GraphQL</li>
                  <li>HTML5</li>
                  <li>CSS</li>
                  <li>RESTful</li>
                </ul>
                <a className="btn btn-secondary" href="/PickAFlick">
                  Project Details
                </a>
              </div>

              <div className="project-screenshot">
                <img src={weatherIcon} alt="icon of sun with a cloud underneath with text Weather API"></img>
              </div>
            </div>

            {/* Tech Talk */}
            <div className="project-item">
              <div className="project-details">
                <h3>Tech Talk</h3>
                <p>A CMS-style blog where users can publish blog posts and comment on existing posts.</p>
                <ul>
                  <li>JavaScript</li>
                  <li>HTML5</li>
                  <li>CSS</li>
                  <li>SQL</li>
                </ul>
                <a className="btn btn-secondary" href="/TechTalk">
                  Project Details
                </a>
              </div>

              <div className="project-screenshot">
                <img src={techIcon} alt="icon of Tech Talk"></img>
              </div>
            </div>

            {/* PetLink */}
            <div className="project-item">
              <div className="project-details">
                <h3>PetLink</h3>
                <p>An owner-to-owner pet adoption application.</p>
                <ul>
                  <li>JavaScript</li>
                  <li>HTML5</li>
                  <li>CSS</li>
                  <li>SQL</li>
                </ul>
                <a className="btn btn-secondary" href="/PetLink">
                  Project Details
                </a>
              </div>

              <div className="project-screenshot">
                <img src={petIcon} alt="icon of PetLink"></img>
              </div>
            </div>

            {/* Weather Dashboard */}
            <div className="project-item">
              <div className="project-details">
                <h3>Weather Dashboard</h3>
                <p>Get the five-day weather forecast using local zip code.</p>
                <ul>
                  <li>JavaScript</li>
                  <li>HTML5</li>
                  <li>CSS</li>
                  <li>RESTful</li>
                </ul>
                <a className="btn btn-secondary" href="/Weather">
                  Project Details
                </a>
              </div>

              <div className="project-screenshot">
                <img src={weatherIcon} alt="icon of sun with a cloud underneath with text Weather API"></img>
              </div>
            </div>

            {/* Employee Tracker */}
            <div className="project-item">
              <div className="project-details">
                <h3>Employee Tracker</h3>
                <p>A command-line application where the user can view and manage the departments, roles, and employees in a company.</p>
                <ul>
                  <li>JavaScript</li>
                  <li>SQL</li>
                </ul>
                <a className="btn btn-secondary" href="/Employee">
                  Project Details
                </a>
              </div>

              <div className="project-screenshot">
                <img src={employeeIcon} alt="Icon of Employee Tracker"></img>
              </div>
            </div>

            {/* Do You Need An Umbrella? */}
            {/* <div className="project-item">
              <div className="project-details">
                <h3>Do You Need An Umbrella?</h3>
                <p>A weather application that informs the user if they need an umbrella with text and a gif.</p>
                <ul>
                  <li>JavaScript</li>
                  <li>HTML5</li>
                  <li>CSS</li>
                </ul>
                <a className="btn btn-secondary" href="/Umbrella">
                  Project Details
                </a>
              </div>

              <div className="project-screenshot">
                <img src={umbrellaIcon} alt="icon of Do You Need An Umbrella"></img>
              </div>
            </div> */}

            {/* Code Quiz */}
            <div className="project-item">
              <div className="project-details">
                <h3>Code Quiz</h3>
                <p>A timed quiz that tests a user's coding knowledge.</p>
                <ul>
                  <li>JavaScript</li>
                  <li>HTML5</li>
                  <li>CSS</li>
                </ul>
                <a className="btn btn-secondary" href="/Quiz">
                  Project Details
                </a>
              </div>

              <div className="project-screenshot">
                <img src={quizIcon} alt="icon of Code Quiz"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Showcase;
