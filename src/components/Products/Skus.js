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
          <Container>
            {skus.edges.map(({ node: sku }) => (
              <SkuCard {...props} key={sku.id} sku={sku} />
            ))}
          </Container>
        )}
      />

)