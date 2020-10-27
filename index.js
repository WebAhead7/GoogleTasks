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
const colorsArr=["#48b1bf","#f7bb97","#a8e063","#d6ae7b","#19547b","#dd2476"];



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
            let tempArr=completeTask(tasksArr,Number(e.target.getAttribute("index")));
            if(Array.isArray(tempArr)){
                tasksArr=tempArr;
                render();
            }
            else{
                console.error(tempArr);
                alert("Something went Wrong! try again later");
            }
    }


    //Delete function
    function deleteFunc(e){
        let tempArr=deleteTask(tasksArr,Number(e.target.getAttribute("index")));
        if(Array.isArray(tempArr)){
            tasksArr=tempArr;
            render();
        }
        else{
            console.error(tempArr);
            alert("Something went Wrong! try again later");
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
        if(!tasksArr[i].hasOwnProperty("bgColor")){
            tasksArr[i]["bgColor"]=randomColor();
        }
        childDiv.style.backgroundColor=tasksArr[i].bgColor;
        //adding the title
        let title=document.createElement("h1");
        title.id="task-title";
        title.innerHTML=tasksArr[i].title;
        childDiv.appendChild(title);
        //Creating the buttons (add and complete IMAGES)
        let buttonsDiv=document.createElement("div");
        buttonsDiv.classList.add("buttons-div");
        //adding the add button
        let deleteButton=document.createElement("img");
        deleteButton.setAttribute(`index`,`${i}`);
        deleteButton.id="delete-btn"
        deleteButton.src="./images/delete.png";
        //adding the complete button
        // completeButton.classList.toggle("complete-check");
        let completeButton=document.createElement("img");
        var completeClass="complete-uncheck";
        if(tasksArr[i].isCompleted){
            completeClass="complete-check";
        }
        completeButton.classList.add(completeClass);
        completeButton.setAttribute(`index`,`${i}`);
        completeButton.addEventListener("click",e=>{
            completeFunc(e);
        })
        deleteButton.addEventListener("click",e=>{
            deleteFunc(e);
        })
        buttonsDiv.appendChild(deleteButton);
        buttonsDiv.appendChild(completeButton);
        childDiv.appendChild(buttonsDiv);
        tasksDiv.appendChild(childDiv);
        insertField.value="";
    }
}


let lastColorINdex;
function randomColor(){
    let randomNum=Math.floor(Math.random()*colorsArr.length);
    if(randomNum!==lastColorINdex){
        let randomColor=colorsArr[randomNum];
        lastColorINdex=randomNum;
        return randomColor;
    }
    else{
        return randomColor();
    }
    
}









