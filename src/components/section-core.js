import React, { useEffect } from "react"
import Slider from "react-slick"
import Section from "./section"
import Image from "./image"

const SectionCore = ({ num, title, id }) => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 4000,
    customPaging: index => {
      return <a>{index + 1}</a>
    },
    dots: true,
    fade: true,
    focusOnChange: true,
    focusOnSelect: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <Section id={id} sectionTitle={`${num}. ${title}`}>
      <p>
        At its core, Jade connects public GitHub repositories and AWS services.
      </p>
      <Image imageName="svgs/39.svg" imageAlt="Provisioning Services" />
      <p>
        Upon initialization, Jade provisions the above 6 underlying AWS
        services. It configures these underlying AWS services, sets permissions
        and roles for how the services may interact with each other, and which
        users may interact with those services. The developer then connects
        those services to a GitHub repository to automate the build and
        deployment processes for developers.
      </p>
      <p>
        While AWS and GitHub are by no means the only suitable providers of
        cloud services and repository hosting, we chose to utilize them because
        of their prominence in the industry.
      </p>
      <h3>{num}.1 Build stage</h3>
      <h4>{num}.1.1 Overview of build stage architecture</h4>
      <p>Jade utilizes an AWS EC2 instance to handle the build process.</p>
      <Image imageName="svgs/42.svg" imageAlt="Provisioning Services" />
      <p>The components of the EC2 instance include:</p>
      <ul className="bullets">
        <li className="list-item">
          Configuration related to the user and the provisioned AWS services
        </li>
        <li className="list-item">
          An Nginx web server set up as a reverse proxy to handle incoming
          requests
        </li>
        <li className="list-item">
          A node application that contains the logic to handle the build process
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
      <h4>{num}.1.2 GitHub webhook</h4>
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
      </Slider>
      <p>
        During initialization, Jade provides a URL to the developer to add to
        their GitHub repository webhook settings so that anytime a commit is
        pushed to that repository, a webhook is sent to Jade’s EC2 instance and
        its first stop is the Nginx web server. Nginx ensures that the request
        is coming in on the correct port and proxies the request to Jade's node
        server.
      </p>
      <p>
        The node server ensures the request is sent to the correct route and
        passes the request to the build logic. Jade then pulls the master branch
        of the repository from GitHub and checks to see if it has changed since
        the last build and if so, initiates the build process.
      </p>
      <h4>{num}.1.3 Examining the build process</h4>
      <p>
        Once the build process has been initiated, Jade uses the user
        configuration stored on EC2, which holds information including the build
        command for the static site generator, to gather the required resources
        to build the application. The resources gathered includes the source
        code, which is already pulled from GitHub, and data stored in external
        sources such as a content management system.
      </p>
      <Image imageName="svgs/48.svg" imageAlt="Build Process 5" />
      <p>
        Jade is configured to utilize Gatsby as a static site generator and
        Contentful as a content management system. There are a multitude of
        options for both static site generators and content management systems;
        however, we chose these due to their relative prominence in the industry
        and the large community and amount of resources around them that exist.
        Other tools could be utilized with further configuration by the
        developer, but Jade is built to support these 2 out of the box.
      </p>
      <Image imageName="svgs/49.svg" imageAlt="Gatsby Build Deep Dive" />
      <p>
        Jade passes the source code to Gatsby, parses it, and then reaches out
        to Contentful if the source code indicates the project is utilizing it
        as a CMS. Gatsby compiles the source code and data received from
        Contentful, minifies the resulting code to save space, transpiles it to
        code that can be interpreted by all browsers, and bundles the assets
        into a static web application.
      </p>
      <p>
        Once the application is built, the application is sent to the deploy
        process.
      </p>
      <Image imageName="svgs/50.svg" imageAlt="Deploy Process 1" />
      <h3>{num}.2 Deploy stage</h3>
      <h4>{num}.2.1 Overview of deploy stage architecture</h4>
      <p>The key components involved in deployment are as follows:</p>
      <Image imageName="svgs/51.svg" imageAlt="Deploy Process 1" />
      <p>
        An S3 bucket hosts the live build of the application. The bucket has an
        event associated with it such that whenever a new build is received, a
        “new object” event fires and triggers an AWS Lambda function that
        contains logic to invalidate the previous build on CloudFront. This
        ensures that on every build, the CDN serves only the latest built files
        to end users.
      </p>
      <h4>{num}.2.2 CDN invalidation</h4>
      <Image imageName="svgs/52.svg" imageAlt="Deploy Process 1" />
      <p>
        CDN invalidation is an important issue that we ran into when building
        Jade. Assets distributed via AWS CloudFront expire in 24 hours by
        default. Therefore, even though Jade’s live build S3 bucket is
        configured as the origin source for CloudFront, CloudFront will not pull
        newly built files until 24 hours from when the last build was uploaded.
        CloudFront has to be notified that older files should be invalidated
        before it points to the newly built files.
      </p>
      <p>
        One characteristic of static site generators is that most updated files
        are versioned by the SSG during the build process. Files are versioned
        by concatenating a sequence of characters with the developer’s original
        filename. This versioning is carried out with the exception of certain
        files that are not meant to be cached, such as <code>index.html</code>,
        which is updated to reference these versioned files.
      </p>
      <p>
        To overcome the invalidation problem, we considered sending
        invalidations for all files on CloudFront. However, we learned that AWS
        recommends minimizing the number of CDN invalidations made, as this is a
        costly operation and only 1,000 invalidations are provided each month
        for free. Were Jade to invalidate every file on each application update
        and deployment, developers would likely run into this limit quickly.
      </p>
      <p>
        We decided to use these characteristics in implementing CDN
        invalidations:
      </p>
      <Image imageName="svgs/54.svg" imageAlt="Deploy Process 1" />
      <p>
        As seen in the code snippet, Jade invalidates only one file every time a
        new build is detected: the <code>index.html</code> file. This is because
        <code>index.html</code> references specific versions of files.
        CloudFront will detect which files are needed based on{" "}
        <code>index.html</code> and pull these files from S3 when a new version
        is uploaded, ensuring that the user is always presented with the most
        recent version of the application.
      </p>
      <Image imageName="svgs/55.svg" imageAlt="Deploy Process 1" />
      <p>
        With the deploy stage complete, this represents the core functionality
        of Jade.
      </p>
    </Section>
  )
}

export default SectionCore
