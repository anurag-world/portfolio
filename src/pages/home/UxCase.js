import UX01 from '../../img/ux-01.png'
import UX02 from '../../img/ux-02.png'
import UX03 from '../../img/ux-03.png'
import LearnUX from '../../pdf/learnUX.pdf'
import FitnessApp from '../../pdf/fitnessApp.pdf'

const UXCase01 = (
  <img
    className="rounded border border-danger"
    src={UX01}
    alt="Work Thumbnail"
  />
)

const UXCase02 = (
  <img
    className="rounded border border-danger"
    src={UX02}
    alt="Work Thumbnail"
  />
)

const UXCase03 = (
  <img
    className="rounded border border-danger"
    src={UX03}
    alt="Work Thumbnail"
  />
)
const UxCase = () => {
  return (
    <div className="container-fluid bg-light ux-case">
      {/* UX Case Header */}
      <div className="ux-case-header">
        <h1 className="display-6 fw-normal text-danger">UX Case Studies</h1>
        <p className="lead fs-6 fw-normal">
          Case studies I worked on for User Experience(UX) Research & Design. It
          contains detailed analysis and report for various products. These case
          studies are also featured in various publications. Contact Me for
          similar work.
        </p>
      </div>

      {/* UX Case Body */}
      <div className="ux-case-body">
        <div className="work-img">
          {UXCase01}

          <a
            href="https://bootcamp.uxdesign.cc/ux-case-study-for-furniture-home-furnishings-shopping-app-fern-27fa797fd4cf"
            target="_blank"
            rel="noreferrer"
          >
            <span className="img-details rounded border border-danger">
              <h1 className="fs-5 mb-2 text-light">
                UX Case Study for Better Furnishing & Shopping Experience
              </h1>

              <p className="fs-6 text-uppercase text-light">Read Case Study</p>
            </span>
          </a>
        </div>

        <div className="work-img mx-2">
          {UXCase02}
          <a href={LearnUX} target="_blank" rel="noreferrer">
            <span className="img-details rounded border border-danger">
              <h1 className="fs-5 mb-2 text-light">
                UX Case Study for Teaching App
              </h1>

              <p className="fs-6 text-uppercase text-light">Read Case Study</p>
            </span>
          </a>
        </div>

        <div className="work-img">
          {UXCase03}
          <a href={FitnessApp} target="_blank" rel="noreferrer">
            <span className="img-details rounded border border-danger">
              <h1 className="fs-5 mb-2 text-light">
                UX Case Study for Fitness App
              </h1>

              <p className="fs-6 text-uppercase text-light">Read Case Study</p>
            </span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default UxCase
