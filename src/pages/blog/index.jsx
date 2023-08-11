import React from "react"
import { graphql } from "gatsby"
import PostLink from "../../components/PostLink"


import Layout from '../../components/layout';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  return (
    <Layout>
      <Header />
      <div id="wrapper">
        <section id="main" className="wrapper">
          <div className="inner">
            <h1 className="major">Blog</h1>
            <div>{Posts}</div>
          </div>
        </section>
      </div>
      <Footer />
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { frontmatter: { date: DESC }}) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
          }
        }
      }
    }
  }
`