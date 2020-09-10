import React from "react"
import Section from "./section"

const SectionFuture = ({ num, title, id }) => (
  <Section id={id} sectionTitle={`${num}. ${title}`}>
    <p>In the future, we would like to implement the following features:</p>
    <ul className="bullets">
      <li className="list-item">
        Allow users to deploy the live site from the admin panel
      </li>
      <li className="list-item">Manage developers' serverless functions</li>
      <li className="list-item">
        Allow sourcing from other Git hosting providers (ex. GitLab, BitBucket)
      </li>
      <li className="list-item">
        Automatically set up webhooks for each Jade app
      </li>
      <li className="list-item">
        Support other languages (ex. Ruby/Go) and SSGs (ex. Jekyll/Hugo)
      </li>
    </ul>
  </Section>
)

export default SectionFuture
