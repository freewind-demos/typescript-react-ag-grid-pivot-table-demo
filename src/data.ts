const data = [
  {
    "age": 25,
    "athlete": "Andy Murray",
    "bronze": 0,
    "country": "Great Britain",
    "date": "12/08/2012",
    "gold": 1,
    "silver": 1,
    "sport": "Tennis",
    "total": 2,
    "year": 2012
  },
  {
    "age": 22,
    "athlete": "Magnus Moan",
    "bronze": 1,
    "country": "Norway",
    "date": "26/02/2006",
    "gold": 0,
    "silver": 1,
    "sport": "Nordic Combined",
    "total": 2,
    "year": 2006
  },
  {
    "age": 40,
    "athlete": "Eric Lamaze",
    "bronze": 0,
    "country": "Canada",
    "date": "24/08/2008",
    "gold": 1,
    "silver": 1,
    "sport": "Equestrian",
    "total": 2,
    "year": 2008
  },
  {
    "age": 27,
    "athlete": "Christine Girard",
    "bronze": 1,
    "country": "Canada",
    "date": "12/08/2012",
    "gold": 0,
    "silver": 0,
    "sport": "Weightlifting",
    "total": 1,
    "year": 2012
  },
  {
    "age": 24,
    "athlete": "Alistair Brownlee",
    "bronze": 0,
    "country": "Great Britain",
    "date": "12/08/2012",
    "gold": 1,
    "silver": 0,
    "sport": "Triathlon",
    "total": 1,
    "year": 2012
  },
  {
    "age": 22,
    "athlete": "Jonny Brownlee",
    "bronze": 1,
    "country": "Great Britain",
    "date": "12/08/2012",
    "gold": 0,
    "silver": 0,
    "sport": "Triathlon",
    "total": 1,
    "year": 2012
  },
  {
    "age": 33,
    "athlete": "Simon Whitfield",
    "bronze": 0,
    "country": "Canada",
    "date": "24/08/2008",
    "gold": 0,
    "silver": 1,
    "sport": "Triathlon",
    "total": 1,
    "year": 2008
  },
  {
    "age": 25,
    "athlete": "Simon Whitfield",
    "bronze": 0,
    "country": "Canada",
    "date": "01/10/2000",
    "gold": 1,
    "silver": 0,
    "sport": "Triathlon",
    "total": 1,
    "year": 2000
  },
  {
    "age": 19,
    "athlete": "Jade Jones",
    "bronze": 0,
    "country": "Great Britain",
    "date": "12/08/2012",
    "gold": 1,
    "silver": 0,
    "sport": "Taekwondo",
    "total": 1,
    "year": 2012
  },
  {
    "age": 21,
    "athlete": "Lutalo Muhammad",
    "bronze": 1,
    "country": "Great Britain",
    "date": "12/08/2012",
    "gold": 0,
    "silver": 0,
    "sport": "Taekwondo",
    "total": 1,
    "year": 2012
  },
  {
    "age": 23,
    "athlete": "Karine Sergerie",
    "bronze": 0,
    "country": "Canada",
    "date": "24/08/2008",
    "gold": 0,
    "silver": 1,
    "sport": "Taekwondo",
    "total": 1,
    "year": 2008
  },
  {
    "age": 29,
    "athlete": "Nina Solheim",
    "bronze": 0,
    "country": "Norway",
    "date": "24/08/2008",
    "gold": 0,
    "silver": 1,
    "sport": "Taekwondo",
    "total": 1,
    "year": 2008
  },
  {
    "age": 25,
    "athlete": "Sarah Stevenson",
    "bronze": 1,
    "country": "Great Britain",
    "date": "24/08/2008",
    "gold": 0,
    "silver": 0,
    "sport": "Taekwondo",
    "total": 1,
    "year": 2008
  },
  {
    "age": 22,
    "athlete": "Dominique Bosshart",
    "bronze": 1,
    "country": "Canada",
    "date": "01/10/2000",
    "gold": 0,
    "silver": 0,
    "sport": "Taekwondo",
    "total": 1,
    "year": 2000
  },
  {
    "age": 23,
    "athlete": "Trude Gundersen",
    "bronze": 0,
    "country": "Norway",
    "date": "01/10/2000",
    "gold": 0,
    "silver": 1,
    "sport": "Taekwondo",
    "total": 1,
    "year": 2000
  },
  {
    "age": 18,
    "athlete": "Laura Robson",
    "bronze": 0,
    "country": "Great Britain",
    "date": "12/08/2012",
    "gold": 0,
    "silver": 1,
    "sport": "Tennis",
    "total": 1,
    "year": 2012
  },
  {
    "age": 27,
    "athlete": "Sébastien Lareau",
    "bronze": 0,
    "country": "Canada",
    "date": "01/10/2000",
    "gold": 1,
    "silver": 0,
    "sport": "Tennis",
    "total": 1,
    "year": 2000
  },
  {
    "age": 28,
    "athlete": "Daniel Nestor",
    "bronze": 0,
    "country": "Canada",
    "date": "01/10/2000",
    "gold": 1,
    "silver": 0,
    "sport": "Tennis",
    "total": 1,
    "year": 2000
  },
  {
    "age": 25,
    "athlete": "Sara Nordenstam",
    "bronze": 1,
    "country": "Norway",
    "date": "24/08/2008",
    "gold": 0,
    "silver": 0,
    "sport": "Swimming",
    "total": 1,
    "year": 2008
  },
  {
    "age": 23,
    "athlete": "Alexander Dale Oen",
    "bronze": 0,
    "country": "Norway",
    "date": "24/08/2008",
    "gold": 0,
    "silver": 1,
    "sport": "Swimming",
    "total": 1,
    "year": 2008
  },
  {
    "age": 23,
    "athlete": "Håvard Bøkko",
    "bronze": 1,
    "country": "Norway",
    "date": "28/02/2010",
    "gold": 0,
    "silver": 0,
    "sport": "Speed Skating",
    "total": 1,
    "year": 2010
  },
  {
    "age": 27,
    "athlete": "Lasse Sætre",
    "bronze": 1,
    "country": "Norway",
    "date": "24/02/2002",
    "gold": 0,
    "silver": 0,
    "sport": "Speed Skating",
    "total": 1,
    "year": 2002
  },
  {
    "age": 30,
    "athlete": "Ådne Søndrål",
    "bronze": 1,
    "country": "Norway",
    "date": "24/02/2002",
    "gold": 0,
    "silver": 0,
    "sport": "Speed Skating",
    "total": 1,
    "year": 2002
  },
  {
    "age": 34,
    "athlete": "Jasey-Jay Anderson",
    "bronze": 0,
    "country": "Canada",
    "date": "28/02/2010",
    "gold": 1,
    "silver": 0,
    "sport": "Snowboarding",
    "total": 1,
    "year": 2010
  },
  {
    "age": 31,
    "athlete": "Maëlle Ricker",
    "bronze": 0,
    "country": "Canada",
    "date": "28/02/2010",
    "gold": 1,
    "silver": 0,
    "sport": "Snowboarding",
    "total": 1,
    "year": 2010
  },
  {
    "age": 24,
    "athlete": "Mike Robertson",
    "bronze": 0,
    "country": "Canada",
    "date": "28/02/2010",
    "gold": 0,
    "silver": 1,
    "sport": "Snowboarding",
    "total": 1,
    "year": 2010
  },
  {
    "age": 24,
    "athlete": "Kjersti Buaas",
    "bronze": 1,
    "country": "Norway",
    "date": "26/02/2006",
    "gold": 0,
    "silver": 0,
    "sport": "Snowboarding",
    "total": 1,
    "year": 2006
  },
  {
    "age": 25,
    "athlete": "Dominique Maltais",
    "bronze": 1,
    "country": "Canada",
    "date": "26/02/2006",
    "gold": 0,
    "silver": 0,
    "sport": "Snowboarding",
    "total": 1,
    "year": 2006
  },
  {
    "age": 30,
    "athlete": "Jon Montgomery",
    "bronze": 0,
    "country": "Canada",
    "date": "28/02/2010",
    "gold": 1,
    "silver": 0,
    "sport": "Skeleton",
    "total": 1,
    "year": 2010
  },
  {
    "age": 27,
    "athlete": "Amy Williams",
    "bronze": 0,
    "country": "Great Britain",
    "date": "28/02/2010",
    "gold": 1,
    "silver": 0,
    "sport": "Skeleton",
    "total": 1,
    "year": 2010
  },
  {
    "age": 39,
    "athlete": "Duff Gibson",
    "bronze": 0,
    "country": "Canada",
    "date": "26/02/2006",
    "gold": 1,
    "silver": 0,
    "sport": "Skeleton",
    "total": 1,
    "year": 2006
  },
  {
    "age": 25,
    "athlete": "Mellisa Hollingsworth-Richards",
    "bronze": 1,
    "country": "Canada",
    "date": "26/02/2006",
    "gold": 0,
    "silver": 0,
    "sport": "Skeleton",
    "total": 1,
    "year": 2006
  },
  {
    "age": 35,
    "athlete": "Jeff Pain",
    "bronze": 0,
    "country": "Canada",
    "date": "26/02/2006",
    "gold": 0,
    "silver": 1,
    "sport": "Skeleton",
    "total": 1,
    "year": 2006
  },
  {
    "age": 24,
    "athlete": "Shelley Rudman",
    "bronze": 0,
    "country": "Great Britain",
    "date": "26/02/2006",
    "gold": 0,
    "silver": 1,
    "sport": "Skeleton",
    "total": 1,
    "year": 2006
  },
  {
    "age": 28,
    "athlete": "Alex Coomber",
    "bronze": 1,
    "country": "Great Britain",
    "date": "24/02/2002",
    "gold": 0,
    "silver": 0,
    "sport": "Skeleton",
    "total": 1,
    "year": 2002
  },
  {
    "age": 25,
    "athlete": "Peter Wilson",
    "bronze": 0,
    "country": "Great Britain",
    "date": "12/08/2012",
    "gold": 1,
    "silver": 0,
    "sport": "Shooting",
    "total": 1,
    "year": 2012
  },
  {
    "age": 38,
    "athlete": "Tore Brovold",
    "bronze": 0,
    "country": "Norway",
    "date": "24/08/2008",
    "gold": 0,
    "silver": 1,
    "sport": "Shooting",
    "total": 1,
    "year": 2008
  },
  {
    "age": 23,
    "athlete": "Richard Faulds",
    "bronze": 0,
    "country": "Great Britain",
    "date": "01/10/2000",
    "gold": 1,
    "silver": 0,
    "sport": "Shooting",
    "total": 1,
    "year": 2000
  },
  {
    "age": 42,
    "athlete": "Ian Peel",
    "bronze": 0,
    "country": "Great Britain",
    "date": "01/10/2000",
    "gold": 0,
    "silver": 1,
    "sport": "Shooting",
    "total": 1,
    "year": 2000
  },
  {
    "age": 47,
    "athlete": "Harald Stenvaag",
    "bronze": 1,
    "country": "Norway",
    "date": "01/10/2000",
    "gold": 0,
    "silver": 0,
    "sport": "Shooting",
    "total": 1,
    "year": 2000
  },
  {
    "age": 39,
    "athlete": "Ross MacDonald",
    "bronze": 0,
    "country": "Canada",
    "date": "29/08/2004",
    "gold": 0,
    "silver": 1,
    "sport": "Sailing",
    "total": 1,
    "year": 2004
  },
  {
    "age": 21,
    "athlete": "Siren Sundby",
    "bronze": 0,
    "country": "Norway",
    "date": "29/08/2004",
    "gold": 1,
    "silver": 0,
    "sport": "Sailing",
    "total": 1,
    "year": 2004
  },
  {
    "age": 33,
    "athlete": "Mike Wolfs",
    "bronze": 0,
    "country": "Canada",
    "date": "29/08/2004",
    "gold": 0,
    "silver": 1,
    "sport": "Sailing",
    "total": 1,
    "year": 2004
  },
  {
    "age": 42,
    "athlete": "Paul Davis",
    "bronze": 1,
    "country": "Norway",
    "date": "01/10/2000",
    "gold": 0,
    "silver": 0,
    "sport": "Sailing",
    "total": 1,
    "year": 2000
  },
  {
    "age": 36,
    "athlete": "Herman Horn Johannessen",
    "bronze": 1,
    "country": "Norway",
    "date": "01/10/2000",
    "gold": 0,
    "silver": 0,
    "sport": "Sailing",
    "total": 1,
    "year": 2000
  },
  {
    "age": 32,
    "athlete": "Espen Stokkeland",
    "bronze": 1,
    "country": "Norway",
    "date": "01/10/2000",
    "gold": 0,
    "silver": 0,
    "sport": "Sailing",
    "total": 1,
    "year": 2000
  },
  {
    "age": 32,
    "athlete": "Olaf Tufte",
    "bronze": 0,
    "country": "Norway",
    "date": "24/08/2008",
    "gold": 1,
    "silver": 0,
    "sport": "Rowing",
    "total": 1,
    "year": 2008
  },
  {
    "age": 28,
    "athlete": "Olaf Tufte",
    "bronze": 0,
    "country": "Norway",
    "date": "29/08/2004",
    "gold": 1,
    "silver": 0,
    "sport": "Rowing",
    "total": 1,
    "year": 2004
  },
  {
    "age": 25,
    "athlete": "Fredrik Bekken",
    "bronze": 0,
    "country": "Norway",
    "date": "01/10/2000",
    "gold": 0,
    "silver": 1,
    "sport": "Rowing",
    "total": 1,
    "year": 2000
  },
  {
    "age": 24,
    "athlete": "Olaf Tufte",
    "bronze": 0,
    "country": "Norway",
    "date": "01/10/2000",
    "gold": 0,
    "silver": 1,
    "sport": "Rowing",
    "total": 1,
    "year": 2000
  },
  {
    "age": 33,
    "athlete": "Karina Bryant",
    "bronze": 1,
    "country": "Great Britain",
    "date": "12/08/2012",
    "gold": 0,
    "silver": 0,
    "sport": "Judo",
    "total": 1,
    "year": 2012
  },
  {
    "age": 25,
    "athlete": "Gemma Gibbons",
    "bronze": 0,
    "country": "Great Britain",
    "date": "12/08/2012",
    "gold": 0,
    "silver": 1,
    "sport": "Judo",
    "total": 1,
    "year": 2012
  },
  {
    "age": 22,
    "athlete": "Antoine Valois-Fortier",
    "bronze": 1,
    "country": "Canada",
    "date": "12/08/2012",
    "gold": 0,
    "silver": 0,
    "sport": "Judo",
    "total": 1,
    "year": 2012
  },
  {
    "age": 28,
    "athlete": "Nicolas Gill",
    "bronze": 0,
    "country": "Canada",
    "date": "01/10/2000",
    "gold": 0,
    "silver": 1,
    "sport": "Judo",
    "total": 1,
    "year": 2000
  },
  {
    "age": 27,
    "athlete": "Kate Howey",
    "bronze": 0,
    "country": "Great Britain",
    "date": "01/10/2000",
    "gold": 0,
    "silver": 1,
    "sport": "Judo",
    "total": 1,
    "year": 2000
  },
  {
    "age": 22,
    "athlete": "Kyle Shewfelt",
    "bronze": 0,
    "country": "Canada",
    "date": "29/08/2004",
    "gold": 1,
    "silver": 0,
    "sport": "Gymnastics",
    "total": 1,
    "year": 2004
  },
  {
    "age": 33,
    "athlete": "Hedda Berntsen",
    "bronze": 0,
    "country": "Norway",
    "date": "28/02/2010",
    "gold": 0,
    "silver": 1,
    "sport": "Freestyle Skiing",
    "total": 1,
    "year": 2010
  },
  {
    "age": 33,
    "athlete": "Audun Grønvold",
    "bronze": 1,
    "country": "Norway",
    "date": "28/02/2010",
    "gold": 0,
    "silver": 0,
    "sport": "Freestyle Skiing",
    "total": 1,
    "year": 2010
  },
  {
    "age": 32,
    "athlete": "Kari Traa",
    "bronze": 0,
    "country": "Norway",
    "date": "26/02/2006",
    "gold": 0,
    "silver": 1,
    "sport": "Freestyle Skiing",
    "total": 1,
    "year": 2006
  },
  {
    "age": 28,
    "athlete": "Kari Traa",
    "bronze": 0,
    "country": "Norway",
    "date": "24/02/2002",
    "gold": 1,
    "silver": 0,
    "sport": "Freestyle Skiing",
    "total": 1,
    "year": 2002
  },
  {
    "age": 25,
    "athlete": "Bartosz Piasecki",
    "bronze": 0,
    "country": "Norway",
    "date": "12/08/2012",
    "gold": 0,
    "silver": 1,
    "sport": "Fencing",
    "total": 1,
    "year": 2012
  },
  {
    "age": 55,
    "athlete": "Mac Cone",
    "bronze": 0,
    "country": "Canada",
    "date": "24/08/2008",
    "gold": 0,
    "silver": 1,
    "sport": "Equestrian",
    "total": 1,
    "year": 2008
  },
  {
    "age": 45,
    "athlete": "Jill Henselwood",
    "bronze": 0,
    "country": "Canada",
    "date": "24/08/2008",
    "gold": 0,
    "silver": 1,
    "sport": "Equestrian",
    "total": 1,
    "year": 2008
  },
  {
    "age": 61,
    "athlete": "Ian Millar",
    "bronze": 0,
    "country": "Canada",
    "date": "24/08/2008",
    "gold": 0,
    "silver": 1,
    "sport": "Equestrian",
    "total": 1,
    "year": 2008
  },
  {
    "age": 18,
    "athlete": "Tom Daley",
    "bronze": 1,
    "country": "Great Britain",
    "date": "12/08/2012",
    "gold": 0,
    "silver": 0,
    "sport": "Diving",
    "total": 1,
    "year": 2012
  },
  {
    "age": 26,
    "athlete": "Leon Taylor",
    "bronze": 0,
    "country": "Great Britain",
    "date": "29/08/2004",
    "gold": 0,
    "silver": 1,
    "sport": "Diving",
    "total": 1,
    "year": 2004
  },
  {
    "age": 23,
    "athlete": "Peter Waterfield",
    "bronze": 0,
    "country": "Great Britain",
    "date": "29/08/2004",
    "gold": 0,
    "silver": 1,
    "sport": "Diving",
    "total": 1,
    "year": 2004
  },
  {
    "age": 25,
    "athlete": "Alexander Kristoff",
    "bronze": 1,
    "country": "Norway",
    "date": "12/08/2012",
    "gold": 0,
    "silver": 0,
    "sport": "Cycling",
    "total": 1,
    "year": 2012
  },
  {
    "age": 31,
    "athlete": "Gunn Rita Dahle-Flesjå",
    "bronze": 0,
    "country": "Norway",
    "date": "29/08/2004",
    "gold": 1,
    "silver": 0,
    "sport": "Cycling",
    "total": 1,
    "year": 2004
  },
  {
    "age": 22,
    "athlete": "Chandra Crawford",
    "bronze": 0,
    "country": "Canada",
    "date": "26/02/2006",
    "gold": 1,
    "silver": 0,
    "sport": "Cross Country Skiing",
    "total": 1,
    "year": 2006
  },
  {
    "age": 29,
    "athlete": "Sara Renner",
    "bronze": 0,
    "country": "Canada",
    "date": "26/02/2006",
    "gold": 0,
    "silver": 1,
    "sport": "Cross Country Skiing",
    "total": 1,
    "year": 2006
  },
  {
    "age": 31,
    "athlete": "Beckie Scott",
    "bronze": 0,
    "country": "Canada",
    "date": "26/02/2006",
    "gold": 0,
    "silver": 1,
    "sport": "Cross Country Skiing",
    "total": 1,
    "year": 2006
  },
  {
    "age": 27,
    "athlete": "Beckie Scott",
    "bronze": 0,
    "country": "Canada",
    "date": "24/02/2002",
    "gold": 1,
    "silver": 0,
    "sport": "Cross Country Skiing",
    "total": 1,
    "year": 2002
  },
  {
    "age": 27,
    "athlete": "Gail Emms",
    "bronze": 0,
    "country": "Great Britain",
    "date": "29/08/2004",
    "gold": 0,
    "silver": 1,
    "sport": "Badminton",
    "total": 1,
    "year": 2004
  },
  {
    "age": 27,
    "athlete": "Nathan Robertson",
    "bronze": 0,
    "country": "Great Britain",
    "date": "29/08/2004",
    "gold": 0,
    "silver": 1,
    "sport": "Badminton",
    "total": 1,
    "year": 2004
  },
  {
    "age": 27,
    "athlete": "Simon Archer",
    "bronze": 1,
    "country": "Great Britain",
    "date": "01/10/2000",
    "gold": 0,
    "silver": 0,
    "sport": "Badminton",
    "total": 1,
    "year": 2000
  },
  {
    "age": 27,
    "athlete": "Joanne Wright-Goode",
    "bronze": 1,
    "country": "Great Britain",
    "date": "01/10/2000",
    "gold": 0,
    "silver": 0,
    "sport": "Badminton",
    "total": 1,
    "year": 2000
  },
  {
    "age": 22,
    "athlete": "Derek Drouin",
    "bronze": 1,
    "country": "Canada",
    "date": "12/08/2012",
    "gold": 0,
    "silver": 0,
    "sport": "Athletics",
    "total": 1,
    "year": 2012
  },
  {
    "age": 25,
    "athlete": "Priscilla Lopes-Schliep",
    "bronze": 1,
    "country": "Canada",
    "date": "24/08/2008",
    "gold": 0,
    "silver": 0,
    "sport": "Athletics",
    "total": 1,
    "year": 2008
  },
  {
    "age": 32,
    "athlete": "Alison Williamson",
    "bronze": 1,
    "country": "Great Britain",
    "date": "29/08/2004",
    "gold": 0,
    "silver": 0,
    "sport": "Archery",
    "total": 1,
    "year": 2004
  }
]

export default data;
