import Work01 from '../../img/work-01.png'
import Work02 from '../../img/work-02.png'
import Work03 from '../../img/work-03.png'
import Work04 from '../../img/work-04.png'
import Work05 from '../../img/work-05.png'

const WorkThumb01 = (
  <img
    className="rounded border border-danger"
    src={Work01}
    alt="Work Thumbnail"
  />
)

const WorkThumb02 = (
  <img
    className="rounded border border-danger"
    src={Work02}
    alt="Work Thumbnail"
  />
)

const WorkThumb03 = (
  <img
    className="rounded border border-danger"
    src={Work03}
    alt="Work Thumbnail"
  />
)

const WorkThumb04 = (
  <img
    className="rounded border border-danger"
    src={Work04}
    alt="Work Thumbnail"
  />
)

const WorkThumb05 = (
  <img
    className="rounded border border-danger"
    src={Work05}
    alt="Work Thumbnail"
  />
)

const RecentWork = () => {
  return (
    <div className="container-fluid bg-yellow recent-work">
      {/* Recent Work Header */}
      <div className="recent-work-header">
        <h1 className="display-6 fw-normal text-danger">
          Full Stack Developer
        </h1>
        <p className="lead fs-6 fw-normal">
          The portfolio contains some of the recent work I worked on as my role
          as a developer. Also, sharing portfolio websites showcasing Front End
          & Back End knowlegde while developing these websites. <br />
          For more developer portfolio & code examples visit -{' '}
          <a
            href="https://codepen.io/anurag-world"
            target="_blank"
            rel="noreferrer"
          >
            CodePen
          </a>{' '}
          or{' '}
          <a
            href="https://github.com/anurag-world"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </p>
      </div>

      {/* Recent Work Body */}
      <div className="recent-work-body">
        <div className="work-img">
          {WorkThumb01}
          <a
            href="https://www.ljnjcollege.in/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="img-details rounded border border-danger">
              <h1 className="fs-5 mb-2 text-uppercase text-light">
                LJNJ College / University Website
              </h1>

              <p className="fs-6 text-light">
                Design & Development of university website using HTML, CSS,
                Javascript, PHP, MySql, CodeIgniter & Adobe Photoshop.
              </p>
            </span>
          </a>
        </div>
        <div className="work-img">
          {WorkThumb02}
          <a href="https://hallway.in/" target="_blank" rel="noreferrer">
            <span className="img-details rounded border border-danger">
              <h1 className="fs-5 mb-2 text-uppercase text-light">
                Hallway Events & Management
              </h1>

              <p className="fs-6 text-light">
                Design & Development using HTML, CSS, Bootstrap, Javascript,
                PHP, React, Sketch, Figma & Adobe Photoshop.
              </p>
            </span>
          </a>
        </div>
        <div className="work-img">
          {WorkThumb03}
          <a
            href="https://codepen.io/anurag-world/full/eYvJzNp"
            target="_blank"
            rel="noreferrer"
          >
            <span className="img-details rounded border border-danger">
              <h1 className="fs-5 mb-2 text-uppercase text-light">TravelX</h1>

              <p className="fs-6 text-light">
                Responsive Design & Development Project using HTML, CSS Flexbox,
                CSS Animation & Transitions, Bootstrap, SCSS, Javascript, Gulp &
                Figma.
              </p>
            </span>
          </a>
        </div>
        <div className="work-img">
          {WorkThumb04}
          <a
            href="https://portfolio.anuragworld.com/lilmonsters/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="img-details rounded border border-danger">
              <h1 className="fs-5 mb-2 text-uppercase text-light">
                LiL Monsters
              </h1>

              <p className="fs-6 text-light">
                Showcasing CSS Animation & Transitions developed using HTML,
                CSS, CSS Animation & Transitions, GreenSock, ScrollMagic,
                Bootstrap, Javascript, JQuery, Gulp & Figma.
              </p>
            </span>
          </a>
        </div>
        <div className="work-img">
          {WorkThumb05}
          <a
            href="https://linkedin-clone-40bc4.web.app/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="img-details rounded border border-danger">
              <h1 className="fs-5 mb-2 text-uppercase text-light">
                LinkedIn Clone
              </h1>

              <p className="fs-6 text-light">
                Showcasing LinkedIn clone developed using HTML, CSS, Bootstrap,
                Javascript, React, Redux and deployed using Firebase.
              </p>
            </span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default RecentWork
