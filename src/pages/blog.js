import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const BlogPage = () => {
  return <Layout>BlogPage</Layout>
}

export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`

export default BlogPage
