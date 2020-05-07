// TODO: SearchComponent
// TODO: LoaderComponent
// TODO: ErrorComponent

import MovieSwiper from './components/MovieSwiper';
import Search from './components/Search';

export default class View {
  constructor(rootID, global) {
    this.rootElement = document.getElementById(rootID);
    this.global = global;
    this.components = {};
  }

  showLoader() {
    // TODO: show loaderElement
  }

  init() {
    this.components.search = new Search(this.global);
    this.rootElement.appendChild(this.components.search.element);
    this.components.movieSwiper = new MovieSwiper(this.global);
    this.rootElement.appendChild(this.components.movieSwiper.element);
  }

  showMovies(movies) {
    // TODO: show Movies on the page;
    this.components.movieSwiper.clear();
    movies.forEach((movie) => {
      this.components.movieSwiper.addMovie(movie);
    });
  }
}
