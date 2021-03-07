import React, { useState } from "react";
import Layout from "../components/Layout";
import MotorCard from "../components/MotorCard";
import priceListDownload from "../images/view-full-pricelist.png";
import { motors } from "../content/motors";
import ListDescription from "../components/ListDescription";

const listDescriptions = [
  {
    title: "Included",
    lists: [
      "FREE Side Luggage for Standard Cases.",
      "FREE Unlimited Kilometres on rentals 4 Days & over˚",
      "FREE Insurance - full motorcycle cover included in all prices with standard Bond.",
      "Navigation TomTom Rider 400 GPS available  NZ$10 per day (maximum NZ$120 per rental, Bond NZ$400).",
      "Bring your own GPS complete with wiring & mounts - fitting charge NZ$25 plus any hardware we need to provide.",
      "Topboxes available @ $4 per day ($40 Maximum); Note: DR650 & SV/SFV650 do not have topbox mounts.",
      "Tankbags available @ $4 per day (NZ$30 Maximum).",
      "Lowering links can be fitted to the rear suspension of Tiger 800, DL650, G650GS NZ$50 fitting fee.",
      "Low Seats available for BMW models NZ$50 per hire.",
    ],
  },
  {
    title: "Terms",
    lists: [
      "Puncture repair and tyre inflation kits supplied for NZ$18 per hire.",
      "Rider minimum age is 21 years old and must hold valid drivers license suitable for machine being hired.",
      "Hire Motorcycles 700cc and over have a minimum rider age of 25.",
      "Long Term Hires - Hires over 22 days rates are by negotiation, please contact us for a quotation.",
      "Long Term Buy back options are available.",
      "We have Pick up/Drop off branches in Auckland and Christchurch, one way hires are Okay.",
      "One way hires less than 14 days may incur a $399 surcharge.",
      "Short Term Rentals  2 & 3 days have 350 kilometres per day included - Free.",
      "Short Term Hires over 350km per day free - only additional kilometres charged @ 29c /km Category C, 39c/km Catergory B, 49c/km Category A.",
    ],
  },
  {
    title: "Motorcycles",
    lists: [
      "All our rental motorcycles meet all legal requirements for riding on New Zealand public roads. They have a certificate of fitness as required by NZ Transport Agency for rental vehicles. We use very good quality tyres on our fleet of bikes, these are replaced regularly to ensure hirers have the best riding experience.",
      "All our rental motorcycles are maintained by fully qualified motorcycle technicians and are New Zealand Government Transport certified for rental vehicles. Most models have hard case panniers and soft luggage bags are available for smaller models. In the unlikely event of a motorcycle breaking down, we will repair the machine or replace it as soon as possible. Our Guided Tour support vans are equipped to carry motorcycles and also have tools, spares and first aid kits.",
    ],
  },
  {
    title: "Deposits and Refunds",
    lists: [
      "20% deposit required to confirm a RENTAL booking. Deposit 50% refundable if cancelled prior to 30 days of hire commencing.",
      "10% deposit required to confirm a TOUR booking. Deposit is 50% refundable if cancelled prior to 60 days of tour commencing.",
      "Tours need to be fully paid 60 days prior to departure, full tour payment is 50% refundable up to 30 days from departure.",
      "Payments and Deposits if cancelled within 30 days of departure are non-refundable.",
      "Note: Credit Card is needed on hire pickup, Bonds are not charged but a pre-aurthorisation of the amount is confirmed.",
    ],
  },
  {
    title: "Licence requirements",
    lists: [
      "Most overseas drivers licences are valid for use in New Zealand; the same restrictions apply as the country of origin. Riders must be 25 years of age or over for all our motorcycles. Licences must have a motorcycle endorsement for 650cc or above. If your licence is not in English, an international driving permit will be required.",
    ],
  },
  {
    title: "Security Bond",
    lists: [
      "A bond equal to the excess amount is required from the hirer at the time the motorcycle is picked up. This bond is to be secured with a credit card slip and is fully refundable when the motorcycle is returned undamaged to Te Waipounamu Motorcycle Tours. Any damage to the motorcycle, up to the insurance excess will be deducted from the security bond (or CDW amount if applicable).",
    ],
  },
  {
    title: "Insurance",
    lists: [
      "Motorcycle insurance is included in the rental rates. It covers damage to the motorcycle, fire and theft only. The hirer is separately liable for any accessories hired with the motorcycle. The insurance excess (deductible) varies per model and is listed in the schedule Insurance Deposits.",
    ],
  },
  {
    title: "Deposits and final payments",
    lists: [
      "Once a booking is confirmed we require a  deposit of 20% for hires and 10% for tours. Once Te Waipounamu Motorcycle Tours has received the deposit a receipt and booking confirmation will be emailed to you. The remaining balance is then due on pick up for hire only or 60 days prior for tours.",
    ],
  },
];

export default function MotorPage({ data }) {
  const [brand, setBrand] = useState("All");

  const motorsData = () => {
    if (brand === "All") {
      return Object.keys(motors).reduce((acc, current) => {
        return acc.concat(motors[current]);
      }, []);
    }

    return motors[brand];
  };
  console.log(motorsData());
  return (
    <Layout>
      <main className="container">
        <section className="section">
          <h1>Our Motorcycles</h1>
          <br />
          <div className="columns">
            <div className="column is-two-thirds">
              <p>
                We have over 100 of the latest model Touring Motorcycles – see
                below for the current models available – these bikes we actually
                own – book direct with us – our company provides most of the
                rental bikes available in New Zealand. All are licensed by the
                New Zealand Government and have had a safety inspection which is
                required every 6 months. <br />
                We guarantee you the motorcycle of your choice once a booking is
                confirmed by us, hard side luggage included free. No unpleasant
                surprises when you arrive.
              </p>
            </div>
            <div className="column">
              <a href="/pricelist.pdf" target="_blank">
                <img src={priceListDownload} alt="" />
              </a>
            </div>
          </div>
        </section>
        <section className="section">
          <div class="tabs is-centered">
            <ul>
              {["All", ...Object.keys(motors)].map((key) => (
                <li className={key === brand ? "is-active" : ""}>
                  <a onClick={() => setBrand(key)}>{key}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="columns is-multiline">
            {motorsData().map((motor) => (
              <div className="column is-one-third">
                <MotorCard
                  img={data[motor.id].childImageSharp.fluid}
                  {...motor}
                />
              </div>
            ))}
          </div>
        </section>
        <section className="section">
          <p>
            Rates include Free side luggage cases, unlimited Kms˚, tax and
            insurance
          </p>
          <p className="has-text-black has-text-weight-bold	">
            Peak Season 1 December to 15 March{" "}
          </p>
          <p className="has-text-black has-text-weight-bold	">
            Shoulder Season 16 March to 30 November
          </p>
        </section>
        <section className="columns is-multiline">
          {listDescriptions.map((list) => (
            <div className="column is-half" key={list.title}>
              <ListDescription {...list} />
            </div>
          ))}
        </section>
      </main>
    </Layout>
  );
}

export const query = graphql`
  query MotorsQuery {
    bmwR1250: file(relativePath: { eq: "motors/bmw-r1250.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    bmwR1200GS: file(relativePath: { eq: "motors/bmw-r1200-gs.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    bmwR1200RT: file(relativePath: { eq: "motors/bmw-r1200-rt.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    bmwF850GS: file(relativePath: { eq: "motors/bmw-f850gs.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    bmwF750GS: file(relativePath: { eq: "motors/bmw-f750gs.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    bmwF700GS: file(relativePath: { eq: "motors/bmw-f700gs.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    hondaVT750S: file(relativePath: { eq: "motors/honda-vt750s.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    hondaCMX500: file(relativePath: { eq: "motors/honda-cmx500.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    suzukiDL650: file(relativePath: { eq: "motors/suzuki-dl650.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    suzukiGSF1250: file(relativePath: { eq: "motors/suzuki-gsf1250.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    triumphTiger800: file(
      relativePath: { eq: "motors/triumph-tiger-800.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
