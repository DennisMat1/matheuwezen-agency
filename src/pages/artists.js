import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
// imports
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Artist from "../../components/artist"

const ArtistsPage = ({
  data: {
    allWpArtist: { edges },
    wpPage: { artistsFields },
  },
}) => {
  const image = getImage(artistsFields.picture.localFile)
  return (
    <Layout pageTitle="Artists of Inghelbrecht Agency">
      <GatsbyImage image={image} alt={artistsFields.picture.altText} />
      <section>
        <h2>{artistsFields.title}</h2>
        <div
          dangerouslySetInnerHTML={{
            __html: artistsFields.description,
          }}
        />
        <div>
          {edges.map(({ node: artist }) => (
            <Artist key={artist.id} slug={artist.slug} artist={artist} />
          ))}
        </div>
      </section>
    </Layout>
  )
}

y

export const query = graphql`
  query {
    allWpArtist {
      edges {
        node {
          id
          artistMeta {
            firstName
            lastName
            artistName
          }
        }
      }
    }
  }
`

export default ArtistsPage
