import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import 'assets/stylesheets/application.scss';

import Header from 'components/Header';
import Footer from 'components/Footer';

const Layout = ({ children, pageName }) => {

  let className = '';

  if ( pageName ) {
    className = `${className} page-${pageName}`;
  }

  return (
    <>
      <Helmet bodyAttributes={{ class: className }}>
        <title>Gatsby Site</title>
        <script>
          {`
            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

            ga('create', 'UA-156374155-2', 'auto');
            ga('send', 'pageview');
          `}
        </script>
      </Helmet>
      <div className="wrapper">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );

};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;