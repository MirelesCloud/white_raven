import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import styled from 'styled-components'

import Layout from '../components/Layout'
import BlogRoll from '../components/BlogRoll'
import FeatureImages from '../components/FeatureImages'

const Title = styled.h1`
  color: #cccccc;
  font-weight: 200;
  font-size: 4rem;
  text-transform: uppercase;
`
const SubTitle = styled.h1`
  color: #cccccc;
  font-weight 100;
  font-size: 2rem;
  text-transform: uppercase;
`
export const IndexPageTemplate = ({
  image,
  title,
  background,
  feature,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
  main,
}) => (
  <div>
    <section class="hero is-fullheight-with-navbar" style={{
      backgroundImage: `url(${
        !!image.childImageSharp ? image.childImageSharp.fluid.src : image
      })`,
      backgroundPosition: `center`,
      backgroundAttachment: `fixed`,
      repeat: `no-repeat`
    }}
    >
      <div class="hero-body">
        <div class="container has-text-centered">
          <p class="title">
            yo
          </p>
        </div>
      </div>
    </section>
    <section className="hero is-medium">
      <div className="hero-body has-text-centered">
        <div className="container">
          <Title>{heading}</Title>
          <SubTitle>Fine art that speaks to the heart</SubTitle>
        </div>
      </div>
      <div>
        <hr style={{
            marginRight: "75px",
            marginLeft: "75px",
            backgroundColor: "#333",
          }}/>
      </div>
    </section>
    <section className="section" style={{
      backgroundImage: `url(${
        !!background.childImageSharp ? background.childImageSharp.fluid.src : image
      })`,
      backgroundPosition: `center`,
      backgroundAttachment: `fixed`,

    }}>
      <FeatureImages gridItems={feature.gallery} />
    </section>
    <section className="section">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content">
                  <div className="tile">
                    <h1 className="title">{mainpitch.title}</h1>
                  </div>
                  <div className="tile">
                    <h3 className="subtitle">{mainpitch.description}</h3>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      {heading}
                    </h3>
                    <p>{description}</p>
                  </div>
                </div>

                <div className="columns">
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/products">
                      See all art
                    </Link>
                  </div>
                </div>
                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">
                    My latest
                  </h3>
                  <BlogRoll />
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/blog">
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div>
      <hr style={{
          marginRight: "75px",
          marginLeft: "75px",
          backgroundColor: "#333",
        }}/>
    </div>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        background={frontmatter.background}
        feature={frontmatter.feature}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}

      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        background {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 80) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        feature {
          gallery {
            title
            image {
              childImageSharp {
                fluid(maxWidth: 600, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 500, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
