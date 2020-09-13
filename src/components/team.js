import React from "react"

import ContactIcons from "./contact-icons"
import "./styles/team.css"

const Team = props => {
  return (
    <>
      <section id="our-team">
        <h1>Our Team</h1>
        <p>
          We are looking for opportunities. If you liked what you saw and want
          to talk more, please reach out!
        </p>
        <ul>
          <li class="individual">
            <img src="" alt="Jeremy Crichton" />
            <h3>Jeremy Crichton</h3>
            <p>Vancouver, BC</p>
            <ContactIcons
              resume="/resume-jc-10-09-2020-13-17-59.pdf"
              web="https://jeremycrichton.com"
              linkedin="https://www.linkedin.com/in/jeremy-crichton/"
            />
          </li>
          <li class="individual">
            <img src="" alt="Krunal Patel" />
            <h3>Krunal Patel</h3>
            <p>San Francisco, CA</p>
            <ContactIcons
              resume="../../public/krunal_patel_resume.pdf"
              web="https://kpatel27.github.io"
              linkedin="https://www.linkedin.com/in/krunal-p-patel/"
            />
          </li>
          <li class="individual">
            <img src="" alt="Edmond Tam" />
            <h3>Edmond Tam</h3>
            <p>London, UK</p>
            <ContactIcons
              resume="/Resume - Edmond Tam.pdf"
              web="https://edmondtam1.github.io"
              linkedin="https://www.linkedin.com/in/edmondtam"
            />
          </li>
        </ul>
      </section>
    </>
  )
}

export default Team
