var movies = [
    {
        title : "In Bruges",
        ratings : 5,
        hasWatched : true
    },
    {
        title : "Frozen",
        ratings : 4.5,
        hasWatched : false
    },
    {
        title : "Mad Max Fury Road",
        ratings : 5,
        hasWatched : true
    },
    {
        title : "Les Miserables",
        ratings : 3.5,
        hasWatched : false
    }
]

function buildStr(movie){
    var str = "You have ";
    if (movie.hasWatched)
        str += "watched \"";
    else
        str += "not seen \"";
    str += movie.title + "\" - " + movie.ratings + " stars";
    return(str);
}


movies.forEach(function(movie){
    console.log(buildStr(movie));
})