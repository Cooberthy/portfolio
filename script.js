const page = document.body;
let darkmode = localStorage.getItem("darkmode");
const dialog = document.getElementById("dialog");
const modal = document.getElementById("dialog3");
const popup = document.getElementById("dialog2");
const overlay = document.getElementById("dialog4");
const wrapper = document.querySelector(".wrapper");
const wrap = document.querySelector(".wrap");
const wrapp = document.querySelector(".wrapp");
const wrappers = document.querySelector(".wrappers");

function dialog1() {
  dialog.showModal();
}
dialog.addEventListener("click", (e) => {
  if (!wrapper.contains(e.target)) {
    dialog.close();
  }
});

function dialog2() {
  popup.showModal();
}
popup.addEventListener("click", (e) => {
  if (!wrap.contains(e.target)) {
    popup.close();
  }
});

function dialog3() {
  modal.showModal();
}
modal.addEventListener("click", (e) => {
  if (!wrapp.contains(e.target)) {
    modal.close();
  }
});

function dialog4() {
  overlay.showModal();
}
overlay.addEventListener("click", (e) => {
  if (!wrappers.contains(e.target)) {
    overlay.close();
  }
});

if (darkmode === "yes") {
  page.classList.remove("light");
  page.classList.add("dark");
}

function klikk() {
  if (page.classList.contains("light")) {
    page.classList.remove("light");
    page.classList.add("dark");
    localStorage.setItem("darkmode", "yes");
  } else if (page.classList.contains("dark")) {
    page.classList.remove("dark");
    page.classList.add("light");
    localStorage.setItem("darkmode", null);
  }
  darkmode = localStorage.getItem("darkmode");
}
