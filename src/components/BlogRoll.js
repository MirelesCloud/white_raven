import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { Link, graphql, StaticQuery } from 'gatsby'

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (

      <div>
        {posts &&
          posts.map(({ node: post}) => (
            <div className="columns is-gapless is-multiline is-mobile" key={post.id} style={{display:"flex"}}>
              <div className="column" style={{display:"flex", flexDirection:"column"}}>
                <article className="box notification" style={{height:"100%"}}>
                  <p>
                    <Link
                      className="title has-text-primary is-size-4"
                      to={post.fields.slug}
                    >
                      {post.frontmatter.title}
                    </Link>
                    <span> &bull; </span>
                    <span className="subtitle is-size-5 is-block">
                      {post.frontmatter.date}
                    </span>
                  </p>
                  <p>

                    {post.excerpt}
                    <br />
                    <br />
                    <Link className="button" to={post.fields.slug}>
                      Keep Reading →
                    </Link>
                  </p>
                </article>
              </div>
              <div className="column" style={{display:"flex", flexDirection:"column"}}>
                <figure style={{height:"100%"}}>
                  <Img fluid={post.frontmatter.image.childImageSharp.fluid}/>
                </figure>
              </div>
            </div>
          ))}
      </div>
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                image {
                  childImageSharp {
                    fluid(maxWidth: 800, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)
