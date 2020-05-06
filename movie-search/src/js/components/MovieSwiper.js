import Swiper from 'swiper';
import Component from './Component';

export default class MovieSwiper extends Component {
  constructor(global) {
    const html = `
                <!-- Slider main container -->
                <div class="swiper-container">
                <!-- Additional required wrapper -->
                <div class="swiper-wrapper">
                    <!-- Slides -->
                    <div class="swiper-slide">
                    <a class="swiper-slide__title" href="#">Dream House</a>
                    <img
                        src="https://via.placeholder.com/445x300"
                        alt=""
                        height="445"
                        width="300"
                    />
                    <span>2011</span>
                    <span>6.0</span>
                    </div>
                    <div class="swiper-slide">
                    <a class="swiper-slide__title" href="#">A Nightmare on Elm</a>
                    <img
                        src="https://via.placeholder.com/445x300"
                        alt=""
                        height="445"
                        width="300"
                    />
                    <span>1987</span>
                    <span>6.6</span>
                    </div>
                    <div class="swiper-slide">
                    <a class="swiper-slide__title" href="#">Dream House</a>
                    <img
                        src="https://via.placeholder.com/445x300"
                        alt=""
                        height="445"
                        width="300"
                    />
                    <span>2011</span>
                    <span>6.0</span>
                    </div>
                    ...
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
