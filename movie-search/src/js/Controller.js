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
    this.model.getMoviesPage(title, 1).then((movies) => {
      const moviesInfo = movies.map((movie) => {
        return {
          title: movie.Title,
          poster: movie.Poster,
          year: movie.Year,
          rating: 'null', // TODO getRating
        };
      });

      this.view.showMovies(moviesInfo);
      // TODO search first page of movies, show loader than result or error msg
    });
  }

  getMoreMovies() {
    // TODO search next page of movies and show
  }
}
