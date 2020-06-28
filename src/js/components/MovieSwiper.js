import Swiper from 'swiper';
import Component from './Component';
import Movie from './Movie';

export default class MovieSwiper extends Component {
  constructor(global) {
    const html = `
                <div class="swiper-overcontainer">
                <div class="swiper-button swiper-button--prev"></div>
                <!-- Slider main container -->
                <div class="swiper-container">
                <!-- Additional required wrapper -->
                <div class="swiper-wrapper">
                    <!-- Slides -->
                </div>

                <!-- If we need navigation buttons -->
                <!--<div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>-->
                </div>
                  
                  <div class="swiper-button swiper-button--next"></div>
                </div>
    `;

    super(html, global);
  }

  addMovies(movies) {
    const slides = movies.map((movieInfo) => {
      const movie = new Movie(movieInfo, this.global);
      return movie.element;
    });

    this.swiper.appendSlide(slides);
  }

  clear() {
    this.swiper.removeAllSlides();
    this.swiper.update();
  }

  on(event, handler) {
    this.swiper.on(event, handler);
  }

  createElement() {
    const element = super.createElement();

    this.swiper = new Swiper(element.querySelector('.swiper-container'), {
      // Optional parameters
      direction: 'horizontal',
      loop: false,
      slidesPerView: 1,
      speed: 200,
      // Navigation arrows
      navigation: {
        nextEl: element.querySelector('.swiper-button--next'),
        prevEl: element.querySelector('.swiper-button--prev'),
        disabledClass: 'swiper-button--disabled',
      },
      breakpoints: {
        980: {
          slidesPerView: 2,
          spaceBetween: 50,
        },
        1250: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1600: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      },
    });

    return element;
  }
}
