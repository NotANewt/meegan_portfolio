function Skills() {
  return (
    <>
      {/* Section: Skills */}
      <div id={"skills-section"} className="section section-dark bg-image-yellow-1">
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <h4 className="border-title">Skills</h4>

              <div className="skill-group">
                <h5>Development</h5>
                <ul>
                  <li>JAVASCRIPT</li>
                  <li>HTML5</li>
                  <li>CSS/CSS3</li>
                  <li>SQL(MySQL, NoSQL)</li>
                  <li>IDL</li>
                  <li>RESTful API</li>
                  <li>Agile</li>
                </ul>
              </div>
              <div className="skill-group">
                <h5>Frameworks</h5>
                <ul>
                  <li>Bootstrap</li>
                  <li>Bulma</li>
                  <li>jQuery</li>
                  <li>Node.js</li>
                  <li>Handlebars.js</li>
                  <li>Express</li>
                  <li>Mongoose</li>
                  <li>Jest</li>
                </ul>
              </div>
              <div className="skill-group">
                <h5>Software</h5>
                <ul>
                  <li>VSCode</li>
                  <li>Git</li>
                  <li>Jira</li>
                  <li>Trello</li>
                  <li>MySQL Workbench</li>
                  <li>Studio 3T</li>
                  <li>GSuite</li>
                  <li>Office Suite</li>
                </ul>
              </div>
            </div>

            <div className="col-sm">
              <h4 className="border-title">Education</h4>

              <div className="row ">
                <div className="col-sm-9">
                  <h5>Northwestern University</h5>
                  <p>Coding Bootcamp</p>
                </div>
                <div className="col-sm">
                  <p className="year-box">2021 - 2022</p>
                </div>
              </div>
              <div className="row ">
                <div className="col-sm-9">
                  <h5>University of Colorado at Boulder</h5>
                  <p>Masters of Arts</p>
                </div>
                <div className="col-sm">
                  <p className="year-box">2005 - 2007</p>
                </div>
              </div>
              <div className="row ">
                <div className="col-sm-9">
                  <h5>University of Notre Dame</h5>
                  <p>Bachelors of Science</p>
                </div>
                <div className="col-sm">
                  <p className="year-box">2001 - 2005</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
