var choice = prompt("Choice : ");
var todo = [];
while(choice != "quit")
{
    if(choice == "new")
    {
        todo.push(prompt("What would youwant to do : "));
    }
    else if(choice == "list")
    {
        todo.forEach(function(i, idx){  
            console.log("********");     //For each the firste element is the element itself and the second argumenet in the index 
            console.log(idx + ": " + i);
            console.log("********");
        })
    }
    else if(choice == "delete")
    {
        var idx = prompt("Enter the index of todo to delete : ");
        todo.splice(idx, 1);  //for deleting the element at a particular idx
    }
    
    choice = prompt("Choice : ");
}