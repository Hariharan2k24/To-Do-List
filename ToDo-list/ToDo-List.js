
    // Function to load tasks from local storage when the page loads
    window.onload = function() {
        loadTasks();
    }

    // Function to add a new task
    document.querySelector(".push").onclick = function() {
        let taskInput = document.querySelector('.newtask input').value;

        if(taskInput.length == 0) {
            alert('Please enter a task');
        } else {
            // Save task to local storage
            let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
            tasks.push({ name: taskInput, completed: false });
            localStorage.setItem('tasks', JSON.stringify(tasks));

            displayTasks();
        }

        document.querySelector(".newtask input").value = "";
    }

    // Function to load tasks from local storage and display them
    function loadTasks() {
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        document.querySelector('.tasks').innerHTML = '';

        tasks.forEach((task, index) => {
            addTaskToDOM(task.name, task.completed, index);
        });

        addDeleteFunctionality();
        addCompletionFunctionality();
    }

    // Function to display tasks
    function displayTasks() {
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        document.querySelector('.tasks').innerHTML = '';

        tasks.forEach((task, index) => {
            addTaskToDOM(task.name, task.completed, index);
        });

        addDeleteFunctionality();
        addCompletionFunctionality();
    }

    // Function to add task HTML to the DOM
    function addTaskToDOM(taskName, isCompleted, index) {
        let taskClass = isCompleted ? 'task completed' : 'task';
        document.querySelector('.tasks').innerHTML += 
        `<div class="${taskClass}" data-index="${index}">
            <span class="taskname">${taskName}</span>
            <button class="delete"><i class="fa-regular fa-trash-can"></i></button>
        </div>`;
    }

    // Function to add delete functionality
    function addDeleteFunctionality() {
        let deleteButtons = document.querySelectorAll(".delete");
        deleteButtons.forEach((button, index) => {
            button.onclick = function() {
                let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
                tasks.splice(index, 1);
                localStorage.setItem('tasks', JSON.stringify(tasks));

                displayTasks();
            }
        });
    }

    // Function to add task completion functionality
    function addCompletionFunctionality() {
        let taskElements = document.querySelectorAll(".task");
        taskElements.forEach((taskElement) => {
            taskElement.onclick = function() {
                let index = this.getAttribute('data-index');
                let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

                tasks[index].completed = !tasks[index].completed;
                localStorage.setItem('tasks', JSON.stringify(tasks));

                displayTasks();
            }
        });
    }


//  <script>
//     document.querySelector(".push").onclick =function(){
//     if(document.querySelector('.newtask input').value.length == 0){
        
//         alert('please enter a task');
//     }
//     else{
//         document.querySelector('.tasks').innerHTML += 
//         `<div class="task">
//         <span class="taskname">
//             ${document.querySelector
//             ('.newtask input').value}
//         </span>
//         <button class="delete"><i class="fa-regular fa-trash-can"></i></button>
//         </div>`; 

//         var current_tasks = document.querySelectorAll(".delete");
//         for(var i=0; i < current_tasks.length; i++){
//             current_tasks[i].onclick = function(){
//                 this.parentNode.remove();

//             }
//         }
//         var tasks = document.querySelectorAll(".task");
//             for(let i = 0; i < tasks.length; i++){
//                 tasks[i].onclick =function(){
//                     this.classList.toggle("completed")
//                 }
//             }
//     }
//     document.querySelector(".newtask input").value = "";
// }
// </script> 

