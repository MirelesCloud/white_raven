import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

import styled from 'styled-components'

import Layout from '../components/Layout'
import BlogRoll from '../components/BlogRoll'
import FeatureImages from '../components/FeatureImages'

const Frame = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 82.5%;
  background: black;
  box-shadow: 0 10px 7px -5px rgba(0, 0, 0, 0.3);
`
const FrameInner = styled.div`
  position: absolute;
  background: white;
  top: 3.0303%; bottom: 3.0303%; left: 2.5%; right: 2.5%;
  box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.5) inset;
`
const Art = styled.figure`
  position: absolute;
  top: 16.129%; bottom: 16.129%; left: 13.158%; right: 13.158%;

`

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
const Line = styled.hr`
  background-color: #cccccc;
  margin-left: 75px;
  margin-right: 75px;
  height: 1px;
`

const Breadcrumbs = () => (
  <nav class="breadcrumb has-dot-separator is-medium is-centered has-text-white is-size-5-mobile" aria-label="breadcrumbs">
    <br/>
    <ul className="is-uppercase">
      <li><Link to="/"><span className="has-text-grey-lighter">Murals</span></Link></li>
      <li><Link to="/"><span className="has-text-grey-lighter">Pottery</span></Link></li>
      <li><Link to="/"><span className="has-text-grey-lighter">Leis</span></Link></li>
      <li><Link to="/"><span className="has-text-grey-lighter">Cakes</span></Link></li>
    </ul>
  </nav>
)

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
    <section className="hero is-fullheight-with-navbar" style={{
      backgroundImage: `url(${
        !!background.childImageSharp ? background.childImageSharp.fluid.src : image
      })`,
      backgroundPosition: `center`,
      backgroundAttachment: `fixed`,
      repeat: `no-repeat`,
    }}
    >
      <div className="hero-body">
        <div className="container">
          <Frame>
            <FrameInner>
              <Art>
                <Img className="image" fluid={image.childImageSharp.fluid} />
              </Art>
            </FrameInner>
          </Frame>
        </div>
      </div>
    </section>
    <section className="hero is-medium">
      <div className="hero-body has-text-centered">
        <div className="container">
          <Title>{heading}</Title>
          <Line/>
          <SubTitle>Fine art that speaks to the heart</SubTitle>
            <Breadcrumbs/>
        </div>
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
      <div className="columns">
        <div className="column is-10 is-offset-1">
          <div className="tile">
            <h1 className="title has-text-grey-lighter has-text-weight-light">{mainpitch.title}</h1>
          </div>
          <br/>
          <div className="tile">
            <h3 className="subtitle has-text-grey-lighter">{mainpitch.description}</h3>
          </div>
          <br/>
          <div>
            <Line/>
            <Breadcrumbs/>
            <Line/>
          </div>

        </div>
      </div>
      <div className="container">

      </div>
      <div className="columns">
        <div className="column is-12 has-text-centered" style={{
            paddingBottom: `40px`
          }}>
          <Title>Blog</Title>
        </div>
      </div>
      <div className="columns is-12 has-text-centered" style={{
          marginBottom: `40px`
        }}>
        <div className="column is-full has-text-centered">
          <BlogRoll />
        </div>
      </div>
      <div className="columns is-12 has-text-centered">
        <div className="column">
          <Link className="btn" to="/blog">
            Read more
          </Link>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
              <div className="columns">
                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">
                    {heading}
                  </h3>
                  <p>{description}</p>
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
    <div>
      <Line/>
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
