import React from 'react'
//import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
//import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

class StoreRoll extends React.Component {
  render() {
    const { data } = this.props
    const { frontmatter } = data.markdownRemark
    console.log(frontmatter.store.blurbs)

    return (
      <div className="columns is-multiline">
        <div className="column">
        </div>
      </div>
    )
  }
}

export default () => (
  <StaticQuery
    query={graphql`
      query StoreRollQuery {
        markdownRemark(frontmatter: { templateKey: { eq: "store-page"}}) {
          frontmatter {
            store {
              blurbs {
                image {
                  childImageSharp {
                    fluid(maxWidth: 300) {
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
    render={ (data) => <StoreRoll data={data}/>}
    />
)
