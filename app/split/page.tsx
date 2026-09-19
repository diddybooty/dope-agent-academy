import { ADAM, REFER } from "@/lib/modules";
import { MarkDone } from "@/components/MarkDone";

export default function Page() {
  return (
    <article className="prose">
      <p className="kicker">02 · Doors</p>
      <h1>Three doors, never mixed</h1>
      <p className="lede">
        Most bad onboards are a door mistake. You talked NGR to a player, or
        sent an agent to /refer, or tried to VIP-host a community owner.
      </p>

      <div className="split">
        <strong>The one question</strong>
        Are you playing, bringing players, making content, or doing business?
        Then pick a row. Unclear → ask it. Don’t guess.
      </div>

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>They are</th>
              <th>Product</th>
              <th>Door</th>
              <th>Never</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>Player</strong>
              </td>
              <td>Play. Lossback / VIP match / limits via team</td>
              <td>
                Their agent’s path, or VIP host{" "}
                <a href={ADAM} target="_blank" rel="noreferrer">
                  Adam
                </a>
              </td>
              <td>Agent Room. /refer as “their code to play”</td>
            </tr>
            <tr>
              <td>
                <strong>Community owner / converting creator</strong>
              </td>
              <td>Agent. NGR only</td>
              <td>
                Adam yes → path from the team → classroom after confirm
              </td>
              <td>/refer. Dual book. Special %</td>
            </tr>
            <tr>
              <td>
                <strong>Wants a site link only</strong>
              </td>
              <td>Affiliate. House edge</td>
              <td>
                <a href={REFER} target="_blank" rel="noreferrer">
                  dope.xyz/refer
                </a>
              </td>
              <td>Calling them an agent. Paying NGR</td>
            </tr>
            <tr>
              <td>
                <strong>Creator, brand only, won’t convert</strong>
              </td>
              <td>Brand deal</td>
              <td>Adam. Not your NGR close</td>
              <td>Inventing a media rate</td>
            </tr>
            <tr>
              <td>
                <strong>Tipster / +EV / lock-seller / no room</strong>
              </td>
              <td>Nothing</td>
              <td>Stop</td>
              <td>CPA “because volume”</td>
            </tr>
            <tr>
              <td>
                <strong>Invest / operate / providers</strong>
              </td>
              <td>Business</td>
              <td>Preston / Doel</td>
              <td>Onboarding them as an agent</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Affiliate vs agent (XOR)</h2>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Affiliate</th>
              <th>Agent</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Door</td>
              <td>
                <a href={REFER} target="_blank" rel="noreferrer">
                  /refer
                </a>{" "}
                — link + stats here
              </td>
              <td>Private. Adam yes. Path from the team</td>
            </tr>
            <tr>
              <td>Pay</td>
              <td>
                15% of theoretical house edge on referrals’ play (live rate on
                the Refer page)
              </td>
              <td>NGR only (start 10%). No house-edge cut</td>
            </tr>
            <tr>
              <td>When</td>
              <td>Claim on /refer (staff lock: daily)</td>
              <td>The 1st of every month, crypto</td>
            </tr>
            <tr>
              <td>Who</td>
              <td>Self-serve on the site</td>
              <td>Independent host. Casual games. People already trust them</td>
            </tr>
            <tr>
              <td>Discord</td>
              <td>No</td>
              <td>Casino Agent Room after confirm — not first-touch</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="never">
        <strong>Failed reply</strong>
        Mixing the two products. Sending an agent to /refer. Telling an
        affiliate they get NGR. “Keep the code and we’ll add NGR later.” Staff
        may run both desks. A partner cannot be both. Old URL /affiliates is
        stale — use /refer.
      </div>

      <h2>If they already made a code</h2>
      <p>
        They are an affiliate. That does not make them an agent. To become an
        agent they <strong>stop being an affiliate</strong> — no dual book.
      </p>

      <h2>Help-centre facts you can say about /refer</h2>
      <ul>
        <li>Share the link, earn a share of house edge on what referrals wager.</li>
        <li>Attribution only at signup. Code cannot be added to an existing account later.</li>
        <li>The referred player gets nothing extra from the affiliate code.</li>
        <li>
          Agent player-deals (lossback, VIP match) are a different conversation
          — don’t mash them into /refer.
        </li>
      </ul>

      <MarkDone id="split" />
    </article>
  );
}
