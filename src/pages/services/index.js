import React from "react";
import Img from "gatsby-image";
import Layout from "../../components/Layout";
import ListDescription from "../../components/ListDescription";
import ServiceForm from "../../components/ServiceForm";

const Services = ({ data }) => {
  return (
    <Layout>
      <main className="container mt-4">
        <h1 className="has-text-centered">
          Motorbike Servicing, Repairs & WOF
        </h1>
        <section className="section columns">
          <div className="column">
            <Img fluid={data.service.childImageSharp.fluid} alt="" />
          </div>
          <div className="column">
            <p>
              Being one of the largest motorcycle rental companies in the world
              means we are experts in keeping bikes running. Since 1987, during
              the summer, over 100 bikes are on the road at any one time and
              they need to be running smoothly, reliably and safely. We are now
              offering our workshop knowledge and expertise to every rider.
              Based close to the city we are located at 28b Byron St, off
              Colombo, in Sydenham. We offer workshop servicing on all models of
              bikes.
            </p>
            <br />
            <ListDescription
              title="Services"
              lists={[
                "Oil and filter changes",
                "Brake pads and servicing",
                "Chain and Sprockets",
                "General maintenance, valve adjustments, spark plug replacement.",
              ]}
            />
            <br />
            <p>
              We also offer a good range of Metzeler tyres at reasonable prices
              and free fitting to loose wheels.
            </p>
            <br />
            <p>
              We offer a pickup and drop off option so please contact us for
              details.
            </p>
          </div>
        </section>
        <section className="section columns">
          <div className="column">
            <p>
              Our philosophy as a rental company is to offer a high level of
              personal, friendly service and we want to extend this to workshop
              services where too often customers that deal with large shops do
              not get treated with respect they deserve.
            </p>
            <br />
            <ListDescription
              title="For Example for $180  we would offer:"
              lists={[
                "Oil and filter change ( most models)",
                "Clean air filter",
                "Check brake pads and top up fluid",
                "Check battery and charging system",
                "Adjust steering head bearings",
                "Check tyres",
              ]}
            />
            <br />
            <p>Pop in for a chat and check out how we can help.</p>
          </div>
          <div className="column">
            <Img fluid={data.service2.childImageSharp.fluid} alt="" />
          </div>
        </section>
        <ServiceForm />
      </main>
    </Layout>
  );
};

export default Services;

export const query = graphql`
  query ServicePageQuery {
    service: file(relativePath: { eq: "service.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 650) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    service2: file(relativePath: { eq: "service2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 650) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
