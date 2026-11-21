export const BUSINESS_DATA = {
  name: "Harsha Washing Machine Service Centre",
  shortName: "Harsha Washing Machine",
  tagline: "Your Washing Machine, Our Service...",
  secondaryTagline: "Fast & Reliable Washing Machine Repair in Hyderabad",
  experienceYears: "8+",
  phone: "+91 8465801935",
  phoneRaw: "918465801935",
  phoneDisplay: "8465801935",
  whatsappUrl: "https://wa.me/918465801935",
  googleBusinessProfile: "https://share.google/35dnnYKnuFz8zOqgN",
  location: "Hyderabad, Telangana, India",
  serviceArea: "Hyderabad — All Areas",
  workingHours: "8:00 AM - 9:00 PM (Everyday)",
  pricing: {
    visitingCharges: 350,
    generalService: 600,
    currency: "₹",
    disclaimer: "Additional repairs and spare parts, if required, are quoted separately after inspection. Final repair pricing depends on the appliance issue and parts required. Please confirm applicable charges when booking."
  },
  highlights: [
    { title: "Doorstep Service", desc: "Fast service coordination directly at your home across Hyderabad" },
    { title: "Expert Technicians", desc: "Skilled professionals diagnosing electronic and mechanical faults" },
    { title: "Genuine Spare Parts", desc: "Quality-grade replacement components suitable for your model" },
    { title: "Fast & Reliable", desc: "Quick appointment response and punctual doorstep support" },
    { title: "All Brands & Models", desc: "Comprehensive repair solutions for front-load, top-load & semi-automatic" }
  ],
  brands: [
    { name: "Samsung", logoText: "SAMSUNG", color: "#034EA2" },
    { name: "LG", logoText: "LG", color: "#A50034" },
    { name: "Whirlpool", logoText: "Whirlpool", color: "#E09900" },
    { name: "Haier", logoText: "Haier", color: "#005AAB" },
    { name: "IFB", logoText: "IFB", color: "#ED1C24" },
    { name: "Panasonic", logoText: "Panasonic", color: "#004098" },
    { name: "Bosch", logoText: "BOSCH", color: "#E20015" },
    { name: "Godrej", logoText: "Godrej", color: "#9B2782" },
    { name: "Voltas", logoText: "VOLTAS", color: "#005F9E" },
    { name: "Hitachi", logoText: "HITACHI", color: "#DE0000" }
  ],
  services: [
    {
      id: "front-load",
      title: "Front Load Washing Machine Repair",
      type: "Front Load",
      description: "Complete diagnostic and repair solutions for all major front-load washing machines with operational and drum performance checks.",
      badge: "High Efficiency Models",
      issues: [
        "Drum rotation failure & bearing noise",
        "Water leakage from front door gasket",
        "Drainage pump blockage & water stagnation",
        "Heavy vibration during high-speed spin cycle",
        "Door lock latch sensor malfunction",
        "PCB motherboard & error code diagnostics"
      ]
    },
    {
      id: "top-load",
      title: "Top Load Washing Machine Repair",
      type: "Top Load",
      description: "Expert troubleshooting for top-load fully automatic machines, addressing spin cycles, water inlet valves, and pulsator mechanisms.",
      badge: "Fully Automatic",
      issues: [
        "Spin cycle failure & unbalance errors",
        "Continuous water filling / inlet valve leak",
        "Drain motor not engaging properly",
        "Agitator / pulsator loose or stopped",
        "Water level sensor (pressure switch) faults",
        "Lid switch sensor and display errors"
      ]
    },
    {
      id: "semi-automatic",
      title: "Semi-Automatic Washing Machine Repair",
      type: "Semi-Automatic",
      description: "Dedicated repair services for twin-tub semi-automatic washers, fixing wash motors, spin tub capacitors, and manual drainage valves.",
      badge: "Twin Tub Specialist",
      issues: [
        "Spin tub motor not spinning or slow",
        "Wash tub motor humming without rotating",
        "Water draining continuously from wash tub",
        "Mechanical wash & spin timer failure",
        "Capacitor, belt, and wiring issues",
        "Brake and spin lid safety switch faults"
      ]
    },
    {
      id: "fully-automatic",
      title: "Fully Automatic Washing Machine Repair",
      type: "Fully Automatic",
      description: "Comprehensive diagnostic support for advanced inverter and non-inverter fully automatic washing machines across all brands.",
      badge: "Smart & Inverter Tech",
      issues: [
        "Control panel unresponsive or blank",
        "Direct Drive / Inverter motor fault codes",
        "Cycle hanging or stopping mid-wash",
        "Internal water heating sensor errors",
        "Power fluctuations and relay failures",
        "Suspension rod damping wear & tear"
      ]
    },
    {
      id: "general-service",
      title: "General Washing Machine Service",
      type: "Maintenance",
      description: "Thorough multi-point health check, descaling, drum cleaning, filter cleansing, and operational inspection to keep your washer running smoothly.",
      badge: "₹600 Flat Service",
      issues: [
        "Tub descaling and lint filter thorough clean",
        "Inlet valve mesh & hose leak inspection",
        "Drum alignment and suspension rod check",
        "Electrical wiring and grounding safety test",
        "Drain pipe cleaning to prevent bad odor",
        "Overall spin and wash performance check"
      ]
    },
    {
      id: "motor-drainage",
      title: "Motor & Drainage Parts Repair",
      type: "Component Level",
      description: "Specialized repair and replacement of spin motors, wash motors, drain pumps, capacitors, belts, and inlet solenoids.",
      badge: "Genuine Spare Parts",
      issues: [
        "Spin motor rewiring or replacement",
        "Drain pump motor replacement",
        "Gearbox and transmission replacement",
        "Capacitor and drive belt installation",
        "Pressure sensor & inlet valve replacement",
        "Water seal and bearing replacement"
      ]
    }
  ],
  commonProblems: [
    {
      id: "not-starting",
      title: "Washing Machine Not Starting",
      shortDesc: "Machine fails to power on or begin the selected cycle after pressing the start button.",
      whatsappQuery: "My washing machine is not starting or powering on."
    },
    {
      id: "not-spinning",
      title: "Washing Machine Not Spinning",
      shortDesc: "Drum remains stagnant during the spin cycle or emits humming vibrations without rotation.",
      whatsappQuery: "My washing machine is not spinning during the cycle."
    },
    {
      id: "water-leakage",
      title: "Water Leakage",
      shortDesc: "Puddles forming beneath the unit or water dripping from the door, hose, or detergent drawer.",
      whatsappQuery: "My washing machine has a water leakage issue."
    },
    {
      id: "water-not-draining",
      title: "Water Not Draining",
      shortDesc: "Soapy water remains trapped inside the drum at the conclusion of the wash cycle.",
      whatsappQuery: "My washing machine is not draining water."
    },
    {
      id: "making-noise",
      title: "Washing Machine Making Noise",
      shortDesc: "Grinding, squeaking, or loud clanking noises during washing or high-speed spinning.",
      whatsappQuery: "My washing machine is making loud abnormal noise."
    },
    {
      id: "not-filling-water",
      title: "Washing Machine Not Filling Water",
      shortDesc: "Water fails to enter the tub, or machine fills extremely slowly despite active water pressure.",
      whatsappQuery: "My washing machine is not filling water."
    },
    {
      id: "drum-not-rotating",
      title: "Drum Not Rotating",
      shortDesc: "Motor runs but the drum or pulsator does not turn, or belt slipped from the pulley.",
      whatsappQuery: "The drum inside my washing machine is not rotating."
    },
    {
      id: "excessive-vibration",
      title: "Excessive Vibration & Shaking",
      shortDesc: "Machine moves across the floor, violently thumps, or vibrates violently during spin.",
      whatsappQuery: "My washing machine is vibrating and shaking excessively."
    },
    {
      id: "error-codes",
      title: "Showing Error Codes",
      shortDesc: "Digital display shows error code symbols (e.g., 4E, 5E, dE, OE, UE, IE, E1, E2) and beeps.",
      whatsappQuery: "My washing machine display is flashing an error code."
    },
    {
      id: "stopping-mid-cycle",
      title: "Stopping Mid-Cycle",
      shortDesc: "Wash cycle abruptly stops before completion, pauses indefinitely, or resets randomly.",
      whatsappQuery: "My washing machine stops mid-cycle before finishing."
    },
    {
      id: "door-not-locking",
      title: "Door or Lid Not Locking",
      shortDesc: "Front door latch fails to engage, or top lid sensor triggers a door-open warning error.",
      whatsappQuery: "The door or lid on my washing machine is not locking."
    },
    {
      id: "motor-issues",
      title: "Motor or Spin Motor Issues",
      shortDesc: "Motor overheating, burning smell, burning capacitor, or weak torque on heavy loads.",
      whatsappQuery: "My washing machine has motor / spin motor issues."
    }
  ],
  whyChooseUs: [
    {
      id: "experience",
      number: "01",
      title: "8+ Years of Experience",
      desc: "Proven track record diagnosing and repairing complex mechanical, electrical, and electronic faults across all washing machine types in Hyderabad."
    },
    {
      id: "doorstep",
      number: "02",
      title: "Doorstep Service Support",
      desc: "Convenient doorstep technician visits directly to your home or apartment anywhere across Hyderabad without having to transport your appliance."
    },
    {
      id: "all-brands",
      number: "03",
      title: "All Major Brands Handled",
      desc: "Expert service capabilities for Samsung, LG, Whirlpool, Haier, IFB, Bosch, Panasonic, Godrej, Voltas, Hitachi, and more."
    },
    {
      id: "technicians",
      number: "04",
      title: "Experienced Technicians",
      desc: "Professional diagnostic skills with honest evaluation of what needs servicing or replacement to get your machine running like new."
    },
    {
      id: "parts",
      number: "05",
      title: "Genuine Spare Parts",
      desc: "We focus on suitable, quality-tested replacement parts including motors, pumps, belts, valves, capacitors, and sensors."
    },
    {
      id: "transparent",
      number: "06",
      title: "Customer-Focused Support",
      desc: "Direct communication via phone and WhatsApp with transparent advice, upfront visiting charges (₹350), and general service pricing (₹600)."
    }
  ],
  steps: [
    {
      step: "01",
      title: "Contact Us",
      desc: "Call 8465801935 or reach out via WhatsApp with your washing machine issue."
    },
    {
      step: "02",
      title: "Share Your Problem",
      desc: "Provide the brand, machine type (front/top/semi), and the symptoms or error codes."
    },
    {
      step: "03",
      title: "Schedule a Technician",
      desc: "Coordinate a convenient doorstep service visit time slot for your Hyderabad location."
    },
    {
      step: "04",
      title: "Get Your Machine Serviced",
      desc: "Our technician diagnoses the fault on-site and restores your machine with proper repair."
    }
  ],
  localities: [
    "Miyapur", "Kukatpally", "KPHB", "Chandanagar", "Kondapur", "Gachibowli",
    "Madhapur", "HITEC City", "Manikonda", "Nizampet", "Bachupally", "Secunderabad",
    "Ameerpet", "Begumpet", "Mehdipatnam", "Attapur", "LB Nagar", "Dilsukhnagar",
    "Uppal", "Banjara Hills", "Jubilee Hills", "Pragathi Nagar", "Alwal", "Malkajgiri",
    "Tarnaka", "Habsiguda", "Nagole", "Tolichowki", "Lingampally", "All Hyderabad Areas"
  ],
  faqs: [
    {
      q: "Do you provide doorstep washing machine repair in Hyderabad?",
      a: "Yes! Doorstep service is offered across all residential areas, apartments, and gated communities throughout Hyderabad. Contact us to confirm technician availability in your specific locality."
    },
    {
      q: "Which washing machine brands do you repair?",
      a: "We provide multi-brand repair services for all major brands, including Samsung, LG, Whirlpool, Haier, IFB, Bosch, Panasonic, Godrej, Voltas, and Hitachi, as well as other domestic models."
    },
    {
      q: "Do you repair both front-load and top-load washing machines?",
      a: "Yes, we service front-load, top-load, semi-automatic twin tub, and fully automatic washing machines of all drum capacities."
    },
    {
      q: "What are the visiting charges?",
      a: "The advertised visiting inspection charge is ₹350. Please confirm applicable charges before scheduling."
    },
    {
      q: "What are your general service charges?",
      a: "The advertised general service charge is ₹600. It covers thorough inspection, tub descaling, filter cleaning, and overall maintenance. Specific repairs and replacement spare parts are quoted separately after inspection."
    },
    {
      q: "How can I book a technician?",
      a: "You can book easily by calling or sending a WhatsApp message to +91 8465801935. You can also use the quick booking form on this website to generate an instant WhatsApp request."
    },
    {
      q: "Do you replace washing machine spare parts?",
      a: "Yes, genuine and suitable spare-part replacement is available depending on the diagnosed fault and part availability for your specific brand and model."
    },
    {
      q: "How much experience do you have?",
      a: "Harsha Washing Machine Service Centre has 8+ years of hands-on technical experience in diagnosing and repairing domestic washing machines in Hyderabad."
    },
    {
      q: "Do you repair spin motors and drain motors?",
      a: "Yes, washing machine spin motor rewiring/replacement, wash motor repair, drain pump motor replacement, and related electrical component repairs are key services we provide."
    },
    {
      q: "Do you provide emergency repair?",
      a: "We strive to attend to urgent washing machine breakdowns as promptly as possible. Please call +91 8465801935 directly to confirm immediate appointment availability for your area."
    }
  ]
};

export function buildWhatsAppLink(problem?: string, brand?: string, type?: string, locality?: string, name?: string) {
  let message = `Hello Harsha Washing Machine Service Centre, I need washing machine repair service in Hyderabad.`;
  if (name) message += `\nName: ${name}`;
  if (brand) message += `\nBrand: ${brand}`;
  if (type) message += `\nType: ${type}`;
  if (locality) message += `\nArea/Locality: ${locality}`;
  if (problem) message += `\nProblem: ${problem}`;
  message += `\nPlease help me book a technician visit.`;
  return `https://wa.me/${BUSINESS_DATA.phoneRaw}?text=${encodeURIComponent(message)}`;
}
