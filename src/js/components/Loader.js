import Component from './Component';

export default class Loader extends Component {
  constructor(global) {
    const html = `<div class="loader"><div class="loader__spin"></div></div>`;

    super(html, global);
  }

  show() {
    if (!this.element.classList.contains('loader--show')) {
      this.element.classList.add('loader--show');
    }
  }

  hide() {
    this.element.classList.remove('loader--show');
  }
}
