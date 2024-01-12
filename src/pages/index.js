import React from 'react'
import Layout from '../components/layout'
import Hero from '../components/hero'
import LatestArticles from '../components/latestArticles'
import LatestProjects from '../components/latestProjects'
import Codepens from '../components/codepens'
import AboutMe from '../components/aboutMe'

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <AboutMe />
      <LatestArticles />
      <LatestProjects />
      <Codepens />
    </Layout>
  )
}

export default IndexPage
