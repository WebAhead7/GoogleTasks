//add item at the end of the array
function addTask(array, task) {
    array.push(task);
    return array;
}


//delete item from the array
function deleteTask(array, index) {
    if (typeof index !== 'string' && index % 1 === 0) {
        if (index < array.length && index >= 0) {
            array.splice(index, 1);
        }
        else {
            return "index not found";
        }
    }else{
        return "index not a number";
    }
    return array;
}


//comlete items in array
function completeTask(array, index) {
    if (typeof index !== 'string' && index % 1 === 0) {
        if (index < array.length && index >= 0) {
            array[index].isCompleted = true;
        } else {
            return "index not found";
        }
    }else{
        return "index not a number";
    }
    return array;
}

