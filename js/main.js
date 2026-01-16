// Language change button
const translations = {
  en: {
    habout: "About me",
    about: "As a dedicated Computer Engineering student at the Faculty of Sciences of the University of Lisbon, I am currently in the final stages of completing my Bachelors degree. My academic journey is a reflection of my deep-seated passion for technology and programming, where I immerse myself in the world of coding and software development. Beyond my studies, I also nurture a love for music which not only inspires me but also enriches my social engagements through various activities and collaborations. Balancing these diverse interests allows me to thrive both intellectually and creatively, making my university experience truly fulfilling.",
    facts: "Some interesting facts",
    languages: "Languages: Portuguese (Native) | English (Fluent) | French (Intermediate) | Spanish (Intermediate)",
    origin: "Originally from: Benedita, Alcobaça (Portugal)",
    funfact: "Would like to: Travel the world with just a backpack and some friends",
    fueled: "Fueled by: coffee and a curiosity for how things work",
    hinfo: "Basic information",
    name: "Full name",
    education: "Higher Education",
    dob: "Date of Birth",
    citizenship: "Citizenship",
    address: "Where I currently live",
    curso: "Bachelor's Degree"
    },
  pt: {
    habout: "Sobre mim",
    about: "Como estudante de Engenharia Informática na Faculdade de Ciências da Universidade de Lisboa, encontro-me atualmente na fase final da minha licenciatura. O meu percurso académico reflete a minha paixão por tecnologia e programação, onde me aprofundo no mundo do desenvolvimento de software. Para além dos meus estudos, também dedico o meu tempo à música, que não só me inspira, como também me enriquece os meus compromissos sociais através de várias atividades e colaborações. Equilibrar estes interesses diversos permite-me prosperar tanto intelectual como criativamente, tornando a minha experiência universitária mais completa e memorável.",
    facts: "Alguns factos sobre mim",
    languages: "Línguas: Português (Nativo) | Inglês (Fluente) | Francês (Intermédio) | Espanhol (Intermédio)",
    origin: "Terra natal: Benedita, Alcobaça (Portugal)",
    funfact: "Gostaria de: Conhecer vários países com amigos, apenas de mochila às costas e uma câmera",
    fueled: "Motivação: café e necessidade de saber como as coisas funcionam",
    hinfo: "Dados básicos",
    name: "Nome completo",
    education: "Grau mais alto de educação",
    dob: "Data de nascimento",
    citizenship: "Cidadania",
    address: "Onde estou a morar",
    curso: "Licenciatura (Engenharia Informática)"
    }
};

function changeLanguage(lang) {
  const elementsToTranslate = document.querySelectorAll('[id]');
  
  elementsToTranslate.forEach(element => {
    const key = element.id;
    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });
}
