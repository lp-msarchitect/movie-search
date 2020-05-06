import Component from './Component';

export default class Search extends Component {
  constructor(global) {
    const html = `
                <div class="search">
                    <input class="search__input" id="search-input" type="text" placeholder="Search movie"/>
                    <div class="search__controls">
                    <button class="search__control search__control--clear"></button>
                    <button class="search__control search__control--keyboard"></button>
                    <button class="search__start button" id="search-btn">Search</button>
                    </div>
                </div>
        `;
    super(html, global);
  }

  get value() {
    this.element.querySelector('#search-input').value;
  }
}
