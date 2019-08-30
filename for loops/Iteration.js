var colors = ["red", "blue", "green", "yellow"];
for(var i = 0; i<colors.length; i++)
{
    console.log(colors[i]);
}


function print(color){
    console.log(color);
}

colors.forEach(print);
