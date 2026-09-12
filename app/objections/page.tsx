import { ADAM } from "@/lib/modules";
import { Gym } from "@/components/Gym";

export default function Page() {
  return (
    <article className="prose">
      <p className="kicker">06 · Objections</p>
      <h1>Hold 15%. Onboard everyone who wants to work.</h1>
      <p className="lede">
        Special deals are how agent programs die. Your superpower is making NGR
        feel like the adult offer — not a consolation prize.
      </p>

      <h2>Method (don’t skip)</h2>
      <ol className="ol-tight">
        <li>
          <strong>Let them finish.</strong> Repeat the real worry in one line.
          “You’re saying the % looks low vs Stake.” / “You’re saying your people
          won’t move.”
        </li>
        <li>
          <strong>Split the product.</strong> Playing → player/host. Wants a site
          link, no relationship → /refer, stop the agent process. Hosts a room →
          NGR, this gym.
        </li>
        <li>
          <strong>Don’t lead with a bigger number.</strong> Window-shoppers
          collect ceilings. 15% monthly is the offer.
        </li>
        <li>
          <strong>Move to conversions</strong> if the fight is NGR. New book vs
          saturated book.
        </li>
        <li>
          <strong>Ask what would make the book work</strong> — only after they’re
          in or clearly not shopping. Fulfill what they named (limits, VIP
          transfer, tracking). Don’t brochure a menu.
        </li>
        <li>
          <strong>One next step.</strong>{" "}
          <a href={ADAM} target="_blank" rel="noreferrer">
            Adam
          </a>{" "}
          / one send / one named request. Then stop talking.
        </li>
      </ol>

      <div className="good">
        <strong>They should leave thinking</strong>
        You’re on their side (their room, their players, their payday). Nobody
        is asking them to spam. They keep the relationship. Questions get
        straight answers or “I’ll get that from Adam.” They should not leave
        thinking we outbid Stake, guaranteed a living, or hid a better button.
      </div>

      <h2>The special-deal library</h2>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>They want</th>
              <th>You say (shape, not a paste)</th>
              <th>You never</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Higher %</td>
              <td>
                Conversion story. 15% NGR monthly. Stop. Already live and
                converting → whisper Adam, don’t tell them a higher number
                exists.
              </td>
              <td>Auction. Wink. “Up to.”</td>
            </tr>
            <tr>
              <td>CPA / $ per FTD</td>
              <td>
                Different product. Agents are NGR. Self-serve link is /refer
                (house edge, not CPA) and they would not also be an agent.
              </td>
              <td>Freelance $150/FTD</td>
            </tr>
            <tr>
              <td>% of deposits</td>
              <td>
                Deposits aren’t revenue — they can withdraw. NGR is the product.
              </td>
              <td>Match “cleaner” math</td>
            </tr>
            <tr>
              <td>“What you gave him”</td>
              <td>Same offer for everyone who works with Dope. I don’t match rumours.</td>
              <td>Confirm a hidden ladder</td>
            </tr>
            <tr>
              <td>Influencer custom</td>
              <td>
                Converting = same 15% NGR. Brand-only = Adam, not your close.
              </td>
              <td>NGR + posting fee + /refer</td>
            </tr>
            <tr>
              <td>Dashboard first</td>
              <td>
                Tracking after Adam yes. Don’t wait on it to send the first
                known person.
              </td>
              <td>Invent a URL. Send /refer</td>
            </tr>
            <tr>
              <td>Contract / licence</td>
              <td>
                Point at /licence. Adam handles paper after yes. Don’t guess a
                company name.
              </td>
              <td>Fake UKGC / Curaçao</td>
            </tr>
            <tr>
              <td>Proof / whale PNG</td>
              <td>Adam confirm + team chat + first payday. Site is dope.xyz.</td>
              <td>Other people’s books</td>
            </tr>
            <tr>
              <td>Both products</td>
              <td>Nobody is both. They pick.</td>
              <td>“Keep the code for now”</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="never">
        <strong>If you don’t know</strong>
        “I don’t know. I’ll get it.” Then get it. Filling silence with a card is
        how special deals get born.
      </div>

      <h2>Pressure gym</h2>
      <p>
        Fifteen real lines. Pick the hold. Wrong answers explain the leak. Run
        until you go 15/15.
      </p>
      <Gym />
    </article>
  );
}
