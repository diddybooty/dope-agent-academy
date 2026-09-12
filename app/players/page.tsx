import { ADAM, SITE, SUPPORT, UPDATES, X, VIP_MAIL } from "@/lib/modules";
import { MarkDone } from "@/components/MarkDone";

export default function Page() {
  return (
    <article className="prose">
      <p className="kicker">04 · Players</p>
      <h1>Find, speak, onboard — players</h1>
      <p className="lede">
        Separate conversation. Separate room. Separate deal. If they want to
        play, you are not recruiting them as an agent.
      </p>

      <h2>Find</h2>
      <ul>
        <li>They want to play casino or sports. That’s the whole signal.</li>
        <li>
          If they came from an agent, they stay that agent’s player. You don’t
          steal the relationship.
        </li>
        <li>
          VIP host is{" "}
          <a href={ADAM} target="_blank" rel="noreferrer">
            Adam
          </a>{" "}
          (vip@dope.xyz). Don’t put player VIP tickets on the agent floor.
        </li>
        <li>
          Don’t hunt US/UK (or other excluded geos) as if they can deposit.
          Owners ≠ players.
        </li>
      </ul>

      <h2>Speak</h2>
      <p>Entertainment, never profits. 18+ / legal age where they live.</p>
      <div className="cards two">
        <div className="card">
          <div className="meta">Honest site facts</div>
          <ul>
            <li>
              <a href={SITE} target="_blank" rel="noreferrer">
                dope.xyz
              </a>{" "}
              — crypto casino and sportsbook
            </li>
            <li>Signup: email → magic link → username. No password</li>
            <li>Deposit: crypto, exact network. Card/bank only if the wallet shows it</li>
            <li>Instant rakeback — claim, real balance (bet or withdraw)</li>
            <li>
              VIP match hero: “Bring Your Rank. Skip the Grind.” Team/Adam
              decides the match — don’t promise a rank
            </li>
            <li>Monthly race (highest wager). Public bankroll on /bankroll</li>
            <li>Sports is live. Higher limits = named player, team sets the number</li>
            <li>Live support 24/7 in the menu. {SUPPORT.replace("mailto:", "")}</li>
          </ul>
        </div>
        <div className="card">
          <div className="meta">Don’t tell players</div>
          <ul>
            <li>To sign up at /refer (affiliate product)</li>
            <li>That US/UK/AU/FR/NL/ES play is allowed</li>
            <li>“No KYC” as a hook — KYC can still hit on withdraw</li>
            <li>VPN around a geoblock</li>
            <li>Someone else’s dashboard / whale month</li>
            <li>To log in for them or share a magic link</li>
            <li>That every game is provably fair — Originals only</li>
          </ul>
        </div>
      </div>

      <h2>Onboard</h2>
      <ol className="ol-tight">
        <li>
          If they came from an agent: the agent’s path. They keep talking to the
          agent.
        </li>
        <li>
          If they need VIP: Adam. Rank match is a team decision.
        </li>
        <li>One account per person. Dupes get closed.</li>
        <li>
          Wrong network on a crypto deposit is unrecoverable — say that before
          they send.
        </li>
        <li>
          Stuck: live support in the menu, or Adam for VIP. You don’t hold their
          login.
        </li>
      </ol>

      <h2>Player deal (what an agent may offer a player)</h2>
      <p>Not the site affiliate. In the agent’s own words, via the team:</p>
      <ul>
        <li>Lossback up to 20% instant cash, zero wagering</li>
        <li>VIP matched if they already have VIP elsewhere</li>
        <li>Custom limits via the team</li>
      </ul>
      <div className="never">
        <strong>Three different “backs”</strong>
        Site rakeback = slice of house edge on the player’s own bets, claim in
        /rewards. Agent lossback = up to 20% cash on losses, zero wagering.
        Agent NGR = what the host gets paid. Don’t mash them into one sentence
        unless the team stacked them for that player.
      </div>

      <h2>If they say</h2>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>They say</th>
              <th>You do</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>I want a code to share</td>
              <td>
                That’s affiliate /refer — or they become an agent. Different
                doors. Don’t onboard a player as an agent because they asked for
                a code.
              </td>
            </tr>
            <tr>
              <td>I already have VIP elsewhere</td>
              <td>Rank match / transfer. Team/Adam decides. Don’t promise Elite.</td>
            </tr>
            <tr>
              <td>Higher sports limits</td>
              <td>Named player. Team sets the number. Don’t invent one.</td>
            </tr>
            <tr>
              <td>Support asked for my seed</td>
              <td>
                Not us. Support never asks for seed / private key / magic link,
                and never DMs first to move funds.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        News only:{" "}
        <a href={UPDATES} target="_blank" rel="noreferrer">
          t.me/DopeUpdates
        </a>{" "}
        ·{" "}
        <a href={X} target="_blank" rel="noreferrer">
          x.com/dopexyz
        </a>
        . VIP:{" "}
        <a href={ADAM} target="_blank" rel="noreferrer">
          t.me/DopeAdam
        </a>{" "}
        ·{" "}
        <a href={VIP_MAIL}>{VIP_MAIL.replace("mailto:", "")}</a>
      </p>

      <MarkDone id="players" />
    </article>
  );
}
