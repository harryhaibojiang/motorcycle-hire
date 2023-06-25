import mountainKingImg from "../images/tours/mountainKing.png";
import maoriDiscoveryTour from "../images/tours/maoriDiscoveryTour.jpg";
import twoWeeksDeluxSelfGuidedImg from "../images/tours/2-week-deluxe-self-guided.jpg";
import ThreeWeeksDeluxSelfGuidedImg from "../images/tours/3-week-deluxe-self-guided.jpg";
import southernMoonlightImg from "../images/tours/southern-moonlight-to.jpg";
import mapMK from "../images/tours/mapMK.png";
import mapSouthIslandHopper from "../images/tours/mapSouthIslandHopper.png";
import mapMoonlight from "../images/tours/moonlight-map.jpg";
import mapMaori from "../images/tours/maori-map.jpg";
import map2WeeksDeluxe from "../images/tours/2weeks-deluxe.jpg";

const selfGuidedTips = [
  "Peak Season: 1 November to 31 March",
  "Shoulder Season: 31 March to 1 November",
  "Total Tour Package Cost - Motorcycle Rental is an additional cost - please refer to the pdf price list.",
  "All bike accessories (tank bags, top boxes, GPS) are free for tour clients.",
  "** Hotel/Motel accommodation available if preferred or if no vacancies at Farmstay.",
  "NOTE: Tours booked with dates that fall on special events in NZ including the Xmas and New Year period will incur extra costs due to accommodation price rises over that period. There may also be a minimum stay period in some locations which can restrict our choice of accommodation.",
  "Deviations to our set itinerary will incur a customisation fee.",
  "Pricing in NZ dollars and includes Sales Tax.",
];

const tours = {
  guided: [
    {
      pdf: "/Island-Hopper-Trails.pdf",
      url: "/guided-tours/Island-Hopper-Trails",
      title: "Island Hopper Trails 16-day",
      img: mountainKingImg,
      subtitle: "Fully Guided tour on the South & North Islands of NZ",
      date: "January 26 — February 10 / 2024",
      route: "Approx. 2,410 miles (3,880 km)",
      brief:
        "Join Colin Rowe to experience New Zealand, as he personally guides you on this 16-day tour of the South & North Island of New Zealand, which will give you a close-up view of beautiful scenery ranging from rain forests, pasture land, white sandy beaches, rocky coast lines & rugged mountain ranges.",
      mapImg: mapMK,
      plans: [],
      description:
        "You will begin and end your guided tour in the city of Christchurch, where you will pick up your bike before enjoying the evening relaxing with your fellow riders. Your ride will then take you through the rugged mountains of the Southern Alps running the length of the Sth Island, before crossing the ocean between the 2 islands and riding through the rich farm land of the central North Island, visiting geothermal volcanic areas, riding along beautiful sweeping coastal roads, through old growth forests, and rugged hill country. All the while enjoying gentle sweeping corners mixed with twisty back roads.",
      price: {
        packages: [
          {
            type: "BMW 1250GS",
            price: 13425,
            similarModels: ["BMW R1250RT"],
          },
          {
            type: "BMW R1200RT",
            price: 12145,
            similarModels: ["BMW R1200GS", "BMW F850GS"],
          },
          {
            type: "BMW F750GS",
            price: 11185,
            similarModels: [
              "BMW F700GS",
              "Yamaha Tracer 900",
              "Suzuki GSF 1250 Bandit",
              "Triumph Tiger 800",
              "Honda Shadow Aero 750",
            ],
          },
          {
            type: "Honda CMX500",
            price: 10385,
            similarModels: ["Honda CB500X", "Suzuki DL 650", "VSTROM"],
          },
        ],
        extraPrices: [
          {
            type: "Single Room Supplement",
            price: 2535,
          },
          {
            type: "Passenger / Pillion rider",
            price: 8000,
          },
        ],
        tips: [
          "Pricing in NZD (New Zealand Dollars)",
          "Minimum number of participants is 5.",
          "Tour bookings are sold as twin-share or double.",
          "Single rooms can be reserved with this additional price.",
        ],
      },
    },
    {
      pdf: "/South-Island-Hopper.pdf",
      url: "/guided-tours/South-Island-Hopper",
      title: "South Island Hopper 27-day",
      img: mountainKingImg,
      subtitle: "Fully Guided tour on the South & North & South Islands of NZ",
      date: "January 26—February 21 / 2024",
      route: "Approx. 3,855 miles (6,480km)",
      brief:
        "Join Colin Rowe to experience New Zealand as he personally guides you on this 16-day tour of the South & North Island of New Zealand, which will give you a close-up view of beautiful scenery ranging from rain forests, pasture land, white sandy beaches, rocky coast lines & rugged mountain ranges.",
      mapImg: mapSouthIslandHopper,
      plans: [],
      description:
        "You will begin and end your guided tour in the city of Christchurch, where you will pick up your bike before enjoying the evening relaxing with your fellow riders. Your ride will then take you through the rugged mountains of the Southern Alps running the length of the Sth Island, before crossing the ocean between the 2 islands and riding through the rich farm land of the central North Island, visiting geothermal volcanic areas, riding along beautiful sweeping coastal roads, through old growth forests, and rugged hill country. All the while enjoying gentle sweeping corners mixed with twisty back roads.",
      price: {
        packages: [
          {
            type: "Tour Cat. A",
            price: 21715,
            similarModels: ["BMW R1250GS", "BMW R1250RT"],
          },
          {
            type: "Tour Cat. B",
            price: 19555,
            similarModels: ["BMW R1200RT", "BMW R1200GS", "BMW F850GS"],
          },
          {
            type: "Tour Cat. C",
            price: 17935,
            similarModels: [
              "BMW F750GS",
              "BMW F700GS",
              "Yamaha Tracer 900",
              "Suzuki GSF 1250 Bandit",
              "Triumph Tiger 800",
              "Honda Shadow Aero 750",
            ],
          },
          {
            type: "Tour Cat. D",
            price: 16585,
            similarModels: [
              "Honda CMX500",
              "Honda CB500X",
              "Suzuki DL 650",
              "VSTROM",
            ],
          },
        ],
        extraPrices: [
          {
            type: "Single Room Supplement",
            price: 4395,
          },
          {
            type: "Passenger / Pillion rider",
            price: 12560,
          },
        ],
        tips: [
          "Pricing in NZD (New Zealand Dollars)",
          "Minimum number of participants is 5.",
          "Tour bookings are sold as twin-share or double.",
          "Single rooms can be reserved with this additional price.",
        ],
      },
    },
  ],
  selfGuided: [
    {
      url: "/self-guided-tours/southern-moonlight-tour",
      title: "2 Weeks Southern Moonlight Tour",
      img: southernMoonlightImg,
      date: "01 May 2023 - 30 April 2024",
      route: "Christchurch - Christchurch",
      brief:
        "A superb motorcycle tour that show cases the highlights of New Zealand’s South Island!",
      mapImg: mapMoonlight,
      plans: [
        {
          title: "Week 1",
          locations: [
            "Christchurch",
            "Mount Cook",
            "Dunedin",
            "Te Anau (Farm-stay*)",
            "Te Anau (Farm-stay*)",
            "Queenstown",
            "Queenstown",
          ],
        },
        {
          title: "Week 2",
          locations: [
            "Fox Glacier",
            "Hanmer Springs",
            "Nelson",
            "Nelson",
            "Punakaiki",
            "Christchurch",
            "Depart Day",
          ],
        },
      ],
      description:
        "13 nights accommodation in mid range motels and hotels. Milford Sound cruise. Airport transfers. Two nights farmstay with breakfasts and dinners. GPS, maps and tour pack included.",
      price: {
        packages: [
          {
            type: "Single room in shoulder season",
            price: 3585,
          },
          {
            type: "Single room in peak season",
            price: 4405,
          },
          {
            type: "Double/Twin room in shoulder season",
            price: 3962,
          },
          {
            type: "Double/Twin room in peak season",
            price: 4782,
          },
        ],
        tips: selfGuidedTips,
      },
    },
    {
      url: "/self-guided-tours/3-week-maori-discovery-tour",
      title: "3 Weeks Maori Discovery Tour",
      img: maoriDiscoveryTour,
      date: "8th - 21st Feb 2024",
      route: "Auckland to Christchurch or Christchurch - Auckland",
      brief:
        "From Cape Reinga to Bluff we take you on a journey of discovery in NZ! An affordable 3 week tour of NZ that gives you an experience of our Maori culture with an evening concert and a traditional feast on a Maori Marae in Rotorua, a ride of over 5000kms, 3 relaxing 2- night stop-over's, a spectacular Milford Sound Cruise, and a fantastic New Zealand holiday you won't forget!",
      mapImg: mapMaori,
      plans: [
        {
          title: "Week 1",
          locations: [
            "Auckland",
            "Bay of Islands",
            "Bay of Islands",
            "Orewa",
            "Coromandel",
            "Rotorua",
            "Hawkes Bay",
          ],
        },
        {
          title: "Week 2",
          locations: [
            "Wellington",
            "Nelson",
            "Nelson",
            "Punakaiki",
            "Hanmer Springs",
            "Fox Glacier",
            "Queenstown",
          ],
        },
        {
          title: "Week 3",
          locations: [
            "Queenstown",
            "Te Anau (Farm-stay**)",
            "Te Anau (Farm-stay**)",
            "Dunedin",
            "Mt Cook",
            "Christchurch",
          ],
        },
      ],
      description:
        "20 nights accommodation in mid range motels and hotels. Interisland ferry, Milford Sound Cruise, Maori concert and feast. Two nights farmstay with breakfast and dinners. Airport transfers. GPS, maps, and tour pack included.",
      price: {
        packages: [
          {
            type: "Single room in shoulder season",
            price: 6175,
          },
          {
            type: "Single room in peak season",
            price: 6975,
          },
          {
            type: "Double/Twin room in shoulder season",
            price: 6658,
          },
          {
            type: "Double/Twin room in peak season",
            price: 7446,
          },
        ],
        tips: selfGuidedTips,
      },
    },
    {
      url: "/self-guided-tours/2-week-deluxe-self-guided",
      title: "2 Weeks Deluxe Self Guided Tour",
      img: twoWeeksDeluxSelfGuidedImg,
      date: "01 May 2023 - 30 April 2024",
      route: "Christchurch to Christchurch",
      brief:
        "A superb motorcycle tour that show cases the highlights of New Zealands South Island! 13 nights in upper level hotels and lodges. Larnach Castle dinner and breakfast. Two nights farmstay with dinners and breakfasts. Milford Sound cruise, airport transfers. GPS, maps and tour pack included.",
      mapImg: map2WeeksDeluxe,
      plans: [
        {
          title: "Week 1",
          locations: [
            "Christchurch",
            "Mount Cook",
            "Dunedin",
            "Te Anau (Farm-stay*)",
            "Te Anau (Farm-stay*)",
            "Queenstown",
            "Queenstown",
          ],
        },
        {
          title: "Week 2",
          locations: [
            "Fox Glacier",
            "Hanmer Springs",
            "Nelson",
            "Nelson",
            "Punakaiki",
            "Christchurch",
            "Depart Day",
          ],
        },
      ],
      price: {
        packages: [
          {
            type: "Single room in shoulder season",
            price: 5488,
          },
          {
            type: "Single room in peak season",
            price: 6758,
          },
          {
            type: "Double/Twin room in shoulder season",
            price: 5845,
          },
          {
            type: "Double/Twin room in peak season",
            price: 7114,
          },
        ],
        tips: selfGuidedTips,
      },
    },
    {
      url: "/self-guided-tours/3-week-deluxe-self-guided",
      title: "3 Weeks Deluxe Self Guided Tour",
      img: ThreeWeeksDeluxSelfGuidedImg,
      date: "01 May 2023 - 30 April 2024",
      route:
        "Begins Christchurch Ends Auckland – or – Begins Auckland Ends Christchurch",
      brief:
        "20 nights in upper level hotel and lodges. Larnach Castle dinner and breakfast. Two nights farmstay with dinners and breakfasts. Maori concert and feast, interisland ferry, Milford Sound cruise. Airport transfers. GPS, maps and tour pack included.",
      mapImg: mapMaori,
      plans: [
        {
          title: "Week 1",
          locations: [
            "Auckland",
            "Bay of Islands",
            "Bay of Islands",
            "Orewa",
            "Coromandel",
            "Rotorua",
            "Hawkes Bay",
          ],
        },
        {
          title: "Week 2",
          locations: [
            "Wellington",
            "Nelson",
            "Nelson",
            "Punakaiki",
            "Hanmer Springs",
            "Fox Glacier",
            "Queenstown",
          ],
        },
        {
          title: "Week 3",
          locations: [
            "Queenstown",
            "Te Anau (Farm-stay**)",
            "Te Anau (Farm-stay**)",
            "Dunedin",
            "Mt Cook",
            "Christchurch",
          ],
        },
      ],
      price: {
        packages: [
          {
            type: "Single room in shoulder season",
            price: 7991,
          },
          {
            type: "Single room in peak season",
            price: 8788,
          },
          {
            type: "Double/Twin room in shoulder season",
            price: 8568,
          },
          {
            type: "Double/Twin room in peak season",
            price: 9366,
          },
        ],
        tips: selfGuidedTips,
      },
    },
  ],
};

export default tours;
