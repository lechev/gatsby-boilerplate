import React from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

const Meta = ({ title, description }) => (
  <StaticQuery
    query={query}
    render={({
      site: {
        siteMetadata: {
          defaultTitle,
          titleTemplate,
          defaultDescription,
        }
      }
    }) => {
      const meta = {
        title: title || defaultTitle,
        description: description || defaultDescription,
      }

      return (
        <Helmet title={meta.title} titleTemplate={titleTemplate}>
          <meta name="description" content={meta.description} />
        </Helmet>
      )
  }} />
)

export default Meta

Meta.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
}

Meta.defaultProps = {
  title: null,
  description: null,
}

const query = graphql`
  query Meta {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
      }
    }
  }
`
