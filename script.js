const page = document.body;
let darkmode = localStorage.getItem("darkmode");

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
