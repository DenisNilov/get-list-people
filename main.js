import Api from './api.js';
import Model from './model.js';
import Presenter from './presenter.js';


const body = document.body;
const api = new Api(50);
const model = new Model(api);
model.init();
new Presenter({ model, body });
