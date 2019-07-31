import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import SkuCard from './SkuCard'

import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: fex-start;
`

export default props => (
  <StaticQuery
        query={graphql`
          query SkusForProduct {
            skus: allStripeSku {
              edges {
                node {
                  id
                  currency
                  price
                  image
                  attributes {
                    name
                  }
                  product {
                    description
                    name
                    images

                  }
                  localFiles {
                    childImageSharp {
                      fluid(maxWidth: 600, quality: 100) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
              }
            }
          }
        `}
        render={({ skus }) => (
          <section className="section">
            <div className="container">
              <div className="columns is-multiline">
                {skus.edges.map(({ node: sku }, idx) => (
                  <div className="column is-4" key={idx}>
                    <SkuCard {...props} sku={sku} />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      />
)