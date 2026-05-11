export interface Coach {
  name: string;
  role: string;
  bio: string;
  flag: string;
  level: string;
  photo?: string;
  delay?: string;
}

export const coaches: Coach[] = [
  {
    name: "Coach Naam",
    role: "Head Coach · USA",
    bio: "Vervang door 2–3 zinnen over carrière, speelervaring op Minor of Major League niveau, en wat hij bijdraagt aan Diamond Impact. Pitching specialist of all-round coach.",
    flag: "🇺🇸",
    level: "Minor / Major League",
  },
  {
    name: "Coach Naam",
    role: "Hitting Coach · USA",
    bio: "Vervang door bio. Slagspecialist met professionele ervaring. Gepassioneerd over het mentale spel en het helpen van slagmannen om hun eigen benadering te vinden.",
    flag: "🇺🇸",
    level: "Professionele Ervaring",
    delay: "d1",
  },
  {
    name: "Coach Naam",
    role: "NL Coach · Ambassadeur",
    bio: "Vervang door bio. Huidig of voormalig speler van het Nederlands nationaal team — een rolmodel voor de volgende generatie Nederlandse honkballers.",
    flag: "🇳🇱",
    level: "Nederlands Nationaal Team",
    delay: "d2",
  },
];
