import React from "react";
import Layout from "./Layout";
import TourPreview from "./TourPreview";
import currency from "../util/currency";
import { Fragment } from "react";

const MoonlightTour = ({ tour }) => {
  return (
    <Layout>
      <main className="container mt-4">
        <h1 className="has-text-centered">{tour.title}</h1>
        <br />
        <div className="mx-4">
          <TourPreview tours={[tour]} />
        </div>
        <section className="section">
          <h3>Price</h3>
          <br />
          <div className="columns">
            {tour.price.packages.map((p) => (
              <div className="column is-one-quarter">
                <div
                  className="card has-text-centered py-4"
                  style={{ height: "100%" }}
                >
                  <div>{p.type}</div>
                  <div className="is-size-3">{currency.format(p.price)}</div>
                  {p.similarModels && (
                    <div>
                      <div>Or:</div>
                      {p.similarModels.map((model) => (
                        <div key={model}>{model}</div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          {tour.price.extraPrices && (
            <Fragment>
              <h3>Upgrade</h3>
              {tour.price.extraPrices.map((p) => (
                <div>
                  {p.type}: {currency.format(p.price)}
                </div>
              ))}
              <br />
            </Fragment>
          )}
          {tour.price.tips && (
            <>
              {tour.price.tips.map((tip) => (
                <p className="is-size-7">*{tip}</p>
              ))}
            </>
          )}
        </section>
        <section className="section columns is-vcentered">
          <div className="column mx-6">
            <div className="columns">
              {tour.plans.map((plan) => (
                <div className="column">
                  <div className="is-size-4">{plan.title}</div>
                  <br />
                  {plan.locations.map((location) => (
                    <div>{location}</div>
                  ))}
                </div>
              ))}
            </div>
            <p>{tour.description}</p>
          </div>
          <div className="column">
            <img src={tour.mapImg} alt="" />
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default MoonlightTour;
