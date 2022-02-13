import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import { Link, Trans } from "gatsby-plugin-react-i18next";

const NotFoundPage = () => (
  <Layout>
    <section className="section">
      <div className="container content">
        <h1>
          <Trans>PAGE NOT FOUND</Trans>
        </h1>
        <br />
        <p>
          <Trans>Not Found Description</Trans>
        </p>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </section>
  </Layout>
);

export default NotFoundPage;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
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
