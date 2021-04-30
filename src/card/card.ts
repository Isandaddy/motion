export default class Card {
    constructor(){}
    section = document.querySelector('.card-article');
    cardContain = document.createElement("li");

    createCard(title: string, body: string): void {
        //console.log(title);
        this.cardContain.className = 'card-contain';
        this.cardContain.innerHTML = title;
        this.section?.appendChild(this.cardContain);
    };
}