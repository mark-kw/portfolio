import Design4Green from './images/design4green.gif'
import chatbot from './images/chatbot.gif'
import flickr from './images/flickr.gif'

export const projects = [
    {
        title: "Design4green",
        subtitle: "HTML-JS-CSS",
        description:
            "Réalisation d'un site web eco responsable, un pas vers le Numerique Responsable",
        image: Design4Green,
        link: "https://github.com/mark-kw/Design4Green",
    },
    {
        title: "ChatBot",
        subtitle: "React-redux",
        description:
            "Réalisation d'un chat bot avec l'utilisation de la bibliotheque redux",
        image: chatbot,
        link: "https://github.com/mark-kw/Chatbot/tree/master/mon-app",
    },
    {
        title: "Google Photo Flickt",
        subtitle: "Angular",
        description:
            "Réalisation d'un google photo en angular en utilisant l'api flickr.",
        image: flickr,
        link: "https://github.com/mark-kw/flickr/tree/master/Projet",
    },
    // {
    //     title: "Epic Todo App",
    //     subtitle: "React Hooks",
    //     description:
    //         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
    //     image: "./project-4.gif",
    //     link: "https://pythonbootcamp.com",
    // },
];

export const skills = [
    "Web", "Programmation", "Base de données", "Mobile"
]

export const moreSkills = [
    {
        skill: 'Web',
        detail: ["react-angular", "php", "html-css-js", "wix-wordpress"]
    }, {
        skill: 'Programmation',
        detail: ["java", "C", "python"]
    }, {
        skill: 'Base de données',
        detail: ["SQL", "MariaDB", "Mongodb",]
    }, {
        skill: 'Mobile',
        detail: ["ios", "android", "flutter",]
    }
]