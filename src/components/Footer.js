import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaReact } from 'react-icons/fa'
import { FaBootstrap } from 'react-icons/fa'
import { FaRegCopyright } from 'react-icons/fa'

const getDate = new Date()
const getYear = getDate.getFullYear()

const Footer = () => {
  return (
    <div className="container-fluid bg-danger">
      <div className="row pt-5 mb-2">
        <div className="col text-center">
          <p className="lead fs-5 text-capitalize text-light">
            Learning to Design & Code at every step
          </p>
          <p className="lead fs-6 text-capitalize text-light">
            React | React Native | NodeJS | ExpressJS | MongoDB | Javascript |
            Bootstrap
          </p>
        </div>
      </div>

      {/* Social Icons */}
      <div className="row mb-3">
        <div className="col text-center">
          <span className="me-4 text-light">
            <a
              href="https://www.facebook.com/anurag.world.official/"
              target="_blank"
              rel="noreferrer"
              className="link-light"
            >
              <FaFacebook />
            </a>
          </span>
          <span className="me-4 text-light">
            <a
              href="https://twitter.com/WorldAnurag"
              target="_blank"
              rel="noreferrer"
              className="link-light"
            >
              <FaTwitter />
            </a>
          </span>
          <span className="me-4 text-light">
            <a
              href="https://www.instagram.com/anurag.designs/"
              target="_blank"
              rel="noreferrer"
              className="link-light"
            >
              <FaInstagram />
            </a>
          </span>
          <span className="me-4 text-light">
            <a
              href="https://www.linkedin.com/in/anuragv91/"
              target="_blank"
              rel="noreferrer"
              className="link-light"
            >
              <FaLinkedin />
            </a>
          </span>
        </div>
      </div>

      <div className="row pb-5">
        <div className="col text-center text-light">
          <p className="lead fs-6">
            Made by me using <FaReact /> React & <FaBootstrap /> Bootstrap{' '}
            <br />
            Hosted on{' '}
            <a
              href="https://github.com/anurag-world/anurag-world.github.io"
              target="_blank"
              rel="noreferrer"
              className="link-light"
            >
              Github
            </a>
          </p>
          <p>
            Copyright <FaRegCopyright /> Anurag V {getYear}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
