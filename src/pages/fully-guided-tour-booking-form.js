import React, { useState } from "react";
import Layout from "../components/Layout";
import axios from "axios";
import classnames from "classnames";

const GuidedBookingForm = () => {
  const [form, setForm] = useState({});
  const [isOpenSentModal, setOpenSentModal] = useState(false);

  const onSubmit = () => {
    axios
      .post("/.netlify/functions/email", {
        form,
        from: form.email,
        subject: "New tour booking",
      })
      .then(function (response) {
        console.log(response);
        setOpenSentModal(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
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
              <input
                className="input"
                type="text"
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                className="input"
                type="email"
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Phone</label>
            <div className="control">
              <input
                className="input"
                type="tel"
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Country</label>
            <div className="control">
              <input
                className="input"
                type="text"
                onChange={(e) => setForm({ ...form, country: e.target.value })}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Tour</label>
            <div className="control">
              <input
                className="input"
                type="text"
                onChange={(e) => setForm({ ...form, tour: e.target.value })}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Pickup location</label>
            <div className="control">
              <input
                className="input"
                type="text"
                onChange={(e) =>
                  setForm({ ...form, "Pickup location": e.target.value })
                }
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Dropoff location</label>
            <div className="control">
              <input
                className="input"
                type="text"
                onChange={(e) =>
                  setForm({ ...form, "Dropoff location": e.target.value })
                }
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Travel Date From</label>
            <div className="control">
              <input
                className="input"
                type="date"
                onChange={(e) =>
                  setForm({ ...form, "Travel Date From": e.target.value })
                }
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Travel Date To</label>
            <div className="control">
              <input
                className="input"
                type="date"
                onChange={(e) =>
                  setForm({ ...form, "Travel Date To": e.target.value })
                }
              />
            </div>
          </div>
          <button className="button" onClick={onSubmit}>
            Send
          </button>
        </div>
        <div className={classnames("modal", { "is-active": isOpenSentModal })}>
          <div className="modal-background"></div>
          <div className="modal-card">
            <section className="modal-card-body">
              We have received your form, and will get back to you soon.
              <br />
              <button className="button" onClick={() => window.history.back()}>
                Back
              </button>
            </section>
          </div>
          <button
            className="modal-close is-large"
            aria-label="close"
            onClick={() => setOpenSentModal(false)}
          ></button>
        </div>
      </main>
    </Layout>
  );
};

export default GuidedBookingForm;
