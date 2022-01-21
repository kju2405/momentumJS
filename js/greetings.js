const loginForm=document.querySelector(".login-form");

const loginInput=loginForm.querySelector("input");
const loginButton=loginForm.querySelector("button");


const greeting=document.querySelector("#greeting");
const HIDDEN_CLASSNAME="hidden";
const USERNAME_KEY="username";

function loginFormSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);    
    localStorage.setItem(USERNAME_KEY,loginInput.value);
    paintGreetings();
}

function paintGreetings(){
    const username=localStorage.getItem(USERNAME_KEY);
    greeting.innerText=`Hello! ${username}`; 
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername=localStorage.getItem(USERNAME_KEY); //localStorage에 저장되어있는것이 있으면 값이 반환되지만 없으면 null이 반환됌.

if(savedUsername===null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",loginFormSubmit);
}else{
    paintGreetings();
}
