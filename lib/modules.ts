export type ModuleId =
  | "brief"
  | "history"
  | "split"
  | "agents"
  | "players"
  | "site"
  | "objections"
  | "drill"
  | "quiz";

export const MODULES: {
  id: ModuleId;
  href: string;
  num: string;
  title: string;
  time: string;
  blurb: string;
}[] = [
  {
    id: "brief",
    href: "/",
    num: "00",
    title: "Weekend brief",
    time: "5 min",
    blurb: "What done looks like, and the rules of this homework.",
  },
  {
    id: "history",
    href: "/history",
    num: "01",
    title: "How this industry actually pays",
    time: "25 min",
    blurb: "GGR, NGR, CPA, saturation — why 10% on a new book beats a shopped ceiling.",
  },
  {
    id: "split",
    href: "/split",
    num: "02",
    title: "Three doors, never mixed",
    time: "15 min",
    blurb: "Player / agent / affiliate. One question. XOR.",
  },
  {
    id: "agents",
    href: "/agents",
    num: "03",
    title: "Find, speak, onboard agents",
    time: "25 min",
    blurb: "Community owners and converting influencers. NGR only.",
  },
  {
    id: "players",
    href: "/players",
    num: "04",
    title: "Find, speak, onboard players",
    time: "20 min",
    blurb: "A different conversation. Different room. Different deal.",
  },
  {
    id: "site",
    href: "/site",
    num: "05",
    title: "Walk dope.xyz",
    time: "25 min",
    blurb: "Live site, not memory. Licence, geo, rewards, originals, refer.",
  },
  {
    id: "objections",
    href: "/objections",
    num: "06",
    title: "NGR objection gym",
    time: "30 min",
    blurb: "Everyone who wants to work with Dope can be onboarded on NGR. Staff never reveal a higher tier.",
  },
  {
    id: "drill",
    href: "/drill",
    num: "07",
    title: "Classify the person",
    time: "15 min",
    blurb: "Ten live-feeling cases. Pick the door before you talk.",
  },
  {
    id: "quiz",
    href: "/quiz",
    num: "08",
    title: "Pass the floor test",
    time: "20 min",
    blurb: "22 questions. 100% to pass. Same gate as the hire track.",
  },
];

export const ADAM = "https://t.me/DopeAdam";
export const SITE = "https://dope.xyz";
export const REFER = "https://dope.xyz/refer";
export const LICENCE = "https://dope.xyz/licence";
export const RESTRICTED = "https://dope.xyz/restricted-territories";
export const HELP = "https://dope.xyz/help";
export const UPDATES = "https://t.me/DopeUpdates";
export const X = "https://x.com/dopexyz";
export const SUPPORT = "mailto:support@dope.xyz";
export const VIP_MAIL = "mailto:vip@dope.xyz";
export const ANJOUAN =
  "https://anjouangaming.com/public-register/verify-a-licence/";

export const LICENCE_NO = "ALSI-202511053-FI2";
export const ENTITY = "3-102-938908 SRL";
export const LICENCE_WINDOW = "30 November 2025 – 29 November 2026";

export const EXCLUDED = [
  "Australia",
  "Comoros",
  "France",
  "Netherlands",
  "Spain",
  "United Kingdom",
  "United States",
];

export const ORIGINALS = [
  "Baccarat",
  "Blackjack",
  "Coinflip",
  "Crash",
  "Cross the Road",
  "Diamonds",
  "Dice",
  "Dragon's Tower",
  "HiLo",
  "Keno",
  "Limbo",
  "Mines",
  "Plinko",
  "Roulette",
  "Wheel",
  "Video Poker",
  "Slider",
];
