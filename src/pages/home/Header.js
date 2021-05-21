import profilePic from '../../img/profile_pic_tn.png'

const Header = () => {
  const headline = (
    <h1 className="display-5 fw-bold text-danger">
      UI/UX Designer & Full Stack <br /> Developer
    </h1>
  )

  const subtitle = (
    <p className="lead fs-6 p-3 fw-normal text-dark">
      Experience in Front End Development like HTML, CSS, Javascript, SCSS,
      Bootstrap, React, etc & basic Back End Development like NodeJS, ExpressJS,
      MongoDB, MySQL, etc
    </p>
  )

  const displayImg = <img src={profilePic} height={200} alt="Display Pic" />

  return (
    <div className="container-fluid bg-light">
      <div className="row justify-content-center">
        <div className="col-lg-6 my-5">
          <div className="text-center">
            {headline}

            {subtitle}

            {displayImg}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
