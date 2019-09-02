import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'



export const ProductPageTemplate = () => (
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
             
            </div>
          </div>
        </section>
    </Layout>
  )
}

export default ProductPage

