function printReverse(list){
    for(var i = list.length -1; i>=0; i--)
        console.log(list[i]);
}


function isUniform(list){
    for(var i = 0; i<list.length - 1; i++)
    {
        if(list[i] != list[i+1])
        {
            return false;
        }
    }
    return true;
}

function sumArray(arr){
    var sum = 0;
    arr.forEach(function(i){
        sum += i;
    })
    return sum;
}

function maxArray(arr){
    var max = arr[0];
    arr.forEach(function(i){
        if(i > max)
            max = i;
    })
    return max;
}