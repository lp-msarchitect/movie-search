import Component from './Component';

export default class Movie extends Component {
  constructor(movie, global) {
    const html = `
    <div class="swiper-slide">
        <a class="swiper-slide__title" href="${movie.galleryURL}">${movie.title}</a>
        <img
        src="${movie.poster}"
        alt="${movie.title} poster"
        height="445"
        width="300"
        />
        <span>${movie.year}</span>
        <span>${movie.rating}</span>
    </div>
    `;
    super(html, global);
  }
}
