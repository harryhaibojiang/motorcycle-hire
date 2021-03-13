import React from "react";
import Layout from "../../components/Layout";
import BookingForm from "../../components/BookingForm";

const GuidedBookingForm = () => {
  return (
    <Layout>
      <main className="container GuidedBookingFormPage is-max-desktop">
        <BookingForm />
      </main>
    </Layout>
  );
};

export default GuidedBookingForm;
