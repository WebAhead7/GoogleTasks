//New task constructor function
function New_Task(title){
this[title]=title;
this[isCompleted]=false;
}


  //Variables
const tasksArr=[];
const tasksDiv=document.querySelector("#tasks");
const addButton=document.querySelector("#add-btn");


    //ADD BUTTON
    addButton.addEventListener("click",function(){
    let insertedTask=document.querySelector("#add").value;
    let newTask=new New_Task(insertedTask,false);
    if(Array.isArray(addTask(tasksArr,newTask))){
        tasksArr=addTask(tasksArr,newTask);
        render();
    }
})

  
    //Complete function
    function completeFunc(){
        if(Array.isArray(completeTask(tasksArr,e.target.class))){
            tasksArr=completeTask(tasksArr,e.target.class);
            render();
        }
    }


    //Delete function
    function deleteFunc(){
        if(Array.isArray(deleteTask(tasksArr,e.target.class))){
            tasksArr=deleteTask(tasksDiv,e.target.class);
            render();
    }
}


//render() function
function render(){
    //Clearing all the tasks from the DOM.
    while(tasksDiv.firstElementChild){
        tasksDiv.removeChild(tasksDiv.firstElementChild);
    }
    /*Adding all the tasks from the array to the 
    DOM(according to the updated array)*/
    for(let i=0;i<tasksArr.length;i++){
        var childDiv=document.createElement("div");
        //adding the title
        childDiv.innerHTML+=`<h1>
        ${tasksArr[i].title};
        </h1>`;
        //adding the add button
        childDiv.innerHTML+=`<button onclick="deleteFunc()" class="${i}">
        Delete
        </button>`;
        childDiv.innerHTML+=`<button onclick="completeFunc()" class="${i}">
        Complete
        </button>`;
    }
    childDiv
    tasksDiv.appendChild(childDiv);
}







