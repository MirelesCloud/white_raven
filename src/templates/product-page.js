import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'



export const ProductPageTemplate = ({
  title
}) => (
  <section className="section section--gradient">
    <div className="container">
      <div className="section">
        <div className="columns">
          <div className="column is-10 is-offset-1">
          </div>
        </div>
      </div>
    </div>
  </section>
)


const ProductPage = ({ data }) => {
  return (
    <Layout>
       <section className="section">
          <div className="container">
            <div className="columns is-multiline">
              {data.shopify.edges.map(({ node: sku }, idx ) => (
                <div className="column is-4" key={idx}>
                  <p>{sku.title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
    </Layout>
  )
}

export default ProductPage

export const productPageQuery = graphql`
  query ShopifyProd{
    shopify: allShopifyProduct {
      edges {
        node {
          id
          title
          description
          variants {
            price
          }
          images {
            localFile {
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
