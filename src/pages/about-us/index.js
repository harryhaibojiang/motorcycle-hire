import React from "react";
import Layout from "../../components/Layout";

const AboutUs = () => {
  return (
    <Layout>
      <main className="container mt-4">
        <div className="video-wrapper">
          <iframe
            title="Rental Motorbikes Te Waipounamu Motorcycle Tours"
            className="embed-responsive-item"
            src="https://player.vimeo.com/video/217142798?title=0&byline=0&portrait=0"
            width="100%"
            frameBorder="0"
            scrolling="auto"
            webkitallowfullscreen=""
            mozallowfullscreen=""
            allowFullScreen=""
          ></iframe>
        </div>
        <section className="section">
          <h1 className="has-text-centered">
            About Te Waipounamu Motorcycle Tours
          </h1>
          <br />
          <p>
            Te Waipounamu Motorcycle Tours was formed in 1987 by John Rains and
            Peter Colwell. Both had been involved in the motorcycle industry for
            a long period of time and saw a market opportunity that was not
            being fulfilled.
          </p>
          <br />
          <p>
            "We knew New Zealand needed something like this because it's the
            perfect destination for a motorcycling holiday. We wanted to make
            the whole process of hiring a motorcycle easy for the customer."
          </p>
        </section>
        <section className="section columns">
          <div className="column">
            <p>
              This makes us one of the the worlds most experienced rental
              motorcycle companies.
            </p>
            <br />
            <p>
              The popularity of New Zealand as a motorcycle destination is well
              justified and the isolation from the rest of the world means
              either basic motorcycle rental, self guide touring, or fully
              guided tours are the only realistic options.
            </p>
            <br />
            <p>
              We have over 85 expertly-prepared motorcycles including the latest
              BMW, Honda, Suzuki and Triumph models. We have chosen only the
              very best models for comfort, reliability, and suitability for New
              Zealand road conditions in road bikes, adventure tourers,
              cruisers, enduros or custom bikes. Panniers, soft luggage bags,
              topbox and all your riding gear is available from us.
            </p>
          </div>
          <div className="column">
            <p>
              Te Waipounamu Motorcycle Tours has one of the largest range of
              makes and models available on the New Zealand rental market, and
              each year upgrade our fleet with the some of the most popular new
              models.
            </p>
            <br />
            <p>
              We also stock a comprehensive range of accessories including
              panniers, tank bags, saddlebags, helmets, gloves, jackets, over
              trousers, wet-weather gear, kidney belts, tank bags and
              saddlebags.
            </p>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default AboutUs;
