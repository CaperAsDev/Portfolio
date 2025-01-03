export const hero = {
  en: {
    bio: "I am a web developer passionate about crafting innovative digital experiences. With over two years of experience in frontend development, I provide creative and efficient solutions while staying current with the latest technological trends.",
    profile: "Frontend Web Developer"
  },
  es: {
    bio: " Soy un desarrollador web apasionado por crear experiencias digitales innovadoras. Con +2 años de experiencia en frontend, ofrezco soluciones creativas y eficientes, siempre manteniéndome al día últimas tendencias tecnológicas.",
    profile: "Desarrollador Web Frontend"
  }
} as const

export const nav = {
  en: {
    links: [
      {
        title: "About",
        link: "/en/about/"
      },
      {
        title: "Home",
        link: "/en/"
      }
    ],
    contact: {
      title: "Contact",
      link: "#"
    },
},
  es: {
    links: [
      {
        title: "Sobre mi",
        link: "/about/"
      },
      {
        title: "Inicio",
        link: "/"
      }
    ],
    contact:{
      title: "Contacto",
      link: "#"
    }
  }
}

export const about = {
  flags: {
    es: [
      ['📌', "Diseñador industrial"," por " ,"Elección"],
      ['💘', "Ilustrador"," por " , "Pasión"],
      ['🧩', "Programador"," por " , "Curiosidad"],
      ['🙈', "Humano"," por " , "Defecto"]
    ],
    en: [
      ['📌', "Industrial Designer", " by ", "Choice"],
      ['💘', "Illustrator", " by ", "Passion"],
      ['🧩', "Programmer", " by ", "Curiosity"],
      ['🙈', "Human", " by ", "Default"]
    ]
  },
}

export const footer = {
  credits : {
    es: 'Diseñado y desarrollado por',
    en: 'Designed and developed by'
  }
}
