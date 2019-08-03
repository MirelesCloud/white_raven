import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

export default props => (
    <StaticQuery
        query={graphql`
          query ShopifyProduct {
            product: allShopifyProduct {
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
        `}
        render={({ product }) => (
            <section className="section">
              <div className="container">
                <div className="columns is-multiline">
                  {product.edges.map(({ node: sku }, idx ) => (
                    <div className="column is-4" key={idx}>
                      <p>{sku.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
        )}
    />
)
