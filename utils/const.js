const EXAMPLE_NOTE_POST_REQUEST = {
    content: "new note",
    important: true,
};
const EXAMPLE_USER_POST_REQUEST = {
    username: "username",
    name: "Username",
    password: "username",
};

const BASE_URI = "https://vast-escarpment-72140.herokuapp.com/api";
const NOTES_URI = `${BASE_URI}/notes`;
const USERS_URI = `${BASE_URI}/users`;
// const BASE_URI = "http://localhost:3001/api";
// const NOTES_URI = "http://localhost:3001/api/notes";
// const USERS_URI = "http://localhost:3001/api/users";

const HEADER = {
    "Content-Type": "application/json",
    Authorization: "",
};

const TEXTS = {
    "#home": {
        selector: "#home",
        es: "INICIO",
        en: "HOME",
    },
    "#skills": {
        selector: "#skills",
        es: "TECNOLOGÍAS",
        en: "TECHNOLOGIES",
    },
    "#proyects": {
        selector: "#proyects",
        es: "PROYECTOS",
        en: "PROYECTS",
    },
    "#api-tester": {
        selector: "#api-tester",
        es: "PROBAR APIs",
        en: "TEST APIs",
    },
    ".home-text-1": {
        es: "Hola. Mi nombre es",
        en: "Hi. My name is",
    },
    ".home-text-3": {
        es: "Soy Desarrollador Backend Jr.",
        en: "I'm a Jr. Backend Developer",
    },
    ".home-text-4": {
        es: "Soy estudiante de Ingeniería Electrónica y disfruto programar.",
        en: "I'm a Electronic Engineering student and I enjoy programming.",
    },
    ".home-text-5": {
        es: "Estoy en busca de mi primer trabajo como Desarrollador de Software.",
        en: "I'm looking for my first job as Software Developer.",
    },
    ".section-text-1": {
        es: "Tecnologías",
        en: "Technologies",
    },
    ".section-text-2": {
        es: "Lo que he usado hasta este momento",
        en: "What I use",
    },
    ".section-text-3": {
        es: "Lo que me gustaría aprender en un futuro",
        en: "What I would like to learn",
    },
    ".proyects-text-1": {
        es: "Proyectos",
        en: "Proyects",
    },
    ".proyects-text-2": {
        es: "API REST de notas con Autorización. Basada en 'Free Fullstack Bootcamp' de ",
        en: "Modified Code-along RESTful API with Authorization made in the 'Free Fullstack Bootcamp' by",
    },
    ".proyects-text-3": {
        es: "Ver código",
        en: "View Code",
    },
    ".proyects-text-4": {
        es: "Probar API",
        en: "Test API",
    },
    ".proyects-text-5": {
        es: "Proyecto final (Code-along) del 'The Web Development Bootcamp' de ",
        en: "Code-along final proyect of 'The Web Development Bootcamp' by ",
    },
    ".proyects-text-6": {
        es: "Ir al sitio",
        en: "Go to site",
    },
    ".proyects-text-7": {
        es: "Página basada en Twitter enfocada a IT.",
        en: "App based on Twitter with few functionalities.",
    },
    ".tester-text-1": {
        es: "Probador APIs",
        en: "APIs Tester",
    },
    ".tester-text-2": {
        es: "Por ahora el probador de APIs no está disponible en dispositivos móviles.",
        en: "For now the API Tester it is not available on mobile devices.",
    },
    ".tester-text-3": {
        es: "En el campo de request.body (izquierda), los datos deben ser escritos con formato JSON (con los keys entre comillas dobles y sin comas finales). Se pueden encontrar ejemplos de usos en README.md -> ",
        en: "In the request field (left), the data needs to be written in JSON format (with keys between double quotes and without trailing commas). Test cases can be found in README.md -> ",
    },
    ".tester-text-4": {
        es: "Para poder utilizar el probador de API con usuario creado recientemente, su usuario y contraseña deberán ser la misma.",
        en: "For a newly created user to be used in this API Tester, his username and password must be the same.",
    },
    ".tester-text-5": {
        es: "Notas",
        en: "Notes",
    },
    ".tester-text-6": {
        es: "Endpoints disponibles ",
        en: "Available endpoints ",
    },
    ".tester-text-7": {
        es: "Documentación",
        en: "Documentation",
    },
    ".tester-text-8": {
        es: "Usuarios",
        en: "Users",
    },
    ".tester-text-9": {
        es: "Recargar usuarios",
        en: "Reload users",
    },
    ".tester-text-10": {
        es: "Seleccionar usuario",
        en: "Select user",
    },
};
