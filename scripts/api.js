const sendReq = async (args) => {
    const { method = "get", uri = "", id = "", data = {}, headers = { "Content-Type": "application/json" } } = args;
    // data = method === "get" ? "" : data;
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

const notesBtn = document.querySelector("#notes");
const usersBtn = document.querySelector("#users");

const getAllBtn = document.querySelector("#get-all");
const getOneBtn = document.querySelector("#get-one");
const postBtn = document.querySelector("#post");
const putBtn = document.querySelector("#put");
const delBtn = document.querySelector("#delete");

const uri = document.querySelector("#uri");
uri.value = NOTES_URI;
const id = document.querySelector("#resource-id");
const apiReq = document.querySelector("#api-request");
apiReq.value = JSON.stringify(EXAMPLE_NOTE_REQUEST, undefined, 4);
const apiRes = document.querySelector("#api-response");

const cleanTextarea = (el) => (el.value = "");

const printTextarea = (el, data) => (el.value = JSON.stringify(data, undefined, 4));

notesBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    uri.value = NOTES_URI;
    apiReq.value = JSON.stringify(EXAMPLE_NOTE_REQUEST, undefined, 4);
    notesBtn.classList.add("is-success");
    notesBtn.classList.remove("is-info");
    usersBtn.classList.add("is-info");
    usersBtn.classList.remove("is-success");
    cleanTextarea(apiRes);
});

usersBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    uri.value = USERS_URI;
    apiReq.value = JSON.stringify(EXAMPLE_USER_REQUEST, undefined, 4);
    usersBtn.classList.add("is-success");
    usersBtn.classList.remove("is-info");
    notesBtn.classList.add("is-info");
    notesBtn.classList.remove("is-success");
    cleanTextarea(apiRes);
});

getAllBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    getAllBtn.classList.add("is-success");
    getAllBtn.classList.add("is-loading");
    const data = await sendReq({ method: "get", uri: uri.value });
    getAllBtn.classList.remove("is-loading");
    getAllBtn.classList.remove("is-success");
    cleanTextarea(apiRes);
    printTextarea(apiRes, data);
});

getOneBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    getOneBtn.classList.add("is-success");
    getOneBtn.classList.add("is-loading");
    const data = await sendReq({ method: "get", uri: uri.value, id: id.value });
    getOneBtn.classList.remove("is-loading");
    getOneBtn.classList.remove("is-success");
    cleanTextarea(apiRes);
    printTextarea(apiRes, data);
});

postBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    postBtn.classList.add("is-success");
    postBtn.classList.add("is-loading");
    const data = await sendReq({ method: "post", uri: uri.value, data: JSON.parse(apiReq.value) });
    postBtn.classList.remove("is-loading");
    postBtn.classList.remove("is-success");
    console.log(uri.value);
    console.log(id.value);
    cleanTextarea(apiRes);
    printTextarea(apiRes, data);
});

putBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    putBtn.classList.add("is-success");
    putBtn.classList.add("is-loading");
    const data = await sendReq({ method: "put", uri: uri.value, id: id.value, data: JSON.parse(apiReq.value) });
    putBtn.classList.remove("is-loading");
    putBtn.classList.remove("is-success");
    cleanTextarea(apiRes);
    printTextarea(apiRes, data);
});

delBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    delBtn.classList.add("is-success");
    delBtn.classList.add("is-loading");
    const data = await sendReq({ method: "delete", uri: uri.value, id: id.value });
    delBtn.classList.remove("is-loading");
    delBtn.classList.remove("is-success");
    cleanTextarea(apiRes);
    printTextarea(apiRes, data);
});
