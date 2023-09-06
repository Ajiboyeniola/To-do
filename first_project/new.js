"use strict";
// Date JS
// const dateElement = document.querySelector(".date");

// function formatDate(date) {
//   const DAYS = [
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//   ];
//   const MONTHS = [
//     "January",
//     "Feburary",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ];

//   return `${DAYS[date.getDay()]}, ${
//     MONTHS[date.getMonth()]
//   } ${date.getDate()} ${date.getFullYear()}`;
// }

// setInterval(() => {
//   const now = new Date();

//   dateElement.textContent = formatDate(now);
// }, 200);

// For the event add
// const todo = document.getElementById("output1");

// function newTodo() {
//   todo.innerHTML = "Lets see how it goes";
// }

// Starting from here

const add = document.getElementById("add");
const listContainer = document.getElementById("myList");
const taskArray = [];
const totalTask = document.getElementById("num");
let total = 0;
const clearArray = document.getElementById("clear");

function addTask() {
  if (add.value === "") {
    alert("Write something");
  } else {
    // Create a div to hold the task and checkbox
    let div = document.createElement("div");
    div.className = "checkbox-item";

    // Create a checkbox
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "check";

    // Create a span-list
    let span = document.createElement("span");
    span.className = "checkbox-label";
    span.innerHTML = add.value;

    // Append the checkbox and span to the div
    div.appendChild(checkbox);
    div.appendChild(span);
    // div.appendChild(deleteButton);

    listContainer.appendChild(div);
    taskArray.push(add.value);

    console.log(`Tasks array: ${taskArray}`);

    // Display the total to-do list
    total = taskArray.reduce(function (acc, curr) {
      return acc + 1;
    }, 0);
    totalTask.textContent = total;
  }
  add.value = "";
}

// CLEAR BUTTON

clearArray.addEventListener("click", function () {
  taskArray.length = 0;
  listContainer.innerHTML = "";
  totalTask.textContent = 0;
});
