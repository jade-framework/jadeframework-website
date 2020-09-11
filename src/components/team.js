import React from "react"
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
            <ul class="social-icons">
              <li>
                <a href="mailto:blank@blank.com" target="_blank">
                  <img
                    src="https://s3.amazonaws.com/bam-lambda/images/email.png"
                    alt="email"
                  />
                </a>
              </li>
              <li>
                <a href="http://www.jeremycrichton.com" target="_blank">
                  <img
                    src="https://s3.amazonaws.com/bam-lambda/images/www.png"
                    alt="website"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/jeremycrichton/"
                  target="_blank"
                >
                  <img
                    src="https://s3.amazonaws.com/bam-lambda/images/linkedin.png"
                    alt="linkedin"
                  />
                </a>
              </li>
            </ul>
          </li>
          <li class="individual">
            <img
              src="https://s3.amazonaws.com/bam-lambda/images/jocie.png"
              alt="Jocie Moore"
            />
            <h3>Jocie Moore</h3>
            <p>San Francisco, CA</p>
            <ul class="social-icons">
              <li>
                <a href="mailto:hello@jociemoore.com" target="_blank">
                  <img
                    src="https://s3.amazonaws.com/bam-lambda/images/email.png"
                    alt="email"
                  />
                </a>
              </li>
              <li>
                <a href="https://www.jociemoore.com" target="_blank">
                  <img
                    src="https://s3.amazonaws.com/bam-lambda/images/www.png"
                    alt="website"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/jocie-moore/"
                  target="_blank"
                >
                  <img
                    src="https://s3.amazonaws.com/bam-lambda/images/linkedin.png"
                    alt="linkedin"
                  />
                </a>
              </li>
            </ul>
          </li>
          <li class="individual">
            <img
              src="https://s3.amazonaws.com/bam-lambda/images/tak.png"
              alt="Takayoshi Sampson"
            />
            <h3>Tak Sampson</h3>

            <p>New York, NY</p>
            <ul class="social-icons">
              <li>
                <a href="mailto:tak.sampson@gmail.com" target="_blank">
                  <img
                    src="https://s3.amazonaws.com/bam-lambda/images/email.png"
                    alt="email"
                  />
                </a>
              </li>
              <li>
                <a href="" target="_blank">
                  <img
                    src="https://s3.amazonaws.com/bam-lambda/images/www.png"
                    alt="website"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/takayoshi-sampson-780b66168/"
                  target="_blank"
                >
                  <img
                    src="https://s3.amazonaws.com/bam-lambda/images/linkedin.png"
                    alt="linkedin"
                  />
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </section>
    </>
  )
}

export default Team
