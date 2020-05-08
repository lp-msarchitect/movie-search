export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.currentPage = 1;
    this.currentRequest = 'dream';
  }

  init() {
    this.view.init();
    this.view.components.search.subscribe((request) => {
      this.view.clearStatus();
      this.translate(request)
        .then((title) => {
          this.currentRequest = title;
          this.view.components.movieSwiper.clear();
          this.searchMovies(title);
        })
        .catch((error) => {
          this.view.showError(error);
        });
    });

    this.view.components.movieSwiper.on('reachEnd', () => {
      console.log('reachEND!!!');
      this.searchMovies(this.currentRequest, this.currentPage + 1);
    });
    this.searchMovies(this.currentRequest, this.currentPage);
  }

  translate(str) {
    return new Promise((resolve, reject) => {
      if (/[а-я]/i.test(str)) {
        this.model
          .getTranslate(str)
          .then((res) => {
            this.view.showInfo(`Showing results for ${res}`);
            console.log('res: ', res);

            resolve(res);
          })
          .catch((err) => reject(err));
      } else {
        resolve(str);
      }
    });
  }

  searchMovies(title, page = 1) {
    this.view.showLoader();
    this.currentPage = page;
    this.model
      .getMoviesPage(title, page)
      .then((movs) => {
        console.log(movs);

        return this.model.setMoviesRating(movs);
      })
      .then((movies) => {
        console.log(movies);

        return movies.map((movie) => {
          return {
            title: movie.Title,
            id: movie.imdbID,
            poster: movie.Poster,
            year: movie.Year,
            rating: movie.rating, // TODO getRating
          };
        });
      })
      .then((moviesInfo) => {
        this.view.hideLoader();
        this.view.showMovies(moviesInfo);
      })
      .catch((error) => {
        this.view.showError(error);
        this.view.hideLoader();
      });
  }

  getMoreMovies() {
    // TODO search next page of movies and show
  }
}
