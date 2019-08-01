import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import ScrollAnimation from 'react-animate-on-scroll'
import logo from "../img/logo.svg"
import arrow from "../img/arrow.svg"

import styled from 'styled-components'

import Layout from '../components/Layout'
import AboutRoll from '../components/AboutRoll'
import FeatureImages from '../components/FeatureImages'

import BreadCrumbBar from '../components/breadcrumbs'

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

export const IndexPageTemplate = ({
  image,
  feature,
  heading,
  subheading,
  mainpitch,
  
}) => (
  <div>
    <section className="hero is-fullheight-with-navbar" style={{
      backgroundImage: `url(${
        !!image.childImageSharp ? image.childImageSharp.fluid.src : image
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
            <ScrollAnimation animateIn='bounce'
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
                <BreadCrumbBar/>
                <Line/>
              </div>
            </div>
          </div>
      </div>
    </section>
    <section className="section" style={{
      backgroundImage: `url(${
        !!image.childImageSharp ? image.childImageSharp.fluid.src : image
      })`,
      backgroundPosition: `center`,
      backgroundAttachment: `fixed`,

    }}>
      <FeatureImages gridItems={feature.gallery} />
    </section>
      <Line/>
      <section>
        <AboutRoll/>
      
      </section>
      <Line/>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        feature={frontmatter.feature}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
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
        
        feature {
          gallery {
            title
            image {
              childImageSharp {
                fluid(maxWidth: 800, quality: 100) {
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
        }
      }
    }
  }
`
