export default class Model {
    #observers = [];
    #apiService = null;
    #data = [];

    constructor(apiService) {
        this.#apiService = apiService;
    }


    add(callback) {
        this.#observers.push(callback)
    }

    notify() {
        this.#observers
            .forEach((callback) => callback());
    }

    async init() {
        try {
            const data = await this.#apiService.load();
            this.#data = data;
            this.notify();
        } catch (err) {
            this.#data = ['err'];
        }

    }

    get data() {
        return this.#data;
    }


}