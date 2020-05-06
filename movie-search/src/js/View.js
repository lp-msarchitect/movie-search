import Swiper from 'swiper';
// TODO: MovieComponent
// TODO: MoviesSliderComponent
// TODO: SearchComponent
// TODO: LoaderComponent
// TODO: ErrorComponent

export default class View {
  constructor(rootID) {
    this.rootID = rootID;
  }

  showLoader() {
    // TODO: show loaderElement
  }

  init() {
    // TODO: show initial state;
  }

  showMovies(movies) {
    // TODO: show Movies on the page;
  }

  initSwiper() {
    const mySwiper = new Swiper('.swiper-container', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
}
