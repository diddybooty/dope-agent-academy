import { MarkDone } from "@/components/MarkDone";

export default function Page() {
  return (
    <article className="prose">
      <p className="kicker">01 · Industry</p>
      <h1>How this industry actually pays</h1>
      <p className="lede">
        If you don’t know why NGR exists, you will lose to the first person who
        quotes a bigger percentage. This is the historic lesson. Then we map it
        onto Dope.
      </p>

      <h2>1. The house edge is the business</h2>
      <p>
        Real-money online casinos showed up in the mid-1990s (InterCasino, 1996,
        is the usual first). Software houses built the games; operators took
        the bankroll; regulators sat in places willing to license remote play.
        The math never changed: over a long enough stretch, <em>wager × house
        edge</em> is the product. Everything else — bonuses, VIP, streams, agent
        rooms — is distribution.
      </p>
      <p>
        You are not selling “a better casino.” You are putting a host’s already-
        trusted people onto a book those people do not already have.
      </p>

      <h2>2. Affiliates became the growth engine</h2>
      <p>
        Same idea as Amazon Associates (also 1996): you send traffic, you get a
        cut. Gambling affiliates got huge because one depositing player can play
        for months. Two payout models won:
      </p>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Model</th>
              <th>You get paid when</th>
              <th>What it trains</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>CPA</strong>
              </td>
              <td>A qualified first-time deposit</td>
              <td>Hunting FTDs. Fraud loves this.</td>
            </tr>
            <tr>
              <td>
                <strong>RevShare</strong>
              </td>
              <td>A % of what those players generate over time</td>
              <td>Keeping players who actually play</td>
            </tr>
            <tr>
              <td>
                <strong>Hybrid</strong>
              </td>
              <td>Some CPA + some revshare</td>
              <td>Usually a compromise, often messy</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        CPA created an industry of fake deposits. Operators clawed back, added
        KYC on withdraw, and still got burned. Community agents — people who
        already host a room — are the opposite of that: a relationship, not a
        lead form.
      </p>

      <h2>3. GGR vs NGR — why the “bigger %” is usually a lie</h2>
      <p>
        <strong>GGR</strong> (gross gaming revenue) is the blunt number: what
        players lose on games before the house pays for the circus.{" "}
        <strong>NGR</strong> (net gaming revenue) is GGR after the costs that
        sit on that play — typically bonuses, payment fees, sometimes taxes /
        chargebacks, depending on the operator. There is no single global NGR
        formula. That is why you never compare “their 35%” to “our 15%” as one
        number.
      </p>
      <div className="note">
        <strong>Dope lock</strong>
        Agents are paid on <em>NGR of that agent’s players</em> — not deposits,
        not signups, not Discord ranks. Quiet book = quiet payday. That is not a
        bug. Exact deductions, if they ask for a legal definition: Adam, don’t
        invent a formula. Affiliate pay is a different product (share of
        theoretical house edge on /refer), not NGR.
      </div>
      <p>
        Houses moved to NGR because paying revshare on GGR meant partners got
        paid on bonus-abused traffic. If you pay on deposits, you pay for money
        that can walk back out. NGR is the adult version.
      </p>

      <h2>4. Two species of partner — never mix them</h2>
      <div className="cards two">
        <div className="card">
          <div className="meta">Media / SEO affiliate</div>
          <h3>Link, volume, no relationship</h3>
          <p>
            Comparison sites, review YouTube, paid ads. They don’t know the
            player. Self-serve tracking. Often CPA or house-edge. On Dope this
            is{" "}
            <a href="https://dope.xyz/refer" target="_blank" rel="noreferrer">
              /refer
            </a>
            .
          </p>
        </div>
        <div className="card">
          <div className="meta">Community agent</div>
          <h3>Host, trust, NGR</h3>
          <p>
            Already runs a casual room. Players talk to <em>them</em>. They keep
            the relationship. Paid on the book’s NGR. On Dope this is the agent
            program — Adam, then a path from the team. Not a page on the site.
          </p>
        </div>
      </div>
      <p>
        A Kick streamer who converts chat is closer to an agent than to an SEO
        affiliate. A guy with a coupon site is the opposite. Treat them as
        different products.
      </p>

      <h2>5. Crypto casinos and saturation</h2>
      <p>
        From ~2017 on, crypto cut card friction. Streamers and Telegram hosts
        became the new “affiliate.” A few books (Stake-class) won by being first
        in the room. Then everyone in the room already had an account.
      </p>
      <p>
        Sending people to a book they already play is a rounding error.
        Sending them to a <strong>new book they don’t have</strong> is the
        actual money. That is the Dope close. Not a higher percentage.
      </p>
      <div className="good">
        <strong>Mastermind move</strong>
        When they say “Stake pays more,” you are not in a rate fight. You are in
        a conversion fight. Saturated book vs new book. Repeat that until they
        hear it.
      </div>

      <h2>6. Why special deals kill programs</h2>
      <p>
        iGaming Telegram is a rumor mill. One 25% side deal is public in 48
        hours. Then nobody converts until they get “what he got.” The house that
        auctions % trains partners to shop, not to send.
      </p>
      <p>Houses that hold one honest offer — and actually pay on time — compound.</p>
      <ul>
        <li>Dope does not match another house.</li>
        <li>Dope does not pay % of deposits.</li>
        <li>Dope does not do media-style “35% NGR” as a wink.</li>
        <li>Dope does not stack /refer house-edge on top of agent NGR.</li>
        <li>
          Spoken offer for anyone converting players (community owner or
          influencer): <strong>15% NGR, first business weekday of the month,
          crypto</strong>.
        </li>
      </ul>
      <p>
        If they only want a self-serve link and no partner desk: that’s
        affiliate. Different door. They don’t also get NGR.
      </p>

      <h2>7. What “good” has always looked like</h2>
      <ol>
        <li>Partners who already have people.</li>
        <li>One book, one deal, paid on time.</li>
        <li>Players stay because the host is still their host.</li>
        <li>New book = new accounts = conversions.</li>
      </ol>
      <p>
        Your job is not to be the most generous brochure in Telegram. Your job
        is to make working with Dope feel simple and safe, on the deal that
        exists.
      </p>

      <MarkDone id="history" />
    </article>
  );
}
