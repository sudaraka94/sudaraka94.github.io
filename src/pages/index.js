import * as React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedin, faMedium, faTwitter } from "@fortawesome/free-brands-svg-icons"

// markup
const IndexPage = () => {
  return (
    <div className="bg-white py-8 max-w-xs mx-auto flex flex-col justify-around h-full md:max-w-2xl lg:mt-auto lg:py-40 lg:max-w-3xl xl:max-w-7xl">
      <div className="flex flex-col justify-evenly md:text-center lg:flex-row-reverse lg:text-left">
        <div className="w-3/4 m-auto md:flex-grow-0 md:px-5 md:py-3 md:my-auto md:max-w-lg md:m-auto lg:w-1/2 lg:pt-1 lg:p-8 xl:max-w-2xl">
          <img className="mx-auto rounded-full" src="https://i.imgur.com/gFIllIS.jpeg" alt="Sudaraka Jayathilaka" />
        </div>
        <div className="text-3xl md:flex-grow-0 mt-10 md:text-5xl lg:text-3xl lg:w-1/2 xl:text-5xl">
          <h1 className="font-extralight">Hello! <span className="animate-bounce">👋</span></h1>
          <p className="font-extralight pt-4 max-w-xl leading-normal md:mt-3 lg:mt-20">
            I'm <span className="font-normal">Sudaraka Jayathilaka</span>, a developer who builds stuff that matters 👨🏻‍💻
          </p>

          <div className="max-w-xl mx-auto text-center mt-10 space-x-7 text-gray-600 text-sm md:py-8 md:text-2xl lg:mx-0 lg:text-left lg:text-sm lg:pt-10 xl:text-2xl">
            <a className="hover:text-gray-900" href="mailto:sudarakayasindu@gmail.com" target="_blank">
              <FontAwesomeIcon icon={faEnvelope} size="2x" />
            </a>
            <a className="hover:text-gray-900" href="https://github.com/sudaraka94" target="_blank">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a className="hover:text-gray-900" href="https://www.linkedin.com/in/sudarakajayathilaka" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a className="hover:text-gray-900" href="https://twitter.com/Sudaraka94" target="_blank">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a className="hover:text-gray-900" href="https://medium.com/@sudarakayasindu" target="_blank">
              <FontAwesomeIcon icon={faMedium} size="2x" />
            </a>
          </div>
        </div>
      </div>
    </div >
  )
}

export default IndexPage
