export type Door =
  | "player"
  | "agent"
  | "affiliate"
  | "out"
  | "brand"
  | "escalate";

export const DOORS: { id: Door; label: string; hint: string }[] = [
  {
    id: "player",
    label: "Player",
    hint: "They want to play. Player deal / VIP host. Not Agent Room.",
  },
  {
    id: "agent",
    label: "Agent (NGR)",
    hint: "They already host people. 15% NGR monthly. Adam yes. Not /refer.",
  },
  {
    id: "affiliate",
    label: "Affiliate (/refer)",
    hint: "Self-serve link, house edge, no partner desk. Not NGR.",
  },
  {
    id: "out",
    label: "Out",
    hint: "Tipster, +EV, lock-seller, rate shopper with no room.",
  },
  {
    id: "brand",
    label: "Brand only",
    hint: "Creator who will not convert players. Not your NGR close. Adam.",
  },
  {
    id: "escalate",
    label: "Escalate (business)",
    hint: "Invest / operate / providers. Preston / Doel. Don’t NGR them.",
  },
];

export type Case = {
  id: string;
  who: string;
  line: string;
  answer: Door;
  why: string;
};

export const CASES: Case[] = [
  {
    id: "bj-host",
    who: "Discord blackjack host, 400 casuals, they already play wherever he sits.",
    line: "I can move my table if the deal is real.",
    answer: "agent",
    why: "Core ICP. Independent community owner. Casual game. People trust them. Agent NGR.",
  },
  {
    id: "just-play",
    who: "High-wager slots player DMing you after a race post.",
    line: "I already have Diamond on another site. Can I get matched?",
    answer: "player",
    why: "They want to play. VIP match is a player deal via the team/Adam. Do not onboard as an agent. Do not send Agent Room.",
  },
  {
    id: "code",
    who: "Someone who already opened /refer and generated a code.",
    line: "Do I also get the agent cut on this?",
    answer: "affiliate",
    why: "They already chose affiliate. A code does not mint an agent. To become an agent they stop being an affiliate.",
  },
  {
    id: "locks",
    who: "Telegram channel that sells daily locks and “+EV slips.”",
    line: "I can dump 2k clickers on your code this week.",
    answer: "out",
    why: "Tipster / lock-seller / +EV. Not the agent program.",
  },
  {
    id: "kick-slots",
    who: "Kick slots streamer. Chat already gambles on stream.",
    line: "I’ll overlay Dope if you make it worth posting.",
    answer: "agent",
    why: "Casino-space creator who can convert is agent-style NGR (Adam’s influencer NGR desk). Same 15%, not a custom overlay fee unless Adam says brand-only.",
  },
  {
    id: "fitness",
    who: "Fitness creator, 200k on IG, never posted gambling.",
    line: "I don’t want my people gambling. I just want a brand fee for a story.",
    answer: "brand",
    why: "Brand only, not converting. Not NGR. Not /refer unless they insist affiliate. Take to Adam — don’t close it yourself on NGR.",
  },
  {
    id: "provider",
    who: "Someone claiming they can get you a slots studio contract.",
    line: "Let’s partner on the business, not players.",
    answer: "escalate",
    why: "Business / providers. Preston / Doel. Not an agent conversation.",
  },
  {
    id: "uk-player",
    who: "UK resident who wants to deposit tonight.",
    line: "Just tell me the coin and I’ll VPN.",
    answer: "player",
    why: "Still a player — and you still don’t let them play. Licence excludes UK. No VPN coaching. Live geoblock wins. Be honest, don’t convert them to agent to dodge geo.",
  },
  {
    id: "shopper",
    who: "No room, no list, hops houses asking for 40% NGR.",
    line: "What’s your best number if I maybe post?",
    answer: "out",
    why: "Window-shopper with no community. Don’t auction. Don’t brochure  tools. Stop.",
  },
  {
    id: "sub",
    who: "Confirmed agent asking if their friend who hosts roulette can join.",
    line: "Can I put him under me?",
    answer: "agent",
    why: "Still an agent conversation — but sub-agents are last, after their own book is live. Don’t invent a sub-% . Adam / the team. Don’t send the friend to /refer.",
  },
];
