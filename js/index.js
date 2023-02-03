(async () => {



    // This is the entry point for your application. Write all of your code here.
    // Before you can use the database, you need to configure the "db" object 
    // with your team name in the "js/movies-api.js" file.

    // <!-- Below Function is to get the movies from the database on the HTML page -->
   const movies = await getMovies();


    newhtml=``;
    for (let i=0; i<movies.length; i++){
       newhtml+=`<div class="movie">

                <h1>${movies[i].title}</h1>
                <div class="card_cat">
                    <p class="year">Year: ${movies[i].year}</p>
                    <p class="genre">Genre: ${movies[i].genre}</p>
                    <p class="time">Minutes: ${movies[i].runtime}</p>
                    <p class="director">Director: ${movies[i].director}</p>
                    <p class="actors">Actors: ${movies[i].actors}</p>
                </div>
                  
       </div>`
    }

$('#movies').html(newhtml)


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
                // $('#movies').html('<div class="movie">');
            }
        }
    });

// search movies function

    //todo write a search function that searches my title and returns that movie
    $('.search-movie-btn').click(function() {

            for (let i = 0; i < movies.length; i++) {
                if (movies[i].title === $('.search-movie').val()) {

                    let movie = {}
                    movie.id = movies[i].id
                    getMovie(movie);
                    searchhtml = ``;
                    searchhtml += `<div class="movie">
                                <h1>${movies[i].title}</h1>
                                <div class="card_cat">
                                    <p class="year">Year: ${movies[i].year}</p>
                                    <p class="genre">Genre: ${movies[i].genre}</p>
                                    <p class="time">Minutes: ${movies[i].runtime}</p>
                                    <p class="director">Director: ${movies[i].director}</p>
                                    <p class="actors">Actors: ${movies[i].actors}</p>
                                </div>
                                </div>`
                }
            }
        $('#searched-movie').html(searchhtml)
    });

    // write a function that updates a movie by searhing the title

    // $('#update-input-btn').click(function() {
    //     for (let i=0; i<movies.length; i++){
    //         if (movies[i].title === $('#update-input').val()){
    //             console.log(movies[i].id)
    //             let movie = {
    //                 title: $('#title1').val(),
    //                 rating: $('#rating1').val(),
    //                 year: $('#year1').val(),
    //                 director: $('#director1').val(),
    //                 runtime: $('#runtime1').val(),
    //                 genre: $('#genre1').val(),
    //                 actors: $('#actors1').val(),
    //             };
    //
    //             updateMovie(movie);
    //
    //         }
    //     }
    // });
    //
    //



})();

//TODO: display a list of movies on the page
//TODO: add a movie to the database
//TODO: delete a movie from the database
//TODO: edit a movie in the database
