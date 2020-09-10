import React from "react"
import Section from "./section"
import { createAnchor } from "./util"

const SectionUsage = ({ title, id }) => {
  const sectionNumber = 2
  return (
    <Section id={id} sectionTitle={`${sectionNumber}. ${title}`}>
      <p>To get started with Jade, run:</p>
      <pre>npm install -g @jade-framework/jade</pre>
      <p>
        Then, navigate to a directory where you would like to store the{" "}
        <code>.jade</code> folder, which will contain your Jade private key.
      </p>
      <p>
        To explore Jade, make sure you have a public GitHub repository
        available. Jade has been tested for use with Gatsby - to get started,
        you may update the GitHub repository with our Gatsby template{" "}
        {createAnchor(
          "here",
          "https://github.com/gatsbyjs/gatsby-starter-default"
        )}{" "}
        or follow the official Gatsby instructions to set up a Gatsby project{" "}
        {createAnchor("here", "https://www.gatsbyjs.com/docs/quick-start")}.
      </p>
      <p>When ready, run:</p>
      <pre>jade init</pre>
      <p>
        This will check you have the right AWS settings, prompt you for your
        GitHub URL and provision the relevant AWS infrastructure for you.
      </p>
      <p>Here is a list of Jade commands available:</p>
      <table className="documentation">
        <thead>
          <tr>
            <th className="doc-command">Command</th>
            <th className="doc-desc">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>jade init</code>
            </td>
            <td>Initialize a new JAMstack app and associated AWS services</td>
          </tr>
          <tr>
            <td>
              <code>jade add</code>
            </td>
            <td>Add a new JAMstack app</td>
          </tr>
          <tr>
            <td>
              <code>jade list</code>
            </td>
            <td>List all your existing JAMstack apps</td>
          </tr>
          <tr>
            <td>
              <code>jade freeze {`<app name>`}</code>
            </td>
            <td>
              Freeze your EC2 instance when you aren't developing your app
            </td>
          </tr>
          <tr>
            <td>
              <code>jade unfreeze {`<app name>`}</code>
            </td>
            <td>Unfreeze your EC2 instance to continue development</td>
          </tr>
          <tr>
            <td>
              <code>jade delete {`<app name>`}</code>
            </td>
            <td>Remove an app from the JAMstack</td>
          </tr>
          <tr>
            <td>
              <code>jade destroy</code>
            </td>
            <td>Remove all apps and all Jade AWS infrastructure</td>
          </tr>
        </tbody>
      </table>
      <p>
        For notes on these commands, please visit the documentation on our{" "}
        {createAnchor("GitHub page", "https://github.com/jade-framework/jade")}.
      </p>
      <p>
        The following chapters will go into detail about the JAMstack
        architecture, Jade and how we expanded on the functionality of Jade.
      </p>
    </Section>
  )
}

export default SectionUsage
