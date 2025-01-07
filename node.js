// Initialize the to-do lists for each category
const dayList = document.getElementById('dayList');
const weekList = document.getElementById('weekList');
const monthList = document.getElementById('monthList');
const yearList = document.getElementById('yearList');

// Event listeners for adding tasks
document.getElementById('addDayTask').addEventListener('click', () => addTaskToCategory('day'));
document.getElementById('addWeekTask').addEventListener('click', () => addTaskToCategory('week'));
document.getElementById('addMonthTask').addEventListener('click', () => addTaskToCategory('month'));
document.getElementById('addYearTask').addEventListener('click', () => addTaskToCategory('year'));

// Function to handle adding tasks
function addTaskToCategory(category) {
  const selectElement = document.getElementById(`${category}TaskSelect`);
  const selectedTask = selectElement.value;

  if (selectedTask) {
    const li = document.createElement('li');
    li.textContent = selectedTask;

    // Create "Mark as Done" button
    const markButton = document.createElement('button');
    markButton.textContent = "Mark as Done";
    markButton.addEventListener('click', () => {
      li.classList.toggle('completed');
      // Change the button text based on task completion status
      if (li.classList.contains('completed')) {
        markButton.textContent = "Undo";
      } else {
        markButton.textContent = "Mark as Done";
      }
    });

    // Add task and button to the list item
    li.appendChild(markButton);

    // Append the task to the appropriate list
    document.getElementById(`${category}List`).appendChild(li);
  } else {
    alert("Please select a task first.");
  }
}

// Optional: You can add the following functionality to remove a task (if needed)
// Uncomment the code below to add a delete button for each task

// function addTaskToCategory(category) {
//   const selectElement = document.getElementById(`${category}TaskSelect`);
//   const selectedTask = selectElement.value;

//   if (selectedTask) {
//     const li = document.createElement('li');
//     li.textContent = selectedTask;

//     // Create "Mark as Done" button
//     const markButton = document.createElement('button');
//     markButton.textContent = "Mark as Done";
//     markButton.addEventListener('click', () => {
//       li.classList.toggle('completed');
//       if (li.classList.contains('completed')) {
//         markButton.textContent = "Undo";
//       } else {
//         markButton.textContent = "Mark as Done";
//       }
//     });

//     // Create "Delete" button
//     const deleteButton = document.createElement('button');
//     deleteButton.textContent = "Delete";
//     deleteButton.addEventListener('click', () => {
//       li.remove();
//     });

//     // Add task, buttons (Mark as Done, Delete) to the list item
//     li.appendChild(markButton);
//     li.appendChild(deleteButton);

//     // Append the task to the appropriate list
//     document.getElementById(`${category}List`).appendChild(li);
//   } else {
//     alert("Please select a task first.");
//   }
// }
