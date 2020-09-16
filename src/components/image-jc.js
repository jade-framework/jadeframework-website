import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ImageLogo = () => {
  const data = useStaticQuery(graphql`
    query {
      logoImage: file(relativePath: { eq: "jeremy-crichton.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.logoImage.childImageSharp.fluid} />
}

export default ImageLogo
