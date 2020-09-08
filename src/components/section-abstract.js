import React from "react"
import Section from "./section"

const SectionAbstract = ({ title, id }) => {
  const sectionNumber = 1

  return (
    <>
      <Section id={id} sectionTitle={`${sectionNumber}. Abstract`}>
        <p>
          Jade is an open-source framework that makes it simple to deploy and
          maintain JAMstack applications on AWS cloud infrastructure. The
          JAMstack is a web development architecture that utilizes modern tools
          and practices to make web apps fast, secure and highly scalable. This
          case study examines how Jade abstracts away the time and complexity of
          writing backend code related to the underlying infrastructure,
          allowing developers to focus on building their applications.
        </p>
      </Section>
    </>
  )
}

export default SectionAbstract
