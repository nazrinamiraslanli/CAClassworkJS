let toDoList = document.querySelector(".todolist");
let addBtn = document.querySelector(".add");
let task = document.querySelector(".tasks");
toDoList.style.border = "2px solid blue";
toDoList.style.borderRadius = "4px";
toDoList.style.width = "400px";
toDoList.style.height = "30px";
addBtn.style.padding = "10px 15px";
addBtn.style.backgroundColor = " blue";
addBtn.style.color="white"
addBtn.style.borderRadius="4px"

addBtn.addEventListener("click", function () {
  if (toDoList.value !== "") {
    let li = document.createElement("li");
    let span = document.createElement("span");
    let deleteBtn = document.createElement("button");

    span.innerText = toDoList.value;
    deleteBtn.innerText = "Delete";

    li.append(span, deleteBtn);

    task.append(li);

    toDoList.value = "";

    deleteBtn.addEventListener("click", function () {
      console.log(this);
      this.parentElement.remove();
    });
  }
});
