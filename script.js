const page = document.body;
let darkmode = localStorage.getItem("darkmode");
const dialog = document.getElementById("dialog");
const wrapper = document.querySelector(".wrapper");

function dialog1() {
  dialog.showModal();
}
dialog.addEventListener("click", (e) => {
  if (!wrapper.contains(e.target)) {
    dialog.close();
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
