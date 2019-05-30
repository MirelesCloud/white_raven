import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { Link, graphql, StaticQuery } from 'gatsby'

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
          <div className="columns is-multiline is-mobile is-1">
            {posts &&
              posts.map(({ node: post}) => (
              <div className="column is-one-quarter-desktop is-half-tablet is-full-mobile is-flex" key={post.id}>
                <div className="card has-text-grey-lighter" style={{
                    border: "1px solid #fff",
                    backgroundColor: "#1a001a"
                  }}>
                  <div className="card-image">
                    <figure className="image">
                      <Img fluid={post.frontmatter.image.childImageSharp.fluid}/>
                    </figure>
                  </div>
                  <div className="card-content" >
                    <article className="">
                      <p>
                        <Link
                          className="title has-text-weight-light is-size-4 has-text-grey-lighter"
                          to={post.fields.slug}
                        >
                          {post.frontmatter.title}
                        </Link>
                      </p>
                      <p className="has-text-justified">
                        {post.excerpt}
                        <br />
                        <br />
                      </p>
                      <p className="subtitle is-size-6 has-text-right has-text-grey-lighter">
                        {post.frontmatter.date}
                      </p>
                      <p className="has-text-centered">
                        <Link className="button is-small is-rounded is-outlined" to={post.fields.slug}>
                          Keep Reading >
                        </Link>
                      </p>
                    </article>
                  </div>
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
              excerpt(pruneLength: 200)
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
