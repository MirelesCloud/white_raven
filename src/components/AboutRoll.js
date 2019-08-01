import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { graphql, StaticQuery, Link } from 'gatsby'

class AboutRoll extends React.Component {

  render() {
    const { data } = this.props
    const { frontmatter } = data.markdownRemark

    return (
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
                <div className="columns">
                  <div className="column is-6">
                    <h3 className="has-text-weight-light is-size-2">
                      {frontmatter.title}
                    </h3>
                    <p>{frontmatter.about}</p>
                    <br/>
                  </div>
                  <div className="column is-6">
                    <figure>
                      <Img fluid={frontmatter.image.childImageSharp.fluid} style={{
                          borderRadius: "50%",
                          boxShadow: "3px 3px 2px 5px rgba(10, 10, 10, 0.3)"
                        }}/>
                    </figure>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

AboutRoll.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query AboutRollQuery {
        markdownRemark(frontmatter: { templateKey: { eq: "about-page"}}) {
          frontmatter {
            title
            about
            image {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={ (data) => <AboutRoll data={data}/>}
    />
)
