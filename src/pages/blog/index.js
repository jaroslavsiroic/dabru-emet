import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'
import { Trans } from "gatsby-plugin-react-i18next";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image"
          style={{
            backgroundImage: `url('/img/background.png')`,
          }}
        >
          <div
            style={{
              display: "flex",
              marginTop: "5em",
              lineHeight: "1",
              justifyContent: "space-around",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <h1
              className="has-text-weight-bold is-size-4-mobile is-size-3-tablet is-size-3-widescreen main-heading-text"
            >
              <Trans>Blog stories</Trans>
            </h1>
          </div>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;