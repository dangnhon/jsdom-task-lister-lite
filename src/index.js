// document.addEventListener("DOMContentLoaded", () => {

// });


// global variables:
const form = document.getElementById('create-task-form')


// handler functions: 
function handleSubmit(e) {
  e.preventDefault() 
  const userInput = e.target["new-task-description"].value
  displayUserInput(userInput)
  form.reset()
}


// display functions: 
function displayUserInput(input) {
  const taskUL = document.getElementById('tasks')
  const taskList = document.createElement('li')
  taskList.innerText = input
  taskUL.appendChild(taskList)

}


// event listeners:
form.addEventListener("submit", handleSubmit) 