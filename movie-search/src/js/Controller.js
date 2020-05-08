export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  init() {
    this.view.init();
    this.view.components.search.subscribe((value) => {
      this.searchMovies(value);
    });
    this.searchMovies('dream');
  }

  searchMovies(title) {
    this.view.showLoader();
    this.model
      .getMoviesPage(title, 1)
      .then((movies) => {
        const moviesInfo = movies.map((movie) => {
          return {
            title: movie.Title,
            id: movie.imdbID,
            poster: movie.Poster,
            year: movie.Year,
            rating: 'null', // TODO getRating
          };
        });
        this.view.hideLoader();
        this.view.showMovies(moviesInfo);
        // TODO search first page of movies, show loader than result or error msg
      })
      .catch((error) => {
        this.view.hideLoader();
        this.view.showError(error);
      });
  }

  getMoviesWithRating() {}

  getMoreMovies() {
    // TODO search next page of movies and show
  }
}
