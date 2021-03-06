import img1BMWR1250GS from "../images/motors/bmw-r1250-gs2.jpg";
import img1BMWR1200GS from "../images/motors/bmw-r1200-gs.jpg";
import img1BMWR1200RT from "../images/motors/bmw-r1200-rt.jpg";
import img1BMWF850GS from "../images/motors/bmw-f850gs.jpg";
// import img1BMWF750GS from "../images/motors/bmw-f750gs.jpg";
import img1BMWF700GS from "../images/motors/bmw-f700gs.jpg";
import img1HondaVT750S from "../images/motors/honda-vt750s.jpg";
import img1HondaCMX500 from "../images/motors/honda-cmx500.jpg";
import img1SuzukiDL650 from "../images/motors/suzuki-dl650.jpg";
import img1SuzukiGSF1250 from "../images/motors/suzuki-gsf1250.jpg";
import img1TriumphTiger800 from "../images/motors/triumph-tiger-800.jpg";

export const motors = {
  BMW: [
    {
      id: "bmwR1250",
      name: "BMW R1250GS",
      brief:
        "With Hard Luggage, Touring Screen and Heated Grips included and Topbox available.",
      link: "/bmw/bmw-r1250-gs",
      img1: img1BMWR1250GS,
      prices: [
        { days: "15 to 21", peak: "$319.00", shoulder: "$295.00" },
        { days: "6 to 14", peak: "$339.00", shoulder: "$315.00" },
        { days: "2 to 5", peak: "$359.00", shoulder: "$339.00" },
      ],
      specs: [
        {
          key: "Engine:",
          value:
            "Air/liquid-cooled 4-stroke flat twin engine, double overhead camshaft, one balance shaft and variable engine timing system BMW ShiftCam",
        },
        {
          key: "Bore x Stroke:",
          value: "102.5 mm x 76 mm",
        },
        { key: "Displacement:", value: "1,254 cc" },
        { key: "Rated Output:", value: "136 hp (100 kW) @ 7,750 rpm" },
        { key: "Max. Torque:", value: "105 lb-ft (143 Nm) @ 6,250 rpm" },
        { key: "Compression ratio:", value: "12.5 : 1" },
        {
          key: "Mixture Control / Engine Management:",
          value: "Electronic fuel injection with ride-by-wire throttle system",
        },
        {
          key: "Emission Control:",
          value:
            "Closed-loop 3-way catalytic converter, emission standard EU-4",
        },
        {
          key: "Clutch:",
          value: "Multiplate wet clutch, hydraulically operated",
        },
        {
          key: "Gearbox:",
          value: "Constant-mesh 6-speed gearbox with helical cut gears",
        },
        {
          key: "Drive:",
          value: "Shaft drive",
        },
        {
          key: "Frame:",
          value:
            "Two section frame, front - and bolted on rear frame, load bearing engine",
        },
        {
          key: "Front Suspension/ Travel:",
          value:
            "BMW Telelever, Ø 37 mm, central spring strut/ 8.3 in (210 mm)",
        },
        {
          key: "Rear Suspension/ Travel:",
          value:
            "Cast aluminum single-sided swing arm with BMW Paralever; WAD strut (travel-related damping), spring pre-load hydraulically adjustable (continuously variable) via handwheel, rebound damping adjustable via handwheel/ 8.7in (220 mm)",
        },
        {
          key: "Rake:",
          value: "26.3°",
        },
        {
          key: "Trail:",
          value: '4.1" (104 mm)',
        },
        {
          key: "Wheels:",
          value: "Cross spoke wheels",
        },
        {
          key: "Rim, Front:",
          value: '3.00 X 19"',
        },
        {
          key: "Rim, Rear:",
          value: '4.50 X 17"',
        },
        {
          key: "Tire, Front:",
          value: "120/70 R 19",
        },
        {
          key: "Tire, Rear:",
          value: "170/60 R 17",
        },
      ],
      descriptionHeading: "With even more drive for adventure",
      description: [
        "The new BMW R 1250 GS: concentrated performance meets impressive efficiency. With the new BMW R 1250 GS you will experience the new Boxer even more directly. The engine capacity increase brings you more performance - 136 hp and 1250 ccm. The variable camshaft control system BMW ShiftCam ensures superior power delivery – in the high and low-engine speed ranges. Whether in the city, on the motorway or, of course, off-road: every metres gives you more freedom and increases the riding pleasure. New styles and colours, numerous technical details and exciting options to individualise intensify the character of the new BMW R 1250 GS.",
      ],
    },
    {
      id: "bmwR1200GS",
      name: "BMW R1200GSW",
      brief:
        "With Hard Luggage, Touring Screen and Heated Grips included and Topbox available.",
      link: "/bmw/bmw-r1200-gs",
      img1: img1BMWR1200GS,
      prices: [
        { days: "15 to 21", peak: "$259.00", shoulder: "$235.00" },
        { days: "6 to 14", peak: "$279.00", shoulder: "$255.00" },
        { days: "2 to 5", peak: "$299.00", shoulder: "$279.00" },
      ],
      specs: [
        {
          key: "Manufacturer",
          value: "BMW",
        },
        {
          key: "Model",
          value: "R1200GSW Adventure",
        },
        {
          key: "Engine Type",
          value:
            "Four-stroke flat twin engine with balancer shaft, four valves per cylinder, double overhead camshaft, wet sump lubrication",
        },
        {
          key: "Bore x Stroke",
          value: "101 mm x 73 mm",
        },
        {
          key: "Displacement",
          value: "1,170 cc",
        },
        {
          key: "Cooling",
          value: "Air/Liquid-Cooled",
        },
        {
          key: "Compression Ratio",
          value: "12.5:1",
        },
        {
          key: "Fuel System",
          value: "Electronic fuel injection with ride-by-wire throttle system",
        },
        {
          key: "Ignition",
          value: "Electronic",
        },
        {
          key: "Starting System",
          value: "Electric",
        },
        {
          key: "Transmission",
          value: "Constant-mesh six-speed gearbox with helical cut gears",
        },
        {
          key: "Final Drive",
          value: "Chain",
        },
        {
          key: "Seat Height",
          value: '35.0" / 35.8" (850 / 870 mm), adjustable seat height',
        },
        {
          key: "Wheelbase",
          value: "59.4 in. / 1.507 mm",
        },
        {
          key: "Front Suspension",
          value: "BMW Telelever, Ø 37 mm, central spring strut",
        },
        {
          key: "Rear Suspension",
          value:
            "Cast aluminum single-sided swing arm with BMW EVO Paralever; WAD strut (travel-related damping), spring pre-load hydraulically adjustable (continuously variable) via handwheel, rebound damping adjustable via handwheel",
        },
        {
          key: "Front Brake",
          value:
            "Single disc brake, diameter 276 mm, dual-piston floating caliper",
        },
        {
          key: "Rear Brake",
          value:
            "Single disc brake, diameter 276 mm, dual-piston floating caliper",
        },
        {
          key: "Front Tire",
          value: "120/70 R 19",
        },
        {
          key: "Rear Tire",
          value: "170/60 R 17",
        },
        {
          key: "Fuel Capacity",
          value: "7.9 gal./ 29.9 litres",
        },
        {
          key: "Dry Weight",
          value: "573 lbs. (Wet) / 260 kgs",
        },
      ],
      descriptionHeading:
        "Unique, dynamic, and superior – these are also the hallmarks of the design presented by the new R 1200 GSW.",
      description: [
        "The BMW R 1200 GSW is a living legend. For 32 years the GS models have been molding the segment of travel enduros. They set engineering standards and have proven to be trusty companions on every riding adventure. BMW Motorrad is writing a new chapter in its story of success and taking the R 1200 GSW into a new era.",
        "Start them young with this super cool, authentically styled 6 volt electric BMW R 1200 GSW. The bike plays realistic sounds and has a maximum speed of 4km. This bike also has two supporting stabilizer wheels to keep it upright and rubber strip on the rear tyre for grip.",
      ],
    },
    {
      id: "bmwR1200RT",
      name: "BMW R1200RTW",
      brief:
        "With Hard Luggage, Touring Screen and Heated Grips included and Topbox available.",
      link: "/bmw/bmw-r1200-rt",
      img1: img1BMWR1200RT,
      prices: [
        { days: "15 to 21", peak: "$259.00", shoulder: "$235.00" },
        { days: "6 to 14", peak: "$279.00", shoulder: "$255.00" },
        { days: "2 to 5", peak: "$299.00", shoulder: "$279.00" },
      ],
      specs: [
        {
          key: "Engine Type",
          value: "Flat Twin",
        },
        {
          key: "Cylinders",
          value: "2",
        },
        {
          key: "Engine Stroke",
          value: "4-Stroke",
        },
        {
          key: "Cooling",
          value: "Liquid / Air",
        },
        {
          key: "Valves",
          value: "8",
        },
        {
          key: "Valves Per Cylinder",
          value: "4",
        },
        {
          key: "Valve Configuration",
          value: "DOHC",
        },
        {
          key: "Compression Ratio",
          value: "12.5:1",
        },
        {
          key: "Starter",
          value: "Electric",
        },
        {
          key: "Fuel Requirements",
          value: "Premium",
        },
        {
          key: "Fuel Type",
          value: "Gas",
        },
        {
          key: "Transmission Type",
          value: "Manual",
        },
        {
          key: "Number Of Speeds",
          value: "6",
        },
        {
          key: "Primary Drive (Rear Wheel)",
          value: "Shaft",
        },
        {
          key: "Front Tire (Full Spec)",
          value: "120/70 ZR17",
        },
        {
          key: "Rear Tire (Full Spec)",
          value: "180/55 ZR17",
        },
        {
          key: "Front Brake Type",
          value: "Dual Hydraulic Disc",
        },
        {
          key: "Rear Brake Type",
          value: "Hydraulic Disc",
        },
        {
          key: "Wheelbase (in/mm)",
          value: "58.5 / 1485",
        },
        {
          key: "Fuel Capacity (gal/l)",
          value: "6.6 / 25",
        },
      ],
      descriptionHeading: "Endless riding pleasure.",
      description: [
        "As far as 2-cylinder fans are concerned, first-class touring has a memorable abbreviation - and it’s been around for 30 years: RT. For long-haul travellers there can hardly be any other term which has always stood for perfectly conceived motorcycling concept from start to finish: excellent wind and weather protection, optimum ergonomics, highly convenient operation combined with a top-class chassis fitted with the unique optional extras ASC and ESA II*. In the touring segment, these features probably define the ultimate benchmark of innovation. Even though the R 1200 RT cuts a superb figure everywhere with its dynamic new design, everything about it sends out the message: built to cover thousands of miles, preferably in one go.",
        "Then there is this fascinating mixture of distinctive engine and big bike dynamics. The characteristic “boxer” supremacy has been further enhanced in the current version: the engine’s crowning glory is now the radial DOHC** valve operating system from the HP2 Sport, though here designed for greater torque and without any loss of running smoothness: maximum torque 120 Nm, at 6000 rpm, rated output still at 81 kW (110 bhp). This means a tangible increase in thrust from the lower engine speed range through to above the medium range. The new valve control in the exhaust system ensures a discreet but more dynamic sound.",
        "And in terms of comfort, the bike boasts a new audio system available as an optional extra, with the innovative operating concept Multi-Controller carrying out virtually all commands from a single unit. So there’s only one thing you have to do yourself - drop by for a test ride.",
      ],
    },
    {
      id: "bmwF850GS",
      name: "BMW F850GS",
      brief: "With Hard Luggage & Touring Screen included.",
      link: "/bmw/bmw-f850-gs",
      img1: img1BMWF850GS,
      prices: [
        { days: "15 to 21", peak: "$219.00", shoulder: "$199.00" },
        { days: "6 to 14", peak: "$239.00", shoulder: "$225.00" },
        { days: "2 to 5", peak: "$259.00", shoulder: "$239.00" },
      ],
      specs: [
        {
          key: "Engine Type",
          value:
            "Liquid-cooled, two-cylinder, DOHC, four valves per cylinder, and dry sump lubrication",
        },
        {
          key: "Compression",
          value: "12.7/1",
        },
        {
          key: "Rake",
          value: "28 degrees",
        },
        {
          key: "Seat height",
          value:
            "32.1 - 35 inches (depending on seat and suspension configuration)",
        },
        {
          key: "Tank capacity",
          value: "4 gallons",
        },
        {
          key: "Trail",
          value: "4.9 inches",
        },
        {
          key: "Front suspension",
          value: "43 mm inverted fork",
        },
        {
          key: "Wet weight (claimed)",
          value: "504 pounds",
        },
        {
          key: "Wheelbase",
          value: "62.7 inches",
        },
        {
          key: "Torque (claimed)",
          value: "63 foot-pounds @ 6,250 rpm",
        },
        {
          key: "Suspension travel front/rear",
          value: "8 inches / 8.6 inches",
        },
        {
          key: "Bore x stroke",
          value: "84 mm x 77 mm",
        },
        {
          key: "Displacement",
          value: "853 cc",
        },
        {
          key: "Power (claimed)",
          value: "90 horsepower @ 8,000 rpm",
        },
        {
          key: "Tires front/rear",
          value:
            "90/90-21 Continental TKC 80; 150/70-17 Continental TKC 80 (as tested)",
        },
        {
          key: "Rear suspension",
          value:
            "Directly mounted WAD shock with hydraulic preload and rebound, optional Dynamic ESA shock",
        },
        {
          key: "Rear brake",
          value: "One-piston caliper",
        },
        {
          key: "Transmission",
          value: "Six-speed",
        },
        {
          key: "Front brake",
          value: "Two-piston, Brembo calipers",
        },
      ],
      descriptionHeading:
        "The unknown is exactly what tantalises you to get up, get out and go. Far, far away!",
      description: [
        "And not just on paved roads. With the BMW F 850 GS Adventure, you'll conquer new terrain, be ready for new adventures and be ready to ride – wher-ever you go. This travel enduro is made for real explorers. For people who think no destination is too far and no distance too remote. Experience the world with a companion that's so reliable, robust and powerful that it can even keep up with your curiosity. Introducing the new F 850 GS Adventure.",
      ],
    },
    // {
    //   id: "bmwF750GS",
    //   name: "BMW F750GS",
    //   brief: "With Hard Luggage & Touring Screen included.",
    //   link: "/bmw/bmw-f750-gs",
    //   img1: img1BMWF750GS,
    //   prices: [
    //     { days: "15 to 21", peak: "$195.00", shoulder: "$179.00" },
    //     { days: "6 to 14", peak: "$209.00", shoulder: "$195.00" },
    //     { days: "2 to 5", peak: "$219.00", shoulder: "$209.00" },
    //   ],
    //   specs: [
    //     {
    //       key: "Year introduced",
    //       value: "2018",
    //     },
    //     {
    //       key: "Max power",
    //       value: "76 bhp",
    //     },
    //     {
    //       key: "Max torque",
    //       value: "62 ft-lb",
    //     },
    //     {
    //       key: "Top speed",
    //       value: "135 mph",
    //     },
    //     {
    //       key: "Engine size",
    //       value: "853cc",
    //     },
    //     {
    //       key: "Engine type",
    //       value: "Liquid-cooled, 8v, parallel twin",
    //     },
    //     {
    //       key: "Frame type",
    //       value: "Steel bridge-type",
    //     },
    //     {
    //       key: "Fuel capacity",
    //       value: "15 litres",
    //     },
    //     {
    //       key: "Seat height",
    //       value: "815mm",
    //     },
    //     {
    //       key: "Bike weight",
    //       value: "224kg",
    //     },
    //     {
    //       key: "Front suspension",
    //       value: "41mm non-adjustable forks",
    //     },
    //     {
    //       key: "Rear suspension",
    //       value:
    //         "Single rear shock, adjustable for preload and rebound damping",
    //     },
    //     {
    //       key: "Front brake",
    //       value: "2 x 305mm discs with Brembo four-piston caliper",
    //     },
    //     {
    //       key: "Rear brake",
    //       value: "265mm single disc with single-piston caliper",
    //     },
    //     {
    //       key: "Front tyre size",
    //       value: "110/80 x 19",
    //     },
    //     {
    //       key: "Rear tyre size",
    //       value: "150/70 x 17",
    //     },
    //   ],
    //   descriptionHeading: "THE BEGINNING OF SOMETHING NEW.",
    //   description: [
    //     "The BMW F 750 GS is your ticket to adventure. With this balanced Enduro all-rounder, you can master all paths and expand your horizons. The F 750 GS gives you more power, more comfort, more spirit of GS. Feel the strong-charactered engine and enjoy the ease of handling of the F 750 GS. While you're off discovering the world, you have the bike safely under control with the Automatic Stability Control (ASC) and ABS. With the additional option Connectivity, the 6.5 inch TFT-display boasts many features including navigation and smartphone connectivity.",
    //     "From the slim rear to the striking front tank right up to the typical GS 'beak', the design elements of the F 750 GS personify the GS genes. The flyline is unmistakable and original. With the view on the front, the new LED headlamps and original. From the front view, the LED headlamps are particularly striking.",
    //   ],
    // },
    {
      id: "bmwF700GS",
      name: "BMW F700GS",
      brief:
        "With Hard Luggage & Touring Screen included. For the F700GS we can also offer low suspension and/or low seat.",
      link: "/bmw/bmw-f700-gs",
      img1: img1BMWF700GS,
      prices: [
        { days: "15 to 21", peak: "$175.00", shoulder: "$145.00" },
        { days: "6 to 14", peak: "$185.00", shoulder: "$165.00" },
        { days: "2 to 5", peak: "$195.00", shoulder: "$179.00" },
      ],
      specs: [
        {
          key: "Engine Type",
          value: "Parallel Twin",
        },
        {
          key: "Cylinders",
          value: "2",
        },
        {
          key: "Engine Stroke",
          value: "4-Stroke",
        },
        {
          key: "Cooling",
          value: "Liquid",
        },
        {
          key: "Valves Per Cylinder",
          value: "V4",
        },
        {
          key: "Valve Configuration",
          value: "DOHC",
        },
        {
          key: "Compression Ratio",
          value: "12.0:1",
        },
        {
          key: "Starter",
          value: "Electric",
        },
        {
          key: "Fuel Requirements",
          value: "Premium",
        },
        {
          key: "Transmission Type",
          value: "Manual",
        },
        {
          key: "Number Of Speeds",
          value: "6",
        },
        {
          key: "Primary Drive (Rear Wheel)",
          value: "Chain",
        },
        {
          key: "Front Tire (Full Spec)",
          value: "110/80 R19 59H",
        },
        {
          key: "Rear Tire (Full Spec)",
          value: "140/80 R17 69H",
        },
        {
          key: "Front Brake Type",
          value: "Dual Hydraulic Disc",
        },
        {
          key: "Rear Brake Type",
          value: "Hydraulic Disc",
        },
      ],
      descriptionHeading:
        "Carefree motorcycling fun for everyone! With the F 700 GS – the direct successor to the F 650 GS.",
      description: [
        "A shorter gear transmission ratio in the 75 bhp engine enhances agility while at the same time guaranteeing the bike's familiar top-class handling. This makes the F 700 GS an ideal all-round machine within the GS family, suitable for every kind of rider – no matter how experienced.",
        "What was good has just got better: with ABS as standard* and ESA, not to mention ASC as an option, the ride is not just safer but also offers especially high comfort. Low weight, reduced seat height and a lowering option make the F 700 GS a perfect all-round enduro bike especially for female riders.",
        "GS feeling everywhere: the design of the windshield and dial faces and the smoke-tinted turn indicators and LED rear light give the F 700 GS the grown-up look it deserves.",
        "As usual, there is once again a wide range of options and special accessories for the F 700 GS to allow you to tailor your BMW to your individual preferences.",
        "The F 700 GS. GS feeling everywhere.",
      ],
    },
  ],
  Honda: [
    {
      id: "hondaVT750S",
      name: "Honda VT750S",
      brief: "With Screen & Hard side luggage available.",
      link: "/honda/honda-vt750s",
      img1: img1HondaVT750S,
      prices: [
        { days: "15 to 21", peak: "$165.00", shoulder: "$155.00" },
        { days: "6 to 14", peak: "$175.00", shoulder: "$159.00" },
        { days: "2 to 5", peak: "$185.00", shoulder: "$175.00" },
      ],
      specs: [
        {
          key: "Engine Type",
          value: "Liquid-cooled 4 stroke 6-valve SOHC V-twin",
        },
        {
          key: "CC Rating",
          value: "745cc",
        },
        {
          key: "Bore and Stroke",
          value: "79x76mm",
        },
        {
          key: "Ignition",
          value: "Fully transistorised electronic",
        },
        {
          key: "Carburetion",
          value: "PGM-FI electric fuel injection with automatic choke",
        },
        {
          key: "Compression Ratio",
          value: "9.6:1",
        },
        {
          key: "Suspension Front",
          value: "41mm telescopic fork; 118mm axle travel",
        },
        {
          key: "Suspension Rear",
          value:
            "Dual conventional dampers with 5-step adjustable spring pre-load, 90mm axle travel",
        },
        {
          key: "Brakes Front",
          value:
            "296mm hydraulic disc with dual-piston calliper and sintered metal pads",
        },
        {
          key: "Brakes Rear",
          value: "180mm leading/trailing drum",
        },
        {
          key: "Tyres Front",
          value: "100/90 - 19",
        },
        {
          key: "Tyres Rear",
          value: "150/80 - 16",
        },
        {
          key: "Wheelbase",
          value: "1,560mm",
        },
        {
          key: "Seat Height",
          value: "750mm",
        },
        {
          key: "GroundClearance",
          value: "155mm",
        },
        {
          key: "Trail",
          value: "134mm",
        },
        {
          key: "Kerb Weight",
          value: "232kg",
        },
        {
          key: "Dimensions",
          value: "2,285mm(L) x 870mm(W) x 1,135mm(H)",
        },
      ],
      descriptionHeading:
        "Feel freedom brush against your face. The VT750S Cruiser is a bike that appreciates the beauty of riding.",
      description: [
        "It won’t rush you with a forward riding position- it will sit you back so you can welcome the world with wide-open arms. The VT750S is a modest middleweight, relaxed ride.",
        "Reminiscent of the classic American desert-highway Cruisers, this bike has a confident upright riding position and a style that stands apart. Perfect for someone with a short in-step, its big front wheel gives it a light feel despite weighing 233kg. It also has a distinctive Cruiser deep rumble that resonates from its fuel-injected, water-cooled V-twin engine. Combine all these traits together with Honda’s tried and true technology, and you have yourself one ‘confidence-inspiring’ ride. So what are you waiting for?",
      ],
    },
    {
      id: "hondaCMX500",
      name: "Honda CMX500 Rebel",
      brief: "With hard side luggage included.",
      link: "/honda/honda-cmx500",
      img1: img1HondaCMX500,
      prices: [
        { days: "15 to 21", peak: "$139.00", shoulder: "$109.00" },
        { days: "6 to 14", peak: "$159.00", shoulder: "$139.00" },
        { days: "2 to 5", peak: "$169.00", shoulder: "$159.00" },
      ],
      specs: [
        {
          key: "Engine Type",
          value: "Liquid-cooled DOHC parallel-twin 4-stroke",
        },
        {
          key: "Fuel Capacity:",
          value: "11.2 Litres",
        },
        {
          key: "Ground Clearance:",
          value: "136 mm",
        },
        {
          key: "CC Rating:",
          value: "475 cc",
        },
        {
          key: "Transmission:",
          value: "6 Speed",
        },
        {
          key: "Seat Height:",
          value: "690 mm",
        },
        {
          key: "Ignition Type:",
          value:
            "Computer-controlled digital transistorised with electronic advance",
        },
      ],
      descriptionHeading:
        "Raw, aggressive styling and a narrow, sexy frame. Everything you need and nothing you don’t, the Rebel comes loaded with attitude from fender to fender.",
      description: [
        "Blacked-out and stripped down quality components around a rising fuel tank deliver its signature aggressive stance and a fat tyre provides a powerful presence.",
        "A low seat with wide handlebars and an 11.2L fuel tank boasting an aviation styled fuel cap. Its tractor-style seat and aggressively positioned handlebars provide a relaxed sitting position that conveys confidence and control.",
        "From its severely sloped tank to the seat, the Rebel delivers edginess, yet gives the rider a comfortable narrow riding stance. And, the rear loop suspension and pipework says Rebel in no uncertain terms. The black-cast aluminium rear frame and tubed swingarm with the rear metal fender delivers a customised feel to the rear view.",
        "Assert yourself on the road with the blacked-out engine and narrow frame. Everything about the Rebel expresses its heritage, from the intake and exhaust valves to the valve timing. And, from low rpm’s driving a gentle growl to its high-revving roar, the thrill feels like no other. Experience the animal pulsing, heart-racing of the Rebel.",
      ],
    },
  ],
  Suzuki: [
    {
      id: "suzukiDL650",
      name: "Suzuki DL650 V-Storm",
      brief:
        "With hard Side luggage included and top box available.Lowering Links can be fitted for $50 per rental.",
      link: "/suzuki/suzuki-dl650",
      img1: img1SuzukiDL650,
      prices: [
        { days: "15 to 21", peak: "$139.00", shoulder: "$109.00" },
        { days: "6 to 14", peak: "$159.00", shoulder: "$139.00" },
        { days: "2 to 5", peak: "$169.00", shoulder: "$159.00" },
      ],
      specs: [
        {
          key: "Engine",
          value: "90° V-twin, 4-stroke, DOHC, liquid-cooled",
        },
        {
          key: "Starter",
          value: "Electric",
        },
        {
          key: "Transmission",
          value: "6-Speed constant mesh",
        },
        {
          key: "Front Suspension",
          value: "43mm Telescopic forks with adjustable spring preload",
        },
        {
          key: "Rear Suspension",
          value: "Link type, with adjustable rebound and spring preload",
        },
        {
          key: "Front Brakes",
          value: "Tokico twin-piston calipers, dual floating 310mm discs, ABS",
        },
        {
          key: "Rear Brakes",
          value: "Nissin single-piston caliper, 260mm disc with ABS",
        },
        {
          key: "Fuel Capacity",
          value: "20L",
        },
        {
          key: "Seat Height",
          value: "835 MM",
        },
        {
          key: "Wet Weight",
          value: "215 KG",
        },
        {
          key: "Wheelbase",
          value: "1560 MM",
        },
      ],
      descriptionHeading:
        "Renowned for its versatility, reliability and value.",
      description: [
        "The V-Strom 650 has attracted many riders who use it for touring, commuting, or a fun ride when the spirit moves them. It is a touchstone motorcycle balanced with a natural riding position, comfortable seat and a flexible engine character that produces stress-free riding during brief daily use or a high-mile adventure. Adventure bikes are definitely a thing, and aren’t showing any sign of going away anytime soon, and Suzuki’s V-Strom (Deutsch for stream) is definitely one of the major players advancing the cause, as it were. A couple of years ago, Suzuki made the decision to drop the V-Strom 650 Adventure, and focus its energies on the base model 650 and 650XT. The result is palpable with a number of improvements for the 2017 model year that will likely endear these rides to their fans even more. This year we have more power, plus a traction control system to help manage said power as well as some nifty aesthetic tweaks and more, so join me while I take a look at what the factory has in store for us.",
      ],
    },
    {
      id: "suzukiGSF1250",
      name: "Suzuki GSF1250",
      brief: "With hard Side luggage included and top box available.",
      link: "/suzuki/suzuki-gsf1250",
      img1: img1SuzukiGSF1250,
      prices: [
        { days: "15 to 21", peak: "$165.00", shoulder: "$155.00" },
        { days: "6 to 14", peak: "$175.00", shoulder: "$159.00" },
        { days: "2 to 5", peak: "$185.00", shoulder: "$175.00" },
      ],
      specs: [
        {
          key: "Bore x Stroke:",
          value: "79.0mm x 64.0mm",
        },
        {
          key: "Displacement",
          value: "1255cc",
        },
        {
          key: "Compression Ratio",
          value: "10.5:1",
        },
        {
          key: "Fuelling",
          value: "Fuel Injected",
        },
        {
          key: "Ignition",
          value: "Electronic",
        },
        {
          key: "Lubrication",
          value: "Wet Sump",
        },
        {
          key: "Transmission",
          value: "6-speed",
        },
        {
          key: "Rake / Trail",
          value: "25.2 degrees / 104mm",
        },
        {
          key: "Suspension Front",
          value:
            "43mm telescopic forks, coil spring, oil damped, adjustable preload",
        },
        {
          key: "Suspension Rear",
          value:
            "Swing-arm, link type, coil spring, oil damped, adjustable preload",
        },
        {
          key: "Wheels Front",
          value: "17M/C x MT3.50",
        },
        {
          key: "Wheels Front",
          value: "17M/C x MT3.50",
        },
        {
          key: "Wheels Rear:",
          value: "17M/C x MT5.50",
        },
        {
          key: "Brakes Front:",
          value: "Double Disc Brake",
        },
        {
          key: "Brakes Rear:",
          value: "Disc Brake",
        },
        {
          key: "Tyres Front:",
          value: "120/70ZR17",
        },
        {
          key: "Tyres Rear",
          value: "180/55ZR17",
        },
        {
          key: "Wheelbase",
          value: "1,480mm",
        },
      ],
      descriptionHeading: "A machine that truly owns the highway.",
      description: [
        "Introduced in 2007 as a replacement for the long running 1200 Bandit, the 1250 has a liquid-cooled engine and produces almost identical horsepower to the old air/oil-cooled unit.",
        "The new engine meets Euro-3 emissions, but more importantly produces its maximum torque of 108nm at just 3750rpm. This makes the new model an awful lot quicker in real World riding, especially overtaking, now without the need to rev the machine to its limit.",
        "The new six-speed bandit is fuel injected and has a more relaxed power delivery with a broad spread of torque throughout its rev range. The engine is designed specifically for this model and is a delight in all areas.",
      ],
    },
  ],
  Triumph: [
    {
      id: "triumphTiger800",
      name: "Triumph Tiger 800",
      brief:
        "With hard Side luggage included and top box available.Lowering Links can be fitted for $50 per rental.",
      link: "/triumph/triumph-tiger-800",
      img1: img1TriumphTiger800,
      prices: [
        { days: "15 to 21", peak: "$185.00", shoulder: "$169.00" },
        { days: "6 to 14", peak: "$195.00", shoulder: "$179.00" },
        { days: "2 to 5", peak: "$209.00", shoulder: "$195.00" },
      ],
      specs: [
        {
          key: "ENGINE",
          value: "Liquid-cooled, 12-valve, DOHC, inline-3",
        },
        {
          key: "DISPLACEMENT",
          value: "800cc",
        },
        {
          key: "BORE & STROKE",
          value: "74.1 x 61.9mm",
        },
        {
          key: "FUEL DELIVERY",
          value: "EFI",
        },
        {
          key: "EXHAUST",
          value: "Stainless, 3-into-1",
        },
        {
          key: "FINAL DRIVE",
          value: "O-ring chain",
        },
        {
          key: "CLUTCH",
          value: "Wet, multiplate",
        },
        {
          key: "GEARBOX",
          value: "Six-speed",
        },
        {
          key: "OIL CAPACITY",
          value: "3.7 quarts",
        },
        {
          key: "FRAME",
          value: "Tubular-steel trellis frame",
        },
        {
          key: "SWINGARM",
          value: "Twin-sided, cast aluminum",
        },
        {
          key: "FRONT WHEEL",
          value: "21 x 2.5 in., spoked",
        },
        {
          key: "REAR WHEEL",
          value: "17 x 4.25 in. spoked",
        },
        {
          key: "FRONT TIRE",
          value: "90/90-21",
        },
        {
          key: "REAR TIRE",
          value: "150/70-17",
        },
        {
          key: "FRONT SUSPENSION",
          value:
            "WP 43mm inverted fork, adj rebound and compression damping, 8.7 in. travel",
        },
        {
          key: "REAR SUSPENSION",
          value:
            "WP monoshock, hydraulically adjustable preload, rebound damping adjustment, 8.5 in. travel",
        },
        {
          key: "FRONT BRAKES",
          value:
            "Dual 308mm floating discs, Nissin 2-piston sliding calipers, ABS",
        },
        {
          key: "REAR BRAKES",
          value: "Single 255mm disc, Nissin single-piston sliding caliper, ABS",
        },
        {
          key: "CLAIMED WET WEIGHT",
          value: "481 lb. / 218 kgs",
        },
      ],
      descriptionHeading:
        "Whatever the road, whatever the distance, whatever the challenge, the new Tiger 800 range has been built to excel.",
      description: [
        "Featuring a host of rider focused technology such as the standard fitment of Triumph Traction Control and ABS, the latest Tiger with its powerful and fuel efficient 95PS triple engine is up for any task.",
        "Delivering a seamless flow of torque across the rev range, the Tiger 800 is as perfectly suited to long distance rides as it is to tackling the tough stuff. The second generation 800cc engine now features a ride-by-wire throttle system which provides smoother power delivery, better response, and lower emissions. The result is a 17% improvement in fuel efficiency that coupled with the capacious 19l fuel tank means you can ride longer.",
      ],
    },
  ],
};
