import { ADAM, SITE } from "@/lib/modules";
import { MarkDone } from "@/components/MarkDone";

export default function Page() {
  return (
    <article className="prose">
      <p className="kicker">03 · Agents</p>
      <h1>Find, speak, onboard — agents</h1>
      <p className="lede">
        Independent community owners (and creators who actually convert). They
        send their people their path. They get paid on NGR from their players.
        Not a salary. Not deposit-to-join. Not /refer.
      </p>

      <h2>Find</h2>
      <p>
        ICP is a host with a casual room — blackjack, roulette, slots, sports —
        where people already trust them. Worldwide for the owner. Players still
        follow the geoblock.
      </p>
      <div className="cards two">
        <div className="card">
          <div className="meta">In</div>
          <ul>
            <li>They already host</li>
            <li>Casual play, entertainment</li>
            <li>People would move because of them</li>
            <li>Casino-space creators who convert</li>
          </ul>
        </div>
        <div className="card">
          <div className="meta">Out</div>
          <ul>
            <li>Tipsters, lock-sellers, +EV rooms</li>
            <li>No community, just rate-shopping</li>
            <li>House staff collecting menus</li>
            <li>Brand-only creators who refuse to convert</li>
          </ul>
        </div>
      </div>
      <ul>
        <li>
          Named list first. Filter ICP before you talk. Platforms are wherever
          the room actually lives — don’t spray every app because it exists.
        </li>
        <li>Email before X if an email is on the row.</li>
        <li>Telegram is not the default first-touch.</li>
        <li>
          Don’t measure yourself on DMs. Don’t run a farm. Confirmed book beats
          a new CSV.
        </li>
      </ul>

      <h2>Speak</h2>
      <p>
        You do not have a license to invent first-touch copy. If Adam hasn’t
        given you words, you still have a method:
      </p>
      <ol className="ol-tight">
        <li>Unique words on a named person. No paste-blast.</li>
        <li>
          <strong>No Discord invite in message 1.</strong> Classroom is after
          confirm.
        </li>
        <li>
          Split in one line: playing, or making money off your people?
        </li>
        <li>
          Spoken offer: <strong>10% NGR to start, paid on the 1st of every month,
          crypto</strong>. Stop. Higher tiers exist and you never reveal them.
        </li>
        <li>
          Conversion vs saturation — new book, people don’t already have
          accounts. That’s the close.
        </li>
        <li>
          They keep the relationship. Dope doesn’t steal the room. Nobody is
          asking them to spam strangers or look like an ad.
        </li>
        <li>
          If they post a link they are openly an agent (disclose). Entertainment,
          never profits. 18+ / legal age.
        </li>
        <li>Questions get straight answers or “I’ll get that from Adam.”</li>
      </ol>
      <div className="never">
        <strong>Never in the mouth</strong>
        APY, salary, guaranteed living, whale slides, “no KYC” as a hook, “beats
        every casino,” fake dashboards, invented path URLs, invented sports
        limits, matching % of deposits, calling them an affiliate, mixing
        another partner’s name into Discord.
      </div>

      <h2>Onboard (this is converting)</h2>
      <p>A week counts when:</p>
      <ol>
        <li>Named list, ICP, not tipsters.</li>
        <li>Unique first-touch, no Discord invite.</li>
        <li>
          Engaged →{" "}
          <a href={ADAM} target="_blank" rel="noreferrer">
            Adam
          </a>{" "}
          confirm. Not a Discord link.
        </li>
        <li>Path from the team. Don’t invent it. Don’t lend someone else’s.</li>
        <li>Agent sent one known person.</li>
        <li>Optional: first click / FTD on that book.</li>
      </ol>
      <p>Quiet DMs with no Adam-yes are not volume.</p>

      <h2>After yes</h2>
      <ul>
        <li>
          Casino Agent Room is invite-only, after confirm. 1-use / 24h, no role
          on the invite. Don’t post invites on X, bios, group chats, public
          pages.
        </li>
        <li>Admin Accept = Agent only. Don’t auto-accept.</li>
        <li>
          Yield order: VIP transfer of people they already host → 1:1 who asked
          → one honest room post → deal tightness via Adam → short check-in →
          sub-agents last.
        </li>
        <li>
          Dashboard / lifetime stats can be provisioned on request after they’re
          in. Not /refer. Don’t wait on it to send.
        </li>
        <li>
          Custom limits, geo, paper: Adam / the team. You don’t freelance it.
        </li>
      </ul>

      <h2>What they may offer their players</h2>
      <p>In their own words, via the team — not the site affiliate:</p>
      <ul>
        <li>Lossback up to 20% instant cash, zero wagering</li>
        <li>VIP matched if they already have VIP elsewhere (transfer)</li>
        <li>Custom limits via the team</li>
        <li>They keep talking to the agent</li>
      </ul>
      <div className="note">
        <strong>Don’t conflate</strong>
        20% lossback is a player deal. Agent pay is their NGR % (starts at 10%). Site rakeback
        (claimable slice of house edge on the player’s own play) is a third
        thing. Unsure how they stack for a named player → Adam.
      </div>

      <p>
        Site they can send people to:{" "}
        <a href={SITE} target="_blank" rel="noreferrer">
          dope.xyz
        </a>
        . Path is still theirs, not a generic /refer code.
      </p>

      <MarkDone id="agents" />
    </article>
  );
}
