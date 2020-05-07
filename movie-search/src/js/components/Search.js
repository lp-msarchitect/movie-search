import Component from './Component';

export default class Search extends Component {
  constructor(global) {
    const html = `
                <form class="search" id="search-form">
                    <input class="search__input" id="search-input" type="text" placeholder="Search movie"/>
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
    // TODO removeListeners
  }

  addListeners() {
    this.element.addEventListener('submit', (e) => {
      e.preventDefault();
      this.broadcast(this.value);
    });
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

  broadcast(msg) {
    this.handlers.forEach((handler) => {
      handler(msg);
    });
  }

  subscribe(handler) {
    this.handlers.push(handler);
  }

  // TODO unsubscribe
}
