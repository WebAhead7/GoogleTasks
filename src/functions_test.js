// startTest();
function startTest(){
    test("test add task",(obj)=>{
    
        var arr = [{title:'',isCompleted:false}]
    
      arr =  addTask(arr ,{title:'hello',isCompleted:false} );
      obj.equal(arr[1].title,'hello');
        
    });
    
    test("test add task",(obj)=>{
        
        var arr = [];
    
      arr =  addTask(arr ,{title:'hello',isCompleted:false} );
      obj.equal(arr[0].title,'hello');
        
    });
    
    
    test("test delete task",(obj)=>{
        
        var arr = [];
    
      arr =  deleteTask(arr ,1 );
      console.log(arr);
      obj.equal(arr,'index not found');
        
    });
    
    test("test delete task",(obj)=>{
        
        var arr = [{title:'hello',isCompleted:false}];
    
      arr =  deleteTask(arr ,0 );
      obj.equal(arr.length,0);
        
    });
    
    test("test delete task",(obj)=>{
        
        var arr = [{title:'hello',isCompleted:false},{title:'hello',isCompleted:false}];
    
      arr =  deleteTask(arr ,1 );
      obj.equal(arr.length,1);
        
    });
    
    test("test delete task",(obj)=>{
        
        var arr = [{title:'hello',isCompleted:false},{title:'hello',isCompleted:false}];
    
      var msg =  deleteTask(arr ,4 );
      obj.equal(msg,"index not found");
        
    });
    
    
    
    test("test complete task",(obj)=>{
        
        var arr = [{title:'hello',isCompleted:false}];
    
      arr =  completeTask(arr ,0 );
      obj.equal(arr.length,1);
      obj.equal(arr[0].title,'hello');
      obj.equal(arr[0].isCompleted,true);
    
        
    });
    
    test("test complete task",(obj)=>{
        
        var arr = [{title:'hello',isCompleted:false}];
    
      var msg  =  completeTask(arr ,4);
      obj.equal(msg,"index not found");
        
    });
    
    
    
    
    /*
    test("test add task in ui",(obj)=>{
    
       var input = document.getElementById('add');
       var add_btn = document.getElementById('add-btn');
    
       input.value="my task";
       add_btn.click();
    
       obj.equal(tasksArr.length,1);
    
    
    }
    );
    */
    
    test("test add  empty task in ui",(obj)=>{
    
        var input = document.getElementById('add');
        var add_btn = document.getElementById('add-btn');
     
        input.value="";
        add_btn.click();
     
        obj.equal(tasksArr.length,0);
     
     
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
  