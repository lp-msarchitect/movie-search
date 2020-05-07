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
                <!-- If we need pagination -->
                <div class="swiper-pagination"></div>

                <!-- If we need navigation buttons -->
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
                </div>
    `;

    super(html, global);
  }

  addMovie(movieInfo) {
    const movie = new Movie(movieInfo, this.global);
    this.element.querySelector('.swiper-wrapper').appendChild(movie.element);
  }

  clear() {
    this.element.querySelector('.swiper-wrapper').innerHTML = '';
  }

  createElement() {
    const element = super.createElement();

    const mySwiper = new Swiper(element, {
      // Optional parameters
      direction: 'horizontal',
      loop: true,

      // If we need pagination
      pagination: {
        el: element.querySelector('.swiper-pagination'),
      },

      // Navigation arrows
      navigation: {
        nextEl: element.querySelector('.swiper-button-next'),
        prevEl: element.querySelector('.swiper-button-prev'),
      },
    });

    return element;
  }
}
