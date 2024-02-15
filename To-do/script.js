let input = document.querySelector("#task__input")
let addNewTaskButton = document.querySelector("#add__button")
let tasks = document.querySelector("#tasks")
let editIsLocked = false

function addNewTask(event){
  event.preventDefault

  let task = input.value
  let taskUl = document.createElement("ul")
  let taskLi = document.createElement("li")
  let taskSpan = document.createElement("span")
  taskSpan.textContent = task
  let taskDiv = document.createElement("div")
  
  let editTaskButton = document.createElement("button")
  editTaskButton.classList.add("editTaskButton")
  editTaskButton.textContent = "Editar"
  editTaskButton.addEventListener("click", (event) => {
    editTask(event)
  })
  
  let removeTaskButton = document.createElement("button")
  removeTaskButton.classList.add("removeTaskButton")
  removeTaskButton.textContent = "X"
  removeTaskButton.addEventListener("click", (event) => {
    removeTask(event)
  })
  
  tasks.appendChild(taskUl)
  taskUl.appendChild(taskLi)
  taskLi.classList.add("task")
  taskLi.appendChild(taskSpan)
  taskLi.appendChild(taskDiv)
  taskDiv.appendChild(editTaskButton)
  taskDiv.appendChild(removeTaskButton)
  input.value = ""
  
  console.log(tasks)
}

addNewTaskButton.addEventListener("click", (event) => {
  addNewTask(event)
})

function editTask(event) {
  event.preventDefault
  if (editIsLocked === false){
    let divOfTask = event.target.parentElement
    let liOfTask = divOfTask.parentElement
    let spanOfTask = liOfTask.querySelector("span")
    let contentOfSpan = spanOfTask.textContent

    let inputToEditTask = document.createElement("input")
    inputToEditTask.value = contentOfSpan
    let finishEditButton = document.createElement("button")
    finishEditButton.textContent = "V"
    
    spanOfTask.textContent = ""
    spanOfTask.appendChild(inputToEditTask)
    spanOfTask.appendChild(finishEditButton)
    
    
    finishEditButton.addEventListener("click", (event) => {
      event.preventDefault
      
      let spanOfTask = liOfTask.querySelector("span")
      spanOfTask.textContent = inputToEditTask.value
      
      finishEditButton.remove()
      inputToEditTask.remove()
      editIsLocked = false
    })
    editIsLocked = true
  }
}

function removeTask(event) {
  event.preventDefault

  let liOfTask = event.target.parentElement
  let ulOfTask = liOfTask.parentElement
  ulOfTask.remove()
  editIsLocked = false
}