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

const SectionJamstack = ({ title, id, num }) => {
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
    <>
      <Section id={id} sectionTitle={`${num}. ${title}`}>
        <p>
          To understand Jade, we first have to examine two typical web app
          architectures before learning about the JAMstack and how it differs.
          If you are already comfortable with web app architectures and the
          JAMstack,{" "}
          <Link
            activeClass="active"
            to="section-launch"
            spy={true}
            smooth={true}
            offset={-270}
            duration={500}
          >
            click here to dive straight into launching a JAMstack web app
          </Link>
          .
        </p>
        <h3 id={`subtitle-${num}-1`} data-title={`Subtitle ${num}-1`}>
          {`${num}.1 Web app architectures`}
        </h3>
        <h4 id={`subtitle-${num}-1-1`} data-title={`Subtitle ${num}-1-1`}>
          {`${num}.1.1 Static websites`}
        </h4>
        <p>
          Originally, web sites consisted of static assets (HTML, CSS,
          JavaScript) which clients requested from the web server.
        </p>
        <Image imageAlt="static website architecture" imageName="svgs/4.svg" />
        <p>
          The simple nature of these web sites allowed for a simple architecture
          but this simple architecture meant limited functionality. Every user
          saw the same static pages and there was no way to dynamically source
          content.
        </p>
        <h4 id={`subtitle-${num}-1-2`} data-title={`Subtitle ${num}-1-2`}>
          {`${num}.1.2 Standard web apps`}
        </h4>
        <p>
          Web architectures subsequently evolved and introduced application
          servers tasked with sourcing data and dynamically building pages at
          runtime.
        </p>
        <Image imageAlt="web app architecture" imageName="svgs/5.svg" />
        <p>
          This improved the capabilities of web sites immensely but the
          increased complexity also introduced tradeoffs related to performance,
          security and scalability.
        </p>
        <h3 id={`subtitle-${num}-2`} data-title={`Subtitle ${num}-2`}>
          {`${num}.2 Serving content from a standard architecture`}
        </h3>
        <h4 id={`subtitle-${num}-2-1`} data-title={`Subtitle ${num}-2-1`}>
          {`${num}.2.1 How web pages are served`}
        </h4>
        <p>
          When a client visits a website, a GET request is made to a web server
          requesting an HTML file. The client parses the file and will
          subsequently, send additional requests for resources referenced in the
          parsed HTML such as CSS, JavaScript, and images.
        </p>
        <Slider {...settings}>
          <div>
            <Image imageAlt="initial request" imageName="svgs/6.svg" />
            <p className="slide-caption">
              1. On the inititial GET request the web server returns an HTML
              file
            </p>
          </div>
          <div>
            <Image
              imageAlt="additional request for other static assets"
              imageName="svgs/7.svg"
            />
            <p className="slide-caption">
              2. Additional GET requests are made for any resources referenced
              in the HTML file
            </p>
          </div>
        </Slider>
        <h4 id={`subtitle-${num}-2-2`} data-title={`Subtitle ${num}-2-2`}>
          {`${num}.2.2 How web pages are dynamically built`}
        </h4>
        <p>
          If the page the client is requesting includes content from a source
          such as a database, the web server will send a request to an app
          server, which will reach out to that data source, dynamically build
          pages, and send them back to the client.
        </p>
        <div>
          <Image imageAlt="building dynamic content" imageName="svgs/8.svg" />
          <p className="slide-caption">
            3. Serving dynamic content involves the app server
          </p>
        </div>
        <h4 id={`subtitle-${num}-2-3`} data-title={`Subtitle ${num}-2-3`}>
          {`${num}.2.3 The tradeoff`}
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
            Security: Increased runtime infrastructure opens up increased
            surface areas for attack
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
          In addition, Google and other search engines consider performance an
          important metric for their search rankings.
        </p>

        <h3 id={`subtitle-${num}-3`} data-title={`Subtitle ${num}-3`}>
          {`${num}.3 New architecture for certain use cases`}
        </h3>
        <h4 id={`subtitle-${num}-3-1`} data-title={`Subtitle ${num}-3-1`}>
          {`${num}.3.1 Building pages pre-runtime`}
        </h4>
        <p>
          It's obvious that modern web applications require the ability to
          source data, build pages, and serve these pages to clients. So let's
          now take a look at how we could potentially modify the architecture to
          retain this ability yet mitigate the associated tradeoffs in
          performance, security and scalability by sourcing data and building
          pages before runtime.
        </p>
        <h4 id={`subtitle-${num}-3-2`} data-title={`Subtitle ${num}-3-2`}>
          {`${num}.3.2 Static site generators`}
        </h4>
        <p>
          Static site generators (SSGs) are a site building tool, the main
          purpose of which is to source content, apply that content to templates
          and generate web pages. Popular examples of SSGs include Hugo, Jekyll,
          and Gatsby.
        </p>
        <p>SSGs generally apply 4 processes:</p>
        <ul className="bullets">
          <li className="list-item">
            <span className="strong">Compile</span>: Souce content and generate
            pages
          </li>
          <li className="list-item">
            <span className="strong">Minify</span>: Reduce the size of files by
            performing code optimizations. This includes removing unnecessary
            white space and comments as well as shortening variable names
          </li>
          <li className="list-item">
            <span className="strong">Transpile</span>: Convert ES6+ code to ES5
            in order to remain compatible with all major modern web browsers
          </li>
          <li className="list-item">
            <span className="strong">Bundle</span>: Combine one or more
            resources such as HTML files, JavaScript files, stylesheets, and
            images into a single file
          </li>
        </ul>
        <Image imageAlt="SSGs" imageName="svgs/10.svg" />
        <p>
          The main goal of this process is to generate pages in advance and
          eliminate the need for an application server to dynamically build
          pages at runtime.
        </p>
        <h4 id={`subtitle-${num}-3-3`} data-title={`Subtitle ${num}-3-3`}>
          {`${num}.3.3 Advantages of pre-building pages`}
        </h4>
        <p>
          The most significant result of building pages pre-runtime is the
          inherent decoupling of the request process from the build process. The
          overhead of generating pages now becomes unrelated to site traffic and
          is rather handled independently.
        </p>
        <p>
          The elimination of dynamic builds at runtime also addresses the three
          issues we previously discussed, namely:
        </p>
        <ul className="bullets">
          <li className="list-item">
            Performance: The entire site can be served directly from a web
            server or Content Delivery Network (CDN) without any hold up due to
            building pages at request time
          </li>
          <li className="list-item">
            Scalability: Since the process of compiling pages has been decoupled
            from the request/response cycle, the need to scale application
            servers and related infrastructure in response to site traffic is
            eliminated. The entire site can be served via a CDN, which is
            inherently optimized to scale
          </li>
          <li className="list-item">
            Security: Removing infrastructure from the runtime equation and
            serving pre-built static pages from a CDN removes the majority of
            malicious attack vectors
          </li>
        </ul>
        <h4 id={`subtitle-${num}-3-4`} data-title={`Subtitle ${num}-3-4`}>
          {`${num}.3.4 Static web apps with dynamic functionality`}
        </h4>
        <p>
          Since we're suggesting an architecture that pre-builds the entire web
          app and serves it as static assets from a CDN, how do we implement
          dynamic functionality at runtime? In the standard web app
          architecture, the application server and database are responsible for
          providing dynamic functionality. To transition to a serverless model,
          this functionality can be abstracted to APIs and serverless functions.
        </p>

        <Image
          imageAlt="Replacing app server and database with APIs and FaaS"
          imageName="svgs/13.svg"
        />
        <p>
          In this serverless model, the client is now responsible for dynamic
          functionality, instead of the application server as before. This is
          achieved by making API calls and invoking serverless functions using
          JavaScript in the browser at runtime.
        </p>
        <p>
          This simplified architecture where pre-built sites are served directly
          from a CDN and dynamic functionality is abstracted to APIs and
          serverless functions is commonly known as the JAMstack architecture.
        </p>
        <Image imageAlt="JAMstack architecture" imageName="svgs/15.svg" />
        <h3 id={`subtitle-${num}-4`} data-title={`Subtitle ${num}-4`}>
          {`${num}.4 The JAMstack architecture`}
        </h3>
        <h4 id={`subtitle-${num}-4-1`} data-title={`Subtitle ${num}-4-1`}>
          {`${num}.4.1 Understanding the JAM in JAMstack`}
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
          Being used in nearly 97% of all websites on the internet, JavaScript
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
          functionality. In the JAMstack, server-side operations are abstracted
          into serverless functions and reusable APIs which can be either
          3rd-party APIs or custom APIs. These are typically accessed by the
          client over HTTPS using JavaScript.
        </p>
        <p>
          Markup is pre-built at build time and is often compiled with a static
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
        <h4 id={`subtitle-${num}-4-2`} data-title={`Subtitle ${num}-4-2`}>
          {`${num}.4.2 High-level view of the JAMstack`}
        </h4>
        <p>
          Having replaced the web server with a CDN, and the application server
          with APIs and serverless functions, the JAMstack is essentially a
          serverless architecture. It's important to note that this does not
          replace the need for servers entirely, since any custom APIs will
          continue to rely on servers.
        </p>
        <Image
          imageAlt="web app architecture & jamstack architecture"
          imageName="svgs/16.svg"
        />
        <p>
          As a result of the decoupling of the frontend and backend, essentially
          the client, not the server, has now become the orchestrator of dynamic
          functionality. There is a clear separation of responsibilities for
          developers. Frontend developers can focus on building their
          application, calling APIs for data management and other functionality
          while the maintenance and optimization of those APIs is handled
          separately.
        </p>
        <h3 id={`subtitle-${num}-5`} data-title={`Subtitle ${num}-5`}>
          {`${num}.5 Diving into the JAMstack`}
        </h3>
        <p>
          With the high-level overview established, this section will explain
          different aspects of the JAMstack architecture in further detail.
        </p>
        <h4 id={`subtitle-${num}-5-1`} data-title={`Subtitle ${num}-5-1`}>
          {`${num}.5.1 Serving static content from a CDN`}
        </h4>
        <Image
          imageAlt="serving static content from CDNs"
          imageName="svgs/17.svg"
        />
        <p>
          JAMstack sites serve pre-built, static sites directly from a CDN. The
          use of CDNs to serve pre-built sites comes with significant
          advantages, including:
        </p>
        <ul className="bullets">
          <li className="list-item">Improved response time</li>
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
                author="Brian Jackson"
                organization="keycdn"
                date="March 4, 2019"
              ></Card>
            </Popup>
          </span>
          In many cases CDNs can reduce latency by 100’s of ms. Traffic is
          routed to the nearest edge location, improving the distribution of
          assets to traffic globally. Relative to using servers, CDNs are also
          easier to scale due to the ease at which edge locations can be added
          and removed from a system.
        </p>
        <p>
          CDNs are also highly reliable. If an edge location goes down, a user
          will be routed to the next closest location. Additionally, the use of
          CDNs over web servers reduces the risk of attacks. Web servers are
          often the target of attacks such as DDoS or hacking attempts. This
          often requires security precautions and regular maintenance. Regarding
          maintenance, the use of CDNs allows developers to focus solely on
          their logic and not infrastructure as CDNs are owned by large
          corporations which will be responsible for maintaining and securing
          said CDNs.
        </p>
        <h4 id={`subtitle-${num}-5-2`} data-title={`Subtitle ${num}-5-2`}>
          {`${num}.5.2 Implementing dynamic functionality`}
        </h4>
        <p>
          In standard web app architectures, application servers are responsible
          for managing data and handling other business logic. In the JAMstack
          architecture, services are abstracted into APIs, allowing the client
          to be the coordinator of such data.
        </p>
        <Image imageAlt="APIs in JAMstack" imageName="svgs/18.svg" />
        <p>
          The developer is free to build their own APIs or utilize the huge
          ecosystem of 3rd-party services that exist today. Using third-party
          APIs allows developers to save time by implementing functionality
          already created by others and focus on the core needs of their web
          app.
        </p>
        <Image imageAlt="Serverless functions" imageName="svgs/19.svg" />
        <p>
          Serverless functions, or Functions as a Service (FaaS), can also be
          used in place of servers to manage other business logic. FaaS are
          useful when APIs and frontend logic alone is not capable of replacing
          all business logic once handled by the application server.
        </p>
        <h3 id={`subtitle-${num}-6`} data-title={`Subtitle ${num}-6`}>
          {`${num}.6 The JAMstack workflow`}
        </h3>
        <h4 id={`subtitle-${num}-6-1`} data-title={`Subtitle ${num}-6-1`}>
          {`${num}.6.1 JAMstack at a minimum`}
        </h4>
        <p>
          Launching an application utilizing the JAMstack architecture, at its
          simplest, takes only 3 steps:
        </p>
        <Image
          imageAlt="steps to deploy a JAMstack site"
          imageName="svgs/21.svg"
        />
        <p>
          However, the JAMstack community has also established additional best
          practices in regards to deploying and maintaining applications to
          improve developer experience.
        </p>
        <h4 id={`subtitle-${num}-6-2`} data-title={`Subtitle ${num}-6-2`}>
          {`${num}.6.2 The JAMstack way`}
        </h4>
        <p>
          These elements are part of what is called “The JAMstack Way”
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
          :
        </p>
        <Image imageAlt="JAMstack best practices" imageName="svgs/22.svg" />
        <p>
          All source code should live in a git repository and webhooks can be
          utilized to notify the build process to be initiated on each source
          code update.
        </p>
        <p>
          When new commits are made to the git repository, a webhook can be sent
          to a build server which triggers a static site generator to start the
          build process.
        </p>
        <p>
          Once pages are built, they should only be deployed if all the pages
          were built successfully. This is known as an atomic deploy - each
          deployment is self-contained, and should a build fail, the build
          process is completely rolled back. There are two major benefits to
          this approach. First, this ensures that state is always consistent for
          each deploy, and viewing a build does not depend on other sources.
          Second, there will be no downtime for the website, allowing users to
          visit an older site if there are issues with the latest build.
        </p>
        <p>
          Finally, instant CDN invalidation ensures that the users are served
          the most updated web pages. Every time there is a new build, either a
          FaaS or a server will invalidate the CDN of old files, allowing users
          to view the latest content.
        </p>
        <Slider {...settings}>
          <div>
            <Image imageAlt="jamstack workflow" imageName="svgs/23.svg" />
            <p className="slide-caption">The JAMstack automated workflow</p>
          </div>
          <div>
            <Image imageAlt="version control" imageName="svgs/24.svg" />
            <p className="slide-caption">
              Updates to the source code results in a webhook being sent to the
              build server
            </p>
          </div>
          <div>
            <Image imageAlt="automated builds" imageName="svgs/25.svg" />
            <p className="slide-caption">
              The build server will pre-build the pages after recieving the
              webhook
            </p>
          </div>
          <div>
            <Image imageAlt="atomic deploys" imageName="svgs/26.svg" />
            <p className="slide-caption">
              Atomic deploy ensures pre-built files get uploaded only if there
              were no errors
            </p>
          </div>
          <div>
            <Image imageAlt="entire site from CDN" imageName="svgs/27.svg" />
            <p className="slide-caption">
              The entire site is served from a CDN
            </p>
          </div>
          <div>
            <Image
              imageAlt="instant cdn invalidation"
              imageName="svgs/28.svg"
            />
            <p className="slide-caption">
              A FaaS or server will invalidate the CDN to ensure the latest
              content is served to users
            </p>
          </div>
        </Slider>
      </Section>
    </>
  )
}

export default SectionJamstack
