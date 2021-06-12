import profilePic from '../../img/profile_pic_tn.png'

const Header = () => {
  const headline = (
    <h1 className="display-6 fw-bold text-danger mb-3">
      UI/UX Designer & Developer
    </h1>
  )

  const subtitle = (
    <h2 className="fw-normal text-dark mb-4">
      Experience in Front End Development like HTML, CSS, Javascript, SCSS,
      Bootstrap, React, etc & basic Back End Development like NodeJS, ExpressJS,
      MongoDB, PHP, MySQL, etc
    </h2>
  )

  const displayImg = <img src={profilePic} alt="Display Pic" />

  return (
    <div className="container-fluid bg-light">
      <div className="row">
        <div className="col header">
          {headline}

          {subtitle}

          <div>{displayImg}</div>
        </div>
      </div>
    </div>
  )
}

export default Header
