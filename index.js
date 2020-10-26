//New task constructor function
function New_Task(title){
this.title=title;
this.isCompleted=false;
}



  //Variables
var tasksArr=[];
const tasksDiv=document.querySelector("#tasks");
const addButton=document.querySelector("#add-btn");
const insertField=document.querySelector("#add");



    //ADD BUTTON
    addButton.addEventListener("click",function(){
        if(insertField.value!==""){
    let insertedTask=document.querySelector("#add").value;
    let newTask=new New_Task(insertedTask);
        tasksArr=addTask(tasksArr,newTask);
        insertField.focus();
        render();
        }
        else
        alert("Please type a task to add");
    
})

  
    //Complete function
    function completeFunc(e){
            tasksArr=completeTask(tasksArr,Number(e.target.classList[0]));
            render();
    }


    //Delete function
    function deleteFunc(e){
            tasksArr=deleteTask(tasksArr,Number(e.target.classList[0]));
            render();
    
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
        if(tasksArr[i].isCompleted){
        childDiv.innerHTML+=`<h1 style="text-decoration:line-through">
        ${tasksArr[i].title}
        </h1>`;}
        else{
            childDiv.innerHTML+=`<h1>
        ${tasksArr[i].title}
        </h1>`}
        
        //adding the add button
        childDiv.innerHTML+=`<button onclick="deleteFunc(event)" class="${i}">
        Delete
        </button>`;
        childDiv.innerHTML+=`<button onclick="completeFunc(event)" class="${i}">
        Complete
        </button>`;
        tasksDiv.appendChild(childDiv);
        insertField.value="";
    }

}






