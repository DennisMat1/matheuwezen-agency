import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="Welcome to Matheuwezen Agency!">
        <p>Lorem ipsum</p>
        <StaticImage
          alt="randomized unsplash image!"
          src="../images/random.jpg"
        />
      </Layout>
    </main>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
