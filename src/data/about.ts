// "Sobre mim" section on the home page: my story in a few paragraphs plus a
// few posts about what I'm into, each tied back to engineering.
// Photos live in public/img/about.

type L = { pt: string; en: string };

export interface Interest {
  key: string;
  title: L;
  caption: L;
  img: { src: string; width: number; height: number; alt: L };
  href?: string;
}

export const about = {
  photo: {
    src: "/img/about/eu.webp",
    width: 800,
    height: 1422,
    alt: { pt: "Christian sentado num muro, com plantas e um coqueiro ao fundo", en: "Christian sitting on a low wall, with plants and a palm tree behind him" },
  },
  lead: {
    pt: "Meu nome é Christian, tenho 22 anos e sou de São Paulo.",
    en: "My name is Christian, I'm 22 and I'm from São Paulo, Brazil.",
  },
  body: {
    pt: [
      "Atuo há 3 anos com desenvolvimento de software e sou tecnólogo em Análise e Desenvolvimento de Sistemas pela Universidade de Marília. Ainda na faculdade, ganhei o hackathon da Pedbot. Foi lá que comecei como estagiário e, em 2 anos, virei desenvolvedor pleno.",
      "Meu principal projeto foi a MarIA, agente de vendas com IA que operou nos maiores players do varejo farmacêutico, com mais de 1.000 conversas por dia e 10% de conversão em pedidos pagos. Trabalhei nela de ponta a ponta, dos fluxos em LangGraph aos microsserviços em NestJS e RabbitMQ, e o case foi apresentado no Abrafarma Future Trends 2025.",
      "Hoje sou full stack pleno na Funcional Health Tech, construindo uma aplicação web de saúde com NestJS e React. Os produtos da página de projetos eu construí sozinho, do banco de dados ao app publicado.",
    ],
    en: [
      "I've been building software for 3 years and I hold an associate degree in Systems Analysis and Development from Universidade de Marília. While still in college, I won Pedbot's hackathon. That's where I started as an intern and, within 2 years, became a mid-level developer.",
      "My main project was MarIA, an AI sales agent that ran at the largest players in pharmaceutical retail, with 1,000+ conversations a day and a 10% paid-order conversion rate. I worked on it end to end, from the LangGraph flows to the NestJS and RabbitMQ microservices, and the case was presented at Abrafarma Future Trends 2025.",
      "Today I'm a mid-level full stack developer at Funcional Health Tech, building a healthcare web app with NestJS and React. The products on the projects page I built solo, from the database to the shipped app.",
    ],
  },
  interests: [
    {
      key: "academia",
      title: { pt: "Academia", en: "Gym" },
      caption: {
        pt: "Progressão de carga é igual a refatorar: um pouco melhor a cada dia, sem quebrar nada.",
        en: "Progressive overload is like refactoring: a little better every day, without breaking anything.",
      },
      img: {
        src: "/img/about/academia.webp",
        width: 700,
        height: 1260,
        alt: { pt: "Selfie no espelho da academia, com camisa do Brasil", en: "Mirror selfie at the gym, wearing a Brazil jersey" },
      },
    },
    {
      key: "luta",
      title: { pt: "Luta", en: "Fight training" },
      caption: {
        pt: "Pede foco total, do mesmo jeito que depurar um bug em produção.",
        en: "It takes full focus, the same way debugging a production bug does.",
      },
      img: {
        src: "/img/about/luta.webp",
        width: 700,
        height: 1233,
        alt: { pt: "Treino de luta com luvas e caneleiras num tatame", en: "Sparring with gloves and shin guards on a mat" },
      },
    },
    {
      key: "viagem",
      title: { pt: "Viagem", en: "Travel" },
      caption: {
        pt: "Viajar é o meu garbage collector: libera espaço na cabeça pra caber ideia nova.",
        en: "Traveling is my garbage collector: it frees up space in my head for new ideas.",
      },
      img: {
        src: "/img/about/viagem.webp",
        width: 800,
        height: 1067,
        alt: { pt: "Estrada entre morros com mata e céu nublado", en: "A road between forested hills under a cloudy sky" },
      },
    },
    {
      key: "codigo",
      title: { pt: "Programação", en: "Programming" },
      caption: {
        pt: "Luz baixa, teclado aceso e um problema de cada vez. É aqui que ideia vira produto.",
        en: "Low light, glowing keys and one problem at a time. This is where ideas become products.",
      },
      img: {
        src: "/img/about/codigo.webp",
        width: 700,
        height: 1238,
        alt: { pt: "Notebook com teclado vermelho aceso e código na tela, numa sala escura", en: "Laptop with a glowing red keyboard and code on screen, in a dark room" },
      },
      href: "projects",
    },
  ] as Interest[],
};
