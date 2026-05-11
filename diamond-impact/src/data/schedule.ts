export type BadgeType = "skills" | "game" | "faith" | null;

export interface ScheduleItem {
  time: string;
  desc: string;
  badge: BadgeType;
}

export const schedule: { day1: ScheduleItem[]; day2: ScheduleItem[] } = {
  day1: [
    { time: "08:30", desc: "Registratie & welkom", badge: null },
    { time: "09:00", desc: "Openingssessie — Waarom we spelen", badge: null },
    { time: "09:30", desc: "Stationstraining Blok 1 — Slaan & Veldspel", badge: "skills" },
    { time: "11:30", desc: "Stationstraining Blok 2 — Pitchen & Lopen", badge: "skills" },
    { time: "13:00", desc: "Lunch & rust", badge: null },
    { time: "14:00", desc: "Scrimmage — Coaches vs Spelers", badge: "game" },
    { time: "16:00", desc: "Kleine groepen — Karakter & Leiderschap", badge: "faith" },
    { time: "17:30", desc: "Gezamenlijk avondeten", badge: null },
    { time: "19:00", desc: "Avondsessie — Getuigenissen & Muziek", badge: "faith" },
    { time: "21:00", desc: "Einde dag 1", badge: null },
  ],
  day2: [
    { time: "09:00", desc: "Warming-up & optionele ochtenddevotie", badge: "faith" },
    { time: "09:30", desc: "Gevorderde klinieken — per positie", badge: "skills" },
    { time: "11:30", desc: "Mental Game Workshop — met US coach", badge: "skills" },
    { time: "13:00", desc: "Lunch", badge: null },
    { time: "14:00", desc: "Kampioensscrimmage", badge: "game" },
    { time: "16:30", desc: "Afsluitende cirkel — wat neem je mee?", badge: "faith" },
    { time: "17:00", desc: "Prijzen, groepsfoto & tot ziens", badge: null },
  ],
};
