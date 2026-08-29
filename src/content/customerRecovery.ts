export const customerRecoveryContent = {
  hero: {
    eyebrow: "Customer Recovery",
    headline: "Bring back customers who've quietly stopped coming.",
    body: [
      "You've already done the hard work of earning their business.",
      "We'll help identify customers who are overdue or have stopped booking, reach them with a targeted recovery campaign, and measure what comes back.",
    ],
    priceLine: "Customer Recovery Campaign — $299",
    subline: "Free first-time setup · Up to 1,000 SMS segments · $299 Recovery Guarantee · No monthly commitment",
    cta: "Start My Recovery Campaign",
  },

  problem: {
    headline: "Do you know how many customers your salon quietly loses every 60–90 days?",
    body: [
      "Every grooming salon loses customers.",
      "Some forget to rebook.",
      "Some stretch their grooming schedule.",
      "Some have an experience they never tell you about.",
      "And some simply stop coming.",
      "The problem is that many salons don't know who they're losing until they're already gone.",
    ],
    closing: ["Your next customers may already be sitting in your database.", "We'll help you find them."],
  },

  proof: {
    headline: "Nearly 1 in 3 customers contacted booked.",
    intro:
      "Across five real grooming salon recovery campaigns where booking response was consistently tracked:",
    stats: [
      { value: "246", label: "Customer Contacts" },
      { value: "79", label: "Recorded Bookings" },
      { value: "32.1%", label: "Recorded Booking Response Rate" },
    ],
    note: "Individual campaigns produced recorded booking response rates ranging from 17.4% to 48.6%.",
    closing: "Sometimes the customers you need aren't new customers. They're customers you've already earned.",
  },

  campaigns: {
    headline: "Real Customer Recovery Campaign Results",
    items: [
      { name: "Campaign 01", contacted: "101", bookings: "35", revenue: "$1,158", multiple: "3.9×" },
      { name: "Campaign 02", contacted: "37", bookings: "18", revenue: "$842", multiple: "2.8×" },
      { name: "Campaign 03", contacted: "21", bookings: "7", revenue: "$340", multiple: "1.1×" },
      { name: "Campaign 04", contacted: "64", bookings: "15", revenue: "$810", multiple: "2.7×" },
      { name: "Campaign 05", contacted: "23", bookings: "4", revenue: "$423", multiple: "1.4×" },
      { name: "Campaign 06", contacted: "14", bookings: null as string | null, revenue: "$580", multiple: "1.9×" },
      { name: "Campaign 07", contacted: "13", bookings: null, revenue: "$135", multiple: "0.5×" },
      { name: "Campaign 08", contacted: "8", bookings: null, revenue: "$60", multiple: "0.2×" },
      { name: "Campaign 09", contacted: "11", bookings: null, revenue: "$95", multiple: "0.3×" },
    ],
    multipleLabel: "Revenue vs. a $299 Campaign Fee",
    closing: [
      "Not every campaign performs the same.",
      "And we don't think you should take all the risk while we prove we can bring your customers back.",
      "That's why your campaign comes with our Recovery Guarantee.",
    ],
  },

  guarantee: {
    headline: "The $299 Recovery Guarantee",
    subheadline: "We expect your campaign to at least pay for itself.",
    body: [
      "Your Customer Recovery Campaign is designed to generate at least $299 in qualifying booked grooming revenue within 14 days of the campaign being sent.",
      "If it doesn't, we'll run your next Customer Recovery Campaign with no management fee.",
    ],
    points: ["$299 campaign.", "$299 booked-revenue target.", "If we miss it, the next campaign's management fee is on us."],
    cta: "Start My Recovery Campaign",
  },

  math: {
    headline: "How many customers need to come back?",
    intro: ["Probably fewer than you think.", "If your average grooming appointment is:"],
    rows: [
      { price: "$60 appointment", result: "5 customers ≈ $300" },
      { price: "$75 appointment", result: "4 customers = $300" },
      { price: "$100 appointment", result: "3 customers = $300" },
      { price: "$150 appointment", result: "2 customers = $300" },
    ],
    closing: [
      "And that's only their first appointment back.",
      "If a recovered customer gets back onto their normal grooming schedule, the value of recovering that relationship can continue long after the campaign ends.",
    ],
  },

  includes: {
    headline: "What your $299 campaign includes",
    intro: "Every Customer Recovery Campaign includes:",
    items: [
      "Customer data analysis",
      "Data cleaning",
      "Identification of overdue and lapsed customers",
      "Customer segmentation",
      "Campaign targeting",
      "Campaign messaging",
      "Campaign execution",
      "Up to 1,000 SMS segments",
      "Customer recovery tracking",
      "Booked revenue tracking",
      "Campaign performance reporting",
    ],
    closing: ["Your first campaign also includes setup for free.", "There is no additional setup fee."],
  },

  howItWorks: {
    headline: "How it works",
    steps: [
      {
        number: "01",
        title: "Check Eligibility",
        body: [
          "Before you pay, tell us what appointment and POS system your salon uses.",
          "We'll make sure we can reliably access the customer and appointment information required to run your campaign.",
          "You don't pay until we confirm you're eligible.",
        ],
      },
      {
        number: "02",
        title: "We Set Everything Up",
        body: [
          "Your first campaign includes setup at no additional cost.",
          "We establish the process for receiving your customer data, map the information we need, clean the initial data, and establish your campaign pipeline.",
          "You don't need to figure out the technical details. That's our job.",
        ],
      },
      {
        number: "03",
        title: "We Find Customers Worth Recovering",
        body: [
          "We analyze your customer history and identify appropriate customers who are overdue or appear to have stopped coming.",
        ],
      },
      {
        number: "04",
        title: "We Bring Them Back",
        body: [
          "We create and execute targeted SMS outreach designed to get those customers back onto your calendar.",
          "Up to 1,000 SMS segments are included.",
        ],
      },
      {
        number: "05",
        title: "You See What Came Back",
        body: [
          "A customer qualifies toward your campaign when they receive the campaign and book within the 14-day attribution window.",
          "Their actual grooming appointment can happen later.",
          "At the end, we keep the reporting simple:",
        ],
        flow: ["Customers Contacted", "Customers Recovered", "Booked Revenue", "Revenue vs. Campaign Fee"],
      },
    ],
  },

  pricing: {
    headline: "$299. No monthly commitment.",
    body: [
      "Your first-time setup is free.",
      "Every Customer Recovery Campaign is $299.",
      "Run one. See what comes back. Run another when you're ready.",
      "And if you eventually decide you don't want customer retention on your plate at all, talk to us about managing it continuously.",
    ],
    cta: "Start My Recovery Campaign",
  },

  crossSell: {
    headline: "Customer recovery isn't what you need help with?",
    body: [
      "No problem.",
      "What would you give your clone?",
      "Maybe it's your website. Maybe it's your team. Maybe it's your numbers. Maybe it's operations.",
      "Maybe you don't even know what the solution is yet.",
      "Tell us where you need the most support.",
      "We'll help you figure out how to get it done — or take it off your plate entirely.",
    ],
    cta: "Work With Pawformance",
  },
};
