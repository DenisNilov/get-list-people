export default class Api {
    #num = null;
    #url = null;
    


    constructor(count) {
        this.#num = count;
        this.#url = `https://api.randomuser.me/?nat=US&results=${this.#num}`;
    }



    async load() {
        const response = await fetch(this.#url)
            .then(res => res.json());
        return response;
    }
}
