export default class Menu {
    constructor(btnMobile, itemList, itemListA) {
        this.btnMobile = document.querySelector(btnMobile)
        this.itemList = document.querySelector(itemList)
    }

    setClass() {
        this.btnMobile.classList.toggle('ativo');
        this.btnMobile.classList.toggle('disable');
        this.itemList.classList.toggle('ativo');

    }


    addEvents() {
        this.btnMobile.addEventListener('click', this.setClass);
    }
    bindEvents() {
        this.setClass = this.setClass.bind(this)
    }

    init() {
        this.bindEvents();
        this.addEvents();
        return this
    }
}

console.log('iniciando')