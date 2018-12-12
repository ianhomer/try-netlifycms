import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Features from '../components/Features'
import Things from '../components/Things'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

export const InfoPageTemplate = ({
  image,
  title,
  heading,
  description,
  intro,
  main,
  fullImage,
  bucket,
}) => (
  <section className="section section--gradient">
    <div className="container">
      <div className="section">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="content">
              <div>
                <h2
                  className="has-text-weight-bold is-size-1"
                  style={{
                    boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
                    backgroundColor: '#f40',
                    color: 'white',
                    padding: '1rem',
                  }}
                >
                  {title}
                </h2>
              </div>
              <div className="columns">
                <div className="column is-7">
                  <h3 className="has-text-weight-semibold is-size-2">
                    {heading}
                  </h3>
                  <p>{description}</p>
                </div>
              </div>
              <Features gridItems={intro.blurbs} />
              <div className="columns">
                <div className="column is-7">
                  <h3 className="has-text-weight-semibold is-size-3">
                    {main.heading}
                  </h3>
                  <p>{main.description}</p>
                </div>
              </div>
              <div className="tile is-ancestor">
                <div className="tile is-vertical">
                  <div className="tile">
                    <div className="tile is-parent is-vertical">
                      <article className="tile is-child"/>
                    </div>
                  </div>
                </div>
              </div>
              <h2 className="has-text-weight-semibold is-size-2">
                {bucket.heading}
              </h2>
              <p className="is-size-5">{bucket.description}</p>
              <Things data={bucket.things} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

InfoPageTemplate.propTypes = {
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  main: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string
  }),
  bucket: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    things: PropTypes.array,
  }),
}

const InfoPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <InfoPageTemplate
        title={frontmatter.title}
        heading={frontmatter.heading}
        description={frontmatter.description}
        intro={frontmatter.intro}
        main={frontmatter.main}
        bucket={frontmatter.bucket}
      />
    </Layout>
  )
}

InfoPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default InfoPage

export const infoPageQuery = graphql`
  query InfoPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        heading
        description
        intro {
          blurbs {
            text
          }
          heading
          description
        }
        main {
          heading
          description
        }
        bucket {
          heading
          description
          things {
            description
            lines
            name
            value
          }
        }
      }
    }
  }
`
