import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import StoreImages from '../components/StoreImages'
import Cart from '../components/Cart'
import Skus from '../components/Products/Skus'

import styled from 'styled-components'

const Line = styled.hr`
  background-color: #cccccc;
  margin-left: 75px;
  margin-right: 75px;
  height: 1px;
`


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
      <div className="section">
        <div className="container">
          <div className="columns">
            <div className="column">
              <div className="content">
                <div className="tile">
                  <h1 className="title has-text-grey-lighter has-text-weight-light is-uppercase">White Raven Store</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Line/>
      <div className="section">
        <div className="container">
          <div className="columns">
            <Cart>
              <Skus/>
            </Cart>
          </div>
        </div>
      </div>
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
      }
    }
  }
`
