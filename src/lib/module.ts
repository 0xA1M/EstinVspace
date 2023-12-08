export type Module = {
  img: string;
  name: string;
  link: string;
};

export type Modules = Module[];

export type Specialty = {
  specialtyName: string;
  modules: Modules;
};

export type Specialties = Specialty[];

export type Level = {
  level: string;
  specialty?: boolean;
  semesters: (Modules | Specialties)[];
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
          name: "Elecf 2",
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
  {
    level: "1CS",
    semesters: [
      [
        {
          img: "",
          name: "reseau",
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
  {
    level: "2CS",
    specialty: true,
    semesters: [
      [
        {
          img: "",
          name: "Cloud",
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
          specialtyName: "AI",
          modules: [
            {
              img: "",
              name: "Neural Networks",
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
        },
        {
          specialtyName: "CyberSec",
          modules: [
            {
              img: "",
              name: "CCNA",
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
        },
      ],
    ],
  },
  {
    level: "3CS",
    specialty: true,
    semesters: [
      [
        {
          specialtyName: "AI",
          modules: [
            {
              img: "",
              name: "Neural Networks",
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
        },
        {
          specialtyName: "CyberSec",
          modules: [
            {
              img: "",
              name: "CCNA",
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
        },
      ],
      [
        {
          specialtyName: "AI",
          modules: [
            {
              img: "",
              name: "Neural Networks",
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
        },
        {
          specialtyName: "CyberSec",
          modules: [
            {
              img: "",
              name: "CCNA",
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
        },
      ],
    ],
  },
];
