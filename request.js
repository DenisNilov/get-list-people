let people = null;
const observs = [];

const newApi = count =>
    new Promise((resolve, reject) => {
        const url = `https://api.randomuser.me/?nat=US&results=${count}`;
        const request = new XMLHttpRequest();
        request.open('GET', url);

        request.onload = () =>
            request.status === 200
                ? resolve(JSON.parse(request.response).results)
                : reject(Error(request.statusText))

        request.send();
    });




const getData = async (count) => {
    people = await newApi(count);
    notify();
}

function add(callback) {
    observs.push(callback)
}

function notify() {
    observs.forEach(callback => callback());
}

const get = () => people;

add(() => init())
getData(6);

function init() {
    const [data] = get()
    console.log(data)
}