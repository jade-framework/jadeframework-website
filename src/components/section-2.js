import React, { useEffect } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import Section from "./section"
import Image from "./image"

const SectionTwo = ({ title, id }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <>
      <Section id={id} sectionTitle="4. Launching a JAMstack Web App">
        <p>
          Having understood the advantages of JAMstack web apps, developers may
          be interested in launching an app utilizing this architecture for
          themselves or their team. In this section, we examine certain
          approaches a team would consider when deploying a JAMstack app.
        </p>
        <h3>4.1 Manually provisioning infrastructure</h3>
        <p>
          The first approach in launching a JAMstack web app is to manually
          provision the underlying services responsible for building and
          deploying the application. For a basic application with core JAMstack
          functionality, a developer would need to provision a minimum of 5
          services as outlined below.
        </p>

        <Image imageName="svgs/30.svg" imageAlt="Provisioning Services" />
        <p>
          Each service requires multiple steps to provision and must
          subsequently be configured to interact with other services. This is a
          time-intensive process that requires in-depth knowledge of the cloud
          provider and must be completed for each application the developer
          launches.
        </p>
        <h3>4.2 Maintaining the application</h3>
        <p>
          After provisioning infrastructure, the developer needs to consider how
          they will handle updates and deployments of their application. Based
          on the JAMstack workflow, a build step must be completed every time an
          update is made to the application’s source code. Once the build is
          complete, the application needs to be uploaded to a hosting
          environment and previous content on the CDN must be invalidated.
        </p>
        {/* <Image imageName="2-workflow-2.png" /> */}
        <p>
          While this process can be handled manually, developers may be tempted
          to automate it to avoid repetitive tasks. To do so, the developer
          would need to implement systems that, at a minimum, can:
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
        <h3>4.3 JAMstack as a Service (JaaS)</h3>
        <p>
          With the difficulty involved in manually provisioning and maintaining
          such services, most developers may not choose this route to deploy a
          JAMstack app. Fortunately, there are many solutions out there that
          handle this for developers. We refer to these services as a JAMstack
          as a Service (JaaS).
        </p>
        <p>
          JaaS providers manage the build and deploy process for developers. 
        </p>
        <Image imageName="svgs/34.svg" imageAlt="Provisioning Services" />
        <p>
          In utilizing a JaaS, the developer only needs to concern themselves
          with updating their source code and committing the update to a git
          repository. The complexity of the build and deployment processes are
          abstracted away by the provider and the JAMstack application is
          delivered to end users via a CDN.
        </p>
        <h3>4.4 JaaS providers</h3>
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
          However, with the exception of Vercel, these providers are not open
          source. When using their services, developers are subject to their set
          fee structures. In addition, developers do not have any flexibility to
          adjust the underlying infrastructure used by the provider. As such,
          any changes will have to be made via the JaaS provider, which is
          likely to incur an additional cost. 
        </p>
        <h3>4.5 Why we built Jade</h3>
        <p>
          We built Jade for developers who want full control over their
          infrastructure without having to provision that infrastructure
          themselves.
        </p>
        <p>
          Jade is open source, so developers are free to take the source code
          and modify it to suit their individual needs. Also, Jade provisions
          AWS resources for the developer, meaning:
        </p>
        <ul>
          <li>
            They are not tied to a set fee structure, but rather are charged
            based on usage of the underlying AWS resources.
          </li>
          <li>
            They are free to customize those underlying resources to suit their
            specific needs
          </li>
        </ul>
        <Section id={id} sectionTitle="5. Jade Core">
          <p>
            At its core, Jade connects public GitHub repositories and AWS
            services.
          </p>
          <Image imageName="svgs/39.svg" imageAlt="Provisioning Services" />
          <p>
            Upon initialization, Jade provisions the above 6 underlying AWS
            services. It configures these underlying AWS services, sets
            permissions and roles for how the services may interact with each
            other, and which users may interact with those services. The
            developer then connects those services to a GitHub repository to
            automate the build and deployment processes for developers.
          </p>
          <p>
            While AWS and GitHub are by no means the only suitable providers of
            cloud services and repository hosting, we chose to utilize them
            because of their prominence in the industry.
          </p>
          <h3>5.1 Build stage</h3>
          <h4>5.1.1 Overview of build stage architecture</h4>
          <p>Jade utilizes an AWS EC2 instance to handle the build process.</p>
          <Image imageName="svgs/42.svg" imageAlt="Provisioning Services" />
          <p>The components or the EC2 instance include:</p>
          <ul className="bullets">
            <li className="list-item">
              Configuration related to the user and the provisioned AWS services
            </li>
            <li className="list-item">
              An Nginx web server set up as a reverse proxy to handle incoming
              requests
            </li>
            <li className="list-item">
              A node application that contains the logic to handle the build
              process
            </li>
            <li className="list-item">
              A copy of the most recent source code from the project’s git
              repository as well as a copy of the most recent build of the
              application
            </li>
          </ul>
          <p>The components of the Node application running on EC2 include:</p>
          <ul className="bullets">
            <li className="list-item">
              Server.js, which handles routing of incoming requests from Nginx
            </li>
            <li className="list-item">
              Build.js, which gathers the required resources and builds the
              application
            </li>
            <li className="list-item">
              Logger.js, which logs the results of each build
            </li>
            <li className="list-item">
              Update.js, which sends the built application on to the deployment
              process
            </li>
          </ul>
          <h4>5.1.2 Github webhook</h4>
          <p>
            The slideshow below details the process from the developer pushing a
            commit to GitHub to the build process being initiated.
          </p>
          <Slider {...settings}>
            <div>
              <Image imageName="svgs/44.svg" imageAlt="Build Process 1" />
            </div>
            <div>
              <Image imageName="svgs/45.svg" imageAlt="Build Process 2" />
            </div>
            <div>
              <Image imageName="svgs/46.svg" imageAlt="Build Process 3" />
            </div>
            <div>
              <Image imageName="svgs/47.svg" imageAlt="Build Process 4" />
            </div>
            <div>
              <Image imageName="svgs/48.svg" imageAlt="Build Process 5" />
            </div>
          </Slider>
          <h4>5.1.3 Examining the build process</h4>
          <p>
            Once the build process has been initiated, Jade uses the user
            configuration stored on EC2, which holds information including the
            build command for the static site generator, to gather the required
            resources to build the application, including the source code
            already pulled from Github and data stored in external sources such
            as a content management system.
          </p>
          <p>
            Jade is configured to utilize Gatsby as a static site generator and
            Contentful as a content management system. There are a multitude of
            options for both static site generators and content management
            systems; however we chose these due to their relative prominence in
            the industry and the large community and amount of resources around
            them that exist. Other tools could be utilized with further
            configuration by the developer, but Jade is built to support these 2
            out of the box.
          </p>
          <Image imageName="svgs/49.svg" imageAlt="Gatsby Build Deep Dive" />
          <p>
            Jade passes the source code to Gatsby, parses it, and then reaches
            out to Contentful if the source code indicates the project is
            utilizing it as a CMS. Gatsby compiles the source code and data
            received from Contentful, minifies the resulting code to save space,
            transpiles it to code that can be interpreted by all browsers, and
            bundles the assets into a static web application.
          </p>
          <p>
            Once the application is built, the application is sent to the deploy
            process.
          </p>
          <Image imageName="svgs/50.svg" imageAlt="Deploy Process 1" />
          <h3>5.2 Deploy stage</h3>
          <h4>5.2.1 Overview of deploy stage architecture</h4>
          <p>The key components involved in deployment are as follows:</p>
          <Image imageName="svgs/51.svg" imageAlt="Deploy Process 1" />
          <p>
            An S3 bucket hosts the live build of the application. The bucket has
            an event associated with it such that whenever a new build is
            received, a “new object” event fires and triggers an AWS Lambda
            function that contains logic to invalidate the previous build on
            CloudFront. This ensures that on every build, the CDN serves only
            the latest built files to end users.
          </p>
          <h4>5.2.2 CDN invalidation</h4>
          <Image imageName="svgs/52.svg" imageAlt="Deploy Process 1" />
          <p>
            CDN invalidation is an important issue that we ran into when
            building Jade. Assets distributed via AWS CloudFront expire in 24
            hours by default. Therefore, even though Jade’s live build S3 bucket
            is configured as the origin source for CloudFront, CloudFront will
            not pull newly built files until 24 hours from when the last build
            was uploaded. CloudFront has to be notified that older files should
            be invalidated before it points to the newly built files.
          </p>
          <p>
            One characteristic of static site generators is that most updated
            files are versioned by the SSG during the build process. Files are
            versioned by concatenating a sequence of characters with the
            developer’s original filename. This versioning is carried out with
            the exception of certain files that are not meant to be cached, such
            as `index.html`, which is updated to reference these versioned
            files.
          </p>
          <p>
            To overcome the invalidation problem, we considered sending
            invalidations for all files on CloudFront. However, we learned that
            AWS recommends minimizing the number of CDN invalidations made, as
            this is a costly operation and only 1,000 invalidations are provided
            each month for free. Were Jade to invalidate every file on each
            application update and deployment, developers would likely run into
            this limit quickly.
          </p>
          <p>
            We decided to use these characteristics in implementing CDN
            invalidations:
          </p>
          <Image imageName="svgs/54.svg" imageAlt="Deploy Process 1" />
          <p>
            As seen in the code snippet, Jade invalidates only one file every
            time a new build is detected: the `index.html` file. This is because
            `index.html` references specific versions of files. CloudFront will
            detect which files are needed based on `index.html` and pull these
            files from S3 when a new version is uploaded, ensuring that the user
            is always presented with the most recent version of the application.
          </p>
          <Image imageName="svgs/55.svg" imageAlt="Deploy Process 1" />
          <p>
            With the deploy stage complete, this represents the core
            functionality of Jade.
          </p>
        </Section>
      </Section>
    </>
  )
}

export default SectionTwo
