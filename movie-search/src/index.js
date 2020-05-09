import Controller from './js/Controller';
import Model from './js/Model';
import View from './js/View';

const model = new Model();
const view = new View('app', document);
const controller = new Controller(model, view);
controller.init().then(() => {
  controller.addHandlers();
});
