import {
  ANJOUAN,
  ENTITY,
  EXCLUDED,
  HELP,
  LICENCE,
  LICENCE_NO,
  LICENCE_WINDOW,
  ORIGINALS,
  SITE,
} from "@/lib/modules";
import { MarkDone } from "@/components/MarkDone";
import { Scavenger } from "@/components/Scavenger";

export default function Page() {
  return (
    <article className="prose">
      <p className="kicker">05 · dope.xyz</p>
      <h1>Walk the live site</h1>
      <p className="lede">
        Help-centre 200s and old maps lie. If you quote the product, you walked
        it. Rebuild is current. Don’t use the August staging map.
      </p>

      <h2>What it is</h2>
      <p>
        <a href={SITE} target="_blank" rel="noreferrer">
          dope.xyz
        </a>{" "}
        — crypto casino and sportsbook. 18+. Play responsibly. Built around
        Originals. Instant rakeback. VIP rank match. Monthly race. Public
        bankroll.
      </p>

      <h2>Map</h2>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Job</th>
              <th>URL</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Lobby</td>
              <td>
                <a href={SITE} target="_blank" rel="noreferrer">
                  /
                </a>
              </td>
            </tr>
            <tr>
              <td>Originals</td>
              <td>
                <a href={`${SITE}/casino/originals`} target="_blank" rel="noreferrer">
                  /casino/originals
                </a>
              </td>
            </tr>
            <tr>
              <td>Slots / live / tables / game shows</td>
              <td>/casino/slots · /casino/live-casino · /casino/table-games · /casino/game-shows</td>
            </tr>
            <tr>
              <td>Sportsbook</td>
              <td>
                <a href={`${SITE}/sports`} target="_blank" rel="noreferrer">
                  /sports
                </a>
              </td>
            </tr>
            <tr>
              <td>Rewards / VIP / race</td>
              <td>/rewards · /vip · /promotions/monthly-race</td>
            </tr>
            <tr>
              <td>Refer & Earn (affiliate only)</td>
              <td>
                <a href={`${SITE}/refer`} target="_blank" rel="noreferrer">
                  /refer
                </a>
              </td>
            </tr>
            <tr>
              <td>Bankroll (don’t quote a cached USD total)</td>
              <td>/bankroll</td>
            </tr>
            <tr>
              <td>Help / about / legal</td>
              <td>
                <a href={HELP} target="_blank" rel="noreferrer">
                  /help
                </a>{" "}
                · /about · /licence · /restricted-territories · /terms
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Wallet is inside the logged-in app (Wallet → Deposit). Not a public
        /deposit URL to memorize.
      </p>

      <h2>Originals (provably fair — these only)</h2>
      <p>{ORIGINALS.join(" · ")}</p>
      <p>
        Outside studios (Pragmatic, Hacksaw, Nolimit, BGaming, live dealer) use
        their own RNG. Don’t claim provably fair for them. Don’t use old slugs
        like cooked/trader.
      </p>

      <h2>Rewards (player-facing, live help)</h2>
      <ul>
        <li>
          Instant rakeback: a slice of house edge on everything they bet, win or
          lose. Claim per bankroll. Lands as real balance. Rate climbs with VIP
          tier. Fun-mode earns nothing.
        </li>
        <li>
          VIP ladder (live): Unranked → Iron → Bronze → Silver → Gold →
          Platinum → Diamond → Obsidian → Elite, by XP from play. Rank-up
          bonuses, weekly (Monday), monthly (1st), milestones. Silver+ reload
          multiplier. Gold: priority support. Platinum: dedicated host.
          Diamond+: events / tailored.
        </li>
        <li>
          Wager contribution toward VIP (help): slots / Originals / live casino
          100%; table games 10%; sportsbook 2%. Don’t invent other weights.
        </li>
        <li>Monthly Race = highest wager that month, not highest profit.</li>
        <li>Rank transfer exists. Team/Adam decides. Don’t promise a rank.</li>
      </ul>
      <div className="note">
        <strong>Stale — do not repeat</strong>
        /affiliates · “sports unshipped” · “two Originals” · Tequity/Cooked-only
        · “legal footer is [Company name]” · quoting a bankroll USD total you
        remember.
      </div>

      <h2>Licence and geo</h2>
      <p>
        Operator: <strong>{ENTITY}</strong>, Costa Rica, registration
        3-102-938908. Licence: Gaming Board of Anjouan, Union of Comoros,{" "}
        <strong>{LICENCE_NO}</strong>, {LICENCE_WINDOW}. Registered site:
        dope.xyz.
      </p>
      <p>
        Validate: footer seal,{" "}
        <a href={LICENCE} target="_blank" rel="noreferrer">
          /licence
        </a>
        , or{" "}
        <a href={ANJOUAN} target="_blank" rel="noreferrer">
          Anjouan public register
        </a>
        . Don’t freelance extra regulators.
      </p>
      <p>
        Licence does not cover play in: {EXCLUDED.join(", ")}, FATF-blacklisted /
        sanctioned, plus anything Anjouan excludes. The live geoblock can block{" "}
        <em>more</em>. In-app result wins. VPN/proxy to evade = terms breach;
        withdrawals can void.
      </p>
      <div className="never">
        <strong>Hunt vs play</strong>
        Community owners can be anywhere. Telling a UK or US player they can
        deposit because “we kept US/UK on the hunt list” is a failed reply.
        Unsure → Adam, don’t guess.
      </div>

      <h2>Signup, money, support</h2>
      <ul>
        <li>Email → magic link → username. No password. One account per person.</li>
        <li>
          Optional Google / X / Telegram / wallet when enabled for the region.
        </li>
        <li>
          Crypto is the default (coin + exact network). Bank/card only where the
          wallet shows it.
        </li>
        <li>
          KYC: not required to play; the app can ask on withdraw. Never use “no
          KYC” as a hook.
        </li>
        <li>
          Support: 24/7 live chat in the menu (sees the session) ·
          support@dope.xyz · VIP Adam. Never seed / private key / magic link.
          Never DMs first asking to move funds.
        </li>
        <li>
          Responsible gambling tools exist (cool-off, self-exclusion, limits).
          No argument.
        </li>
      </ul>

      <h2>Homework: actually open these</h2>
      <Scavenger />

      <MarkDone id="site" label="I walked the live pages" />
    </article>
  );
}
