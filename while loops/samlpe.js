var age = prompt("Enter age : ");

if(age < 0)
    console.log("You dead");
else if(age == 21)
    console.log("Happy Birthday");
else if(age %2 == 1)
    console.log("Your age is odd");
else if(Math.sqrt(age).isNumber())
    console.log("Perfect square");