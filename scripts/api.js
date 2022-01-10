const apiNoUsersOpt = document.querySelector("#api-no-users");
const apiUsersOpt = document.querySelector("#api-users");

const notesBtn = document.querySelector("#notes");
const usersBtn = document.querySelector("#users");
const usersDropdownLeyend = document.querySelector("#users-dropdown-leyend");
const usersDropdownContainer = document.querySelector("#container-api-dropdown-users");
const usersDropdownContent = document.querySelector("#users-dropdown-content");

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
    const aElements = document.querySelectorAll("#users-dropdown-content .dropdown-item");
    console.log(aElements);

    aElements.forEach((el) => {
        el.addEventListener("click", async () => {
            usersDropdownLeyend.innerText = el.innerText;
            console.log(el.innerText);
            const { token } = await sendReq({ method: "post", uri: `${BASE_URI}/login`, data: { username: el.innerText, password: el.innerText } });
            console.log(token);
            HEADER.Authorization = `Bearer ${token}`;
        });
    });
};

addEventListener("DOMContentLoaded", () => {
    uriField.value = NOTES_URI;
    apiReqTextarea.value = JSON.stringify(EXAMPLE_NOTE_REQUEST, undefined, 4);
});

apiNoUsersOpt.addEventListener("click", (e) => {
    apiNoUsersOpt.classList.add("is-active");
    apiUsersOpt.classList.remove("is-active");
    usersDropdownContainer.classList.add("is-hidden");
    HEADER.Authorization = "";
});

apiUsersOpt.addEventListener("click", async (e) => {
    apiUsersOpt.classList.add("is-active");
    apiNoUsersOpt.classList.remove("is-active");
    usersDropdownContainer.classList.remove("is-hidden");
    const loginData = await sendReq({ method: "get", uri: `${BASE_URI}/users` });
    cleanTextarea(apiResTextarea);
    printTextarea(apiResTextarea, loginData);
    loginData.forEach((user) => {
        const aElement = document.createElement("a");
        aElement.setAttribute("id", user.username);
        aElement.classList.add("dropdown-item");
        aElement.innerText = user.username;
        usersDropdownContent.appendChild(aElement);
    });
    createEventsUsers();
});

notesBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    uriField.value = NOTES_URI;
    apiReqTextarea.value = JSON.stringify(EXAMPLE_NOTE_REQUEST, undefined, 4);
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
    apiReqTextarea.value = JSON.stringify(EXAMPLE_USER_REQUEST, undefined, 4);
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
