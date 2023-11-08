import { render } from "./template";
import View from "./view";

export default class Presenter {
    #model = [];
    #viewComponent = null;
    #body = null;

    constructor({ model, body }) {
        this.#model = model;
        this.#body = body;
        this.#model.add(() => this.init());
    }

    init() {
        this.#viewComponent = new View({
            model: this.#model,
            onEditClick: this.#onEditClick
        });
        this.#renderData();
    }

    #renderData() {
        render(this.#viewComponent, this.#body)
    }

    #onEditClick = async () => {
        this.#viewComponent.element.remove();
        await this.#model.init();
    }
}