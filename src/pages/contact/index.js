import React from "react";
import Layout from "../../components/Layout";
import imgNewZealand from "../../images/contact/newzealand.jpg";
import imgPickup from "../../images/contact/pickupreturn.jpg";
import imgFlights from "../../images/contact/flights.jpg";
import BookingForm from "../../components/BookingForm";

const ContactUs = () => {
  return (
    <Layout>
      <main className="container mt-4">
        <h1 className="has-text-centered">Contact Us</h1>
        <br />
        <div className="columns">
          <div className="column is-two-thirds">
            <img src={imgNewZealand} alt="" />
            <br />
            <br />
            <div className="columns">
              <div className="column">
                <p>
                  <strong>Contact</strong>
                  <br />
                  John Rains
                  <br />
                  Nan Miao
                  <br />
                  Perry Rees
                </p>
                <p>
                  PO Box 673
                  <br />
                  Christchurch 8001
                </p>
                <br />
                <p>
                  <strong>Phone:</strong> 64-3-372-3537
                  <br />
                  <strong>Fax:</strong> 64-3-377-3211
                  <br />
                  <strong>Cellular:</strong> 64-274-331-534
                  <br />
                  <strong>E-Mail:</strong>{" "}
                  <a href="mailto:nzbike@motorcycle-hire.co.nz">
                    nzbike@motorcycle-hire.co.nz
                  </a>
                </p>
              </div>
              <div className="column">
                <p>
                  <strong>Hours</strong>
                  <br />
                  Monday to Friday 09:00 - 17:00
                  <br />
                  Weekends by appontment.
                </p>
                <br />
                <p>
                  Our Auckland and Christchurch depots are open 5 days per week
                  and closed Good Friday, Easter Sunday and Christmas Day. Pick
                  up and drop off times are between 9am to 5pm, Monday through
                  Friday. Weekends open by appointment.
                </p>
              </div>
            </div>
            <img src={imgPickup} alt="" />
            <br />
            <br />
            <div className="columns">
              <div className="column">
                <p>
                  <strong>Christchurch (Head Office)</strong>
                  <br />
                  28b Byron Street
                  <br />
                  Christchurch
                </p>
                <br />
                <p>
                  <strong>Phone:</strong> 64-3-372-3537
                  <br />
                  <strong>Fax:</strong> 64-3-377-3211
                  <br />
                  <strong>Cellular:</strong> 64-274-331-534
                </p>
              </div>
              <div className="column">
                <p>
                  <strong>Auckland</strong>
                  <br />
                  12D Parity Place
                  <br />
                  Hillcrest
                  <br />
                  Auckland 0627
                </p>
                <br />
                <p>
                  <strong>Phone:</strong> 64-9-444-8241
                </p>
              </div>
            </div>
            <img src={imgFlights} alt="" />
            <br />
            <br />
            <div className="columns">
              <div className="column">
                <p>
                  <strong>USA</strong>
                  <br />
                  <br />
                  <strong>Lucy Nelson</strong>
                  <br />
                  Travel One Inc
                  <br />
                  8009 34th Ave South
                  <br />
                  Bloomington, MN55425-1615
                </p>
                <br />
                <p>
                  <strong>Phone:</strong> (952) 854-2551
                  <br />
                  <strong>Web:</strong> www.traveloneinc.com
                  <br />
                  <strong>E-Mail:</strong>{" "}
                  <a href="mailto:lucy.nelson@traveloneinc.com">
                    lucy.nelson@traveloneinc.com
                  </a>
                  <br />
                  <br />
                  Lucy can help you with all aspects of flight arrangements for
                  coming to New Zealand.
                </p>
              </div>
              <div className="column">
                <p>
                  <strong>Canada (en Francais)</strong>
                  <br />
                  <br />
                  <strong>Marc Souliere</strong>
                </p>
                <br />
                <p>
                  <strong>Phone:</strong> 613-271-7089
                  <br />
                  <strong>E-Mail:</strong>{" "}
                  <a href="mailto:Marc@fredrau.com">Marc@fredrau.com</a>
                  <br />
                  <br />
                  Marc speaks fluent Canadian French. He is happy to assist you
                  with reserving a motorcycle hire/tour here in New Zealand.
                </p>
              </div>
            </div>
          </div>
          <div className="column">
            <BookingForm />
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default ContactUs;
