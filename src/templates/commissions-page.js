import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import GalleryImages from '../components/galleryimages'
import BreadCrumbBar from '../components/breadcrumbs'

import styled from 'styled-components'

const Line = styled.hr`
  background-color: #cccccc;
  margin-left: 75px;
  margin-right: 75px;
  height: 1px;
`

export const CommissionsPageTemplate = ({
  image,
  title,
  main,
}) => (
  <div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div
                  className="full-width-image-container margin-top-0"
                  style={{
                    backgroundImage: `url(${
                      !!image.childImageSharp
                        ? image.childImageSharp.fluid.src
                        : image
                    })`,
                  }}
                >
                  <h2
                    className="has-text-weight-light is-size-1"
                    style={{
                      boxShadow: '0.5rem 0 0 #330033, -0.5rem 0 0 #330033',
                      backgroundColor: 'rgba(51, 0, 51, 0.8)',
                      color: 'white',
                      padding: '1rem',

                    }}
                  >
                    {title}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="tile">
              <h1 className="title has-text-grey-lighter has-text-weight-light">{main.heading}</h1>
            </div>
            <br/>
            <div className="tile">
              <h3 className="subtitle has-text-grey-lighter has-text-left-mobile">{main.description}</h3>
            </div>
            <br/>
            <div>
              <BreadCrumbBar/>
              <Line/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="section">
      <GalleryImages gridItems={main.gallery}/>
    </div>
    <Line/>
  </div>

)

CommissionsPageTemplate.propTypes = {
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
  }),
  testimonials: PropTypes.array,
  fullImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  pricing: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    plans: PropTypes.array,
  }),
}

const CommissionsPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <CommissionsPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        main={frontmatter.main}
      />
    </Layout>
  )
}

CommissionsPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default CommissionsPage

export const CommissionsPageQuery = graphql`
  query CommissionsPage($id: String!) {
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
