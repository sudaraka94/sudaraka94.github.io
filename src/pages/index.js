import * as React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedin, faMedium, faTwitter } from "@fortawesome/free-brands-svg-icons"

// markup
const IndexPage = () => {
  return (
    <div className="bg-white max-w-xs mx-auto p-4 md:max-w-2xl lg:mt-10 lg:max-w-3xl xl:max-w-7xl">
      <div className="flex flex-col justify-evenly md:text-center lg:flex-row-reverse lg:text-left">
        <div className="py-5 md:flex-grow-0 md:px-5 md:py-3 md:my-auto md:max-w-lg md:m-auto lg:w-1/2 lg:mt-20 xl:max-w-2xl">
          <img className="mx-auto rounded-full" src="https://i.imgur.com/gFIllIS.jpeg" alt="Sudaraka Jayathilaka" />
        </div>
        <div className="text-3xl py-3 md:flex-grow-0 mt-10 md:text-5xl lg:text-3xl lg:w-1/2 xl:text-5xl">
          <h1 className="font-extralight">Hello! <span className="animate-bounce">👋</span></h1>
          <p className="font-extralight pt-10 max-w-xl leading-normal md:mt-3 lg:mt-20">
            I'm <span className="font-normal">Sudaraka Jayathilaka</span>, a developer who builds stuff that matters 👨🏻‍💻
          </p>
        </div>
      </div>
      <div className="max-w-xl mx-auto text-center py-12 space-x-7 text-gray-600 md:py-8 md:text-2xl lg:w-1/2 lg:mx-0 lg:text-left lg:text-sm lg:-mt-20 xl:-mt-36 xl:text-2xl">
        <a className="hover:text-gray-900" href="mailto:sudarakayasindu@gmail.com" target="_blank">
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
        </a>
        <a className="hover:text-gray-900" href="mailto:sudarakayasindu@gmail.com" target="_blank">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a className="hover:text-gray-900" href="mailto:sudarakayasindu@gmail.com" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a className="hover:text-gray-900" href="mailto:sudarakayasindu@gmail.com" target="_blank">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a className="hover:text-gray-900" href="mailto:sudarakayasindu@gmail.com" target="_blank">
          <FontAwesomeIcon icon={faMedium} size="2x" />
        </a>
      </div>
    </div >
  )
}

export default IndexPage
