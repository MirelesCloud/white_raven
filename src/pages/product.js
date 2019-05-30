import React from 'react'
import Layout from '../components/Layout'

export default({ data }) => (
  <Layout>
  <h1>{data.state.fromFeed.title}</h1>
  </Layout>
)
