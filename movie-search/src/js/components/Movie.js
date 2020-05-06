export default class Movie {
  constructor(movie, global) {
    this.global = global;
    this.html = `
    <div class="swiper-slide">
        <a class="swiper-slide__title" href="${movie.galleryURL}">${movie.title}</a>
        <img
        src="${movie.imageUrl}"
        alt="${movie.title} poster"
        height="445"
        width="300"
        />
        <span>${movie.releaseYear}</span>
        <span>${movie.imdbRating}</span>
    </div>
    `;

    this.element = null;
  }

  get element() {
    return this.element || this.createElement();
  }

  createElement() {
    const tmpElement = this.global.createElement('div');
    tmpElement.innerHTML = this.html;
    this.element = tmpElement.firstChild;
    return this.element;
  }
}
