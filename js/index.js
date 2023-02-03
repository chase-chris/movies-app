(async () => {



    // This is the entry point for your application. Write all of your code here.
    // Before you can use the database, you need to configure the "db" object 
    // with your team name in the "js/movies-api.js" file.

    // <!-- Below Function is to get the movies from the database on the HTML page -->
   const movies = await getMovies();

    html=``;
    for (let i=0; i<movies.length; i++){
        html+=`<div class="movie">
<div class="wrapper">
    <div class="main_card">
        <div class="card_left">
            <div class="card_datails">
                <h1>${movies[i].title}</h1>
                <div class="card_cat">
                    <p class="year">Year: ${movies[i].year}</p>
                    <p class="genre">Genre: ${movies[i].genre}</p>
                    <p class="time">Minutes: ${movies[i].runtime}</p>
                    <p class="director">Director: ${movies[i].director}</p>
                    <p class="actors">Actors: ${movies[i].actors}</p>
                </div>
                  <img src="${movies[i].poster}" alt="poster" class="poster">
       <div class="social-btn">
       <!-- WATCH TRAILER-->
       <button>
           <a href="${movies[i].trailer}" target="_blank">Watch Trailer</a>
       </button>
           <!-- GET-->
       <button>
       <i class="fas fa-download"></i> DOWNLOAD
       </button>
           <!--USERS RATINGS-->
       <button>
       <i class="fas fa-thumbs-up"></i> ${movies[i].rating}
       </button>
           <!--BOOKMARK-->
       <button>
       <i class="fas fa-star"></i>
       </button>
       </div>
       </div>
       </div>
       <div class="card_right">
       <div class="img_container">
       <img src="${movies[i].poster}" alt="movie">
       </div>
       <div class="play_btn">
       <a href="https://www.imdb.com/title/tt4912910/" target="_blank">
       <i class="fas fa-play-circle"></i>
       </a>
       </div>
       </div>
       </div>
       </div>
       </div>`
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

// search movies function

    //todo write a search function that searches my title and returns that movie
    $('.search-movie-btn').click(function() {
        for (let i=0; i<movies.length; i++){
            if (movies[i].title === $('.search-movie').val()){
                console.log(movies[i].id)
                let movie ={}
                movie.id = movies[i].id
                getMovie(movie);

                console.log(hello)
                html2=``;
                for (let i=0; i<movies.length; i++){
                    html2+=`<div class="movie2">
<div class="wrapper">
    <div class="main_card">
        <div class="card_left">
            <div class="card_datails">
                <h1>${movies[i].title}</h1>
                <div class="card_cat">
                    <p class="year">Year: ${movies[i].year}</p>
                    <p class="genre">Genre: ${movies[i].genre}</p>
                    <p class="time">Minutes: ${movies[i].runtime}</p>
                    <p class="director">Director: ${movies[i].director}</p>
                    <p class="actors">Actors: ${movies[i].actors}</p>
                </div>
                  <img src="${movies[i].poster}" alt="poster" class="poster">
       <div class="social-btn">
       <!-- WATCH TRAILER-->
       <button>
           <a href="${movies[i].trailer}" target="_blank">Watch Trailer</a>
       </button>
           <!-- GET-->
       <button>
       <i class="fas fa-download"></i> DOWNLOAD
       </button>
           <!--USERS RATINGS-->
       <button>
       <i class="fas fa-thumbs-up"></i> ${movies[i].rating}
       </button>
           <!--BOOKMARK-->
       <button>
       <i class="fas fa-star"></i>
       </button>
       </div>
       </div>
       </div>
       <div class="card_right">
       <div class="img_container">
       <img src="${movies[i].poster}" alt="movie">
       </div>
       <div class="play_btn">
       <a href="https://www.imdb.com/title/tt4912910/" target="_blank">
       <i class="fas fa-play-circle"></i>
       </a>
       </div>
       </div>
       </div>
       </div>
       </div>`
                }

                $('#searched-movie').html(html2)

                $('#searched-movie').html('<div class="movie2">');

                console.log(1)
            }
        }
    });





})();

//TODO: display a list of movies on the page
//TODO: add a movie to the database
//TODO: delete a movie from the database
//TODO: edit a movie in the database
