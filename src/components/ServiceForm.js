import React, { useState } from "react";
import axios from "axios";
import classnames from "classnames";

const ServiceForm = () => {
  const [form, setForm] = useState({});
  const [isOpenSentModal, setOpenSentModal] = useState(false);

  const onSubmit = () => {
    axios
      .post("/.netlify/functions/email", {
        form,
        from: form.email,
        subject: "New Service Enquiry",
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
      <h1 className="my-6 has-text-centered">Booking Service or Enquiry</h1>
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
          <label className="label">Service required:</label>
          <div className="select">
            <select
              onChange={(e) => {
                setForm({ ...form, "Service required": e.target.value });
              }}
            >
              <option>Please select a service</option>
              <option>$180 Service</option>
              <option>Mechanial repair</option>
              <option>Tyre replacement</option>
              <option>Motorcycle hire</option>
            </select>
          </div>
        </div>
        <div className="field">
          <label className="label">Information about your motorcycle:</label>
          <div className="control">
            <textarea
              className="textarea"
              onChange={(e) => {
                setForm({ ...form, information: e.target.value });
              }}
            ></textarea>
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

export default ServiceForm;
