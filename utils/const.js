const EXAMPLE_NOTE_REQUEST = {
    content: "new note",
    important: true,
    userId: "61d3875c555ed6bdfaa4f978",
};
const EXAMPLE_USER_REQUEST = {
    username: "username",
    name: "Username",
    password: "generic_password",
};

const BASE_URI = "http://localhost:3001/api";
const NOTES_URI = "http://localhost:3001/api/notes";
const USERS_URI = "http://localhost:3001/api/users";

const HEADER = {
    "Content-Type": "application/json",
    Authorization: "",
};
