import React from 'react'
import Layout from '../components/layout'
import Hero from '../components/hero'
import LatestPosts from '../components/latestPosts'
import LatestProjects from '../components/latestProjects'
import Codepens from '../components/codepens'

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <LatestPosts />
      <LatestProjects />
      <Codepens />
    </Layout>
  )
}

export default IndexPage
