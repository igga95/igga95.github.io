"use strict";

const apiTesterLink = document.querySelector("#api-tester");
const notesApiCardBtn = document.querySelector("#test-notes-api");
const notesApiNotesBtn = document.querySelector("#notes-api-notes");

notesApiCardBtn.addEventListener("click", () => {
    apiTesterLink.click();
    notesApiNotesBtn.click();
});
