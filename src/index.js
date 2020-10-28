//New task constructor function
function New_Task(title) {
    this.title = title;
    this.isCompleted = false;
}


//Variables
var tasksArr = [];
const tasksDiv = document.querySelector("#tasks");
const addButton = document.querySelector("#add-btn");
const insertField = document.querySelector("#add");
const colorsArr = ["#48b1bf", "#f7bb97", "#a8e063", "#d6ae7b", "#19547b", "#dd2476"];


//SAVE TO LOCAL STORAGE
function saveToLocalStorage(arr) {
    if (localStorage.getItem("arr")) {
        localStorage.removeItem("arr");
        localStorage.setItem("arr", JSON.stringify(arr));
    }
    else {
        localStorage.setItem("arr", JSON.stringify(arr));
    }
}


//LOAD FROM LOCAL STORAGE
function loadFromLocalStorage() {
    let storageArr = localStorage.getItem("arr");
    return JSON.parse(storageArr);
}


//ADD BUTTON
//(click)
addButton.addEventListener("click", function () {
    if (insertField.value !== "" && !insertField.value.includes("<")) {
        let insertedTask = document.querySelector("#add").value;
        let newTask = new New_Task(insertedTask);
       addNewTask(newTask);
    }
    else{
        alert("Invalid Input!");
        insertField.value="";
    }

})

//(enter key)
insertField.addEventListener("keydown",(e)=>{
    if(e.keyCode===13){
        if (insertField.value !== "") {
            let insertedTask = document.querySelector("#add").value;
            let newTask = new New_Task(insertedTask);
           addNewTask(newTask);
        }
        else
            alert("Please type a task to add");
    }
})


//Other options (buttons)

//CLEAR ALL
let clearAll=document.querySelector("#clearAll");
clearAll.addEventListener("click",()=>{
    tasksArr=[];
    saveToLocalStorage(tasksArr);
    insertField.focus();
    render();
    })


    //COMPLETE ALL
let completeAll=document.querySelector("#completeAll");
completeAll.addEventListener("click",()=>{
    for(let i=0;i<tasksArr.length;i++){
        tasksArr[i].isCompleted=true;
    }
    saveToLocalStorage(tasksArr);
    render();
    })

     //SHOW ALL
let showAll=document.querySelector("#showAll");
showAll.addEventListener("click",()=>{
    if (localStorage.getItem("arr")) {
        tasksArr=loadFromLocalStorage();
        render();
    }
    })


   



function addNewTask(task){
    tasksArr = addTask(tasksArr, task);
    saveToLocalStorage(tasksArr);
    insertField.focus();
    render();
}


//Complete function
function completeFunc(e) {

    completeFuncByIndex(Number(e.target.getAttribute("index")));

}

function completeFuncByIndex(index){
    let tempArr = completeTask(tasksArr, index);

    if (Array.isArray(tempArr)) {
        tasksArr = tempArr;
        saveToLocalStorage(tasksArr);
        render();
    }
    else {
        console.error(tempArr);
        alert("Something went Wrong! try again later");
    }
}


//Delete function
function deleteFunc(e) {

    deleteFuncByIndex(Number(e.target.getAttribute("index")))
   
}

function deleteFuncByIndex(index){
    let tempArr = deleteTask(tasksArr, index);
    if (Array.isArray(tempArr)) {
        tasksArr = tempArr;
        saveToLocalStorage(tasksArr);
        render();
    }
    else {
        console.error(tempArr);
        alert("Something went Wrong! try again later");
    }
}


//render() function
function render() {
    //Clearing all the tasks from the DOM.
    while (tasksDiv.firstElementChild) {
        tasksDiv.removeChild(tasksDiv.firstElementChild);
    }

    /*Adding all the tasks from the array to the 
    DOM(according to the updated array)*/
    for (let i = 0; i < tasksArr.length; i++) {
        var childDiv = document.createElement("div");
        if (!tasksArr[i].hasOwnProperty("bgColor")) {
            tasksArr[i]["bgColor"] = randomColor();
        }

        childDiv.style.backgroundColor = tasksArr[i].bgColor;
        //adding the title
        let title = document.createElement("h1");
        title.id = "task-title";
        title.innerHTML = tasksArr[i].title;
        childDiv.appendChild(title);
        //Creating the buttons (add and complete IMAGES)
        let buttonsDiv = document.createElement("div");
        buttonsDiv.classList.add("buttons-div");
        //adding the delete button
        let deleteButton = document.createElement("img");
        deleteButton.setAttribute(`index`, `${i}`);
        deleteButton.src = "./images/delete.png";
        //adding the complete button
        let completeButton = document.createElement("img");
        var completeClass = "complete-uncheck";
        if (tasksArr[i].isCompleted) {
            completeClass = "complete-check";
            title.style.textDecoration="line-through";
            title.style.textDecorationColor="black";
        }
        completeButton.classList.add(completeClass);
        completeButton.setAttribute(`index`, `${i}`);
        completeButton.addEventListener("click", e => {
            completeFunc(e);
        })
        deleteButton.addEventListener("click", e => {
            deleteFunc(e);
        })
        buttonsDiv.appendChild(deleteButton);
        buttonsDiv.appendChild(completeButton);
        childDiv.appendChild(buttonsDiv);
        tasksDiv.appendChild(childDiv);
        saveToLocalStorage(tasksArr);
        insertField.value = "";
    }
}


//random color function
let lastColorINdex;
function randomColor() {
    let randomNum = Math.floor(Math.random() * colorsArr.length);
    if (randomNum !== lastColorINdex) {
        let randomColor = colorsArr[randomNum];
        lastColorINdex = randomNum;
        return randomColor;
    }
    else {
        return randomColor();
    }
}


window.addEventListener("load", () => {
    if (localStorage.getItem("arr")) {
        tasksArr=loadFromLocalStorage();
        render();
    }

    // startTest();
})















