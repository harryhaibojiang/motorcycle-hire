import React, { useState } from "react";
import axios from "axios";
import classnames from "classnames";
import tours from "../content/tours";
import { motors } from "../content/motors";

const BookingForm = () => {
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
    <div className="container GuidedBookingFormPage is-max-desktop">
      <h1 className="my-6 has-text-centered">Booking Request or Enquiry</h1>
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
          <label className="label">Motorcycle</label>
          <div className="select">
            <select
              onChange={(e) => {
                setForm({ ...form, Motorcycle: e.target.value });
              }}
            >
              <option>Please select motorcycle...</option>
              {motors.BMW.concat(motors.Honda)
                .concat(motors.Suzuki)
                .concat(motors.Triumph)
                .map((motor) => (
                  <option>{motor.name}</option>
                ))}
            </select>
          </div>
        </div>
        <div className="field">
          <label className="label">Tour</label>
          <div className="select">
            <select
              onChange={(e) => {
                setForm({ ...form, tour: e.target.value });
              }}
            >
              <option>Please select tour...</option>
              {tours.guided.concat(tours.selfGuided).map((tour) => (
                <option>{tour.title}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="field">
          <label className="label">Pickup location</label>
          <div className="select">
            <select
              onChange={(e) => {
                setForm({ ...form, "Pickup location": e.target.value });
              }}
            >
              <option>Select pickup location...</option>
              <option>Auckland</option>
              <option>Christchurch</option>
            </select>
          </div>
        </div>
        <div className="field">
          <label className="label">Dropoff location</label>
          <div className="select">
            <select
              onChange={(e) => {
                setForm({ ...form, "Dropoff location": e.target.value });
              }}
            >
              <option>Select dropoff location...</option>
              <option>Auckland</option>
              <option>Christchurch</option>
            </select>
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
        <br />
        <button className="button is-primary is-fullwidth" onClick={onSubmit}>
          Send
        </button>
      </div>
      <div className={classnames("modal", { "is-active": isOpenSentModal })}>
        <div className="modal-background"></div>
        <div className="modal-card">
          <section className="modal-card-body has-text-centered">
            We have received your form, and will get back to you soon.
            <br />
            <br />
            <button
              className="button is-primary"
              onClick={() => setOpenSentModal(false)}
            >
              OK
            </button>
          </section>
        </div>
        <button
          className="modal-close is-large"
          aria-label="close"
          onClick={() => setOpenSentModal(false)}
        ></button>
      </div>
    </div>
  );
};

export default BookingForm;
