import React from 'react'
import { Link } from 'gatsby'


import Layout from '../components/Layout'
import Cart from '../components/Cart'
import Skus from '../components/Products/Skus'

const SkuList = () => (
  <Layout>
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

export default SkuList

