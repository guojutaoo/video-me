function searchMovie(){ 
    var content = document.getElementById("movie_name").value;
    location.href = "SingleMovieSession?wd=" + content + "&search=2&id=&artist=&genre=";
}

// navbar search movie function