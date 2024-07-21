import { timingSafeEqual } from "crypto";
import { title } from "process";

// NAVIGATION
export const NAV_LINKS = [
  { href: "/", key: "home", label: "Home" },
  { href: "/", key: "how_hilink_work", label: "How Hilink Work?" },
  { href: "/", key: "services", label: "Services" },
  { href: "/", key: "pricing ", label: "Pricing " },
  { href: "/", key: "contact_us", label: "Contact Us" },
];

// HERO SECTION
export const HERO = {
  title: "Putuk Truno Camp Area",
  description:
    "We want to be on each of your journeys seeking the satisfaction of seeing the incorruptible beauty of nature. We can help you on an adventure around the world in just one app",
  rating: "198k",
  ratingDescription: "Excellent Reviews",
  buttonTitle: "Download App",
  linkTitle: "How we work?",
  locationInfo: {
    titleLable: "Location",
    title: "Aguas Calientes",
    distanceLabel: "Distance",
    distance: "173.28 mi",
    elevationLabel: "Elevation",
    elevation: "2.040 km",
  },
};

// CAMP SECTION
export const CAMP = {
  details: {
    titleAccent: "Feeling Lost",
    title: "And Not Knowing The Way?",
    description:
      "Starting from the anxiety of the climbers when visiting a new climbing location, the possibility of getting lost is very large. That's why we are here for those of you who want to start an adventure",
  },
  camps: [
    {
      title: "Putuk Truno Camp",
      subtitle: "Prigen, Pasuruan",
      people: {
        joined: "50+ Joined",
        url: [
          "/person-1.png",
          "/person-2.png",
          "/person-3.png",
          "/person-4.png",
        ],
      },
    },
    {
      title: "Mountain View Camp",
      subtitle: "Somewhere in the Wilderness",
      people: {
        joined: "50+ Joined",
        url: [
          "/person-1.png",
          "/person-2.png",
          "/person-3.png",
          "/person-4.png",
        ],
      },
    },
  ],
};

// GUIDE SECTION

export const GUIDE = {
  subtitle: "We are here for you",
  title: "Guide You to Easy Path",
  description:
    "Only with the hilink application you will no longer get lost and get lost again, because we already support offline maps when there is no internet connection in the field. Invite your friends, relatives and friends to have fun in the wilderness through the valley and reach the top of the mountain",
  points: {
    startLabel: "Start track",
    startTitle: "Wonorejo Pasuruan",
    finishLabel: "Destination",
    finishTitle: "Aguas Calientes",
    duration: "48 min",
  },
};

// FEATURES SECTION
export const FEATURES = {
  title: "Our Features",
  features: [
    {
      title: "Real maps can be offline",
      icon: "/map.svg",
      variant: "orange",
      description:
        "We provide a solution for you to be able to use our application when climbing, yes offline maps you can use at any time there is no signal at the location",
    },
    {
      title: "Set an adventure schedule",
      icon: "/calendar.svg",
      variant: "green",
      description:
        "Schedule an adventure with friends. On holidays, there are many interesting offers from Hilink. That way, there's no more discussion",
    },
    {
      title: "Technology using augment reality",
      icon: "/tech.svg",
      variant: "green",
      description:
        "Technology uses augmented reality as a guide to your hiking trail in the forest to the top of the mountain. Already supported by the latest technology without an internet connection",
    },
    {
      title: "Many new locations every month",
      icon: "/location.svg",
      variant: "orange",
      description:
        "Lots of new locations every month, because we have a worldwide community of climbers who share their best experiences with climbing",
    },
  ],
};

//GET APP SECTION

export const GET_APP = {
  title: "Get for free now!",
  description: "Available on iOS and Android",
  buttons: {
    apple: {
      title: "App Store",
      icon: "/apple.svg",
      variant: "btn_white",
    },
    android: {
      title: "Play Store",
      icon: "/android.svg",
      variant: "btn_dark_green_outline",
    },
  },
};

// FOOTER SECTION
export const FOOTER_LINKS = [
  {
    title: "Learn More",
    links: [
      "About Hilink",
      "Press Releases",
      "Environment",
      "Jobs",
      "Privacy Policy",
      "Contact Us",
    ],
  },
  {
    title: "Our Community",
    links: ["Climbing xixixi", "Hiking hilink", "Hilink kinthill"],
  },
];

export const FOOTER_CONTACT_INFO = {
  title: "Contact Us",
  links: [
    { label: "Admin Officer", value: "123-456-7890" },
    { label: "Email Officer", value: "hilink@akinthil.com" },
  ],
};

export const SOCIALS = {
  title: "Social",
  links: [
    "/facebook.svg",
    "/instagram.svg",
    "/twitter.svg",
    "/youtube.svg",
    "/wordpress.svg",
  ],
};

export const COPYRIGHT = {
  title: "Hilink | All rights reserved",
};
