import React from "react";
import Layout from "../../components/Layout";
import ListDescription from "../../components/ListDescription";
import TourPreview from "../../components/TourPreview";
import tours from "../../content/tours";
import photoSelfGuided2 from "../../images/tours/photo-self-guided2.jpg";

const SelfToursPage = () => {
  return (
    <Layout>
      <main className="container mt-4">
        <h1 className="has-text-centered">Self-Guided Tours</h1>
        <br />
        <div className="mx-4">
          <TourPreview tours={tours.selfGuided} />
        </div>
        <section className="section columns">
          <div className="column">
            <ListDescription
              title="Self-Guided Tours"
              lists={[
                "Stay with friendly New Zealand people in their beautiful houses and lodges.",
                "The security of pre-booked accommodation is important in summer.",
                "Choose any of our large fleet of motorcycles, we guarantee to supply the model you book.",
                "Great value with excellent accommodation, some meals & complimentary guiding.",
                "Sit back and let us design your itinerary and organise all your accommodation and activities.",
                "You can depart and return at any time you choose.",
                "Guaranteed departure, no minimum numbers, these tours are specially for you.",
                "We have many years experience designing these tours for your maximum enjoyment!",
              ]}
            />
            <br />
            <p>
              Self Guided Tours offer the perfect compromise between an
              independent rental and a guided tour. Using itineraries that have
              been fine tuned over our decades of touring New Zealand, with
              matching accommodation in wonderful locations. You'll be provided
              a detailed itinerary, booked accommodation, maps and instruction
              book. We've selected the very best bed and breakfasts lodges, the
              lodge hosts are friendly and will advise the best activities in
              the region. "It's like having a guide the whole way round, with
              the added advantage of experiencing the real local flavor".
            </p>
            <br />
            <p>
              Advantages of riding a Self Guided Tour are lower costs,
              independence and more choice. The Self Guided Tours depart from
              Auckland or Christchurch any day. It is possible to travel one-way
              from Auckland to Christchurch or vice versa. No minimum number of
              customers is needed per tour; we can organise these tours for just
              one person. Special customised itineraries of any duration are
              possible, or the best hotel accommodation, please ask for a
              quotation.
            </p>
            <br />
            <p>
              Our pricing is based on excellent motorcycle friendly Bed &
              Breakfast's with a very warm welcoming atmosphere. Usually
              including many room facilities such as ensuite bathroom, tea and
              coffee and telephone.
            </p>
            <br />
            <p>
              Please note tours booked with dates including the Xmas and New
              Year period (25th December - 4th January ) will incur extra costs
              dues to accommodation price rises over that period. There may also
              be a minimum stay period in some locations of 2-5 days.
            </p>
          </div>
          <div>
            <img src={photoSelfGuided2} alt="" />
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default SelfToursPage;
