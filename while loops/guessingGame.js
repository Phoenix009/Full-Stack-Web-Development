var guess, num = 7;
var uB = 100, lB = 0;
guess = prompt("Guess the number between "+ uB + " and  " + lB +" : ");
while(guess != num)
{
    if(guess > num)
    {
        alert("Too High");
        uB = (uB + lB)/2;
    }
    else {
        alert("Too Low");
        lB = Number(uB + lB)/2; 
    }
    
    guess = prompt("Guess the number between "+ uB + " and  " + lB +" : ");
}
alert("You Got It!");