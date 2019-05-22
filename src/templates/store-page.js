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
  store: PropTypes.shape({
    blurbs: PropTypes.array,
  })
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
            price
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
