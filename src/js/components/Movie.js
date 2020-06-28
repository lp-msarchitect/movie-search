import Component from './Component';

export default class Movie extends Component {
  constructor(movie, global) {
    let additionRatingClass = 'swiper-slide__rating--';

    if (movie.rating <= 7 && movie.rating > 5) {
      additionRatingClass += `middle`;
    }
    if (movie.rating <= 5) {
      additionRatingClass += 'low';
    }

    const html = `
    <a class="swiper-slide" href="https://www.imdb.com/title/${movie.id}/" target="_blank">
    <div class="swiper-slide__container">
    <div class="swiper-slide__img-container">    
    <img
        class = "swiper-slide__img"
        src="${movie.poster}"
        alt="${movie.title} poster"
        height="400"
        width="250"
        />
        <div class="swiper-slide__info">
          Country: ${movie.country}<br>
          Genre: ${movie.genre}
        </div>
    </div>
        <div class="swiper-slide__title">${movie.title}</div>
        <span class="swiper-slide__year">${movie.year}</span>
        <span class="swiper-slide__rating ${additionRatingClass}">${movie.rating}</span>
    </div>
    </a>
    `;
    super(html, global);
  }
}
