// TODO: ErrorComponent

import MovieSwiper from './components/MovieSwiper';
import Search from './components/Search';
import Loader from './components/Loader';

export default class View {
  constructor(rootID, global) {
    this.rootElement = document.getElementById(rootID);
    this.global = global;
    this.components = {};
  }

  showLoader() {
    this.components.loader.show();
  }

  hideLoader() {
    this.components.loader.hide();
  }

  init() {
    this.components.loader = new Loader(this.global);
    this.rootElement.appendChild(this.components.loader.element);
    this.showLoader();
    this.components.search = new Search(this.global);
    this.rootElement.appendChild(this.components.search.element);
    this.components.movieSwiper = new MovieSwiper(this.global);
    this.rootElement.appendChild(this.components.movieSwiper.element);
    this.hideLoader();
  }

  showMovies(movies) {
    this.components.movieSwiper.clear();
    movies.forEach((movie) => {
      this.components.movieSwiper.addMovie(movie);
    });
  }
}
