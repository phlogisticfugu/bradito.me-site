import * as React from "react"
import { graphql } from "gatsby"
import Helmet from 'react-helmet';

import Layout from '../../components/layout';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

export default function BlogPostTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <Helmet
          title={frontmatter.title + " - Brad Ito"}
          meta={[
            { name: 'description', content: frontmatter.og_description },
            { name: 'keywords', content: 'site, web' },
            { name: 'og:title', content: frontmatter.title },
            { name: 'og:description', content: frontmatter.og_description },
            { name: 'og:image', content: frontmatter.og_image },
            { name: 'og:url', content: 'https://bradito.me/blog' + frontmatter.slug + '/' },
            { name: 'og:type', content: 'article' },
          ]}
        ></Helmet>
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
