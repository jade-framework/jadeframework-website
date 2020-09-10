import React from "react"
import Section from "./section"
import { createAnchor } from "./util"

const SectionEvolution = ({ num, title, id }) => (
  <Section id={id} sectionTitle={`${num}. ${title}`}>
    <h4 id={`subtitle-${num}-1`} data-title={`Subtitle ${num}-1`}>
      {`${num}.1 Footnotes`}
    </h4>
    <ol className="bullets">
      <li className="list-item">
        {createAnchor("Overview of the JAMstack", "https://jamstack.org")}
      </li>
      <li className="list-item">
        {createAnchor(
          "How a webpage is built",
          "https://varvy.com/pagespeed/display.html"
        )}
      </li>
      <li className="list-item">
        {createAnchor(
          "Historical trends in the usage of client-side programming languages",
          "https://w3techs.com/technologies/history_overview/client_side_language/all"
        )}
      </li>
      <li className="list-item">
        {createAnchor(
          "A List of Static Site Generators",
          "https://www.staticgen.com/"
        )}
      </li>
      <li className="list-item">
        {createAnchor(
          "Why Use a CDN?",
          "https://www.keycdn.com/blog/why-use-a-cdn"
        )}
      </li>
      <li className="list-item">
        {createAnchor(
          "How Page Speed Affects SEO & Google Rankings",
          "https://cognitiveseo.com/blog/22865/page-speed-seo/#4"
        )}
      </li>
    </ol>
    <h4 id={`subtitle-${num}-2`} data-title={`Subtitle ${num}-2`}>
      {`${num}.2 References`}
    </h4>
    <ol className="bullets">
      <li className="list-item">
        {createAnchor(
          "Overview of Netlify, Vercel and Amplify",
          "https://www.lambrospetrou.com/articles/battle-of-jamstack-platforms-netlify-vercel-aws/ "
        )}
      </li>
      <li className="list-item">
        {createAnchor(
          "Four levels of AWS infrastructure as code",
          "https://volkanpaksoy.com/archive/2019/10/26/Infrastructure-as-Code-with-AWS-CloudFormation-and-Cloud-Development-Kit/"
        )}
      </li>
      <li className="list-item">
        {createAnchor(
          "Creating EC2 instances with AWS-SDK",
          "https://medium.com/@corymaklin/tutorial-amazon-web-services-part-1-create-virtual-machines-with-aws-cli-b900702bf286"
        )}
      </li>
      <li className="list-item">
        {createAnchor(
          "Sending files from EC2 to S3",
          "https://stackoverflow.com/questions/28396065/how-to-move-files-from-amazon-ec2-to-s3-bucket-using-command-line/28396098"
        )}
      </li>
      <li className="list-item">
        {createAnchor(
          "Attaching EC2 IAM roles",
          "https://aws.amazon.com/blogs/security/new-attach-an-aws-iam-role-to-an-existing-amazon-ec2-instance-by-using-the-aws-cli/"
        )}
      </li>
      <li className="list-item">
        {createAnchor(
          "Handling errors during SSH connection",
          "https://github.com/mscdex/ssh2/issues/430"
        )}
      </li>
      <li className="list-item">
        {createAnchor(
          "Wrapping SSH connection in promises",
          "https://gist.github.com/paolorossi/90a19bf632092396065f"
        )}
      </li>
      <li className="list-item">
        {createAnchor(
          "Configuring Nginx on EC2 servers",
          "https://www.tecmint.com/nginx-as-reverse-proxy-for-nodejs-app/"
        )}
      </li>
      <li className="list-item">
        {createAnchor(
          "Overview of static site generators",
          "https://www.netlify.com/blog/2020/04/14/what-is-a-static-site-generator-and-3-ways-to-find-the-best-one/"
        )}
      </li>
    </ol>
  </Section>
)

export default SectionEvolution
