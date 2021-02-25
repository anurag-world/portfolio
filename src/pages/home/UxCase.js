import { Component } from 'react'
import Work01 from '../../img/work-01.png'

const WorkThumb01 = (
  <img
    className="image-work-thumb img-fluid rounded"
    src={Work01}
    alt="Work Thumbnail"
  />
)

class UxCase extends Component {
  render() {
    return (
      <div className="container-fluid bg-light">
        <div className="row justify-content-center p-5">
          <div className="col-12">
            <p className="display-6 text-center fw-normal">UX Case Studies</p>
            <p className="text-center lead fs-6 fw-normal px-5">
              Case studies I worked on for User Experience(UX). It contains
              detailed analysis and report for various products. These case
              studies are featured in various publications. Contact Me for
              similar work.
            </p>
          </div>
        </div>

        <div className="row justify-content-center px-5">
          <div className="col-lg-4 container-work-thumb my-3">
            <a href="/">
              {WorkThumb01}
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
              {WorkThumb01}
              <div className="col-10 middle">
                <div className="text-light bg-dark px-3 py-2">
                  <p className="lead fs-6 mb-2">
                    UX Case Study for Teaching App
                  </p>

                  <span className="fs-6 text-uppercase">Read Case Study</span>
                </div>
              </div>
            </a>
          </div>

          <div className="col-lg-4 container-work-thumb my-3">
            <a href="/">
              {WorkThumb01}
              <div className="col-10 middle">
                <div className="text-light bg-dark px-3 py-2">
                  <p className="lead fs-6 mb-2">
                    UX Case Study for Fitness App
                  </p>

                  <span className="fs-6 text-uppercase">Read Case Study</span>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div className="row justify-content-center p-4">
          <div className="col text-center">
            <button type="button" class="btn btn-outline-danger me-3">
              View More UI Designs
            </button>
            <button type="button" class="btn btn-outline-danger">
              View Portfolio on Behance
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default UxCase
