function startTest(){

    test("test add task",(obj)=>{

      var before = tasksArr.length;
    
        
    
        addNewTask({title:'hello',isCompleted:false});
      
      obj.equal(tasksArr.length,before+1);
        
    });
    

    
    
    test("test delete task",(obj)=>{
        
       
    var before = tasksArr.length;
        deleteFuncByIndex(0);
      
      obj.notEqual(tasksArr.length,before);
        
    });
    

    
    
    test("test add task in ui",(obj)=>{

    
    
       var input = document.getElementById('add');
       var add_btn = document.getElementById('add-btn');
    
       input.value="my task";
       add_btn.click();
    
       obj.notEqual(tasksArr.length,0);
    
    
    }
    );
    
    
    test("test add  empty task in ui",(obj)=>{
    
      var before = tasksArr.length;
      
        var input = document.getElementById('add');
        var add_btn = document.getElementById('add-btn');
     
        input.value="";
        add_btn.click();

        
        obj.equal(tasksArr.length,before);
     
     
     }
     );


     test("test  complete all tasks in ui",(obj)=>{
    
      for (let index = 0; index < tasksArr.length; index++) {
        completeFuncByIndex(index);
        
        
      }
     
      
      tasksArr.forEach(element => {
        obj.equal(element.isCompleted,true);
      });
       
     
     
     }
     );
    
    
}





function test(name, testFunction) {
    function equal(x, y, message = `Expected ${x} to equal ${y}`) {
      if (x === y) {
        console.info("Pass: " + message);
      } else {
        console.error("Fail: " + message);
      }
    }
  
    function notEqual(x, y, message = `Expected ${x} not to equal ${y}`) {
      if (x !== y) {
        console.info("Pass: " + message);
      } else {
        console.error("Fail: " + message);
      }
    }
  
    const assertions = {
      equal,
      notEqual,
    };
  
    console.group(name);
    testFunction(assertions);
    console.groupEnd(name);
  }
  