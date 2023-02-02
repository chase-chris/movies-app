(async () => {



    // This is the entry point for your application. Write all of your code here.
    // Before you can use the database, you need to configure the "db" object 
    // with your team name in the "js/movies-api.js" file.

    // <!-- Below Function is to get the movies from the database on the HTML page -->
   const movies = await getMovies();
    console.log(movies);
    html=``;
for (let i=0; i<movies.length; i++){
    html+=`<div class="movie">
    <div class="movie-title">${movies[i].title}</div>
    <div class="movie-rating">${movies[i].rating}</div>
    <div class="movie-year">${movies[i].year}</div>
    <div class="movie-runtime">${movies[i].runtime}</div>
    <div class="movie-actors">${movies[i].actors}</div>
    </div>`;
}
$('#movies').html(html)

    console.log(movies);


    $('#add-movie').click(function() {
        let movie = {
            title: $('#title').val(),
            rating: $('#rating').val(),
            year: $('#year').val(),
            director: $('#director').val(),
            runtime: $('#runtime').val(),
            genre: $('#genre').val(),
            actors: $('#actors').val(),
        };
        addMovie(movie);
        $('#movies').html('<div class="movie">');
    });

    $('#delete-movie').click(function() {
        let movie = {
            title: $('#title').val(),
            rating: $('#rating').val(),
            year: $('#year').val(),
            director: $('#director').val(),
            runtime: $('#runtime').val(),
            genre: $('#genre').val(),
            actors: $('#actors').val(),
        };
        deleteMovie(movie);
        $('#movies').html('<div class="movie">');
    });

})();

//TODO: display a list of movies on the page
//TODO: add a movie to the database
//TODO: delete a movie from the database
//TODO: edit a movie in the database
