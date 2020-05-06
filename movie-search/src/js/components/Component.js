export default class Component {
  constructor(html = '', global) {
    this.html = html;
    this.global = global;
    this.htmlElement = null;
  }

  get element() {
    return this.htmlElement || this.createElement();
  }

  createElement() {
    const tmpElement = this.global.createElement('div');
    tmpElement.innerHTML = this.html;
    this.htmlElement = tmpElement.firstElementChild;
    return this.htmlElement;
  }
}
