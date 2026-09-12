import Link from "next/link";
import { MODULES } from "@/lib/modules";
import { MarkDone } from "@/components/MarkDone";

export default function Page() {
  return (
    <article className="prose">
      <p className="kicker">00 · Weekend homework</p>
      <h1>Get dangerous at the job, not at the inbox.</h1>
      <p className="lede">
        This is for Dope human agents — people Adam daily-tasks to find, speak
        to, and onboard partners and players. About three hours. The quiz is
        100% or you didn’t pass. Same gate as the hire track.
      </p>

      <div className="never">
        <strong>Not a script pack</strong>
        First-touch copy is still owned by Adam/Doel. If you don’t have approved
        words, you don’t invent a DM. You learn the doors, the offer, the site,
        and how to hold 15% NGR when they ask for a special.
      </div>

      <h2>What “done” means</h2>
      <ol className="ol-tight">
        <li>You can split player / agent / affiliate in one question.</li>
        <li>
          You can walk{" "}
          <a href="https://dope.xyz" target="_blank" rel="noreferrer">
            dope.xyz
          </a>{" "}
          without quoting stale pages.
        </li>
        <li>
          You can onboard anyone who actually wants to work with Dope on{" "}
          <strong>15% NGR, paid first business weekday monthly</strong> — no
          CPA, no % of deposits, no matching another house, no dual book with
          /refer.
        </li>
        <li>You pass the 22-question floor test at 100%.</li>
      </ol>

      <h2>How to spend the weekend</h2>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Block</th>
              <th>Do</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Saturday morning</td>
              <td>01 History → 02 Three doors → 05 Walk the site</td>
            </tr>
            <tr>
              <td>Saturday afternoon</td>
              <td>03 Agents and 04 Players — separate on purpose</td>
            </tr>
            <tr>
              <td>Sunday</td>
              <td>06 Objection gym → 07 Classify → 08 Quiz</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Laws of the floor (memorize before you send)</h2>
      <ul>
        <li>
          <strong>Nobody is both.</strong> Affiliate ={" "}
          <a href="https://dope.xyz/refer" target="_blank" rel="noreferrer">
            /refer
          </a>
          , 15% of theoretical house edge, claim on the Refer page. Agent = NGR
          only, monthly. A partner cannot wear both.
        </li>
        <li>
          <strong>Spoken offer is 15% NGR monthly.</strong> Do not volunteer a
          higher number. Do not auction.
        </li>
        <li>
          <strong>Adam is the door</strong> —{" "}
          <a href="https://t.me/DopeAdam" target="_blank" rel="noreferrer">
            t.me/DopeAdam
          </a>
          . Path comes from the team. Don’t invent a URL. No Discord invite in
          message 1.
        </li>
        <li>
          <strong>Owners can sit anywhere. Players follow the geoblock.</strong>{" "}
          US/UK (and AU, FR, NL, ES, …) cannot play. Don’t coach VPN.
        </li>
        <li>
          <strong>Converting ≠ DMs sent.</strong> Adam-yes + team path + one
          known person sent.
        </li>
      </ul>

      <div className="note">
        <strong>Influencers</strong>
        If they convert players, they are on the same NGR product as community
        agents. Reach does not unlock a custom menu. Brand-only (no converting)
        is Adam’s conversation — not your NGR close.
      </div>

      <h2>Modules</h2>
      <div className="mods">
        {MODULES.filter((m) => m.id !== "brief").map((m) => (
          <Link key={m.id} href={m.href}>
            <span className="num">{m.num}</span>
            <span>
              <span className="t">{m.title}</span>
              <span className="b">{m.blurb}</span>
            </span>
            <span className="tm">{m.time}</span>
          </Link>
        ))}
      </div>

      <MarkDone id="brief" label="I read the brief" />
    </article>
  );
}
