const EXAMPLE_NOTE_POST_REQUEST = {
    content: "new note",
    important: true,
};
const EXAMPLE_USER_POST_REQUEST = {
    username: "username",
    name: "Username",
    password: "username",
};

const DEPLOY_URI = "https://vast-escarpment-72140.herokuapp.com";
const BASE_URI = `${DEPLOY_URI}/api`;
const NOTES_URI = `${DEPLOY_URI}/api/notes`;
const USERS_URI = `${DEPLOY_URI}/api/users`;
// const BASE_URI = "http://localhost:3001/api";
// const NOTES_URI = "http://localhost:3001/api/notes";
// const USERS_URI = "http://localhost:3001/api/users";

const HEADER = {
    "Content-Type": "application/json",
    Authorization: "",
};
