const input_text = document.querySelector("#todo-input");
const btn_add_todo = document.querySelector("#btn-add-todo");
const todo_list = document.querySelector("#todo-list");
const history_list = document.querySelector("#history-list");
const space = document.querySelector("#empty-list-warning");
const history_space = document.querySelector("#history-empty-warning");
const btn_clear_all = document.querySelector("#btn-clear-all");
const btn_check_all = document.querySelector("#btn-check-all");
const btn_uncheck_all = document.querySelector("#btn-uncheck-all");
function add_todo(input){
    if(input.value.trim() === "") return;

    const new_todo = document.createElement("li");
    new_todo.classList.add("todo-item");
    if (input.completed) {
        new_todo.classList.add("check");
    }
    
    const new_span = document.createElement("span");
    new_span.textContent = input.value;

    const new_div = document.createElement("div");

    const btn_delete = document.createElement("button");
    btn_delete.classList.add("todo-item-delete");
    btn_delete.textContent = "🗑️";

    const btn_check = document.createElement("button");
    btn_check.classList.add("todo-item-check");
    btn_check.textContent = "✅";

    new_div.appendChild(btn_delete);
    new_div.appendChild(btn_check);

    new_todo.appendChild(new_span);
    new_todo.appendChild(new_div);
    
    todo_list.appendChild(new_todo);

    btn_delete.addEventListener("click", ()=>{
        new_todo.remove();
        space_control();
        save_todo();
    });
    btn_check.addEventListener("click", ()=>{
        new_todo.classList.toggle("check");
        save_todo();
    });

    if (input_text) {
        input_text.value = "";
    }
    space_control();
}
function save_todo(){
    const todos = document.querySelectorAll(".todo-item");
    const list = [];

    todos.forEach(function(item){
        const spanText = item.querySelector("span").textContent;
        const isCompleted = item.classList.contains("check"); 

        list.push({
            text: spanText,
            completed: isCompleted
        });
    });
    localStorage.setItem("todos", JSON.stringify(list));
}

function load_todo(){
    const todos = JSON.parse(localStorage.getItem("todos")) || [];

    todos.forEach(function(item){
        add_todo({ 
            value: item.text, 
            completed: item.completed 
        });
    });
}
function history_control(){
    const todos = JSON.parse(localStorage.getItem("todos")) || [];

    todos.forEach(function(item){
        const todo = document.createElement("li");
        todo.textContent = item.text;
        history_list.appendChild(todo);
    });
    history_space.style.display = history_list.children.length ===0? "block": "none"
    
}
function space_control(){
    space.style.display = todo_list.children.length === 0? "block": "none";
}

btn_add_todo.addEventListener("click",()=>{
    add_todo(input_text);
    space_control();
    save_todo();
});
input_text.addEventListener("keydown",(e)=>{
    if(e.key==="Enter") {
        add_todo(input_text);
        space_control();
        save_todo();
    }
})
btn_clear_all.addEventListener("click",()=>{
    document.getElementById("todo-list").innerHTML ="";
    save_todo();
    space_control();
})
btn_check_all.addEventListener("click", ()=>{
    const items = document.querySelectorAll(".todo-item");
    items.forEach(function(item){
        item.classList.add("check");
    })
    save_todo();
})

btn_uncheck_all.addEventListener("click", ()=>{
    const items = document.querySelectorAll(".todo-item");
    items.forEach(function(item){
        item.classList.remove("check");
    })
    save_todo();
})

history_control();
load_todo();
space_control();