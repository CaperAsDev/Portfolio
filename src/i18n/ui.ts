export const hero = {
  en: {
    bio: "I am a web developer passionate about crafting innovative digital experiences. With over two years of experience in frontend development, I provide creative and efficient solutions while staying current with the latest technological trends.",
    profile: "Web Developer"
  },
  es: {
    bio: " Soy un desarrollador web apasionado por crear experiencias digitales innovadoras. Con +2 años de experiencia en frontend, ofrezco soluciones creativas y eficientes, siempre manteniéndome al día últimas tendencias tecnológicas.",
    profile: "Desarrollador Web"
  }
} as const

export const nav = {
  en: {
    links: [
      {
        title: "About",
        link: "/en/about"
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
        link: "/about"
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

export const homeSections = {
  projects: {
    en: {
      title: "Projects",
      text: [""]
    },
    es: {
      title: "Proyectos",
      text: ["A continuacion presento una breve seleccion de los proyectos que yo considero mas relevantes"]
    }
  },
  hardSkills: {
    en: {
      title: "Hard Skills",
      text: [""]
    },
    es: {
      title: "Habilidades Duras",
      text: [""]
    }
  },
  softSkills: {
    en: {
      title: "Soft Skills",
      text: [
        ["hola", {strong: 'soft skills'}, "esto es un texto de prueba"]
      ]
    },
    es: {
      title: "Habilidades Blandas",
      text: [""]
    }
  }
}