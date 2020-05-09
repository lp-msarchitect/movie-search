export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.currentPage = 1;
    this.maxPage = 1;
    this.currentRequest = 'dream';
    this.isSlideAddition = false;
  }

  async init() {
    this.view.init();
    this.view.showLoader();
    this.maxPage = await this.model.getMaxPage('dream');
    const movies = await this.searchMovies('dream');
    this.showMovies(movies);
    this.view.hideLoader();
  }

  addHandlers() {
    this.view.components.search.subscribe(this.startSearchHandler.bind(this));
    this.view.components.movieSwiper.on(
      'reachEnd',
      this.reachEndSwiperHandler.bind(this)
    );
    this.view.components.movieSwiper.on(
      'progress',
      this.progressSwiperHandler.bind(this)
    );
  }

  async progressSwiperHandler(progress) {
    console.log(progress);
    if (progress >= 0.75) {
      await this.addMoreSlides();
    }
  }

  async reachEndSwiperHandler() {
    console.log('reach end');
    console.log('curreent page ', this.currentPage);
    this.view.showLoader();
    await this.addMoreSlides();
    this.view.hideLoader();
  }

  async addMoreSlides() {
    if (this.currentPage == this.maxPage) {
      return;
    }
    console.log('add slides');
    this.isSlideAddition = true;
    const movies = await this.searchMovies(
      this.currentRequest,
      this.currentPage + 1
    );
    this.showMovies(movies);
    this.isSlideAddition = false;
  }

  async startSearchHandler(request) {
    try {
      this.view.clearStatus();
      this.view.showLoader();
      this.currentRequest = request;
      this.maxPage = await this.model.getMaxPage(request);
      const movies = await this.searchMovies(request);
      this.view.clearMovies();
      this.showMovies(movies);
    } catch (error) {
      console.error(error);
      this.view.showError(error.message);
    }
    this.view.hideLoader();
  }

  showMovies(moviesList) {
    const movies = moviesList.map((movie) => {
      return {
        title: movie.Title,
        id: movie.imdbID,
        poster: movie.Poster,
        year: movie.Year,
        rating: movie.rating,
      };
    });

    this.view.showMovies(movies);
  }

  async searchMovies(query, page = 1) {
    this.currentPage = page;
    if (/[а-я]/i.test(query)) {
      query = await this.model.getTranslate(query);
      this.view.showInfo(`Show results for ${query}`);
    }
    const moviesList = await this.model.getMovies(query, page);
    return moviesList;
  }
}
