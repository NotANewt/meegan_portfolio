import employeeSS from "../assets/img/employeetracker_terminal_ss.PNG";

function Employee(props) {
  return (
    <>
      {/* Section: Project */}
      <div id="project-details-section" className="section section-light bg-image-red-2">
        <div className="container">
          <div className="row">
            {/* screen shot */}
            <div id="screenshot-img" className="col-sm screenshot-img">
              <img src={employeeSS} alt="Screen shot of Employee Tracker in terminal"></img>
            </div>

            {/* About Project */}
            <div id="about-project-text" className="col-sm">
              <h6 className="font-title">About Project</h6>
              <h2 className="font-title">Employee Tracker</h2>
              <div>
                <p>A command-line application that allows the user to interact with database information to view and manage the departments, roles, and employees in a company.</p>
              </div>
              <div className="row">
                <div className="col-md-7">
                  <ul className="project-links">
                    <li>
                      <strong>Link:</strong>
                      <a href="https://youtu.be/h4ca8mZvCYQ" target="_blank" rel="noreferrer">
                        Video Walkthrough
                      </a>
                    </li>
                    <li>
                      <strong>Source:</strong>
                      <a href="https://github.com/NotANewt/sql_employee_tracker" target="_blank" rel="noreferrer">
                        github.com/NotANewt
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="col-md">
                  <a href="https://github.com/NotANewt/sql_employee_tracker/archive/refs/heads/main.zip" target="_blank" rel="noreferrer" className="btn btn-primary" tabIndex="-1" role="button">
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
export default Employee;
