import Component from './Component';

export default class StatusMsg extends Component {
  constructor(global) {
    const html = `
    <div class="status">
        <p class="status__message"></p>
    </div>
    `;

    super(html, global);
  }

  showError(msg) {
    if (!this.element.classList.contains('status--error')) {
      this.element.classList.add('status--error');
    }

    this.element.querySelector('.status__message').innerHTML = msg;
  }

  clear() {
    this.element.classList.remove('status--error');
    this.element.querySelector('.status__message').innerHTML = '';
  }
}
