import React from "react"
import { graphql } from "gatsby"
import PostLink from "../../components/PostLink"


import Layout from '../../components/layout';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

export const Head = () => (
  <>
    <title>Blog - Brad Ito</title>
    <meta name="description" content="Brad Ito - Personal Blog" />
    <meta name="og:title" content="Brad Ito - Personal Blog" />
    <meta name="og:url" content="https://bradito.me/blog/" />
    <meta name="og:type" content="website" />
  </>
)

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  return (
    <Layout>
      <Header />
      <div id="wrapper">
        <section id="main" className="wrapper">
          <div className="inner">
            <h1 className="major">
              Brad's Blog
            </h1>
            <p>
              <em>Thoughts on technology: applications, techniques and impact</em>
            </p>
            <div>
              {edges.map((edge) => {
                return (
                  <PostLink key={edge.node.id} post={edge.node} />
                )
              })}
            </div>
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
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC }},
      filter: { frontmatter: { status: { eq: "published" }}}
    ) {
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