const toDoFrom=document.querySelector(".todo-form");
const toDoList=document.querySelector(".todo-list");
const toDoInput=toDoFrom.querySelector("input");

let todos=[];
const TODOS_KEY="todos";

function saveToDos(){
    localStorage.setItem("todos",JSON.stringify(todos));
}



function deleteToDo(event){
    const li=event.target.parentElement;    
    todos=todos.filter(toDo => parseInt(li.id) !==toDo.id);
    li.remove();
    saveToDos();
}

function paintToDo(newToDoObj){
    const li=document.createElement("li");
    li.id=newToDoObj.id;
    const span=document.createElement("span");
    span.innerText=newToDoObj.text;
    const button=document.createElement("button");
    button.innerText="❌";
    button.addEventListener("click",deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}


function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo=toDoInput.value;
    toDoInput.value="";
    const newToDoObj={
        text:newToDo,
        id:Date.now(),
    }
    todos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}

toDoFrom.addEventListener("submit",handleToDoSubmit);
const savedToDos=localStorage.getItem(TODOS_KEY);
if(savedToDos!==null){
    const parsedToDos=JSON.parse(savedToDos);
    todos=parsedToDos;
    parsedToDos.forEach(paintToDo);
}