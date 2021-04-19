import React, { Component } from 'react'
import BankApp from '../../img/ui/bankapp.png'
import BackDrop from '../../img/ui/backdrop.png'
import LearnUx from '../../img/ui/learnux.png'
import PaymentGateway from '../../img/ui/paymentGateway.jpg'
import TaskManagement from '../../img/ui/taskManagement.jpg'
import ProductApp from '../../img/ui/productApp.png'
import FurnitureApp from '../../img/ui/furnitureApp.png'
import ProfileApp from '../../img/ui/photoSharingProfile.png'
import HomeApp from '../../img/ui/photoSharingHome.png'
import ProfileMonoApp from '../../img/ui/photoSharingMonochrome.png'
import CoffeeApp from '../../img/ui/coffeeApp.jpg'

class UiDesign extends Component {
  componentDidMount() {
    let modal = document.getElementById('myModal')
    let img = document.getElementsByClassName('myImg')
    let modalImg = document.getElementById('img01')
    let captionText = document.getElementById('caption')
    let i
    for (i = 0; i < img.length; i++) {
      img[i].onclick = function () {
        modal.style.display = 'block'
        modalImg.src = this.src
        captionText.innerHTML = this.alt
      }
    }

    // span element to close the modal
    let span = document.getElementsByClassName('close')[0]

    // close the modal
    span.onclick = function () {
      modal.style.display = 'none'
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-11 my-5">
            <h1 className="display-6 fw-normal text-danger mb-5 text-center">
              UI Design Portfolio
            </h1>

            {/* Trigger the Modal */}

            <div className="modal-container">
              <img
                className="m-1 myImg border border-danger"
                src={BankApp}
                alt="Bank App"
              />
              <img
                className="m-1 myImg border border-danger"
                src={BackDrop}
                alt="BackDrop"
              />
              <img
                className="m-1 myImg border border-danger"
                src={PaymentGateway}
                alt="Payment Gateway App"
              />
              <img
                className="m-1 myImg border border-danger"
                src={LearnUx}
                alt="Learn UX"
              />
              <img
                className="m-1 myImg border border-danger"
                src={TaskManagement}
                alt="Task Management App"
              />
              <img
                className="m-1 myImg border border-danger"
                src={ProductApp}
                alt="Product/eCommerce App"
              />
              <img
                className="m-1 myImg border border-danger"
                src={FurnitureApp}
                alt="Furniture App"
              />
              <img
                className="m-1 myImg border border-danger"
                src={ProfileApp}
                alt="Profile App"
              />
              <img
                className="m-1 myImg border border-danger"
                src={HomeApp}
                alt="Home App"
              />
              <img
                className="m-1 myImg border border-danger"
                src={ProfileMonoApp}
                alt="Profile Monochrome App"
              />
              <img
                className="m-1 myImg border border-danger"
                src={CoffeeApp}
                alt="Coffee Shop App"
              />
            </div>

            {/* The Modal */}
            <div id="myModal" className="modal">
              {/* The Close Button */}
              <span className="close">&times;</span>

              {/* Modal Content (The Image) */}
              <img className="modal-content" id="img01" alt="demo" />

              {/* Modal Caption (Image Text) */}
              <div id="caption"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default UiDesign
