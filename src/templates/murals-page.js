import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import GalleryImages from '../components/galleryimages'

import styled from 'styled-components'

const Line = styled.hr`
  background-color: #cccccc;
  margin-left: 75px;
  margin-right: 75px;
  height: 1px;
`

export const MuralsPageTemplate = ({
  image,
  title,
  main,
}) => (
  <div>
    <div className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="tile">
              <h1 className="title has-text-grey-lighter has-text-weight-light is-uppercase">{main.heading}</h1>
            </div>
            <br/>
            <div className="tile">
              <h3 className="subtitle has-text-grey-lighter has-text-left-mobile">{main.description}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Line/>
    <div className="section">
      <GalleryImages gridItems={main.gallery}/>
    </div>
  </div>

)

MuralsPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  main: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image3: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  })
}

const MuralsPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <MuralsPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        main={frontmatter.main}
      />
    </Layout>
  )
}

MuralsPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default MuralsPage

export const MuralsPageQuery = graphql`
  query MuralsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        main {
          heading
          description
          gallery {
            title
            description
            image {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
