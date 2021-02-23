import React from "react";
import Work01 from "../../img/work-01.png";

const WorkThumb01 = (
  <img
    className="image-work-thumb img-fluid rounded"
    src={Work01}
    alt="Work Thumbnail"
  />
);

class UxCase extends React.Component {
  render() {
    return (
      <div className="container-fluid bg-light p-5">
        <div className="row justify-content-center mt-5">
          <p className="display-6 text-center fw-normal">UX Case Studies</p>
          <p className="text-center lead fs-6 fw-normal">
            Some of the case studies I worked on for User Experience(UX). It
            contained detailed analysis and report for various products. <br />
            These case studies are featured in various publications. Contact Me
            for similar work.
          </p>

          <div className="col container-work-thumb my-5">
            <a href="/">
              {WorkThumb01}
              <div className="middle">
                <div className="text-light bg-dark px-3 py-2">
                  <p className="lead fs-6 mb-2">
                    Ux Case Study for better furnishing & shopping experience
                  </p>

                  <span className="fs-6 text-uppercase">Read Case Study</span>
                </div>
              </div>
            </a>
          </div>

          <div className="col container-work-thumb my-5">
            <a href="/">
              {WorkThumb01}
              <div className="middle">
                <div className="text-light bg-dark px-3 py-2">
                  <p className="lead fs-6 mb-2">
                    Events Website created using Laravel
                  </p>

                  <span className="fs-6 text-uppercase">Visit Website</span>
                </div>
              </div>
            </a>
          </div>

          <div className="col container-work-thumb my-5">
            <a href="/">
              {WorkThumb01}
              <div className="middle">
                <div className="text-light bg-dark px-3 py-2">
                  <p className="lead fs-6 mb-2">
                    Ecommerce Website created using Laravel
                  </p>

                  <span className="fs-6 text-uppercase">Visit Website</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default UxCase;
