import BankApp from '../../img/ui/bankapp.png'
import LearnUx from '../../img/ui/learnux.png'
import BackDrop from '../../img/ui/backdrop.png'
import UiDesigns from '../../img/ui/uidesigns.png'

const UiDesign = () => {
  return (
    <div className="container-fluid bg-light">
      <div className="row justify-content-center">
        <div className="col-lg-10 text-center">
          <h1 className="display-6 fw-normal text-danger text-center">
            UI Design Portfolio
          </h1>
          <img src={BankApp} className="mt-5 img-fluid" alt="Bank App" />
          <img src={LearnUx} className="mt-3 img-fluid" alt="Learn UX" />
          <img src={BackDrop} className="mt-3 img-fluid" alt="Backdrop" />
          <img src={UiDesigns} className="mt-3 img-fluid" alt="UI Designs" />
        </div>
      </div>
    </div>
  )
}

export default UiDesign
