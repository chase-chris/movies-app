(async () => {
    "use strict";
    // This is the entry point for your application. Write all of your code here.
    // Before you can use the database, you need to configure the "db" object
    // with your team name in the "js/movies-api.js" file.

    // <!-- Below Function is to get the movies from the database on the HTML page -->


        async function loadMovies(){
            const movies = await getMovies();

            let newhtml = ``;
            for (let i = 0; i < movies.length; i++) {
                let cardHtml = `<div class="movie">
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
                                            <p class="rating">Rating: ${movies[i].rating}</p>
                                        </div>
                                        
                                        <div class="social-btn">
                                         <!-- WATCH TRAILER-->
                                           <button>
                                               <a href="${movies[i].trailer}" target="_blank">Watch Trailer</a>
                                           </button>
                                        </div>       
                                    </div>
                                </div>
                            <div class="card_right">
                                
                           <div class="play_btn">
                           
                           </a>
                           </div>
                           </div>
                        </div>
                    </div>
                  </div>`
                newhtml += cardHtml;
            }
            $('#movies').html(newhtml)
        }

    //todo write a function that will search movies by title using the input field with the id of search-input when the button with the id of search-input-btn is clicked

    async function searchMyMovies() {
        $('#search-movie-btn').click(async function () {
            const movies = await getMovies();
            let newhtml = ``;
            for (let i = 0; i < movies.length; i++) {
                if (movies[i].title === $('#search-movie').val()) {
                    let cardHtml = `<div class="movie">
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
                                            <p class="rating">Rating: ${movies[i].rating}</p>
                                        </div>
                                        
                                        <div class="social-btn">
                                         <!-- WATCH TRAILER-->
                                           <button>
                                               <a href="${movies[i].trailer}" target="_blank">Watch Trailer</a>
                                           </button>
                                        </div>
                                    </div>
                                </div>
                            <div class="card_right">
                                
                           <div class="play_btn">
                           
                           </a>
                           </div>
                           </div>
                        </div>
                    </div>
                  </div>`
                    newhtml += cardHtml;
                }
                $('#movies-searched').html(newhtml)
            }
        });
    }

    //todo write a function that adds a movie to the database when the add button is clicked

        async function addMyMovies() {
            // const movies = await getMovies();
            $('#add-movie').click(async function () {
                // console.log("add btn clicked");
                let movie = {
                title: $('#title').val(),
                rating: $('#rating').val(),
                year: $('#year').val(),
                director: $('#director').val(),
                runtime: $('#runtime').val(),
                genre: $('#genre').val(),
                actors: $('#actors').val(),
                };
                await addMovie(movie);
                await loadMovies();
            });
        }

    //todo write a function that deletes a movie from the database when the delete button is clicked using the title as the identifier

        async function deleteMyMovies() {
            $('#delete-movie-btn').click(async function () {
                const movies = await getMovies();
               console.log("delete btn clicked");
               console.log("Delete input value =>", $('#delete-movie').val())
            for (let i = 0; i < movies.length; i++) {
                console.log(`Loop #${i+1} through the movies array.`);
                console.log(`Comparing ${movies[i].title} to ${$('#delete-movie').val()}`);
                if (movies[i].title === $('#delete-movie').val()) {
                    console.log("Found a match!");
                    let movie = {}
                    movie.id = movies[i].id
                    console.log("movie =>", movie);
                    console.log("movie.id =>", movie.id);
                    await deleteMovie(movie);
                    await loadMovies();
                    }
                }
            });
        }

        
    async function updateMyMovies() {
        $('#update-input-btn').click(async function () {
            const movies = await getMovies();
            // console.log("update btn clicked");
            for (let i = 0; i < movies.length; i++) {
                // console.log(movies[i])
                if (movies[i].title === $('#update-input').val()) {
                    let movie = {
                        title: $('#title1').val(),
                        rating: $('#rating1').val(),
                        id: movies[i].id,
                        year: $('#year1').val(),
                        director: $('#director1').val(),
                        runtime: $('#runtime1').val(),
                        genre: $('#genre1').val(),
                        actors: $('#actors1').val(),
                    };
                    //console.log(movie)
                    await updateMovie(movie);
                    await loadMovies();
                }
            }
        });
    }
    await loadMovies();
    await addMyMovies();
    await deleteMyMovies();
    await updateMyMovies();
    await searchMyMovies();

//use event listeners to hide and show the forms

    $('#addNav').click(function () {
        $('#add').show();
        $('#delete').hide();
        $('#update').hide();
        $('#search').hide();
    });

    $('#deleteNav').click(function () {
        $('#delete').show();
        $('#add').hide();
        $('#update').hide();
        $('#search').hide();
    });

    $('#updateNav').click(function () {
        $('#update').show();
        $('#updateField').show();
        $('#add').hide();
        $('#delete').hide();

    });

    $('#homeNav').click(function () {
        $('#add').hide();
        $('#delete').hide();
        $('#update').hide();
        $('#search').hide();
    });

    $('#searchNav').click(function () {
        $('#search').show();
        $('#add').hide();
        $('#delete').hide();
        $('#update').hide();
    });

})();

// When the user scrolls the page, execute myFunction
window.onscroll = function() {stickyBar()};

// Get the navbar
let navbar = document.querySelector("#navbar");

// Get the offset position of the navbar
let sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyBar() {
    if (window.scrollY >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

