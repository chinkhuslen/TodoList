function Todo(id, title, isCompleted = false) {
  this.id = id;
  this.title = title;
  this.isCompleted = isCompleted;
}

let todos = [];
let id = 0;
let title;

function createInput() {
  const dv = document.createElement("div");
  dv.setAttribute("id","con-"+id)
  dv.classList.add("flexrow")
  dv.classList.add("center")
  dv.innerHTML =
    `<input type="text" class="inp" id="title-` +
    id +
    `">`;
  document.getElementById("listContainer").appendChild(dv);
}
function addTodo() {
  document.getElementById("add").classList.toggle("op-0");
  createInput();
}

const listContainer = document.getElementById("listContainer");

document.addEventListener("keypress", function (event) {
  if (event.keyCode === 13) {
    title = document.getElementById(`title-${id}`).value;
    if(title != ''){
        document.getElementById("con-"+id).innerHTML = `<input type="checkbox" onclick='crOss("con-${id}")'><h1>${title}</h1>`;
    const todo = new Todo(id, title);
    id++;
    todos.push(todo);
    console.log(todos);
    document.getElementById("add").classList.toggle("op-0");
    }
  }
});

document.getElementById("add").addEventListener("click", function () {
  addTodo();
});

function crOss(el) {
    document.getElementById(el).getElementsByTagName('h1')[0].classList.toggle('cross')
  }