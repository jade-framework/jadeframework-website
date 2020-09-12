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
              resume="/resume-jc-10-09-2020-13-17-59.pdf"
              web="https://jeremycrichton.com"
              linkedin="https://www.linkedin.com/in/jeremy-crichton/"
            />
          </li>
          <li class="individual">
            <img src="" alt="Takayoshi Sampson" />
            <h3>Edmond Tam</h3>

            <p>London, UK</p>
            <ContactIcons
              resume="/resume-jc-10-09-2020-13-17-59.pdf"
              web="https://jeremycrichton.com"
              linkedin="https://www.linkedin.com/in/jeremy-crichton/"
            />
          </li>
        </ul>
      </section>
    </>
  )
}

export default Team
