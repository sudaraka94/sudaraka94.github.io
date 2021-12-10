import * as React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedin, faMedium, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { Helmet } from "react-helmet";

// markup
const IndexPage = () => {
  return (
    <div className="bg-white flex flex-col w-screen h-full max-w-lg text-center mx-auto md:my-1.5 xl:max-w-7xl">
      <Helmet>
        <title>Sudaraka Jayathilaka</title>
      </Helmet>
      <div className="my-auto xl:flex xl:flex-row-reverse">
        <div className="w-3/5 mx-auto md:w-72 xl:w-1/2">
          <img className="rounded-full xl:w-4/5 xl:mx-auto xl:h-full" src="https://i.imgur.com/gFIllIS.jpeg" alt="Sudaraka Jayathilaka" />
        </div>
        <div className="px-8 pt-5 text-3xl text-center md:text-5xl md:max-w-xl md:mx-auto md:mt-10 md:leading-normal xl:w-1/2 xl:text-left xl:mt-0 xl:px-0 xl:pt-0">
          <h1 className="font-extralight">Hello! <span className="animate-bounce">👋</span></h1>
          <p className="font-extralight mt-5 xl:mt-20">
            I'm <span className="font-normal">Sudaraka Jayathilaka</span>, a developer who builds stuff that matters 👨🏻‍💻
          </p>
          <div className="text-gray-600 text-sm space-x-5 mt-10 md:text-2xl md:space-x-7 md:mt-16 lg:text-3xl xl:mt-20 xl:text-2xl">
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
    </div>
  )
}

export default IndexPage
