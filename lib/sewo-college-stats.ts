/**
 * TCU regular-season statistics (FBS) aggregated on The Football Database.
 * @see https://www.footballdb.com/players/sewo-olonilua-olonise01 — toggle “College Stats” / regular season.
 */
export const FOOTBALL_DB_PLAYER_URL =
  "https://www.footballdb.com/players/sewo-olonilua-olonise01";

export type TcuSeasonStatRow = {
  season: string;
  gp: number;
  gs: number;
  rushAtt: number;
  rushYds: number;
  rushAvg: number;
  rushTd: number;
  rec: number;
  recYds: number;
  recTd: number;
};

/** Per-season regular-season rows (FBS / TCU only). */
export const SEWO_TCU_SEASON_STATS: TcuSeasonStatRow[] = [
  {
    season: "2016",
    gp: 13,
    gs: 1,
    rushAtt: 15,
    rushYds: 122,
    rushAvg: 8.13,
    rushTd: 1,
    rec: 2,
    recYds: 17,
    recTd: 0,
  },
  {
    season: "2017",
    gp: 13,
    gs: 0,
    rushAtt: 64,
    rushYds: 330,
    rushAvg: 5.16,
    rushTd: 7,
    rec: 19,
    recYds: 166,
    recTd: 0,
  },
  {
    season: "2018",
    gp: 13,
    gs: 7,
    rushAtt: 135,
    rushYds: 635,
    rushAvg: 4.7,
    rushTd: 2,
    rec: 15,
    recYds: 86,
    recTd: 0,
  },
  {
    season: "2019",
    gp: 12,
    gs: 1,
    rushAtt: 134,
    rushYds: 537,
    rushAvg: 4.01,
    rushTd: 8,
    rec: 24,
    recYds: 114,
    recTd: 1,
  },
];

/** FBS career totals row from FootballDB (regular season). */
export const SEWO_TCU_CAREER_TOTALS: TcuSeasonStatRow = {
  season: "TCU career",
  gp: 51,
  gs: 9,
  rushAtt: 348,
  rushYds: 1624,
  rushAvg: 4.67,
  rushTd: 18,
  rec: 60,
  recYds: 383,
  recTd: 1,
};
