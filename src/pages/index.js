import React from 'react'
import Layout from '../components/layout/layout'
import { TextLoop } from 'react-text-loop-next'
import Hero from '../components/hero/hero'

const IndexPage = () => {
  return (
    <Layout>
      {' '}
      <h2>
        <TextLoop
          delay={300}
          mask={true}
          interval={2000}
          springConfig={{ stiffness: 200, damping: 15 }}
        >
          <span>First item</span>
          <a href="/">Second item</a>
          <p style={{ color: 'red' }}>Third item</p>
        </TextLoop>{' '}
        and something else.
      </h2>
      <Hero />
    </Layout>
  )
}

export default IndexPage
