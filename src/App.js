import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./css/app.css";
import profilePic from "./img/profile_pic_tn.png";

const headline = (
  <h1 className="display-5 fw-bold text-dark">
    UX Designer & Full Stack Developer
  </h1>
);

const subtitle = (
  <p className="lead fs-6 p-3 fw-normal text-dark">
    I like to Design & Code from scratch
  </p>
);

const about = (
  <p className="lead fs-6 fw-normal p-5 text-dark text-center">
    I am a UX Researcher, Designer & Full Stack Developer. I have strong UX
    Research, Design & Development skills gained through various corporate projects &
    clients. I have 10+ experience in Design & Development, also worked on UX
    projects from research to wireframing using the user-centered design model.
    Also, I code things from scratch by building projects using NodeJS, ExpressJS, Laravel, React & React Native. 
    I have also worked as a social media manager & have experience in managing & mentoring a team.
  </p>
);

const displayImg = (
  <img src={profilePic} height={200} />
);

function Nav(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold link-dark" href="#">
          {props.name}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function Header() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col mt-5">
          <div className="text-center">

            {headline}

            {subtitle}

            {displayImg}

          </div>
        </div>
      </div>
    </div>
  );
}

function SectionOne() {
  return(
    <div className="container-fluid">
      <div className="row mt-5 justify-content-center bg-yellow">
        <div className="col-md-8">
          {about}
        </div>
      </div>
    </div>
  );
}

function SectionTwo() {
  return(
    <div className="container-fluid">
      <div className="row g-0 justify-content-center mt-3">
          <div className="col-md-3 text-center">
            <div className="card p-3">
              <div className="card-body">

                <h4 className="card-title pb-2">UI/UX Designer</h4>
                <p className="lead fs-6">
                Have experience in taking different roles as UX Researcher
                 & Designer to create a project from research to wireframing
                  for prototyping and usability testing using the user-centered 
                  model. Also, have knowledge of designing different UI elements
                   & app designs using popular softwares like Adobe XD, Figma etc.
                </p>

                <h6 className="display-7 p-2">Skills</h6>
                <p className="lead fs-6">UX Research, UX Design, UI, Web Design, App Design</p>

                <h6 className="display-7 p-2">Tools</h6>
                <p className="lead fs-6">
                  Adobe XD <br />
                  Figma <br />
                  Sketch <br />
                  Adobe Photoshop <br />
                  Adobe Illustrator <br />
                  Invision <br />
                  Balsamiq Mockups <br/>
                  Marvel <br />
                </p>

              </div>
            </div>
          </div>
          <div className="col-md-3 text-center">
            <div className="card p-3">
              <div className="card-body">
                <h4 className="card-title">Full Stack Developer</h4>
                
              </div>
            </div>
          </div>
          <div className="col-md-3 text-center">
            <div className="card p-3">
              <div className="card-body">
                <h4 className="card-title">Graphic Designer & Illustrator</h4>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default function App() {
  return (
    <>
      <Nav name="Anurag World" />
      <Header />
      <SectionOne />
      <SectionTwo />
    </>
  );
}
