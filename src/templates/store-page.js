import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import StoreImages from '../components/StoreImages'

export const StorePageTemplate = ({
  image,
  title,
  store,
}) => (
  <div className="section">
    <StoreImages gridItems={store.blurbs}/>
  </div>
)

StorePageTemplate.propTypes = {
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
const StorePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <Layout>
      <StorePageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        store={frontmatter.store}
        />
    </Layout>
  )
}

export default StorePage

export const StorePageQuery = graphql`
  query StorePage($id: String!) {
    markdownRemark(id: {eq: $id }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        store {
          blurbs {
            title
            description
            image {
              childImageSharp {
                fluid(maxWidth: 500) {
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
