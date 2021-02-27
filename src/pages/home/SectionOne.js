const SectionOne = () => {
  const about = (
    <p className="lead fs-6 fw-normal p-5 text-dark text-center">
      I am a UX Researcher, Designer & Full Stack Developer. I have strong UX
      Research, Design & Development skills gained through various corporate
      projects & clients. I have 10+ experience in Design & Development, also
      worked on UX projects from research to wireframing using the user-centered
      design model. Also, I code things from scratch by building projects using
      NodeJS, ExpressJS, Laravel, React & React Native. I have also worked as a
      social media manager & have experience in managing & mentoring a team.
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
