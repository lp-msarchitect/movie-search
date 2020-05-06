export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  init() {
    this.view.init();
    const movies = this.model.getMovies('request');
    view.showMovies(movies);
  }

  searchMovies(title) {
    // TODO search first page of movies, show loader than result or error msg
  }

  getMoreMovies() {
    // TODO search next page of movies and show
  }
}
