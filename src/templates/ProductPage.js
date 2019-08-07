import React from 'react'
import { graphql } from 'gatsby'

const ProductPage = ({ data }) => {
    const product = data.shopifyProduct
    return (
        <div>
            <h1>{product.title}</h1>
        </div>
    )
}

export const query = graphql`
  query($handle: String!) {
      shopifyProduct(handle: { eq:$handle }) {
          id
          title
          handle
      }
  }
`