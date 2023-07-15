const body = document.querySelector("body"),
  nav = document.querySelector("nav"),
  modeToggle = document.querySelector(".dark-light"),
  searchToggle = document.querySelector(".search-toogle"),
  sidebarOpen = document.querySelector(".sidebar-open"),
  sidebarClose = document.querySelector(".sidebar-close");

let getMode = localStorage.getItem("mode");
if (getMode && getMode === "dark-mode") {
  body.classList.add("dark")
}
modeToggle.addEventListener("click", () => {
  modeToggle.classList.toggle("active");
  body.classList.toggle("dark");

  if (!body.classList.contains("dark")) {
    localStorage.setItem("mode", "light-mode");
  } else {
    localStorage.setItem("mode", "dark-mode")
  }
});

searchToggle.addEventListener("click", () => {
  searchToggle.classList.toggle("active")
});


//todo
const isiTodo = [
  "belajar Javacript",
  "belajar HTML",
  "belajar CSS",
  "belajar PHP",
]

function clearTodo() {
  const item = document.querySelector(".isi");
  while (item.firstChild) {
    item.removeChild(item.firstChild);
  }
}

function deleteTodo(index) {
  isiTodo.splice(index, 1);
  displayTodo();
}
function completeTodo(i) {
  displayTodo();
  const task = document.querySelectorAll(`.text`);
  task[i].classList.toggle("selesai");
  
}

function displayTodo() {
  clearTodo();
  let data = "";
  for (let i = 0; i < isiTodo.length; i++) {
    data += `<div class="item">`;
    data += `<p id="p" class="text">${isiTodo[i]}</p>`;
    data += `<div class="item-btn">`;
    data += `<i id="selesai" class='bx bx-check-square selesai'></i>`;
    data += `<i id="hapus" class="bx bx-x hapus"></i>`;
    data += `</div>`;
    data += `</div>`;
    document.querySelector(".isi").innerHTML = data;
  }
  const searchText = document.getElementById("search").value.toLowerCase();
  document.querySelectorAll(".item").forEach((item) => {
    if (item.textContent.toLowerCase().indexOf(searchText) === -1) {
      item.style.display = "none";
    } else {
      item.style.display = "";
    }
  })

  const deleteBtn = document.querySelectorAll(".hapus");
  for (let i = 0; i < deleteBtn.length; i++) {
    deleteBtn[i].addEventListener("click", () => {
      deleteTodo(i);
      console.log(isiTodo);
    });
  }
  const completeBtn = document.querySelectorAll(".selesai");
  for (let i = 0; i < completeBtn.length; i++) {
    completeBtn[i].addEventListener("click", () => {
      completeTodo(i);
      console.log(i)
    });
  }
}
function createTodo() {
  const addBtn = document.getElementById("add");
  addBtn.addEventListener("click", () => {
  const inputTodo = document.getElementById("inputTodo").value
  inputTodo === "" ? alert("Silahkan isi sesuatu") :
    isiTodo.push(inputTodo);
    document.getElementById("inputTodo").value = "";
    console.log(isiTodo);
    displayTodo();
});
}
createTodo();
displayTodo();



const searchInput = document.getElementById('search')
searchInput.onkeyup = function () {
  console.log(searchInput.value);
  displayTodo();
}
searchInput.onkeydown = function () {
  console.log(searchInput.value);
  displayTodo();
}

