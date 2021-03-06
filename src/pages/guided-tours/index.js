import React from "react";
import Layout from "../../components/Layout";
import ListDescription from "../../components/ListDescription";
import TourPreview from "../../components/TourPreview";
import tours from "../../content/tours";
import photoFullyGuided from "../../images/tours/photo-fully-guided.jpg";
import photoSelfGuided from "../../images/tours/photo-self-guided.jpg";
import photoMotorcycles from "../../images/tours/photo-motorcycles.jpg";
import photoBanner from "../../images/tours/fully-guided-tours.jpg";

const tourStyles = [
  {
    title: "New Zealand Deluxe Fully Guided Tours",
    description:
      "A high standard of accommodation with private ensuite facilities, and most establishments have inhouse restaurants and fully licensed bars. Most days have breakfast and dinners included. Highlights such as Milford Sound cruise and/or Maori Cultural evening included, and a luggage van and motorcycle guide (dependant on numbers).",
    image: photoFullyGuided,
  },
  {
    title: "New Zealand Adventure Fully Guided Tours",
    description:
      "Accommodation is using pleasant motels and lodges with private ensuite facilities, meals included are on the first and last days only, Highlights such as Milford Sound cruise and/or Maori Cultural evening included, luggage van, guide on motorcycle (dependant on numbers).",
    image: photoSelfGuided,
  },
  {
    title: "Motorcycles",
    description:
      "Motorcycles available are listed in our Rental Fleet click here to view.  We will do our best to provide you with the motorcycle of your choice and meet any special requirements you need, however if you are late in booking your position on a tour It may be difficult to guarantee your first preference due to operational requirements that can change day to day. Generally we manage to provide a riders first choice in their selection.",
    image: photoMotorcycles,
  },
];

const ToursPage = () => {
  return (
    <Layout>
      <img src={photoBanner} alt="" />
      <main className="container mt-4">
        <h1 className="has-text-centered">Fully Guided Tours</h1>
        <br />
        <div className="mx-4">
          <TourPreview tours={tours.guided} />
        </div>
        <section className="section columns">
          <div className="column">
            <ListDescription
              title="Fully Guided Tours"
              lists={[
                "Let us do all the hard work in finding excellent routes, activities and organise all your accommodation and restaurants",
                "Stay at the best hand-picked accommodation around New Zealand",
                "Pick any model from our large fleet of motorcycles and accessories",
                "Let our guide take you to the best locations that few tourists know about",
                "Great group interaction where you can get to know others on the tour with a common interest: motorcycles",
                "Great guides, excellent service and most meals included in the package",
                "Luggage/support van supplied",
                "Mechanical backup",
                "Guaranteed problem free riding",
                "Free airport transfers on arrival and departure",
                "Speciality accommodation on farm-stays",
                "Maori Concert & hangi",
              ]}
            />
          </div>
          <div className="column">
            <p>
              Touring with us is not about any strict regimentation or rules you
              have to comply with. This is your holiday and it is up to us to
              help you have the best one possible! New Zealand is a country full
              of spectacular scenery and twisty roads. Here you are able to see
              just about everything the world has to offer in just one country,
              this is what makes New Zealand so unique. There is not another
              country in the world as breathtaking!
            </p>
            <br />
            <p>
              All our guided tours come with a professional tour guide for the
              whole tour, who will lead you through New Zealand's most beautiful
              areas.
            </p>
            <br />
            <p>
              Most tours include some extra activities, like an award winning
              Maori concert and Hangi. Of course we leave plenty of time for you
              to enjoy the many places and activities available along the way.
              Your guide can make arrangements for you.
            </p>
            <br />
            <p>
              To give you the best holiday, we have selected the nicest top star
              hotels available across New Zealand, all recommended from our
              previous customers. Including breakfast and fantastic views, most
              of these rooms come with television, phone, tea & coffee or a
              minibar, radio, fridge and shower among many other guest services.
              View some of the hotels we use on our tours here.
            </p>
            <br />
            <p>
              The cost of renting a motorcycle plus accommodation & food comes
              to being very close to the tour price (approximately 80%) . This
              is because group discounts are obtained at hotels which are then
              reflected in the tour price.
            </p>
            <br />
            <p>
              From the first evening introductory dinner to the moment we say
              goodbye we have your best interests at heart. The motorcycles are
              there at the hotel waiting for you. Our guides will advise you on
              all aspects of New Zealand culture, road rules, the best places to
              eat locally, and are there to ride with or assist you if needed.
            </p>
            <br />
            <p>
              <b>Relax and enjoy your holiday!</b>
            </p>
          </div>
        </section>
        <hr />
        <section className="section container">
          <h2 className="has-text-centered">
            We have divided our New Zealand Motorcycle Tours into two styles and
            two options.
          </h2>
          <br />
          <div className="columns">
            {tourStyles.map((tourStyle) => (
              <div className="column">
                <div style={{ height: 300 }}>
                  <h3 className="has-text-centered">{tourStyle.title}</h3>
                  <br />
                  <p>{tourStyle.description}</p>
                </div>
                <div>
                  <img src={tourStyle.image} alt="" />
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default ToursPage;
