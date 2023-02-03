(async () => {



    // This is the entry point for your application. Write all of your code here.
    // Before you can use the database, you need to configure the "db" object 
    // with your team name in the "js/movies-api.js" file.

    // <!-- Below Function is to get the movies from the database on the HTML page -->
   const movies = await getMovies();

    html=``;
for (let i=0; i<movies.length; i++){
    html+=`<div class="movie">
    <div class="movie-title">${movies[i].title}</div>
    <div class="movie-rating">${movies[i].rating}</div>
    <div class="movie-year">${movies[i].year}</div>
    <div class="movie-runtime">${movies[i].runtime}</div>
    <div class="movie-actors">${movies[i].actors}</div>
    <div class="movie-genre">${movies[i].genre}</div>
    <div class="movie-director">${movies[i].director}</div>
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

    //todo write a function that deletes a movie from the database when the delete button is clicked using the title as the identifier


    $('#delete-movie-btn').click(function() {
        for (let i=0; i<movies.length; i++){
            if (movies[i].title === $('#delete-movie').val()){
                console.log(movies[i].id)
                    let movie ={}
                    movie.id = movies[i].id

                deleteMovie(movie);
                $('#movies').html('<div class="movie">');
            }
        }
    });







})();

//TODO: display a list of movies on the page
//TODO: add a movie to the database
//TODO: delete a movie from the database
//TODO: edit a movie in the database
