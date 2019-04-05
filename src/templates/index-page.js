import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import ScrollAnimation from 'react-animate-on-scroll'
import logo from "../img/logo.svg"
import arrow from "../img/arrow.svg"

import styled from 'styled-components'

import Layout from '../components/Layout'
import BlogRoll from '../components/BlogRoll'
import AboutRoll from '../components/AboutRoll'
import FeatureImages from '../components/FeatureImages'

const Logo = styled.figure`
position: relative;
  width: 200px;
  height: auto;
  margin: auto;
`

const Arrow = styled.figure`
  position: relative;
  width: 50px;
  height: auto;
  margin: auto;
`

const Title = styled.h1`
  color: #cccccc;
  font-weight: 200;
  font-size: 4rem;
  text-transform: uppercase;
`
const SubTitle = styled(Title)`
  font-weight 100;
  font-size: 2rem;
`
const Line = styled.hr`
  background-color: #cccccc;
  margin-left: 75px;
  margin-right: 75px;
  height: 1px;
`

const Breadcrumbs = () => (
  <nav class="breadcrumb has-dot-separator is-centered has-text-white" aria-label="breadcrumbs">
    <br/>
    <ul className="is-uppercase">
      <li><Link to="/"><span className="has-text-grey-lighter">Murals</span></Link></li>
      <li><Link to="/"><span className="has-text-grey-lighter">Pottery</span></Link></li>
      <li><Link to="/"><span className="has-text-grey-lighter">Leis</span></Link></li>
      <li><Link to="/"><span className="has-text-grey-lighter">Commissions</span></Link></li>
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
      <div className="hero-body is-primary has-text-centered ">
        <div className="container ">
          <Logo>
            <img src={logo} alt="White Raven Logo"/>
          </Logo>
          <Title>{heading}</Title>
          <Line/>
          <SubTitle>{subheading}</SubTitle>
        </div>
      </div>
       <div style={{marginBottom:"100px"}}>
          <Arrow>
            <ScrollAnimation animateIn='fadeIn'
              animateOut='fadeOut'
              delay={1000}

              >
              <a href="#section"><img src={arrow} alt="arrow down"/></a>
            </ScrollAnimation>
          </Arrow>
       </div>
    </section>
    <section className="section" id="section">
      <div className="container has-text-justified">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="tile">
                <h1 className="title has-text-grey-lighter has-text-weight-light">{mainpitch.title}</h1>
              </div>
              <br/>
              <div className="tile">
                <h3 className="subtitle has-text-grey-lighter has-text-left-mobile">{mainpitch.description}</h3>
              </div>
              <br/>
              <div>
                <Breadcrumbs/>
                <Line/>
              </div>
            </div>
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
        <div className="column is-12 has-text-centered" style={{
            paddingBottom: `40px`
          }}>
          <Line/>
          <Title>Blog</Title>
          <Line/>
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
    <Line/>
    <AboutRoll/>
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
