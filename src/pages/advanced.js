import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import Skus from '../components/Products/Skus'

const SkuList = () => (
  <Layout>
    <h1>SKU List</h1>
    <Skus/>
  </Layout>
)

export default SkuList

