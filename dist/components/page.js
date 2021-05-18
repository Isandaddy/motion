export class PageComponent {
    constructor() {
        this.element = document.createElement('ul');
        this.element.setAttribute('class', 'page');
        this.element.textContent = 'This is PageComponent';
        this.imagePage = new ImageComponent('https://images.unsplash.com/photo-1621084355896-abf2ae1ae876?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80', 'thinking');
        this.imagePage.attachTo(this.element, 'beforeend');
    }
    attachTo(parent, position = 'afterbegin') {
        parent.insertAdjacentElement(position, this.element);
    }
}
export class ImageComponent {
    constructor(url, title) {
        this.url = url;
        this.title = title;
        this.element = document.createElement('li');
        this.element.setAttribute('class', 'image-contain');
        this.imageContain = document.createElement('img');
        this.imageContain.setAttribute('src', this.url);
        this.imageContain.setAttribute('class', 'img');
        this.element.textContent = this.title;
        this.element.appendChild(this.imageContain);
    }
    attachTo(parent, position = 'afterbegin') {
        parent.insertAdjacentElement(position, this.element);
    }
}
