import React, { useEffect } from "react"
import Section from "./section"
import Image from "./image"

const SectionTwo = ({ title, id }) => {
  return (
    <>
      <Section id={id} sectionTitle="Jer's Stuff">
        <p>Jer's stuff goes here</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <Image imageName="2-provisioning-services.png" />
        <Image imageName="2-workflow-2.png" />
      </Section>
    </>
  )
}

export default SectionTwo
