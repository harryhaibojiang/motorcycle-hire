import * as React from "react";
import Layout from "../components/Layout";
import Img from "gatsby-image";
import bwmPartner from "../images/bmw-partner.png";
import styles from "./index.module.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import classnames from "classnames";
import tours from "../content/tours";
import logo from "../images/logo-big.png";
import { Link } from "gatsby";

const sinceDescription = [
  "New Zealand is not just about the destination but about the journey - home of The Worlds Greatest Motorcycle Rides. Ask about our personalised guided or self guided motorbike deluxe or adventure tours.",
  "Hire just a bike and make up your own route - New Zealand has great twisty roads, stunning scenery, friendly people - simply the best motorcycle holiday or tour - guaranteed!",
  "New Zealand is a country full of spectacular scenery - here you are able to see just about everything the world has to offer in just one country, this is what makes NZ so unique. There is not another country in the world as breathtaking and seemingly designed just for motorcycle tours!",
];

const motorBrands = [
  {
    id: "bmw",
    subtitle: "BMW R1250GS, BMW R1200RTW, R1200GSW, F850GS, F700GS",
    url: "/rental-motorcycles/?brand=BMW#motorTabs",
  },
  {
    id: "honda",
    subtitle: "Honda VT750S and Honda CMX500 Rebel",
    url: "/rental-motorcycles/?brand=Honda#motorTabs",
  },
  {
    id: "suzuki",
    subtitle: "DL650 V-Strom, GSF1250",
    url: "/rental-motorcycles/?brand=Suzuki#motorTabs",
  },
  {
    id: "triumph",
    subtitle: "Tiger 800",
    url: "/rental-motorcycles/?brand=Triumph#motorTabs",
  },
];

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <main>
        <Img
          fluid={data.banner.childImageSharp.fluid}
          alt="New Zealand Motorcycle Tours, Rentals and Hire NZ"
        />
        <div className={styles.logo}>
          <img src={logo} alt="Te Waipounamu Motorcycle" />
        </div>
        <div className={styles.bmwPartner}>
          <img src={bwmPartner} alt="BMW Motorrad" />
        </div>
        <div className="container">
          <section className="section">
            <div>
              <h1 className="title">
                Rental Motorcycles in New Zealand since 1987
              </h1>
              <p>
                Hire a BMW, Triumph or Suzuki Motorcycle from Te Waipounamu
                Motorcycle Tours Ltd, you’re renting more than one of the best
                touring models available, more than a superbly maintained piece
                of engineering - you’re hiring a holiday of a lifetime. Our
                fleet of over 100 rental motorbikes are immaculately presented
                with the best tyres for our twisty roads, a full range of
                accessories are available.
              </p>
              <br />
              <ul>
                {sinceDescription.map((des, index) => (
                  <li key={index} className="columns">
                    <div className="column is-narrow">
                      <i className="arrow right mr-2" />
                    </div>
                    <p className="column">{des}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>
          <section>
            <Carousel autoPlay centerMode infiniteLoop showThumbs={false}>
              {motorBrands.map((brand) => (
                <div key={brand.id}>
                  <span className="has-text-white is-uppercase has-text-weight-bold">
                    {brand.id}
                  </span>
                  <Img
                    fluid={data[brand.id].childImageSharp.fluid}
                    alt={brand.id}
                  />
                  <Link to={brand.url}>
                    <p className="legend">{brand.subtitle}</p>
                  </Link>
                </div>
              ))}
            </Carousel>
          </section>
          {/* <section className="section">
            <div className="is-flex is-justify-content-center">
              <img
                src={logoBMWPartner}
                alt="offical main partner of BMW MOTORRAD"
              />
            </div>
          </section>
          <section className={styles.brands}>
            <div className="is-flex is-justify-content-space-evenly is-align-items-center">
              <Img fixed={data.hondaLogo.childImageSharp.fixed} alt="honda" />
              <Img fixed={data.suzukiLogo.childImageSharp.fixed} alt="suzuki" />
              <Img
                fixed={data.triumphLogo.childImageSharp.fixed}
                alt="triumph"
              />
            </div>
          </section> */}
          <section className={classnames(styles.tours, "columns", "section")}>
            <div className="column">
              <h4>Deluxe Fully Guided Tours</h4>
              <p>
                Touring with us is not about any strict regimentation or rules
                you have to comply with. This is your holiday and it is up to us
                to help you have the best one possible!
              </p>
              <br />
              <p>
                From the first evening introductory dinner to the moment we say
                goodbye we have your best interests at heart. The motorcycles
                are there at the hotel waiting for you. Our guides will advise
                you on all aspects of New Zealand culture, road rules, the best
                places to eat locally, and are there to ride with or assist you
                if needed.
              </p>
            </div>
            <div className="column">
              <h4>Self-Guided Tours</h4>
              <p>
                A perfect compromise between independent rental and a guided
                tour. Take advantage of our 20 plus years in the business!
              </p>
              <br />
              <p>
                Using itineraries that have been fine tuned over this period of
                time with matching accommodation in wonderful locations. Yes we
                can also customise a self guided tour specifically for you or
                modify one of ours to fit your travel plans. Ask us!
              </p>
            </div>
            <div className="column">
              <h4>New GS Bikes - New GS Enduro Tours – unpaved outback!</h4>
              <p>
                We are proud to announce the arrival of a new fleet of BMW
                R850GS and R1250GS to add to our range of models available for
                Hire and Tours. All our BMW GS models will be permitted to drive
                on gravel roads, in conjunction with this we are introducing
                gravel road insurance for peace of mind when taking GS models to
                explore New Zealand’s extensive and magical unpaved outback on
                public gravel roads and 4X4 tracks. A regular feature will be
                professionally guided GS Enduro Tours.
              </p>
            </div>
          </section>
          <section className="section">
            <Carousel autoPlay infiniteLoop showThumbs={false}>
              {tours.guided.concat(tours.selfGuided).map((tour) => (
                <div key={tour.title} className="columns is-vcentered">
                  <div className="column is-half has-text-centered">
                    <img src={tour.img} alt={tour.title} />
                  </div>
                  <div className="column is-half has-text-white mb-6">
                    <h2>{tour.title}</h2>
                    <h5>{tour.subtitle}</h5>
                    <h5>{tour.date}</h5>
                    <h5>{tour.route}</h5>
                    <br className="is-hidden-mobile" />
                    <p className="is-hidden-mobile">{tour.brief}</p>
                    <br />
                    <Link className="button is-primary" to={tour.url}>
                      Read More
                    </Link>
                  </div>
                </div>
              ))}
            </Carousel>
            {/* <TourPreview tours={tours.guided.concat(tours.selfGuided)} /> */}
          </section>
          <div className="video-wrapper">
            <iframe
              title="Rental Motorbikes Te Waipounamu Motorcycle Tours"
              className="embed-responsive-item"
              src="https://player.vimeo.com/video/217142552?title=0&amp;byline=0&amp;portrait=0"
              width="100%"
              // height="560"
              // height="auto"
              frameBorder="0"
              scrolling="auto"
              webkitallowfullscreen=""
              mozallowfullscreen=""
              allowFullScreen=""
            ></iframe>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query MyQuery {
    banner: file(relativePath: { eq: "banner.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    bmw: file(relativePath: { eq: "bmw.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    honda: file(relativePath: { eq: "honda.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    suzuki: file(relativePath: { eq: "suzuki.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    triumph: file(relativePath: { eq: "triumph.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    service: file(relativePath: { eq: "service.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    service2: file(relativePath: { eq: "service2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
