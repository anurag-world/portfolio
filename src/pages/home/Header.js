import React from 'react'
import profilePic from '../../img/profile_pic_tn.png'

class Header extends React.Component {
  render() {
    const headline = (
      <h1 className="display-5 fw-bold text-dark">
        Designer & Full Stack Developer
      </h1>
    )

    const subtitle = (
      <p className="lead fs-6 p-3 fw-normal text-dark">
        Experience in design & building projects using Node JS & Javascript
        Libraries like React & React Native.
      </p>
    )

    const displayImg = <img src={profilePic} height={200} alt="Display Pic" />

    return (
      <div className="container-fluid bg-light">
        <div className="row">
          <div className="col my-5">
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
}

export default Header
