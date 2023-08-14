import * as React from "react"
import { graphql } from "gatsby"

import Layout from '../../components/layout';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

export const Head = ({ data}) => {
  const { markdownRemark } = data
  const { frontmatter } = markdownRemark
  return (
  <>
    <title>
      {frontmatter.title + " - Brad Ito"}
    </title>
    <meta name="description" content={frontmatter.og_description} />
    <meta name="keywords" content="site, web" />
    <meta name="og:title" content={frontmatter.title} />
    <meta name="og:description" content={frontmatter.og_description} />
    <meta name="og:image" content={frontmatter.og_image} />
    <meta name="og:url" content={'https://bradito.me/blog/' + frontmatter.slug + '/'} />
    <meta name="og:type" content="article" />
  </>
)}

export default function BlogPostTemplate({
  data,
}) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <Header />
      <div id="wrapper">
        <section id="main" className="wrapper">
          <div className="inner">
            <h2>
              {frontmatter.title}
            </h2>
            <h4>{frontmatter.date} - Brad Ito</h4>
            <div
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        </section>
      </div>
      <Footer />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        og_description
        og_image
      }
    }
  }
`
