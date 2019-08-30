function isEven(num){
    if(num%2==0)
        return true;
    else    
        return false;
}

function factorial(number){
    if(number == 0)
        return 1;
    else
        return (number * factorial(number-1));
}

function kebabToSnake(str){
    var nstr = str;
    var dash = nstr.indexOf("-")
    while(dash != -1)
    {
        nstr.replace("-", "_");
        dash = nstr.indexOf("-");
    }
    return nstr;
}
