import React, { useEffect } from "react"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import Section from "./section"
import Image from "./image"

const SectionLaunch = ({ num, title, id }) => {
  return (
    <Section id={id} sectionTitle={`${num}. ${title}`}>
      <p>
        Having understood the advantages of JAMstack web apps, developers may be
        interested in launching an app utilizing this architecture for
        themselves or their team. In this section, we examine certain approaches
        a team would consider when deploying a JAMstack app.
      </p>
      <h3>{num}.1 Manually provisioning infrastructure</h3>
      <p>
        The first approach in launching a JAMstack web app is to manually
        provision the underlying services responsible for building and deploying
        the application. For a basic application with core JAMstack
        functionality, a developer would need to provision a minimum of 5
        services as outlined below.
      </p>

      <Image imageName="svgs/30.svg" imageAlt="Provisioning Services" />
      <p>
        Each service requires multiple steps to provision and must subsequently
        be configured to interact with other services. This is a time-intensive
        process that requires in-depth knowledge of the cloud provider and must
        be completed for each application the developer launches.
      </p>
      <h3>{num}.2 Maintaining the application</h3>
      <p>
        After provisioning infrastructure, the developer needs to consider how
        they will handle updates and deployments of their application. Based on
        the JAMstack workflow, a build step must be completed every time an
        update is made to the application’s source code. Once the build is
        complete, the application needs to be uploaded to a hosting environment
        and previous content on the CDN must be invalidated.
      </p>
      {/* <Image imageName="2-workflow-2.png" /> */}
      <p>
        While this process can be handled manually, developers may be tempted to
        automate it to avoid repetitive tasks. To do so, the developer would
        need to implement systems that, at a minimum, can:
      </p>
      <ul className="bullets">
        <li className="list-item">
          Detect changes and pull code from the repository
        </li>
        <li className="list-item">Build the site</li>
        <li className="list-item">
          Deploy the built site to a hosting service
        </li>
        <li className="list-item">Invalidate previous content on the CDN</li>
      </ul>
      <p>
        The steps involved in doing so are complex, requiring significant
        knowledge and time to correctly implement.
      </p>
      <h3>{num}.3 JAMstack as a Service (JaaS)</h3>
      <p>
        With the difficulty involved in manually provisioning and maintaining
        such services, most developers may not choose this route to deploy a
        JAMstack app. Fortunately, there are many solutions out there that
        handle this for developers. We refer to these services as a JAMstack as
        a Service (JaaS).
      </p>
      <p>JaaS providers manage the build and deploy process for developers. </p>
      <Image imageName="svgs/34.svg" imageAlt="Provisioning Services" />
      <p>
        In utilizing a JaaS, the developer only needs to concern themselves with
        updating their source code and committing the update to a git
        repository. The complexity of the build and deployment processes are
        abstracted away by the provider and the JAMstack application is
        delivered to end users via a CDN.
      </p>
      <h3>{num}.4 JaaS providers</h3>
      <p>
        Many JaaS providers have come into existence in recent years to tackle
        the problems outlined above. Below, we outline four of the most
        prominent providers in the industry:
      </p>
      <Image imageName="svgs/36.svg" imageAlt="Provisioning Services" />
      <p>
        Every one of the above providers provision underlying architecture and
        handle the build and deployment processes for developers. They also
        include various other integrations such as serverless functions,
        authentication and forms.
      </p>
      <p>
        However, with the exception of Vercel, these providers are not
        open-source. When using their services, developers are subject to their
        set fee structures. In addition, developers do not have any flexibility
        to adjust the underlying infrastructure used by the provider. As such,
        any changes will have to be made via the JaaS provider, which is likely
        to incur an additional cost. 
      </p>
      <h3>{num}.5 Why we built Jade</h3>
      <p>
        We built Jade for developers who want full control over their
        infrastructure without having to provision that infrastructure
        themselves.
      </p>
      <p>
        Jade is open-source, so developers are free to take the source code and
        modify it to suit their individual needs. Also, Jade provisions AWS
        resources for the developer, meaning:
      </p>
      <ul className="bullets">
        <li className="list-item">
          They are not tied to a set fee structure, but rather are charged based
          on usage of the underlying AWS resources
        </li>
        <li className="list-item">
          They are free to customize those underlying resources to suit their
          specific needs
        </li>
      </ul>
    </Section>
  )
}

export default SectionLaunch
