let todos = [];

// Add todo button

const addbutton = document.getElementById("add")

addbutton.addEventListener('click', (e) => {
    e.preventDefault()
    const content = document.getElementById("todocontent").value;
    console.log(content);
        
})


// render todos

function rendertodos(list) {
    
}