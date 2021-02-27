import Work01 from '../../img/work-01.png'
import Work02 from '../../img/work-02.png'
import Work03 from '../../img/work-03.png'

const WorkThumb01 = (
  <img
    className="image-work-thumb img-fluid rounded border border-danger"
    src={Work01}
    alt="Work Thumbnail"
  />
)

const WorkThumb02 = (
  <img
    className="image-work-thumb img-fluid rounded border border-danger"
    src={Work02}
    alt="Work Thumbnail"
  />
)

const WorkThumb03 = (
  <img
    className="image-work-thumb img-fluid rounded border border-danger"
    src={Work03}
    alt="Work Thumbnail"
  />
)

const RecentWork = () => {
  return (
    <div className="container-fluid bg-yellow">
      <div className="row justify-content-center py-5">
        <div className="col-lg-8">
          <h1 className="display-6 fw-normal text-danger text-center">
            Work Profile
          </h1>
          <p className="text-center lead fs-6 fw-normal">
            Some of the websites designed and created in React & other
            frameworks. These websites are hosted on Virtual Linux Servers.
            Contact Me for similar work.
          </p>
        </div>
      </div>
      <div className="row justify-content-center px-5 pb-5">
        <div className="col-lg-4 container-work-thumb my-3">
          <a href="http://www.ljnjcollege.in/">
            {WorkThumb01}
            <div className="col-10 middle">
              <div className="text-light bg-dark px-3 py-2 rounded">
                <p className="lead fs-6 mb-2">
                  University Website created using codeigniter
                </p>

                <span className="fs-6 text-uppercase">Visit Website</span>
              </div>
            </div>
          </a>
        </div>

        <div className="col-lg-4 container-work-thumb my-3">
          <a href="https://hallway.in/">
            {WorkThumb02}
            <div className="col-10 middle">
              <div className="text-light bg-dark px-3 py-2 rounded">
                <p className="lead fs-6 mb-2">
                  Events Website created using Laravel
                </p>

                <span className="fs-6 text-uppercase">Visit Website</span>
              </div>
            </div>
          </a>
        </div>

        <div className="col-lg-4 container-work-thumb my-3">
          <a href="http://websiteclientdemo.tk/">
            {WorkThumb03}
            <div className="col-10 middle">
              <div className="text-light bg-dark px-3 py-2 rounded">
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
  )
}

export default RecentWork
