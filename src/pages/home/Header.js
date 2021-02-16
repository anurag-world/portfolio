import React from "react";
import profilePic from "../../img/profile_pic_tn.png";

class Header extends React.Component {
  render() {
    const headline = (
      <h1 className="display-5 fw-bold text-dark">
        UX Designer & React Developer
      </h1>
    );

    const subtitle = (
      <p className="lead fs-6 p-3 fw-normal text-dark">
        I like to Design & Code projects using React & React Native.
      </p>
    );

    const displayImg = <img src={profilePic} height={200} alt="Display Pic" />;

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col mt-5">
            <div className="text-center">
              {headline}

              {subtitle}

              {displayImg}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
