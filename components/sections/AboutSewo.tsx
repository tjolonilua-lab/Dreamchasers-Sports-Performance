import { FallbackImg } from "@/components/ui/FallbackImg";
import { ButtonLink } from "@/components/ui/Button";
import { SectionShell } from "@/components/ui/SectionShell";
import { SITE_PHOTO_ASSETS } from "@/lib/site-images";
import {
  FOOTBALL_DB_PLAYER_URL,
  SEWO_TCU_CAREER_TOTALS,
  SEWO_TCU_SEASON_STATS,
  type TcuSeasonStatRow,
} from "@/lib/sewo-college-stats";
import {
  SEWO_NFL_COMBINE_DISPLAY_ROWS,
  SEWO_NFL_PROSPECT_PROFILE_URL,
} from "@/lib/sewo-nfl-measurables";

const quickCredibility = [
  "Former Dallas Cowboys player",
  "TCU Horned Frogs alum",
  "2020 NFL Combine invite",
  "Youth performance coach — Dreamchasers Sports Performance",
];

const accolades: { heading: string; items: string[] }[] = [
  {
    heading: "High school",
    items: [
      "Kingwood High School — Kingwood / northeast Houston; four-year varsity running back who added defensive snaps at Safety and Outside Linebacker beginning junior year",
      "Senior season: 1,073 rushing yards (11.4-yard average) and 14 touchdowns — workload that previewed his Power Five ceiling",
      "U.S. Army All-American Bowl participant with national exposure against elite senior talent",
      "Glenn Davis Army Award recipient — recognition tied to the Army All-American pipeline",
      "Consensus four-star recruit in the Class of 2016 cycle; pledged to TCU over finalist-level interest that included LSU, Oklahoma, and Texas A&M",
      "Recruiting trajectory mirrored today’s DSP emphasis: translate verified Friday-night production into disciplined college preparation",
    ],
  },
  {
    heading: "College — TCU",
    items: [
      "Scholarship athlete; appeared in every game as a true freshman (first start in the Liberty Bowl)",
      "Sophomore: 64 carries, 330 yards, 7 touchdowns; 19 receptions for 166 yards; 5 special teams tackles",
      "Junior: led the team with 135 carries for 635 yards",
      "Cheez-It Bowl Offensive MVP — 194 rushing yards (TCU bowl record)",
      "Senior: 537 rushing yards and team-high 8 rushing touchdowns",
    ],
  },
  {
    heading: "Professional pathway",
    items: [
      "Invited to the 2020 NFL Scouting Combine",
      "Signed as an undrafted free agent with the Dallas Cowboys (2020–2021)",
      "Earned starting fullback spot before injuring neck in the 2021 Hall of Fame game",
      "Had a big 20-yard reception and drew praise from Dez Bryant, Troy Aikman, and Joe Buck for his performance as a playmaker and blocker",
    ],
  },
];

const WIKIPEDIA_URL = "https://en.wikipedia.org/wiki/Sewo_Olonilua";

export function AboutSewo() {
  return (
    <SectionShell
      id="about"
      eyebrow="Coach"
      title="About Sewo"
      density="airy"
      animateEnter
      className="relative overflow-hidden bg-gradient-to-b from-dsp-bg via-dsp-navy/15 to-dsp-bg"
    >
      <div className="pointer-events-none absolute left-1/2 top-24 z-0 h-72 w-[min(140vw,900px)] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(0,212,255,0.06),transparent_62%)] blur-3xl" />

      <div className="relative z-[1] grid items-center gap-12 lg:grid-cols-2 lg:gap-12 xl:gap-16">
        <div className="relative min-h-[300px] lg:-ml-2 lg:min-h-[440px] xl:-ml-4">
          <div
            className="dsp-glow pointer-events-none absolute left-1/2 top-1/2 z-0 h-[min(95vw,520px)] w-[min(95vw,520px)] -translate-x-1/2 -translate-y-1/2 opacity-20"
            aria-hidden
          />
          <div className="relative h-full min-h-[300px] overflow-hidden rounded-sm border border-white/10 bg-dsp-surface/15 shadow-[0_22px_56px_rgba(0,0,0,0.42)] ring-1 ring-white/[0.05] lg:min-h-[440px]">
            <FallbackImg
              src={SITE_PHOTO_ASSETS.aboutTcuGame}
              alt="Sewo Olonilua runs with the football for TCU"
              className="relative z-[1] h-full min-h-[300px] w-full object-cover object-[center_38%] lg:min-h-[440px]"
              fallback={<AboutFallback />}
            />
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-[32%] bg-gradient-to-t from-dsp-bg/70 via-dsp-bg/15 to-transparent"
              aria-hidden
            />
          </div>
        </div>

        <div className="relative flex flex-col justify-center lg:pl-2">
          <p className="text-lg font-medium leading-relaxed text-white/85">
            Sewo Olonilua is a former professional football player and TCU standout who
            brings elite-level playing experience to youth athlete development. Raised in
            Kingwood, Texas, he climbed from nationally ranked high school film to Power
            Five production and NFL locker rooms—and now channels that path into speed,
            strength, discipline, and confidence for the next generation.
          </p>
          <p className="mt-5 text-base leading-relaxed text-white/58">
            Dreamchasers athletes train with someone who has lived the recruiting grind,
            bowl-game stakes, combine preparation, and pro-day standards—not just read
            about them.
          </p>
          <ul className="mt-8 space-y-3 border-l-2 border-dsp-blue/50 pl-5">
            {quickCredibility.map((item) => (
              <li
                key={item}
                className="text-sm font-semibold uppercase tracking-[0.14em] text-white/88"
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8 rounded-sm border border-white/10 bg-dsp-surface/25 p-5 ring-1 ring-white/[0.04]">
            <p className="font-display text-[10px] uppercase tracking-[0.28em] text-dsp-blue">
              NFL Combine measurables
            </p>
            <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-3">
              {SEWO_NFL_COMBINE_DISPLAY_ROWS.map((row) => (
                <div key={row.label} className="min-w-0">
                  <dt className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50">
                    {row.label}
                  </dt>
                  <dd className="mt-0.5 tabular-nums text-sm font-medium text-white/80">
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 text-[11px] leading-relaxed text-white/45">
              Figures from the league prospect profile (Combine).{" "}
              <a
                href={SEWO_NFL_PROSPECT_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-dsp-blue underline-offset-4 hover:underline"
              >
                View on NFL.com
              </a>
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink href="#book">Book a Session</ButtonLink>
            <ButtonLink href="#film" variant="outline">
              Watch The Journey
            </ButtonLink>
          </div>
        </div>
      </div>

      <div className="mt-14 border-t border-white/10 pt-12">
        <h3 className="font-display text-2xl uppercase tracking-[0.08em] text-white sm:text-3xl">
          Awards & career highlights
        </h3>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/60">
          Honors and milestones from Sewo&apos;s playing career—summarized for families who
          want to know the depth behind the coaching.
        </p>

        <div className="mt-10 grid gap-10 lg:grid-cols-3 lg:gap-8">
          {accolades.map((block) => (
            <div key={block.heading}>
              <h4 className="border-b border-dsp-blue/35 pb-3 font-display text-xs uppercase tracking-[0.28em] text-dsp-blue">
                {block.heading}
              </h4>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-white/72">
                {block.items.map((line) => (
                  <li key={line} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-dsp-blue/80" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 border-t border-white/10 pt-12">
        <h3 className="font-display text-2xl uppercase tracking-[0.08em] text-white sm:text-3xl">
          College statistics — TCU
        </h3>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/60">
          Regular-season rushing and receiving totals (FBS) from{" "}
          <a
            href={FOOTBALL_DB_PLAYER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-dsp-blue underline-offset-4 hover:underline"
          >
            The Football Database
          </a>
          — snapshot for families reviewing Sewo&apos;s college production.
        </p>

        <div className="mt-6 overflow-x-auto rounded-sm border border-white/10 bg-dsp-surface/35 shadow-[0_0_24px_rgba(0,0,0,0.25)] ring-1 ring-white/5">
          <table className="w-full min-w-[720px] border-collapse text-left text-sm">
            <caption className="sr-only">
              Sewo Olonilua TCU college statistics by season and career totals
            </caption>
            <thead>
              <tr className="border-b border-white/10 bg-white/[0.06] text-[10px] font-semibold uppercase tracking-[0.2em] text-white/55">
                <th scope="col" className="px-4 py-3 font-semibold">
                  Season
                </th>
                <th scope="col" className="px-3 py-3 text-right font-semibold">
                  GP
                </th>
                <th scope="col" className="px-3 py-3 text-right font-semibold">
                  GS
                </th>
                <th scope="col" className="px-3 py-3 text-right font-semibold">
                  Rush Att
                </th>
                <th scope="col" className="px-3 py-3 text-right font-semibold">
                  Rush Yds
                </th>
                <th scope="col" className="px-3 py-3 text-right font-semibold">
                  Yds/Att
                </th>
                <th scope="col" className="px-3 py-3 text-right font-semibold">
                  Rush TD
                </th>
                <th scope="col" className="px-3 py-3 text-right font-semibold">
                  Rec
                </th>
                <th scope="col" className="px-3 py-3 text-right font-semibold">
                  Rec Yds
                </th>
                <th scope="col" className="px-3 py-3 text-right font-semibold">
                  Rec TD
                </th>
              </tr>
            </thead>
            <tbody className="text-white/78">
              {SEWO_TCU_SEASON_STATS.map((row) => (
                <SeasonStatsRow key={row.season} row={row} />
              ))}
            </tbody>
            <tfoot>
              <SeasonStatsRow row={SEWO_TCU_CAREER_TOTALS} isTotal />
            </tfoot>
          </table>
        </div>

        <p className="mt-4 text-[11px] leading-relaxed text-white/40">
          Figures reflect FootballDB &quot;College Stats&quot; regular-season tables (excludes NFL rows).
          See the full profile for game logs, splits, and special teams.{" "}
          <a
            href={FOOTBALL_DB_PLAYER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-dsp-blue/80 underline-offset-4 hover:text-dsp-blue hover:underline"
          >
            View Sewo Olonilua on FootballDB
          </a>
          .
        </p>

        <p className="mt-6 text-[11px] leading-relaxed text-white/40">
          Narrative honors and milestones also summarized from widely published sources,
          including{" "}
          <a
            href={WIKIPEDIA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-dsp-blue/80 underline-offset-4 hover:text-dsp-blue hover:underline"
          >
            Wikipedia&apos;s biography of Sewo Olonilua
          </a>
          .
        </p>
      </div>
    </SectionShell>
  );
}

function SeasonStatsRow({
  row,
  isTotal = false,
}: {
  row: TcuSeasonStatRow;
  isTotal?: boolean;
}) {
  return (
    <tr
      className={
        isTotal
          ? "border-t border-dsp-blue/40 bg-dsp-blue/[0.12] font-semibold text-white"
          : "border-b border-white/[0.06]"
      }
    >
      <th
        scope="row"
        className="px-4 py-3 text-left font-display text-[11px] uppercase tracking-[0.14em]"
      >
        {row.season}
      </th>
      <td className="px-3 py-3 text-right tabular-nums">{row.gp}</td>
      <td className="px-3 py-3 text-right tabular-nums">{row.gs}</td>
      <td className="px-3 py-3 text-right tabular-nums">{row.rushAtt}</td>
      <td className="px-3 py-3 text-right tabular-nums">{row.rushYds}</td>
      <td className="px-3 py-3 text-right tabular-nums">{row.rushAvg.toFixed(2)}</td>
      <td className="px-3 py-3 text-right tabular-nums">{row.rushTd}</td>
      <td className="px-3 py-3 text-right tabular-nums">{row.rec}</td>
      <td className="px-3 py-3 text-right tabular-nums">{row.recYds}</td>
      <td className="px-3 py-3 text-right tabular-nums">{row.recTd}</td>
    </tr>
  );
}

function AboutFallback() {
  return (
    <div className="flex h-full min-h-[280px] w-full flex-col items-center justify-center gap-2 px-8 text-center lg:min-h-[420px]">
      <span className="font-display text-2xl uppercase tracking-[0.22em] text-white/30">
        Image placeholder
      </span>
      <span className="max-w-xs text-[11px] uppercase tracking-[0.2em] text-white/45">
        Add{" "}
        <code className="rounded bg-white/10 px-1 text-dsp-blue">
          public/images/sewo-tcu-game.png
        </code>
      </span>
    </div>
  );
}
