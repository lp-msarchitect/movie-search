import Component from './Component';

export default class Search extends Component {
  constructor(global) {
    const html = `
                <form class="search" id="search-form" autocomplete="off">
                    <input class="search__input" id="search-input" type="text" placeholder="Search movie" autofocus/>
                    <div class="search__controls">
                    <button class="search__control search__control--clear" type="reset"></button>
                    <button class="search__control search__control--keyboard"></button>
                    <button class="search__start button type="submit" id="search-btn">Search</button>
                    </div>
                </form>
        `;
    super(html, global);
    this.handlers = [];

    this.addListeners();
  }

  addListeners() {
    this.element.addEventListener('submit', this.broadcast.bind(this));
  }

  removeListeners() {
    this.element.removeListeners('submit', this.broadcast.bind(this));
  }

  clear() {
    this.value = '';
  }

  set value(val) {
    const inputElement = this.element.querySelector('#search-input');
    inputElement.value = val;
  }

  get value() {
    const inputElement = this.element.querySelector('#search-input');
    return inputElement.value;
  }

  broadcast() {
    this.handlers.forEach((handler) => {
      handler(this.value);
    });
  }

  subscribe(handler) {
    this.handlers.push(handler);
  }

  unsubscribe(subscriber) {
    const index = this.handlers.indexOf(subscriber);
    if (index !== -1) {
      this.handlers.splice(index, 1);
    }
  }
}
