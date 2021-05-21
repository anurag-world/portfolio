const SectionOne = () => {
  const about = (
    <p className="lead fs-6 fw-normal p-5 text-dark text-center">
      I am a UX Researcher, Designer & Developer with Front End Development
      knowledge of HTML, CSS, SCSS, Javascript, JQuery, Bootstrap, React, React
      Native, Redux, etc & basic Backend Development knowledge of NodeJS,
      Express, MongoDB, MySQL, Firebase, etc and other technologies like Gulp,
      Github, Linux, AWS, etc. I also have strong design skills and knowledge of
      using the latest design tools, gained through working in various companies
      & handling projects & clients. I have 6+ years of experience working in
      Design & development like HTML, CSS, Javascript, JQuery, PHP, Laravel &
      MySQL, and 2+ years of experience working on the MERN stack framework. I
      have also worked as a social media manager and have experience in managing
      & mentoring a team.
    </p>
  )

  return (
    <div className="container-fluid bg-yellow">
      <div className="row justify-content-center">
        <div className="col-lg-8">{about}</div>
      </div>
    </div>
  )
}

export default SectionOne
