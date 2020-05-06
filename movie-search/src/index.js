import { Controller } from 'swiper/js/swiper.esm';
import Model from './js/Model';
import View from './js/View';

const model = new Model();
const view = new View('app');
const controller = new Controller(model, view);
controller.init();
