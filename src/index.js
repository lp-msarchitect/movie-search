import Controller from './js/Controller';
import Model from './js/Model';
import View from './js/View';

const API_KEYS = {
  ytrnsl:
    'trnsl.1.1.20200426T152125Z.cb620e66f793c290.b8233de83d42a48bd5547479b9a206f77b57ea96',
  omdb: '7f33cc87',
};

const model = new Model(API_KEYS);
const view = new View('app', document);
const controller = new Controller(model, view);
controller.init().then(() => {
  controller.addHandlers();
});
