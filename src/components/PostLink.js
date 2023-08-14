import React from "react"
import { Link } from "gatsby"

const PostLink = ({ post }) => (
  <div>
    <h4>
      <Link to={"/blog" + post.frontmatter.slug}>
        {post.frontmatter.title}
        - {post.frontmatter.date}
      </Link>
    </h4>
    <p>
      {post.excerpt}
    </p>
  </div>
)

export default PostLink