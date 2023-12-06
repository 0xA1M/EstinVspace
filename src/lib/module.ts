export type Module = {
  img: string;
  name: string;
  link: string;
};

export type Modules = Module[];

export type Level = {
  level: string;
  semesters: Modules[];
};

export const Levels: Level[] = [
  {
    level: "1CP",
    semesters: [
      [
        {
          img: "",
          name: "Analyse 1",
          link: "https://google.com/",
        },
        {
          img: "",
          name: "Algebre 1",
          link: "https://google.com/",
        },
        {
          img: "",
          name: "Algo 1",
          link: "https://google.com/",
        },
        {
          img: "",
          name: "Archi 1",
          link: "https://google.com/",
        },
        {
          img: "",
          name: "Elect 1",
          link: "https://google.com/",
        },
        {
          img: "",
          name: "BTW 1",
          link: "https://google.com/",
        },
        {
          img: "",
          name: "SE 1",
          link: "https://google.com/",
        },
      ],
      [
        {
          img: "",
          name: "Analyse 2",
          link: "https://google.com/",
        },
        {
          img: "",
          name: "Analyse 2",
          link: "https://google.com/",
        },
        {
          img: "",
          name: "Analyse 2",
          link: "https://google.com/",
        },
        {
          img: "",
          name: "Analyse 2",
          link: "https://google.com/",
        },
        {
          img: "",
          name: "Analyse 2",
          link: "https://google.com/",
        },
        {
          img: "",
          name: "Analyse 2",
          link: "https://google.com/",
        },
        {
          img: "",
          name: "Analyse 2",
          link: "https://google.com/",
        },
      ],
    ],
  },
  {
    level: "2CP",
    semesters: [
      [
        {
          img: "",
          name: "Analyse 3",
          link: "https://google.com/",
        },
        {
          img: "",
          name: "Analyse 3",
          link: "https://google.com/",
        },
        {
          img: "",
          name: "Analyse 3",
          link: "https://google.com/",
        },
        {
          img: "",
          name: "Analyse 3",
          link: "https://google.com/",
        },
        {
          img: "",
          name: "Analyse 3",
          link: "https://google.com/",
        },
        {
          img: "",
          name: "Analyse 3",
          link: "https://google.com/",
        },
        {
          img: "",
          name: "Analyse 3",
          link: "https://google.com/",
        },
      ],
      [
        {
          img: "",
          name: "Analyse 4",
          link: "https://google.com/",
        },
        {
          img: "",
          name: "Analyse 4",
          link: "https://google.com/",
        },
        {
          img: "",
          name: "Analyse 4",
          link: "https://google.com/",
        },
        {
          img: "",
          name: "Analyse 4",
          link: "https://google.com/",
        },
        {
          img: "",
          name: "Analyse 4",
          link: "https://google.com/",
        },
        {
          img: "",
          name: "Analyse 4",
          link: "https://google.com/",
        },
        {
          img: "",
          name: "Analyse 4",
          link: "https://google.com/",
        },
      ],
    ],
  },
];
