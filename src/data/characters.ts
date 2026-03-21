export interface Character {
  rank: number;
  name: string;
  alias: string;
  power: number; // 1-100
  description: string;
  color: string;
}

export const characters: Character[] = [
  {
    rank: 1,
    name: "Wanda Maximoff",
    alias: "Scarlet Witch",
    power: 98,
    description:
      "Chaos magic gør hende til den mest magtfulde Avenger. Hun kan omskrive virkeligheden selv og besejrede Thanos' hær alene.",
    color: "#e94560",
  },
  {
    rank: 2,
    name: "Thor Odinson",
    alias: "Thor",
    power: 95,
    description:
      "Asgardens gud med Stormbreaker kan kanalisere lyn og kosmisk energi. Den eneste der næsten dræbte Thanos med Infinity Gauntlet.",
    color: "#4ea8de",
  },
  {
    rank: 3,
    name: "Carol Danvers",
    alias: "Captain Marvel",
    power: 93,
    description:
      "Absorberede energien fra Space Stone. Kan flyve gennem rumskibe og modstå Thanos' slag uden at blinke.",
    color: "#ffd60a",
  },
  {
    rank: 4,
    name: "Stephen Strange",
    alias: "Doctor Strange",
    power: 90,
    description:
      "Sorcerer Supreme med kontrol over tid, dimensioner og mystisk energi. Så 14 millioner fremtider for at finde den ene sejr.",
    color: "#2ec4b6",
  },
  {
    rank: 5,
    name: "Bruce Banner",
    alias: "Hulk",
    power: 88,
    description:
      "Ubegrænset fysisk styrke der vokser med vrede. Smart Hulk kombinerede Banners geni med Hulks rå kraft til at bruge Infinity Gauntlet.",
    color: "#52b788",
  },
  {
    rank: 6,
    name: "Tony Stark",
    alias: "Iron Man",
    power: 85,
    description:
      "Geniet der byggede nanotech-rustning og udførte det ultimative snap. Hans teknologi matchede kosmiske trusler.",
    color: "#e63946",
  },
  {
    rank: 7,
    name: "Vision",
    alias: "Vision",
    power: 82,
    description:
      "Syntetisk væsen drevet af Mind Stone. Kan ændre tæthed, fyre energistråler og var nærmest uovervindelig i kamp.",
    color: "#7b2cbf",
  },
  {
    rank: 8,
    name: "T'Challa",
    alias: "Black Panther",
    power: 78,
    description:
      "Heart-Shaped Herb giver overmenneskelig styrke og reflekser. Vibranium-dragten absorberer og returnerer kinetisk energi.",
    color: "#9d4edd",
  },
  {
    rank: 9,
    name: "Peter Parker",
    alias: "Spider-Man",
    power: 75,
    description:
      "Superhuman styrke, spider-sense og Stark-tech. Holdt fast i Infinity Gauntlet og gik tå-til-tå med Thanos' soldater.",
    color: "#ef233c",
  },
  {
    rank: 10,
    name: "Steve Rogers",
    alias: "Captain America",
    power: 72,
    description:
      "Super-soldat serum, vibranium-skjold, og Mjolnir-værdig. Stod alene mod Thanos' hele hær uden at vige.",
    color: "#457b9d",
  },
  {
    rank: 11,
    name: "Natasha Romanoff",
    alias: "Black Widow",
    power: 65,
    description:
      "Verdens dødeligste spion og kampkunstner. Ingen superkræfter, men hendes taktiske geni og offervilje gjorde hende uundværlig.",
    color: "#1d3557",
  },
  {
    rank: 12,
    name: "Clint Barton",
    alias: "Hawkeye",
    power: 60,
    description:
      "Aldrig misser sit mål. Et menneske blandt guder, men hans præcision og mod har reddet holdet utallige gange.",
    color: "#6c757d",
  },
];
