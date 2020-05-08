// TODO: ErrorComponent

import MovieSwiper from './components/MovieSwiper';
import Search from './components/Search';
import Loader from './components/Loader';
import StatusMsg from './components/StatusMsg';

export default class View {
  constructor(rootID, global) {
    this.rootElement = document.getElementById(rootID);
    this.global = global;
    this.components = {};
  }

  showError(msg) {
    const errorMsg = `
      ${msg}
      No results for ${this.components.search.value} 
    `;
    this.components.status.showError(errorMsg);
  }

  showInfo(msg) {
    console.log('show info: ', msg);
    this.components.status.show(msg);
  }

  clearStatus() {
    console.log('clear');

    this.components.status.clear();
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
    this.components.status = new StatusMsg(this.global);
    this.rootElement.appendChild(this.components.status.element);
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
