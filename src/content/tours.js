import mountainKingImg from "../images/tours/mountainKing.png";
import twoWeeksDeluxSelfGuidedImg from "../images/tours/2-week-deluxe-self-guided.jpg";
import ThreeWeeksDeluxSelfGuidedImg from "../images/tours/3-week-deluxe-self-guided.jpg";
import mapMK from "../images/tours/mapMK.png";
import mapSouthIslandHopper from "../images/tours/mapSouthIslandHopper.png";
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
      pdf: "/18-day Kiwi Trails. North Island Loop.pdf",
      url: "/guided-tours/Island-Hopper-Trails",
      title: "Kiwi Trails 18-days",
      img: mountainKingImg,
      subtitle: "Fully Guided tour on the North Island of NZ",
      date: "February 5—February 22 / 2025",
      route:
        "Approx. 2,615 miles (4,210km), Minimum number of participants is 5",
      brief:
        "Join PMT company founder Colin Rowe to experience New Zealand, as he personally guides you on this 18-day tour, which gives you a close-up view of beautiful scenery ranging from rolling pastures to white sandy beaches to rugged mountains.",
      mapImg: mapMK,
      plans: [],
      description:
        "You will experience riding through old growth sub-tropical forests, along sweeping costal roads, through rugged hill country, and lush pasture lands, while enjoying gentle sweeping corners mixed with twisty back roads.",
      price: {
        packages: [
          {
            type: "BMW 1250GS",
            price: 15975,
            similarModels: ["BMW R1250RT"],
          },
          {
            type: "BMW R1200RT",
            price: 14400,
            similarModels: ["BMW R1200GS", "BMW F850GS"],
          },
          {
            type: "BMW F750GS",
            price: 13220,
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
            price: 12240,
            similarModels: ["Honda CB500X", "Suzuki DL 650", "VSTROM"],
          },
        ],
        extraPrices: [
          {
            type: "Single Room Supplement",
            price: 2565,
          },
          {
            type: "Passenger / Pillion rider",
            price: 9035,
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
      pdf: "/18-day FG South Island Motorcycle Tour.pdf",
      url: "/guided-tours/South-Island-Hopper",
      title: "18-day South Island Motorcycle Tour",
      img: mountainKingImg,
      subtitle: "Fully Guided tour on the South Island of NZ",
      date: "January 15 to February 1 / 2025",
      route:
        "Approx. 2,605 miles (4,205km), Minimum number of participants is 5",
      brief:
        "Join PMT company founder Colin Rowe to experience New Zealand, as he personally guides you on this 18-day tour, where you will enjoy riding through this incredibly diverse land with beautiful views ranging from rain forests, pasture lands, and white sandy beaches to mountain ranges and twisty coastlines.",
      mapImg: mapSouthIslandHopper,
      plans: [],
      description: `You will begin and end your guided tour in the city of Christchurch, where you will pick up
        your bike before enjoying the evening relaxing with your fellow riders. Your ride will then take
        you across the island through the rugged Southern Alps, along beautiful coastal roads, through
        old growth forests and rugged hill country, all while enjoying gentle sweeping corners and
        twisty back roads.`,
      price: {
        packages: [
          {
            type: "Tour Cat. A",
            price: 15535,
            similarModels: ["BMW R1250GS", "BMW R1250RT"],
          },
          {
            type: "Tour Cat. B",
            price: 13960,
            similarModels: ["BMW R1200RT", "BMW R1200GS", "BMW F850GS"],
          },
          {
            type: "Tour Cat. C",
            price: 12780,
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
            price: 11800,
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
            price: 3070,
          },
          {
            type: "Passenger / Pillion rider",
            price: 8595,
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
      url: "/self-guided-tours/2-week-deluxe-self-guided",
      title: "2 Weeks Deluxe Self Guided Tour",
      img: twoWeeksDeluxSelfGuidedImg,
      date: "01 May 2023 - 30 April 2024",
      route: "Christchurch to Christchurch",
      brief:
        "A superb motorcycle tour that show cases the highlights of New Zealands South Island! 13 nights in upper level hotels and lodges. Larnach Castle dinner and breakfast. Milford Sound cruise, airport transfers. GPS, maps and tour pack included.",
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
            price: 6036,
          },
          {
            type: "Single room in peak season",
            price: 7433,
          },
          {
            type: "Double/Twin room in shoulder season",
            price: 6429,
          },
          {
            type: "Double/Twin room in peak season",
            price: 7825,
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
        "20 nights in upper level hotel and lodges. Larnach Castle dinner and breakfast. Maori concert and feast, interisland ferry, Milford Sound cruise. Airport transfers. GPS, maps and tour pack included.",
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
            price: 8790,
          },
          {
            type: "Single room in peak season",
            price: 9666,
          },
          {
            type: "Double/Twin room in shoulder season",
            price: 9424,
          },
          {
            type: "Double/Twin room in peak season",
            price: 10302,
          },
        ],
        tips: selfGuidedTips,
      },
    },
  ],
};

export default tours;
