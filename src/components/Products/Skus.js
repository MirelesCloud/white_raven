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

class Skus extends React.Component {
  state = {
    stripe: window.Stripe('pk_test_ZJkiq6Dd3MtdzVqLbA3Psxrh00auJ33HZK', {
      betas: ['checkout_beta_4'],
    }),
  }
  render() {
    return (
      <StaticQuery
        query={graphql`
          query SkusForProduct {
            skus: allStripeSku {
              edges {
                node {
                  id
                  currency
                  price
                  attributes {
                    name
                  }
                }
              }
            }
          }
        `}
        render={({ skus }) => (
          <Container>
            {skus.edges.map(({ node: sku }) => (
              <SkuCard key={sku.id} sku={sku} stripe={this.state.stripe} />
            ))}
          </Container>
        )}
      />
    )
  }
}

export default Skus