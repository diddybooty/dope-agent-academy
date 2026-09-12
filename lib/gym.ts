export type GymQ = {
  id: string;
  they: string;
  setup?: string;
  choices: { t: string; ok: boolean; why: string }[];
};

export const GYM: GymQ[] = [
  {
    id: "stake-more",
    they: "Stake already pays me more.",
    setup: "Community owner. Real room. Not a window-shopper — they actually host.",
    choices: [
      {
        t: "We’ll beat it. What number do you need?",
        ok: false,
        why: "Auction. Now they know we bid. The floor will hear.",
      },
      {
        t: "You’re comparing a % on a book your people already have accounts on. New book is the conversion. 15% NGR monthly on players who actually move. If you want to work with Dope, that’s the deal.",
        ok: true,
        why: "Repeat the worry, split the math, hold the offer, one next step later.",
      },
      {
        t: "Our dashboard and sports limits make up the difference.",
        ok: false,
        why: "Don’t brochure tools to shoppers. Don’t invent limits.",
      },
    ],
  },
  {
    id: "cpa",
    they: "I only work CPA. $150 a deposit or I’m not sending.",
    choices: [
      {
        t: "Adam can probably do $100 if the geo is clean.",
        ok: false,
        why: "Dope agents are NGR only. Don’t freelance CPA.",
      },
      {
        t: "That’s a different product. Dope agents are 15% NGR on their players, paid first business weekday monthly. If you want a self-serve link and no partner desk, that’s /refer — house edge, not CPA, and you would not also be an agent.",
        ok: true,
        why: "Name both doors honestly. Don’t mash them. Don’t invent CPA.",
      },
      {
        t: "Hybrid: $50 CPA plus 10% NGR.",
        ok: false,
        why: "Special deal. We don’t do that.",
      },
    ],
  },
  {
    id: "deposits",
    they: "Pay me 10% of deposits. That’s cleaner than NGR.",
    choices: [
      {
        t: "NGR is the product. Deposits aren’t revenue — players can withdraw. 15% NGR monthly is the offer.",
        ok: true,
        why: "Teach the industry without blinking. Deposits ≠ house win.",
      },
      {
        t: "10% of deposits is close enough, I’ll ask for an exception.",
        ok: false,
        why: "You’re now their broker against Dope. Don’t.",
      },
      {
        t: "We can do deposits for the first 30 days then NGR.",
        ok: false,
        why: "A side deal with a sunset still trains them to shop.",
      },
    ],
  },
  {
    id: "other-guy",
    they: "You gave someone 25%. I want that or I walk.",
    choices: [
      {
        t: "That’s not how this house works. Same offer for everyone who wants to work with Dope: 15% NGR, monthly. I don’t match rumours.",
        ok: true,
        why: "Kill the rumor mill. One honest offer.",
      },
      {
        t: "I can’t confirm 25% but I can ask Adam to match if you send 50 players first.",
        ok: false,
        why: "You just confirmed a hidden ladder exists.",
      },
      {
        t: "Classroom has the real numbers — I’ll drop an invite.",
        ok: false,
        why: "No invite in a shop. Classroom is after confirm. Don’t send window-shoppers to playbook.",
      },
    ],
  },
  {
    id: "grab-link",
    they: "I’ll just grab a link on the site.",
    choices: [
      {
        t: "That’s the affiliate product — /refer, house edge, self-serve. If you want to be an agent (NGR, your people, partner desk), you don’t keep /refer. Nobody is both. Which job do you want?",
        ok: true,
        why: "Split the product. Let them choose. Don’t trick an affiliate into thinking they’re an agent.",
      },
      {
        t: "Perfect, start there and we’ll flip you to NGR later.",
        ok: false,
        why: "Dual book / bait-and-switch. Don’t.",
      },
      {
        t: "Don’t use /refer, I’ll send you someone else’s path.",
        ok: false,
        why: "Never share another agent’s path.",
      },
    ],
  },
  {
    id: "dashboard",
    they: "I need a dashboard login before I send anyone.",
    choices: [
      {
        t: "Here’s a URL I used last month, try admin/admin.",
        ok: false,
        why: "Never invent logins or fake screenshots.",
      },
      {
        t: "Use /refer, it has stats.",
        ok: false,
        why: "/refer is not the agent dashboard.",
      },
      {
        t: "We set tracking up for agents after Adam yes. Don’t wait on a dashboard to send the first known person. Stats come — the book starts when they play.",
        ok: true,
        why: "Fulfill after they’re in. Don’t let a login be the gate.",
      },
    ],
  },
  {
    id: "wont-move",
    they: "My people won’t move. They’re all on another book.",
    choices: [
      {
        t: "Then we need a bigger % to bribe them.",
        ok: false,
        why: "Players don’t move for the host’s %. They move because the host is still their host, on a book they don’t already have.",
      },
      {
        t: "You’re saying they already have accounts. That’s why a new book converts and a saturated one doesn’t. You keep the relationship. VIP transfer for people who already have rank. First send is one person who asked — not a blast.",
        ok: true,
        why: "Yield order: people they already host → 1:1 who asked → one honest room post. Not spam.",
      },
      {
        t: "Spam the room tonight and we’ll see.",
        ok: false,
        why: "Burns the room. They should never look like an ad.",
      },
    ],
  },
  {
    id: "us-room",
    they: "Most of my room is US. We’re good, right?",
    choices: [
      {
        t: "Hunt kept US/UK so yes, send them.",
        ok: false,
        why: "Hunt ICP is not deposit permission.",
      },
      {
        t: "You can sit anywhere. Your players follow the live geoblock. Licence does not cover US/UK (also AU, FR, NL, ES, …). I will not tell you they can deposit. If you’re unsure on a geo, we ask Adam — we don’t guess.",
        ok: true,
        why: "Owners ≠ players. In-app geoblock wins. VPN to evade is a terms breach.",
      },
      {
        t: "VPN and we’re fine.",
        ok: false,
        why: "Coaching evasion. Withdrawals can void.",
      },
    ],
  },
  {
    id: "contract",
    they: "I need a contract and your company papers before I post.",
    choices: [
      {
        t: "We’re 3-102-938908 SRL, Anjouan licence ALSI-202511053-FI2 — that’s on dope.xyz/licence. I don’t invent extra legal. Adam handles paper after yes.",
        ok: true,
        why: "Point at the live licence. Don’t guess a company name. Don’t fake a PDF.",
      },
      {
        t: "We’re UKGC, I’ll send a scan.",
        ok: false,
        why: "False regulator. Instant fire.",
      },
      {
        t: "Crypto houses don’t do contracts.",
        ok: false,
        why: "Don’t freelance legal. Escalate.",
      },
    ],
  },
  {
    id: "influencer",
    they: "I’m an influencer. I don’t do the same deal as some Telegram admin.",
    choices: [
      {
        t: "Fair. What number makes you post?",
        ok: false,
        why: "Special deal. The rumor mill starts with you.",
      },
      {
        t: "If you’re converting players, you’re on the same product: 15% NGR monthly. Reach doesn’t change the math. If this is brand-only and you won’t convert, that’s a different conversation — I take that to Adam, I don’t invent a media rate.",
        ok: true,
        why: "Adam owns influencer NGR. Same NGR product for converters. Brand-only is not your close.",
      },
      {
        t: "We’ll do NGR plus a posting fee plus /refer.",
        ok: false,
        why: "Stacked products. Nobody is both, and you just wrote a custom menu.",
      },
    ],
  },
  {
    id: "proof",
    they: "Show me a whale month or I’m not signing.",
    choices: [
      {
        t: "Here’s a PNG of someone else’s dashboard.",
        ok: false,
        why: "Fake proof. Never.",
      },
      {
        t: "Proof is Adam confirm, a team chat, first payday. Site is dope.xyz. I don’t send other people’s books or whale slides.",
        ok: true,
        why: "Straight. No APY, no $50k slides, no “beats every casino.”",
      },
      {
        t: "We’re basically Stake staff.",
        ok: false,
        why: "Lie. Don’t.",
      },
    ],
  },
  {
    id: "sports",
    they: "I need $50k sports limits or my VIP won’t come.",
    choices: [
      {
        t: "Yes, $50k is standard.",
        ok: false,
        why: "Don’t invent a limit number.",
      },
      {
        t: "Sports is live. Higher limits are for a named player, set by the team. I don’t quote a number. Tell me who, Adam/the team sets it.",
        ok: true,
        why: "Fulfill on request for agents. Don’t brochure a menu.",
      },
      {
        t: "Sports isn’t shipped yet.",
        ok: false,
        why: "Stale. Sportsbook is in nav.",
      },
    ],
  },
  {
    id: "both",
    they: "Keep me on /refer and also pay NGR. Easy.",
    choices: [
      {
        t: "Nobody is both. Pick: affiliate (house edge, /refer) or agent (NGR, monthly, Adam). If you already made a code, that’s affiliate until you stop.",
        ok: true,
        why: "XOR. Repeat until they choose.",
      },
      {
        t: "Sure, more ways to get paid.",
        ok: false,
        why: "Failed reply. Dual book.",
      },
      {
        t: "We’ll run /refer in the player’s name and NGR in yours.",
        ok: false,
        why: "Still both. Also messy attribution.",
      },
    ],
  },
  {
    id: "quiet-bump",
    they: "(they went quiet after saying yes in principle)",
    choices: [
      {
        t: "One bump, new words, useful. Then stop. No guilt.",
        ok: true,
        why: "Copy lock: one bump, then stop.",
      },
      {
        t: "Daily follow-ups until they answer. Volume is a numbers game.",
        ok: false,
        why: "Neediness. Burns the name.",
      },
      {
        t: "Drop a classroom invite so they feel in.",
        ok: false,
        why: "Invite is not a bump. Classroom after confirm.",
      },
    ],
  },
  {
    id: "idk",
    they: "Can my NL players play? What about France?",
    choices: [
      {
        t: "Everyone’s fine if they’re on Telegram.",
        ok: false,
        why: "NL and FR are named excluded territories.",
      },
      {
        t: "Licence does not cover France or the Netherlands. The app tells you if play is blocked. I don’t guess geos. Unsure on a specific person → Adam.",
        ok: true,
        why: "Named exclusions + live geoblock. “I don’t know, I’ll get it” beats a vibe.",
      },
      {
        t: "If the deposit goes through it’s legal.",
        ok: false,
        why: "Don’t coach “if it works.”",
      },
    ],
  },
];
