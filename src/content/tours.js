import mountainKingImg from "../images/tours/mountainKing.jpg";
import maoriDiscoveryTour from "../images/tours/maoriDiscoveryTour.jpg";
import twoWeeksDeluxSelfGuidedImg from "../images/tours/2-week-deluxe-self-guided.jpg";
import ThreeWeeksDeluxSelfGuidedImg from "../images/tours/3-week-deluxe-self-guided.jpg";
import southernMoonlightImg from "../images/tours/southern-moonlight-to.jpg";
import mapMK from "../images/tours/mapMK.jpg";
import mapMoonlight from "../images/tours/moonlight-map.jpg";
import mapMaori from "../images/tours/maori-map.jpg";
import map2WeeksDeluxe from "../images/tours/2weeks-deluxe.jpg";

const selfGuidedTips = [
  "Peak Season: 1 December to 15 March",
  "Shoulder Season: 16 March to 30 November",
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
      url: "/guided-tours/tour-of-the-mountain-kings",
      title: "Fred Rau's Tour of the Mountain Kings February",
      img: mountainKingImg,
      subtitle: "Personally Guided by Fred Rau.",
      date: "8th - 21st Feb 2022",
      route: "Auckland to Christchurch",
      brief:
        "2 weeks of fabulous riding! Breathe taking scenery around and over magnificent mountains and awesome passes. Feel the freedom of riding on roads with little to no traffic in your way and experience the thrill of the NZ alpine regions. Excellent accommodation all the way, the finest diet shattering fare, and the friendliest country to ride in makes this tour the stuff dreams are made of.",
      mapImg: mapMK,
      plans: [
        {
          title: "Week 1",
          locations: [
            "Auckland",
            "Coromandel",
            "Rotorua",
            "Hawkes Bay",
            "Wellington",
            "Nelson",
            "Hanmer Springs",
          ],
        },
        {
          title: "Week 2",
          locations: [
            "Franz Josef",
            "Queenstown",
            "Dunedin",
            "Mount Cook",
            "Christchurch",
          ],
        },
      ],
      description:
        "Tour Includes 13 night's accommodation in deluxe quality hotels, lodges and farm stays. airport transfers, 11 dinners, 13 breakfasts, Maori cultural evening, Larnach Castle, Interisland ferry tickets. Motorcycle with unlimited kilometres, luggage van and guide on motorcycle, full insurance. Maps and full itinerary/route guide.",
      price: {
        packages: [
          {
            type: "BMW 1250GS",
            price: 14555,
          },
          {
            type: "BMW R1200GS",
            price: 13995,
            similarModels: ["BMW R1200RT", "BMW 850GS"],
          },
          {
            type: "BMW F700GS",
            price: 12995,
            similarModels: [
              "BMW F800GS",
              "Triumph Tiger 800",
              "Suzuki GSF1250",
              "Honda VT750",
            ],
          },
          {
            type: "Suzuki DL650",
            price: 12150,
          },
        ],
        extraPrices: [
          {
            type: "Single Room Supplement",
            price: 3430,
          },
          {
            type: "Pillion rider",
            price: 8995,
          },
        ],
        tips: [
          "Pricing in NZD (New Zealand Dollars)",
          "Minimum number of participants is 6 and minimum number for 2 guides (one riding) is 12.",
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
      date: "01 May 2021 - 30 April 2022",
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
      date: "8th - 21st Feb 2022",
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
      date: "01 May 2021 - 30 April 2022",
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
      date: "01 May 2021 - 30 April 2022",
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
