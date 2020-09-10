import React from "react"
import { Link, animateScroll as scroll } from "react-scroll"

import Section from "./section"
import Image from "./image"
import Card from "./card"
import Slider from "react-slick"
import Popup from "reactjs-popup"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "reactjs-popup/dist/index.css"

const createAnchor = (title, link) => (
  <a href={link} target="_blank" rel="noreferrer">
    {title}
  </a>
)

const SectionOne = ({ title, id }) => {
  const sectionNumber = 3
  const settings = {
    customPaging: index => {
      return <a>{index + 1}</a>
    },
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
  }

  return (
    <>
      <Section id={id} sectionTitle={`${sectionNumber}. What is the JAMstack`}>
        <p>
          To understand Jade, we first have to examine two typical web app
          architectures before learning about the JAMstack and how it differs.
          If you are already comfortable with web app architectures and the
          JAMstack,{" "}
          <Link
            activeClass="active"
            to="section-2"
            spy={true}
            smooth={true}
            offset={-270}
            duration={500}
          >
            click here to dive straight into Jade
          </Link>
          .
        </p>
        <h3
          id={`subtitle-${sectionNumber}-1`}
          data-title={`Subtitle ${sectionNumber}-1`}
        >
          {`${sectionNumber}.1 Web app architectures`}
        </h3>
        <h4
          id={`subtitle-${sectionNumber}-1-1`}
          data-title={`Subtitle ${sectionNumber}-1-1`}
        >
          {`${sectionNumber}.1.1 Static websites`}
        </h4>
        <p>
          Originally, web sites consisted of static assets (HTML, CSS,
          JavaScript) served by a web server directly to the client.
        </p>
        <Image imageAlt="static website architecture" imageName="svgs/4.svg" />
        <p>
          The simple nature of these web sites allowed for a simple architecture
          but this simple architecture meant limited functionality. Every user
          saw the same static pages and there was non way to dynamically source
          content.
        </p>
        <h4
          id={`subtitle-${sectionNumber}-1-2`}
          data-title={`Subtitle ${sectionNumber}-1-2`}
        >
          {`${sectionNumber}.1.2 Standard web apps`}
        </h4>
        <p>
          Web architectures subsequently evolved and introduced application
          servers tasked with sourcing data and dynamically building pages at
          runtime.
        </p>
        <Image imageAlt="web app architecture" imageName="svgs/5.svg" />
        <p>
          This improved the capabilities of web sites immensly but the increased
          complexity also introduced tradeoffs related to performance, security
          and scalability.
        </p>
        <h3
          id={`subtitle-${sectionNumber}-2`}
          data-title={`Subtitle ${sectionNumber}-2`}
        >
          {`${sectionNumber}.2 Serving content from a standard architecture`}
        </h3>
        <h4
          id={`subtitle-${sectionNumber}-2-1`}
          data-title={`Subtitle ${sectionNumber}-2-1`}
        >
          {`${sectionNumber}.2.1 How web pages are served`}
        </h4>
        <p>
          When a client visits a website, a GET request is made to a web server
          requesting an HTML file. The client parses the file and will
          subsequently send additional requests for resources referenced in the
          parsed HTML such as CSS, JavaScript and images.
        </p>
        <Slider {...settings}>
          <div>
            <Image imageAlt="initial request" imageName="svgs/6.svg" />
            <p className="slide-caption">
              On the inititial GET request the web server returns an HTML file
            </p>
          </div>
          <div>
            <Image
              imageAlt="additional request for other static assets"
              imageName="svgs/7.svg"
            />
            <p className="slide-caption">
              Additional GET requests are made for any resources referenced in
              the HTML file
            </p>
          </div>
        </Slider>
        <h4
          id={`subtitle-${sectionNumber}-2-2`}
          data-title={`Subtitle ${sectionNumber}-2-2`}
        >
          {`${sectionNumber}.2.2 How web pages are dynamically built`}
        </h4>
        <p>
          If the page the client is requesting includes content from a source
          such as a database, the web server will send a request to an app
          server, which will reach out to that data source, dynamically build
          pages, and send them back to the client.
        </p>
        <Image imageAlt="building dynamic content" imageName="svgs/8.svg" />
        <h4
          id={`subtitle-${sectionNumber}-2-3`}
          data-title={`Subtitle ${sectionNumber}-2-3`}
        >
          {`${sectionNumber}.2.3 The tradeoff`}
        </h4>
        <p>
          Dynamically building pages allows content to be sourced at runtime but
          also introduces a degree of complexity that comes with tradeoffs:{" "}
        </p>
        <ul className="bullets">
          <li className="list-item">
            Performance: It takes time to source data and build pages
          </li>
          <li className="list-item">
            Scalability: The infrastructure that handles the build must be
            scaled based on traffic
          </li>
          <li className="list-item">
            Security: Increased runtime infrastucture opens up increased surface
            areas for attack
          </li>
        </ul>
        <p>
          Web page speed, the time it takes to fully display content on a page,
          is an important factor to consider in relation to both user engagement
          and search engine optimization. Almost 50% of users expect a web page
          to load within 2 seconds and if a page takes longer than 3 seconds to
          load, statistically 53% of users are likely to abandon the site.
          <span className="span-wrapper">
            <Popup
              trigger={<span className="superscript">6</span>}
              position="bottom center"
              on={["hover", "focus"]}
              arrow={"bottom center" !== "center center"}
            >
              <Card
                title="How Page Speed Affects SEO & Google Rankings | The 2020 Page Speed Guide"
                author="Adrian Cojocariu"
                organization="CognitiveSEO"
              ></Card>
            </Popup>
          </span>
          In addtion, Google and other search engines consider performance an
          important metric for their search rankings.
        </p>

        <h4
          id={`subtitle-${sectionNumber}-2-4`}
          data-title={`Subtitle ${sectionNumber}-2-4`}
        >
          {`${sectionNumber}.2.4 Prelude to a different architecture`}
        </h4>
        <p>
          It's obvious that modern web applications require the ability to
          source data, build pages and serve these pages to clients. So let's
          now take a look at how we could potentially modify the architecture to
          retain this ability yet mitigate the associated tradeoffs in
          performance, security and scalability.
        </p>

        <h3
          id={`subtitle-${sectionNumber}-3`}
          data-title={`Subtitle ${sectionNumber}-3`}
        >
          {`${sectionNumber}.3 New architecture for certain use cases`}
        </h3>
        <h4
          id={`subtitle-${sectionNumber}-3-1`}
          data-title={`Subtitle ${sectionNumber}-3-1`}
        >
          {`${sectionNumber}.3.1 Building pages pre-runtime`}
        </h4>
        <p>
          Certain web pages are able to source data at build time. Those that
          meet this criteria can pre-build their pages which is a technique
          where content is assembled ahead of time, usually on the server-side.
          When a client request comes in, the server can respond with these
          pre-built web files which includes the HTML file and all referenced
          static assets. This allows the client to avoid retrieving additional
          static assets with other requests, leading to the following benefits:
        </p>
        <ul className="bullets">
          <li className="list-item">
            For end users, pages load faster as there is less client-side
            rendering
          </li>
          <li className="list-item">
            For developers, fewer network calls are sent to the web server,
            reducing load and improving scalability
          </li>
        </ul>
        <Image imageAlt="pre-building pages" imageName="svgs/9.svg" />
        <h4
          id={`subtitle-${sectionNumber}-3-2`}
          data-title={`Subtitle ${sectionNumber}-3-2`}
        >
          {`${sectionNumber}.3.2 Static site generators`}
        </h4>
        <p>
          A popular tool for pre-building web pages are static site generators
          (SSGs). Popular examples of SSGs include Hugo, Jekyll, and Gatsby.
          Generally, SSGs convert source code and data into pre-built files.
          SSGs build files in four major processes:
        </p>
        <ul className="bullets">
          <li className="list-item">
            Compile - Creating new files for any data/content sourced from a CMS
          </li>
          <li className="list-item">
            Minify - Reduce the size of files by performing code optimizations.
            This includes removing unnecessary white space and comments as well
            as shortening variable names
          </li>
          <li className="list-item">
            Transpile - Convert ES6+ code to ES5 in order to remain compatible
            with all major modern web browsers
          </li>
          <li className="list-item">
            Bundle - Combine one or more resources such as HTML files,
            JavaScript files, stylesheets, and images into a single file
          </li>
        </ul>
        <p>
          The most important step here is the
          <span className="emphasize"> compile</span> step, which involves
          applying data/content to the right templates in order to generate
          static HTML. By compiling the data ahead of time, there is no need for
          server-side processing, which can be time-consuming. This allows files
          to be pre-built as the data has already been incorporated, allowing
          content to be delivered faster to end users.
        </p>
        <Image imageAlt="SSGs" imageName="svgs/10.svg" />
        <h4
          id={`subtitle-${sectionNumber}-3-3`}
          data-title={`Subtitle ${sectionNumber}-3-3`}
        >
          {`${sectionNumber}.3.3 Taking advantage of pre-built pages`}
        </h4>
        <p>
          Pre-building web pages can actually open up changes in the standard
          web app architecture. While web servers are great at serving static
          content, whether individual files or pre-built files, they are not the
          only infrastructure available to do so. Content delivery networks
          (CDNs) can also serve files. In fact, there are significant advantages
          to serving static files from CDNs over web servers, which are
          discussed in section 3.5.1.
        </p>
        <p>
          If all static assets can be served from a CDN then it is possible to
          substitute the web server out of the standard architecture. Requests
          for dynamic content would instead be sent straight to an application
          server from the client. The architecture now involves a CDN, an
          application server, and a database.
        </p>
        <Image
          imageAlt="replacing web server with CDN"
          imageName="svgs/12.svg"
        />
        <h4
          id={`subtitle-${sectionNumber}-3-4`}
          data-title={`Subtitle ${sectionNumber}-3-4`}
        >
          {`${sectionNumber}.3.4 Transitioning to a serverless model`}
        </h4>
        <p>
          It is possible to take this one step further. For standard web apps,
          the application server and database are responsible for providing
          dynamic functionality, particularly managing data and handling other
          business logic. To transition to a serverless model, this
          functionality can be abstracted in two ways:
        </p>
        <ul className="bullets">
          <li className="list-item">Data can be managed through APIs</li>
          <li className="list-item">
            Business logic can be handled using serverless functions
          </li>
        </ul>
        <Image
          imageAlt="Replacing app server and database with APIs and FaaS"
          imageName="svgs/13.svg"
        />
        <p>
          In this serverless model, the client is now responsible for dynamic
          functionality, instead of the application server as before, and
          achieves this by making API calls and invoking serverless functions.
          This is most often accomplished using JavaScript on the browser at
          runtime.
        </p>
        <p>
          By making this transition, we have moved into a web app architecture
          commonly known as the JAMstack architecture.
        </p>
        <Image imageAlt="JAMstack architecture" imageName="svgs/15.svg" />
        <h3
          id={`subtitle-${sectionNumber}-4`}
          data-title={`Subtitle ${sectionNumber}-4`}
        >
          {`${sectionNumber}.4 The JAMstack architecture`}
        </h3>
        <h4
          id={`subtitle-${sectionNumber}-4-1`}
          data-title={`Subtitle ${sectionNumber}-4-1`}
        >
          {`${sectionNumber}.4.1 Understanding the JAM in JAMstack`}
        </h4>
        <p>
          The JAMstack architecture is neither a tech stack nor a tool. It is an
          architectural pattern for building web applications, and is
          particularly suited to applications that can source data and pre-build
          pages before runtime. This term was coined by the CEO of Netlify,
          Mathias Billmann, who refers to it as a "modern web development
          architecture based on client-side
          <span className="emphasize"> JavaScript</span>, reusable
          <span className="emphasize"> APIs</span>, and prebuilt
          <span className="emphasize"> Markup</span>."
        </p>
        <table id="jam-table">
          <tbody>
            <tr>
              <td>JavaScript</td>
              <td>APIs</td>
              <td>Markup</td>
            </tr>
            <tr>
              <td colSpan="3">JAMstack</td>
            </tr>
          </tbody>
        </table>
        <p>
          Being used in nearly 97% of all websites on the internet JavaScript
          and its rich ecosystem of resources has grown to be highly adept at
          handling all types of dynamic functionality needed at runtime.
          <span className="span-wrapper">
            <Popup
              trigger={<span className="superscript">3</span>}
              position="bottom center"
              on={["hover", "focus"]}
              arrow={"bottom center" !== "center center"}
            >
              <Card
                title="Historical trends in the usage statistics of client-side programming languages for websites"
                organization="W3Techs"
                date="September 1, 2020"
              ></Card>
            </Popup>
          </span>
          While the use of JavaScript is not unique to the JAMstack, it is a key
          factor in enabling a shift towards a serverless model.
        </p>
        <p>
          For standard web apps, servers are used to provide dynamic
          functionality. In the JAMstack, server side operations are abstracted
          into reusable APIs which can be either 3rd-party APIs, custom APIs or
          serverless functions. These are typically accessed by the client over
          HTTPS using JavaScript.
        </p>
        <p>
          Markup is pre-built at build time, and is often compiled with a static
          site generator which applies content to templates. These static site
          generators can source data from content management systems, an
          application providing an interface for users to create, manage, and
          modify content. Below is a table listing some of the common static
          site generators and their templates:
          <span className="span-wrapper">
            <Popup
              trigger={<span className="superscript">4</span>}
              position="bottom center"
              on={["hover", "focus"]}
              arrow={"bottom center" !== "center center"}
            >
              <Card
                title="A List of Static Site Generators for Jamstack Sites"
                organization="StaticGen"
              ></Card>
            </Popup>
          </span>
        </p>
        <table id="ssg-table">
          <thead>
            <tr>
              <th>Template</th>
              <th>Static Site Generators</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>React</td>
              <td>Next.js, Gatsby</td>
            </tr>
            <tr>
              <td>Vue</td>
              <td>Nuxt, VuePress, Gridsome</td>
            </tr>
            <tr>
              <td>Angular</td>
              <td>Scully</td>
            </tr>
            <tr>
              <td>Markdown</td>
              <td>Eleventy, Slate, Publish</td>
            </tr>
            <tr>
              <td>Handlebars</td>
              <td>HubPress, Hexo, Antora</td>
            </tr>
          </tbody>
        </table>
        <h4
          id={`subtitle-${sectionNumber}-4-2`}
          data-title={`Subtitle ${sectionNumber}-4-2`}
        >
          {`${sectionNumber}.4.2 High level view of the JAMstack`}
        </h4>
        <p>
          Having replaced the web server with the CDN, and the application
          server with APIs alongside serverless functions, the JAMstack is
          essentially a serverless architecture. As mentioned, this does not
          replace the need for servers entirely, since any custom APIs will
          continue to rely on servers. The main difference is that JAMstack
          development can carry on without concern for the maintenance of those
          servers.
        </p>
        <Image
          imageAlt="web app architecture & jamstack architecture"
          imageName="svgs/16.svg"
        />
        <h4
          id={`subtitle-${sectionNumber}-4-3`}
          data-title={`Subtitle ${sectionNumber}-4-3`}
        >
          {`${sectionNumber}.4.3 Understanding the paradigm shift`}
        </h4>
        <p>
          Now that the client is responsible for all content, the paradigm shift
          is that the client, not the server, has become the orchestrator of
          static and dynamic content. This results in a decoupling of the
          frontend and backend roles from each other, providing clear separation
          of responsibilities for developers. Previously, a web app developer
          would have had to pay significant attention to the server’s
          capabilities in order to get a web app running. Now, a frontend
          developer can simply call an API for data management, while a backend
          developer can focus on optimizing the API.
        </p>
        <h3
          id={`subtitle-${sectionNumber}-5`}
          data-title={`Subtitle ${sectionNumber}-5`}
        >
          {`${sectionNumber}.5 Diving into the JAMstack`}
        </h3>
        <p>
          With the high level overview established, this section will explain
          different aspects of the JAMstack architecture in further detail.
        </p>
        <h4
          id={`subtitle-${sectionNumber}-5-1`}
          data-title={`Subtitle ${sectionNumber}-5-1`}
        >
          {`${sectionNumber}.5.1 Serving static content from a CDN`}
        </h4>
        <Image
          imageAlt="serving static content from CDNs"
          imageName="svgs/17.svg"
        />
        <p>
          All JAMstack sites serve static content directly from a CDN, with as
          much of the site pre-built before being uploaded to the CDN.
        </p>
        <p>
          The use of CDNs to serve pre-built files has significant advantages
          some of which are:
        </p>
        <ul className="bullets">
          <li className="list-item">An improved response time</li>
          <li className="list-item">Easier scalability</li>
          <li className="list-item">Reduced surface area for attacks</li>
          <li className="list-item">Lower maintenance requirements</li>
        </ul>
        <p>
          Improved response time comes from the fact that CDNs have edge
          locations closer to the end user.
          <span className="span-wrapper">
            <Popup
              trigger={<span className="superscript">5</span>}
              position="bottom center"
              on={["hover", "focus"]}
              arrow={"bottom center" !== "center center"}
            >
              <Card
                title="Why Use a CDN? Here Are 10 Data-Driven Reasons"
                organization="keycdn"
                date="March 4, 2019"
                author="Brian Jackson"
              ></Card>
            </Popup>
          </span>
          In many cases CDNs can reduce latencies by 100’s of ms. Traffic is
          routed to the nearest edge location, improving the distribution of
          assets to traffic globally. Relative to using servers, CDNs are also
          easier to scale due to the ease at which edge locations can be added
          and removed from a system. As a result, increases in traffic are
          handled better.
        </p>
        <p>
          CDNs also have high reliability. If an edge location goes down, a user
          will be routed to the next closest location. The use of CDNs over web
          servers also reduces the risk of attacks. Web servers are often the
          target of malpractice such as DDoS or hacking attempts. This often
          requires security precautions and regular maintenance. Regarding
          maintenance, the use of CDNs allow developers to focus solely on their
          logic and not infrastructure. CDNs are owned by large corporations
          which will be responsible for maintaining and securing CDNs.
          [https://www.keycdn.com/blog/why-use-a-cdn ]
        </p>
        <h4
          id={`subtitle-${sectionNumber}-5-2`}
          data-title={`Subtitle ${sectionNumber}-5-2`}
        >
          {`${sectionNumber}.5.2 Implementing dynamic functionality`}
        </h4>
        <p>
          In standard web app architectures, application servers are responsible
          for managing data and handling other business logic. Data management
          can be abstracted into APIs, allowing the client to be the coordinator
          of such data.
        </p>
        <Image imageAlt="APIs in JAMstack" imageName="svgs/18.svg" />
        <p>
          A developer can use first-party and/or third-party APIs. A first-party
          API allows the developer to control all aspects of the API lifecycle
          from design to implementation which can be useful for fitting the
          needs of the product or security purposes. In situations where this is
          not a concern, developers may use third-party APIs. Nowadays, there
          are countless 3rd-party services providing functionality for common
          tasks such as payments, search, and scheduling, amongst many others.
          Using third-party APIs allows developers to save time by implementing
          functionality already created by others, allowing the developer to
          focus on the core needs of their web app.
        </p>
        <Image imageAlt="Serverless functions" imageName="svgs/19.svg" />
        <p>
          Serverless functions, or Functions as a Service (FaaS), can also be
          used in place of servers to manage other business logic. FaaS is
          useful when APIs and frontend logic alone are not capable of replacing
          all business logic once handled by the application server.
          Additionally, some tasks need to be performed from a secure location
          and not from the client-side. Some common use cases for serverless
          functions are user authentication, form validation and submission, as
          well as triggering events.
        </p>
        <h4
          id={`subtitle-${sectionNumber}-5-3`}
          data-title={`Subtitle ${sectionNumber}-5-3`}
        >
          {`${sectionNumber}.5.3 Use case for the JAMstack`}
        </h4>
        <p>
          The JAMstack architecture is not necessarily the ideal architecture
          for all websites. Certain functionality, such as real time chat, is
          not suited for a JAMstack app. Similarly, use cases such as websites
          for internal teams are not likely to benefit from using a CDN and
          serverless model. The JAMstack architecture works best for sites which
          can source data at build time in order to create pre-built files,
          therefore leading to many of the advantages discussed.
        </p>
        <h3
          id={`subtitle-${sectionNumber}-6`}
          data-title={`Subtitle ${sectionNumber}-6`}
        >
          {`${sectionNumber}.6 The JAMstack workflow`}
        </h3>
        <h4
          id={`subtitle-${sectionNumber}-6-1`}
          data-title={`Subtitle ${sectionNumber}-6-1`}
        >
          {`${sectionNumber}.6.1 JAMstack at a minimum`}
        </h4>
        <p>
          Launching an application that follows the JAMstack architecture, at
          its most simple, takes only 3 steps to get up and running.
        </p>
        <Image
          imageAlt="steps to deploy a JAMstack site"
          imageName="svgs/21.svg"
        />
        <p>
          With this, JAMstack developers can serve their sites to their end
          users. However, these steps are best suited for JAMstack sites that do
          not require frequent updates. If a developer is planning to update
          their sites often, then it becomes necessary to introduce additional
          steps in order to avoid manually repeating the build and deploy steps
          for each update.
        </p>
        <h4
          id={`subtitle-${sectionNumber}-6-2`}
          data-title={`Subtitle ${sectionNumber}-6-2`}
        >
          {`${sectionNumber}.6.2 The JAMstack way`}
        </h4>
        <p>
          To manage a website that is frequently updated, the JAMstack community
          has established best practices when it comes to deploying JAMstack
          sites.
          <span className="span-wrapper">
            <Popup
              trigger={<span className="superscript">1</span>}
              position="bottom center"
              on={["hover", "focus"]}
              arrow={"bottom center" !== "center center"}
            >
              <Card
                title="Jamstack Best Practices"
                organization="Jamstack"
              ></Card>
            </Popup>
          </span>
          These elements are part of what is called “The JAMstack Way”:
        </p>
        <ul className="bullets">
          <li className="list-item">Version control</li>
          <li className="list-item">Automated builds</li>
          <li className="list-item">Automic deploys</li>
          <li className="list-item">Instant CDN invalidation</li>
        </ul>
        <Image imageAlt="JAMstack best practices" imageName="svgs/22.svg" />
        <p>
          All source code should live on a Git repository. The developer should
          be able to see the version history of the code. In addition, version
          control providers such as GitHub provide webhook functionality that
          notifies other applications whenever an update to the source code is
          made.
        </p>
        <p>
          Automated builds allow web pages to be pre-built each time there is a
          new update. When new commits are made, a webhook is sent to a build
          server which triggers a chain of events. The build server will source
          the Git repo and any data/content from a content management system.
          The server then invokes the appropriate build commands for the SSG of
          choice, allowing pre-built pages to be created.
        </p>
        <p>
          When pages are built, they should only be deployed if all the pages
          were built successfully. This is known as an atomic deploy - each
          deployment is self-contained, and should a build fail, the build
          process is completely rolled back. There are two major benefits with
          this approach. First, this ensures that state is always consistent for
          each deploy, and viewing a build does not depend on other sources.
          Second, there will be no downtime for the website, allowing users to
          visit an older site if there are issues with the latest build.
        </p>
        <p>
          Finally, instant CDN invalidation ensures that the users are served
          the most updated web pages. Every time there is a new build, either an
          FaaS or a server will invalidate the CDN and make it point at new
          files rather than old content.
        </p>
        <Slider {...settings}>
          <div>
            <Image imageAlt="jamstack workflow" imageName="svgs/23.svg" />
          </div>
          <div>
            <Image imageAlt="version control" imageName="svgs/24.svg" />
          </div>
          <div>
            <Image imageAlt="automated builds" imageName="svgs/25.svg" />
          </div>
          <div>
            <Image imageAlt="atomic deploys" imageName="svgs/26.svg" />
          </div>
          <div>
            <Image imageAlt="entire site from CDN" imageName="svgs/27.svg" />
          </div>
          <div>
            <Image
              imageAlt="instant cdn invalidation"
              imageName="svgs/28.svg"
            />
          </div>
        </Slider>
      </Section>
    </>
  )
}

export default SectionOne
