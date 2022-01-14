"use strict";

const apiNotes = document.querySelector("#api-tester-tabs-notes");

const notesBtn = document.querySelector("#api-notes-notes");
const usersBtn = document.querySelector("#api-notes-users");
const reloadUsersBtn = document.querySelector("#api-notes-reload-users");
const usersDropdownLeyend = document.querySelector("#api-notes-users-leyend");
const usersDropdownContent = document.querySelector("#api-notes-users-content");

const getAllBtn = document.querySelector("#get-all");
const getOneBtn = document.querySelector("#get-one");
const postBtn = document.querySelector("#post");
const putBtn = document.querySelector("#put");
const delBtn = document.querySelector("#delete");

const uriField = document.querySelector("#uri");
const idField = document.querySelector("#resource-id");

const apiReqTextarea = document.querySelector("#api-request");
const apiResTextarea = document.querySelector("#api-response");

let bearerToken = null;

const cleanTextarea = (el) => (el.value = "");

const printTextarea = (el, data) => (el.value = JSON.stringify(data, undefined, 4));

const sendReq = async (args) => {
    const { method = "get", uri = "", id = "", data = {}, headers = { "Content-Type": "application/json" } } = args;
    try {
        const res = await axios({
            method,
            url: `${uri}/${id}`,
            data,
            headers,
        });
        return res.data;
    } catch (err) {
        const { response } = err;
        return response.data;
    }
};

const requestWrapper = async (btn, args) => {
    try {
        btn.classList.add("is-success");
        btn.classList.add("is-loading");
        const data = await sendReq(args);
        btn.classList.remove("is-loading");
        btn.classList.remove("is-success");
        cleanTextarea(apiResTextarea);
        if (btn !== delBtn) printTextarea(apiResTextarea, data);
    } catch (err) {
        btn.classList.remove("is-loading");
        btn.classList.remove("is-success");
        cleanTextarea(apiResTextarea);
        printTextarea(apiResTextarea, "api conection error");
    }
};

const idCheck = () => {
    if (!idField.value) {
        cleanTextarea(apiResTextarea);
        printTextarea(apiResTextarea, "id field empty");
        return false;
    }
    return true;
};

const createEventsUsers = () => {
    const aElements = document.querySelectorAll("#api-notes-users-content .dropdown-item");
    aElements.forEach((el) => {
        el.addEventListener("click", async () => {
            usersDropdownLeyend.innerText = el.innerText;
            const { token } = await sendReq({ method: "post", uri: `${BASE_URI}/login`, data: { username: el.innerText, password: el.innerText } });
            HEADER.Authorization = `Bearer ${token}`;
        });
    });
};

const removeUsers = () => {
    const aElements = document.querySelectorAll("#users-dropdown-content .dropdown-item");
    aElements.forEach((el) => {
        el.remove();
    });
};

const createUsersDropdown = async () => {
    removeUsers();
    const loginData = await sendReq({ method: "get", uri: `${BASE_URI}/users` });
    loginData.forEach((user) => {
        const aElement = document.createElement("a");
        aElement.setAttribute("id", user.username);
        aElement.classList.add("dropdown-item");
        aElement.innerText = user.username;
        usersDropdownContent.appendChild(aElement);
    });
    createEventsUsers();
};

addEventListener("DOMContentLoaded", () => {
    uriField.value = NOTES_URI;
    apiReqTextarea.value = JSON.stringify(EXAMPLE_NOTE_POST_REQUEST, undefined, 4);
    createUsersDropdown();
});

reloadUsersBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    createUsersDropdown();
});

notesBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    uriField.value = NOTES_URI;
    apiReqTextarea.value = JSON.stringify(EXAMPLE_NOTE_POST_REQUEST, undefined, 4);
    notesBtn.classList.add("is-success");
    notesBtn.classList.remove("is-info");
    usersBtn.classList.add("is-info");
    usersBtn.classList.remove("is-success");
    getOneBtn.removeAttribute("disabled", "");
    putBtn.removeAttribute("disabled", "");
    delBtn.removeAttribute("disabled", "");
    cleanTextarea(apiResTextarea);
});

usersBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    uriField.value = USERS_URI;
    apiReqTextarea.value = JSON.stringify(EXAMPLE_USER_POST_REQUEST, undefined, 4);
    usersBtn.classList.add("is-success");
    usersBtn.classList.remove("is-info");
    notesBtn.classList.add("is-info");
    notesBtn.classList.remove("is-success");
    getOneBtn.setAttribute("disabled", "");
    putBtn.setAttribute("disabled", "");
    delBtn.setAttribute("disabled", "");
    cleanTextarea(apiResTextarea);
});

getAllBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    await requestWrapper(getAllBtn, { method: "get", uri: uriField.value, headers: HEADER });
});

getOneBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    if (idCheck()) await requestWrapper(getOneBtn, { method: "get", uri: uriField.value, id: idField.value, headers: HEADER });
});

postBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    await requestWrapper(postBtn, { method: "post", uri: uriField.value, data: JSON.parse(apiReqTextarea.value), headers: HEADER });
});

putBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    if (idCheck()) await requestWrapper(putBtn, { method: "put", uri: uriField.value, id: idField.value, data: JSON.parse(apiReqTextarea.value), headers: HEADER });
});

delBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    if (idCheck()) await requestWrapper(delBtn, { method: "delete", uri: uriField.value, id: idField.value, headers: HEADER });
});
