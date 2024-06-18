// set up an empty array that will hold the movies
var arrMovies = [];

//function to add a movie to the movies array
function addMovie(event){
    event.preventDefault(); // prevent the fprm from submitting and the pahge will not refresh
    // set up a pointer variale to the movie tex input
    var txtMovieInput = document .getElementById("txtMovie");
    //set up a variable that hold the movie title
    var movieTitle = txtMovieInput.value.trim();

    //check to make sure a movie was actually entered
    if (movieTitle){
        //add tthe movie title to the array
        arrMovies.push(movieTitle);
        //sort the arrau so the movie titles are in alphebetic order
        arrMovies.sort();
        // clear the text from the input textbox
        txtMovieInput.value = "";
        //call the function to update the movies that appear on the page
        updateMovieList();
    }
}

//function to update the list of movcies on the page
function updateMovieList(){
    //create an empty array to hold the html formatted mocie list
    var arrMoviesFormatted = [];
    //pointer to tthe mocie list div
    var divMovies = document.getElementById("divMovieList");

    //loop through the movie array
    for (var i =0; i < arrMovies.length; i++) {
        // take array item and  format with html
        arrMoviesFormatted.push("<div>" + arrMovies[i] + "</div>");
    }
    //turn the formatted list of movies into a string
    divMovies.innerHTML = arrMoviesFormatted.join (' ');
}

//function to clear thr mies list
function clearList(){
    // clear the movies array
    arrMovies = [];

     //call the function to update the movies that appear on the page
     updateMovieList();
}