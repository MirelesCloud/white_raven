import React from 'react'
import { Link } from 'gatsby'


import Layout from '../components/Layout'
import Skus from '../components/Products/Skus'

const SkuList = () => (
  <Layout>
    <div className="section">
      <div className="container">
        <div className="columns">
          <Skus/>
        </div>
      </div>
    </div>
  </Layout>
)

export default SkuList

