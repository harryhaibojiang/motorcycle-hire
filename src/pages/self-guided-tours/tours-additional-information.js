import React from "react";
import Layout from "../../components/Layout";
import photoBanner from "../../images/tours/fully-guided-tours.jpg";
import photoToursAdditionalInfo from "../../images/tours/photo-toursadditionalinfo.jpg";

const ToursAdditionalInfomation = () => {
  return (
    <Layout>
      <img src={photoBanner} alt="New Zealand Motorcycle Self-guided Tours" />
      <main className="container mt-4">
        <h1>Tours Additional Information</h1>
        <br />
        <AdditionalInfoSection
          title="Payment"
          description="20% deposit required with booking a tour to secure your position.
            Balance is required no later than 30 days out from the tour start
            date, in New Zealand dollars, preferably via eletronic bank
            transfer. Alternatively, all major international credit cards are
            accepted. Deposit non refundable if cancellation is within 30 days
            of tour commencing."
        />
        <AdditionalInfoSection
          title="Not included in tours"
          description="Airfares to and from New Zealand, airport taxes, personal expenses,
          sightseeing activities, snacks and most lunches, excess baggage
          charges, personal insurance, any items not mentioned as being
          included in the tour."
        />
        <AdditionalInfoSection
          title="Free airport transfers"
          description="When you arrive at your destination airport in Auckland or Christchurch, take a shuttle bus from outside the international arrivals terminal, paid for by us. Or if you would like your New Zealand holiday to start in style, we can organise a Limousines to pick you up. Book a Limousine here."
        />
        <AdditionalInfoSection
          title="Extra Motorcycle Rental"
          description="We are happy to provide motorcycles before the start of a tour or at the end of a tour, please let us know how many days are required when booking."
        />
        <AdditionalInfoSection
          title="Special arrangements"
          description="We can arrange vegetarian meals, a smoking room (if there are two smokers), intercoms, backrests, wet weather clothing, gloves, helmets, boots, fax and E-mail service, mobile telephones, plus many other things, please let us know in advance so we can make the necessary bookings. There may be a charge for some of the above."
        />
        <AdditionalInfoSection
          title="Accommodation"
          description="We have selected only the very best accommodation for our tours. All tours are based on sharing a twin or double room, customers travelling by themselves will be paired up with the most suitable person. If numbers do not match, we reserve the right to place the tour guide in the room with the last person who booked the tour."
        />
        <AdditionalInfoSection
          title="Single Rooms"
          description="Single room is an additional charge for tour members who prefer their own space."
        />
        <AdditionalInfoSection
          title="Tour Guides and Support Van (on Fully Guided Tours only)"
          description="Our tour guides have been very carefully chosen and trained to meet our high standard and professional service, and are always available to help with anything you may need during the tour, tour members are free to travel with the guide or travel at their own pace. Depending on the number of people on the tour there will be either one or two tour guides, if there are two tour guides one will travel in the support van and the other on a motorcycle. Tour member luggage will be carried in the support van. Luggage should be limited to two suitcases per person."
        />
      </main>
    </Layout>
  );
};

const AdditionalInfoSection = ({ title, description }) => (
  <section>
    <h3>{title}</h3>
    <br />
    <p>{description}</p>
    <br />
  </section>
);

export default ToursAdditionalInfomation;
