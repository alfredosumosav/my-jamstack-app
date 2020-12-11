import React from 'react';
import { Helmet } from 'react-helmet';

import Layout from 'components/Layout';
import Container from 'components/Container';

import img_gatsby from 'assets/images/gatsby-astronaut.png';
import { graphql, useStaticQuery } from 'gatsby';

const IndexPage = () => {
  const { graphCmsPage = {} } = useStaticQuery(graphql`
    query PageQuery {
      graphCmsPage(id: { eq: "Page:ckijrmvcg2uvm0a236ciip2d5" }) {
        tagline
        headline
        id
      }
    }
  `);
  const { headline, tagline } = graphCmsPage;
  console.log("graphCmsPage", graphCmsPage);
  return (
    <Layout pageName="home">
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <Container>
        <p className="gatsby-astronaut">
          <img src={img_gatsby} alt="Build with Gatsby!" />
        </p>
        <h1>{ headline }</h1>
        <p>{ tagline }</p>
      </Container>
    </Layout>
  );
};

export default IndexPage;
