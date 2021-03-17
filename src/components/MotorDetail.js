import { Link } from "gatsby";
import React from "react";
import { Fragment } from "react";
import Layout from "./Layout";

const MotorDetail = ({ motor }) => {
  return (
    <Layout>
      <main className="container mt-4">
        <h1 className="has-text-centered">{motor.name}</h1>
        <br />
        <section className="section columns">
          <div className="column">
            <img src={motor.img1} alt="" />
          </div>
          <div className="column">
            <h2>{motor.name}</h2>
            <br />
            <p>{motor.brief}</p>
            <br />
            <table class="table is-striped">
              <thead>
                <tr>
                  <th>Number of days:</th>
                  <th>Peak(1 December to 15 March):</th>
                  <th>Shoulder(16 March to 30 November):</th>
                </tr>
              </thead>
              <tbody>
                {motor.prices.map((price) => (
                  <tr>
                    <td>{price.days}</td>
                    <td>{price.peak}</td>
                    <td>{price.shoulder}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        <hr />
        <section className="section columns">
          <div className="column">
            <table class="table is-striped">
              {motor.specs.map((spec) => (
                <tr>
                  <td>{spec.key}</td>
                  <td>{spec.value}</td>
                </tr>
              ))}
            </table>
          </div>
          <div className="column has-text-centered">
            <h2>{motor.descriptionHeading}</h2>
            <br />
            {motor.description.map((des) => (
              <Fragment>
                <p>{des}</p>
                <br />
              </Fragment>
            ))}
            <Link to={"/book"} className="button is-primary">
              Book Online
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default MotorDetail;
