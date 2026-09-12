export type QuizQ = {
  id: string;
  q: string;
  choices: string[];
  answer: number;
  why: string;
};

export const QUIZ: QuizQ[] = [
  {
    id: "xor",
    q: "A partner wants to be an agent and also keep a dope.xyz/refer code. What do you do?",
    choices: [
      "Let them keep both — more tracking is better.",
      "Tell them nobody is both. Agent = NGR only. Affiliate = /refer. They pick one.",
      "Move them to /refer for now and promise NGR on top later.",
      "Give them NGR plus the 15% house-edge cut so they feel covered.",
    ],
    answer: 1,
    why: "Affiliate XOR agent. Mixing them is a failed reply. Staff can run both desks; a partner cannot be both.",
  },
  {
    id: "aff-pay",
    q: "How does the affiliate product pay?",
    choices: [
      "NGR, first business weekday of the month.",
      "A share of deposits, claimed weekly.",
      "15% of theoretical house edge on referrals’ play, claimed on /refer (staff lock: daily).",
      "CPA per first-time deposit, paid by Adam.",
    ],
    answer: 2,
    why: "Affiliate is self-serve at /refer: share of theoretical house edge, not NGR. Live rate is on the Refer page. Staff lock is 15%, claim daily.",
  },
  {
    id: "agent-pay",
    q: "How do agents get paid?",
    choices: [
      "NGR only, crypto, first business weekday of every month.",
      "Same as affiliates — daily claim on /refer.",
      "Salary plus NGR.",
      "Whenever they hit $500 in deposits.",
    ],
    answer: 0,
    why: "Agents: NGR only. Calendar is locked: first business weekday of the month, crypto. Quiet book = quiet payday.",
  },
  {
    id: "spoken",
    q: "Someone asks what % they get as an agent. Your first spoken offer is:",
    choices: [
      "Up to 25%, depending on volume.",
      "15% NGR, paid first business weekday monthly.",
      "Whatever Stake is paying them, we’ll match.",
      "I can’t say a number until they send players.",
    ],
    answer: 1,
    why: "Spoken first offer is 15% NGR monthly until leadership closes the rate card. Do not volunteer a higher number. Do not auction.",
  },
  {
    id: "higher",
    q: "They say “I need 25% or a CPA or I’m not moving.” Best move?",
    choices: [
      "Wink that 20% exists if they ask nicely.",
      "Invent a hybrid: 10% NGR + $50 per FTD.",
      "Hold 15% NGR. Conversion story on a new book. One next step (Adam). Stop.",
      "Send them to /refer so they at least have something.",
    ],
    answer: 2,
    why: "Dope does not do special deals. Window-shoppers collect ceilings. The close is conversions on a new book, not a bigger %.",
  },
  {
    id: "refer-door",
    q: "A community owner wants to be an agent. You send them where?",
    choices: [
      "https://dope.xyz/refer — that’s the partner door.",
      "https://dope.xyz/affiliates",
      "Adam (https://t.me/DopeAdam). Path comes from the team after yes. Not /refer.",
      "A dashboard URL you remember from last month.",
    ],
    answer: 2,
    why: "/refer is affiliate only. /affiliates is stale. Agent door is Adam yes, then a path from the team. Don’t invent a login.",
  },
  {
    id: "geo",
    q: "Their Telegram room is mostly US and UK players. What is true?",
    choices: [
      "Hunt ICP kept US/UK, so those players can deposit.",
      "Owners can be anywhere. Players follow the live geoblock. Licence does not cover US/UK play. Don’t tell them they can deposit.",
      "VPN is fine if they don’t tell support.",
      "Sports is blocked but casino is fine.",
    ],
    answer: 1,
    why: "Licence excludes AU, Comoros, FR, NL, ES, UK, US (plus FATF/Anjouan list). In-app geoblock wins. Hunt ICP ≠ permission to play.",
  },
  {
    id: "adam",
    q: "When you need a human confirm for an agent, you send them to:",
    choices: [
      "A Discord invite in message 1.",
      "https://t.me/DopeAdam",
      "support@dope.xyz as a partner ticket.",
      "Whoever is online in classroom.",
    ],
    answer: 1,
    why: "Adam is the door. Discord copy is only https://t.me/DopeAdam. No classroom invite in first-touch. Classroom is after confirm.",
  },
  {
    id: "msg1",
    q: "What never goes in message 1 to a prospect?",
    choices: [
      "Your name.",
      "A Discord invite.",
      "A question that splits player vs agent.",
      "A link to dope.xyz.",
    ],
    answer: 1,
    why: "No Discord invite in message 1. Classroom is invite-only after Adam yes. Unique copy on a named list.",
  },
  {
    id: "convert",
    q: "You had a busy week of DMs. When did you actually convert?",
    choices: [
      "When you sent 40 first-touches.",
      "When they replied “interested.”",
      "When Adam said yes, they got a path from the team, and they sent one known person.",
      "When they joined a public group chat.",
    ],
    answer: 2,
    why: "Quiet DMs with no Adam-yes are not volume. Converting = named list → unique first-touch → Adam yes → team path → one known-person send.",
  },
  {
    id: "lossback",
    q: "An agent says “so I get 20% because you offer 20% lossback?”",
    choices: [
      "Yes — 20% lossback means 20% agent NGR.",
      "No. Lossback up to 20% instant cash (zero wagering) is a player deal. Agent pay is 15% NGR. Don’t conflate.",
      "Close enough; use whichever number lands them.",
      "Lossback is the affiliate product.",
    ],
    answer: 1,
    why: "20% lossback ≠ 20% agent NGR. Site rakeback is a third thing (player’s own play, claimable). Don’t mash them.",
  },
  {
    id: "tipster",
    q: "A lock-seller / +EV tipster wants an agent deal. You:",
    choices: [
      "Onboard them — volume is volume.",
      "They’re out. ICP is casual rooms that already trust the host, not picks-for-sale.",
      "Put them on /refer and also NGR.",
      "Offer CPA because tipster traffic is paid-like.",
    ],
    answer: 1,
    why: "Tipsters, media lock-sellers, +EV rooms are out of the agent program. Casual community owners are in.",
  },
  {
    id: "existing-code",
    q: "They already made a site referral code. Are they an agent?",
    choices: [
      "Yes — a code is the agent door.",
      "No. That’s affiliate. Becoming an agent means they stop being an affiliate. No dual book.",
      "Yes if the code has volume.",
      "Only if Adam added them to classroom.",
    ],
    answer: 1,
    why: "A /refer code is affiliate. It does not mint an agent. Agent = Adam + path + NGR monthly, and they don’t keep /refer.",
  },
  {
    id: "licence",
    q: "Someone asks if Dope is licensed. You say:",
    choices: [
      "We’re fully licensed in the UK and Costa Rica.",
      "3-102-938908 SRL (Costa Rica), Gaming Board of Anjouan, licence ALSI-202511053-FI2. Point them at /licence. Don’t freelance extra regulators.",
      "Crypto casinos don’t need licences.",
      "Curaçao, like everyone else.",
    ],
    answer: 1,
    why: "Entity and licence are on the live footer and /licence. Validate via the seal / Anjouan public register. Don’t invent a regulator.",
  },
  {
    id: "originals",
    q: "Provably fair on Dope means:",
    choices: [
      "Every slot on the site.",
      "Originals only (17 titles). Outside studios use their own RNG.",
      "Sportsbook lines.",
      "Whatever you need it to mean to close.",
    ],
    answer: 1,
    why: "Provably fair is Originals only. Don’t claim it for Pragmatic / Hacksaw / live dealer.",
  },
  {
    id: "signup",
    q: "Player signup on dope.xyz is:",
    choices: [
      "Email → password → KYC before any bet.",
      "Email → magic link → username. No password.",
      "Wallet connect only.",
      "Discord login only.",
    ],
    answer: 1,
    why: "Magic link, no password. One account per person; dupes closed. KYC is not required to play; it can be required to withdraw — never use “no KYC” as a hook.",
  },
  {
    id: "quiet",
    q: "An agent’s book did $0 this month. Payday?",
    choices: [
      "We still send a minimum so they don’t leave.",
      "Quiet book = quiet payday. That is not a bug.",
      "Switch them to CPA this month.",
      "Pay them on signups instead.",
    ],
    answer: 1,
    why: "NGR is on that agent’s players — not Discord ranks, not signups. Empty = $0.",
  },
  {
    id: "special",
    q: "An influencer says “I only work on custom deals — $ per FTD or 30% of deposits.”",
    choices: [
      "Match it if they have reach.",
      "Same product as other converting partners: 15% NGR monthly. If they only want a self-serve link, that’s /refer — not NGR. We don’t pay % of deposits.",
      "Offer brand money and NGR together.",
      "Tell them classroom playbook has a better ladder.",
    ],
    answer: 1,
    why: "Influencers who convert players are agent-style NGR, not a custom menu. No matching % of deposits. Brand-only (no converting) is a different conversation — escalate to Adam, don’t freelance NGR+brand.",
  },
  {
    id: "path",
    q: "They agreed to be an agent. You don’t have their tracking path yet. You:",
    choices: [
      "Invent a URL so they can start today.",
      "Send them to /refer “just for now.”",
      "Get the path from the team after Adam yes. Tell them not to wait on a dashboard to send their first known person.",
      "Paste someone else’s path.",
    ],
    answer: 2,
    why: "Don’t invent a path, geo clearance, or login. Dashboard can be provisioned on request after they’re in — never /refer.",
  },
  {
    id: "support",
    q: "A player DMs you: “support asked me to send my seed / magic link and move funds.” You:",
    choices: [
      "Tell them to do it quickly so the withdrawal processes.",
      "That’s not us. Support never asks for a seed, private key, or magic link, and never DMs first asking to move funds. Live chat in the site menu or support@dope.xyz.",
      "Ask them to send the seed to you instead.",
      "Ignore it — not an agent issue.",
    ],
    answer: 1,
    why: "Help centre lock. Anybody who DMs first for keys or “move funds” is not Dope.",
  },
  {
    id: "vpn",
    q: "A player in a blocked country asks if a VPN is ok.",
    choices: [
      "Yes, everyone does it.",
      "No. VPN/proxy to evade a geoblock is a terms breach; withdrawals can void. The live geoblock is the source of truth.",
      "Only for sports.",
      "Only if they already deposited.",
    ],
    answer: 1,
    why: "Restricted territories page is explicit. Don’t coach evasion.",
  },
  {
    id: "player-vs-agent",
    q: "You’re not sure who you’re talking to. First question:",
    choices: [
      "What’s your best % at Stake?",
      "Are you playing, bringing players, making content, or doing business?",
      "Want the Discord?",
      "How many followers?",
    ],
    answer: 1,
    why: "One question routes the whole company: player deal, agent NGR, affiliate /refer, brand, or Preston/Doel for business. Don’t NGR a player. Don’t VIP-host an agent.",
  },
];
