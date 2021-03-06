import React from "react";
import Layout from "../components/Layout";

const GuidedBookingForm = () => {
  return (
    <Layout>
      <main className="container GuidedBookingFormPage">
        <h1 className="my-6 has-text-centered">
          Fully Guided Tour Booking Form
        </h1>
        <div className="mx-6">
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input className="input" type="text" />
            </div>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input className="input" type="text" />
            </div>
          </div>
          <div className="field">
            <label className="label">Phone</label>
            <div className="control">
              <input className="input" type="text" />
            </div>
          </div>
          <div className="field">
            <label className="label">Country</label>
            <div className="control">
              <input className="input" type="text" />
            </div>
          </div>
          <div className="field">
            <label className="label">Tour</label>
            <div className="control">
              <input className="input" type="text" />
            </div>
          </div>
          <div className="field">
            <label className="label">Pickup location</label>
            <div className="control">
              <input className="input" type="text" />
            </div>
          </div>
          <div className="field">
            <label className="label">Dropoff location</label>
            <div className="control">
              <input className="input" type="text" />
            </div>
          </div>
          <div className="field">
            <label className="label">Travel Date From</label>
            <div className="control">
              <input className="input" type="text" />
            </div>
          </div>
          <div className="field">
            <label className="label">Travel Date To</label>
            <div className="control">
              <input className="input" type="text" />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default GuidedBookingForm;
