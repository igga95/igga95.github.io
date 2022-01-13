const EXAMPLE_NOTE_POST_REQUEST = {
    content: "new note",
    important: true,
};
const EXAMPLE_USER_POST_REQUEST = {
    username: "username",
    name: "Username",
    password: "username",
};

const BASE_URI = "http://localhost:3001/api";
const NOTES_URI = "http://localhost:3001/api/notes";
const USERS_URI = "http://localhost:3001/api/users";

const HEADER = {
    "Content-Type": "application/json",
    Authorization: "",
};
