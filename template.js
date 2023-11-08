function createElement(template) {
    const newElement = document.createElement('div');
    newElement.innerHTML = template;

    return newElement.firstElementChild;
}

function render(component, container, place = 'beforeend') {
    container.insertAdjacentElement(place, component.element);
}

function getTemlate(data) {
    const { results } = data;
    return `<div  class="main">
    <button>next person</button>
    ${results.map(getPeople)}
    </div>`



}

const getPeople = (person) => `<div class="people">
<img src = ${person.picture.large}>
<h1>${person.name.first}  ${person.name.last}<h1>
</div>`;


export { createElement, render, getTemlate };

