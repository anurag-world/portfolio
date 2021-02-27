import UX01 from '../../img/ux-01.png'
import UX02 from '../../img/ux-02.png'
import UX03 from '../../img/ux-03.png'

const UXCase01 = (
  <img
    className="image-work-thumb img-fluid rounded border border-danger"
    src={UX01}
    alt="Work Thumbnail"
  />
)

const UXCase02 = (
  <img
    className="image-work-thumb img-fluid rounded border border-danger"
    src={UX02}
    alt="Work Thumbnail"
  />
)

const UXCase03 = (
  <img
    className="image-work-thumb img-fluid rounded border border-danger"
    src={UX03}
    alt="Work Thumbnail"
  />
)

const UxCase = () => {
  return (
    <div className="container-fluid bg-light">
      <div className="row justify-content-center py-5">
        <div className="col-lg-8">
          <h1 className="display-6 fw-normal text-danger text-center">
            UX Case Studies
          </h1>
          <p className="text-center lead fs-6 fw-normal">
            Case studies I worked on for User Experience(UX). It contains
            detailed analysis and report for various products. These case
            studies are featured in various publications. Contact Me for similar
            work.
          </p>
        </div>
      </div>

      <div className="row justify-content-center px-5 pb-3">
        <div className="col-lg-4 container-work-thumb my-3">
          <a href="https://bootcamp.uxdesign.cc/ux-case-study-for-furniture-home-furnishings-shopping-app-fern-27fa797fd4cf">
            {UXCase01}
            <div className="col-10 middle">
              <div className="text-light bg-dark px-3 py-2">
                <p className="lead fs-6 mb-2">
                  UX Case Study for better furnishing & shopping experience
                </p>

                <span className="fs-6 text-uppercase">Read Case Study</span>
              </div>
            </div>
          </a>
        </div>

        <div className="col-lg-4 container-work-thumb my-3">
          <a href="/">
            {UXCase02}
            <div className="col-10 middle">
              <div className="text-light bg-dark px-3 py-2">
                <p className="lead fs-6 mb-2">
                  UX Case Study for Teaching App (Coming Soon)
                </p>

                <span className="fs-6 text-uppercase">Read Case Study</span>
              </div>
            </div>
          </a>
        </div>

        <div className="col-lg-4 container-work-thumb my-3">
          <a href="/">
            {UXCase03}
            <div className="col-10 middle">
              <div className="text-light bg-dark px-3 py-2">
                <p className="lead fs-6 mb-2">
                  UX Case Study for Fitness App (Coming Soon)
                </p>

                <span className="fs-6 text-uppercase">Read Case Study</span>
              </div>
            </div>
          </a>
        </div>
      </div>

      <div className="row justify-content-center py-5">
        <div className="col text-center">
          <button type="button" class="btn btn-outline-danger me-3">
            View More UI Designs
          </button>
          <a
            href="https://www.behance.net/anuragworld"
            class="btn btn-outline-danger"
            role="button"
            data-bs-toggle="button"
          >
            View Portfolio on Behance
          </a>
        </div>
      </div>
    </div>
  )
}

export default UxCase
