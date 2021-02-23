import React from "react";
import Work01 from "../../img/work-01.png";

const WorkThumb01 = (
  <img
    className="image-work-thumb img-fluid rounded"
    src={Work01}
    alt="Work Thumbnail"
  />
);

class RecentWork extends React.Component {
  render() {
    return (
      <div className="container-fluid bg-yellow p-5">
        <div className="row justify-content-center">
          <div className="col-12">
            <p className="display-6 text-center fw-normal">Work Profile</p>
            <p className="text-center lead fs-6 fw-normal px-5">
              Some of the websites designed and created in React & other
              frameworks. These websites are hosted on Virtual Linux Servers.
              Contact Me for similar work.
            </p>
          </div>

          <div className="col-lg-4 container-work-thumb my-3">
            <a href="/">
              {WorkThumb01}
              <div className="col-10 middle">
                <div className="text-light bg-dark px-3 py-2">
                  <p className="lead fs-6 mb-2">
                    University Website created using codeigniter
                  </p>

                  <span className="fs-6 text-uppercase">Visit Website</span>
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
                    Events Website created using Laravel
                  </p>

                  <span className="fs-6 text-uppercase">Visit Website</span>
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

export default RecentWork;
