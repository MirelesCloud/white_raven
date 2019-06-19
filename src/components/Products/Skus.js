import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import SkuCard from './SkuCard'

import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 1rem 0 1rem 0;
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
              <div className="columns is-multiline" style={{display: "flex"}}>
                {skus.edges.map(({ node: sku }) => (
                  <div className="column is-3" style={{display: "flex"}}>
                    <SkuCard {...props} key={sku.id} sku={sku} />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      />
)