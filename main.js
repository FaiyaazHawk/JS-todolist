let todos = [];

// Add todo button

const addbutton = document.getElementById("add")

addbutton.addEventListener('click', (e) => {
    e.preventDefault()
    const content = document.getElementById("todocontent").value;
    todos.push(content);
    rendertodos(todos) 
    content.value = '';
})


// render todos

function rendertodos(list) {
    const todoContainer = document.getElementById('todo-list')
    todoContainer.innerHTML = ""
    list.forEach(todo => {
        const todolist = document.getElementById('todo-list')
        const todocase = document.createElement('div')
        todocase.classList.add('todo')
        todocase.innerText = todo
        todolist.appendChild(todocase)
        
        const checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        checkbox.id = 'toggle'
        todocase.appendChild(checkbox)
        //checkbox toggling
        checkbox.addEventListener("change", (e) => {
            if(e.target.checked) {
                todocase.classList.add('checked')
            } else {
                todocase.classList.remove('checked')
            }
        })

        

        const editButton = document.createElement('button')
        editButton.classList.add('button')
        editButton.innerText = "Edit Todo"
        editButton.id = 'edit';
        todocase.appendChild(editButton);
        editButton.addEventListener('click', () => {toggleEdit(todo)})

        const deleteButton = document.createElement('button')
        deleteButton.classList.add('button')
        deleteButton.innerText = "Delete Todo"
        deleteButton.id = 'delete';
        todocase.appendChild(deleteButton);
        deleteButton.addEventListener('click', () => {deleteTodo(todo)})


    });
}

function toggleEdit(todo) {
    const todoindex = todos.indexOf(todo)   
    todos = todos.filter(word => word !== todo)
    const retodo = prompt("Edit here")
    //inserting item inplace into array
    todos.splice(todoindex, 0, retodo);
    rendertodos(todos)
}

function deleteTodo(todo) {
    
    todos = todos.filter(word => word !== todo)
    rendertodos(todos)
}