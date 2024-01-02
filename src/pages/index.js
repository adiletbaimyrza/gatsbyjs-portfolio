import React from 'react'
import Layout from '../components/layout'
import Hero from '../components/hero'
import LatestArticles from '../components/latestArticles'

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <LatestArticles />
    </Layout>
  )
}

export default IndexPage
