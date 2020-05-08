import Component from './Component';

export default class Movie extends Component {
  constructor(movie, global) {
    const html = `
    <div class="swiper-slide">
        <a class="swiper-slide__title" href="https://www.imdb.com/title/${movie.id}/" target="_blank">${movie.title}</a>
        <img
        class = "swiper-slide__img"
        src=""
        data-src="${movie.poster}"
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

  async loadImage() {
    const imgElement = this.element.querySelector('.swiper-slide__img');
    const url = imgElement.dataset.src;
    const response = await fetch(url);
    if (!response.ok) {
      console.error(`Not found image ${url}`);
    }
    const myBlob = await response.blob();
    const objectURL = URL.createObjectURL(myBlob);
    imgElement.src = objectURL;

    return this;
  }
}
