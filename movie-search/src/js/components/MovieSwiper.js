import Swiper from 'swiper';
import Component from './Component';
import Movie from './Movie';

export default class MovieSwiper extends Component {
  constructor(global) {
    const html = `
                <!-- Slider main container -->
                <div class="swiper-container">
                <!-- Additional required wrapper -->
                <div class="swiper-wrapper">
                    <!-- Slides -->
                </div>

                <!-- If we need navigation buttons -->
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
                </div>
    `;

    super(html, global);
  }

  addMovie(movieInfo) {
    const movie = new Movie(movieInfo, this.global);
    this.swiper.appendSlide(movie.element);
  }

  clear() {
    this.swiper.removeAllSlides();
  }

  on(event, handler) {
    this.swiper.on(event, handler);
  }

  createElement() {
    const element = super.createElement();

    this.swiper = new Swiper(element, {
      // Optional parameters
      direction: 'horizontal',
      loop: false,
      slidesPerView: 1,
      // updateOnWindowResize: true,
      // Navigation arrows
      navigation: {
        nextEl: element.querySelector('.swiper-button-next'),
        prevEl: element.querySelector('.swiper-button-prev'),
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        860: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      },
    });

    return element;
  }
}
