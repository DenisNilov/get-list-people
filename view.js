import { createElement, getTemlate } from './template.js';

export default class View {
    #model = [];
    #onEditClick = null;
    #element = null;

    constructor({ model, onEditClick }) {
        this.#model = model;
        this.#onEditClick = onEditClick;
        this.element.querySelector('button')
            .addEventListener('click', this.#clickHandler);
    }

    get template() {
        return getTemlate(this.#model.data);
    }

    get element() {
        if (!this.#element) {
            this.#element = createElement(this.template);
        }
        return this.#element;
    }

    #clickHandler = (evt) => {
        evt.preventDefault();
        this.#onEditClick();
    };
}