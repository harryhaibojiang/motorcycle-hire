import "../app.scss";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import SEO from "./SEO";

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <SEO />
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  );
}
