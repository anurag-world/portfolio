import Work01 from '../../img/work-01.png'
import Work02 from '../../img/work-02.png'
import Work03 from '../../img/work-03.png'

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
        <div>
          <a
            href="https://www.ljnjcollege.in/"
            target="_blank"
            rel="noreferrer"
          >
            {WorkThumb01}
          </a>
        </div>
        <div className="mx-2">
          <a href="https://hallway.in/" target="_blank" rel="noreferrer">
            {WorkThumb02}
          </a>
        </div>
        <div>
          <a
            href="https://codepen.io/anurag-world/full/eYvJzNp"
            target="_blank"
            rel="noreferrer"
          >
            {WorkThumb03}
          </a>
        </div>
      </div>
    </div>
  )
}

export default RecentWork
