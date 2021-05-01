export default class Card {
    private constructor(){};

    static makeCard(){
        return new Card();
    };

    section = document.querySelector('.section');
    cardContain = document.createElement('article');
    description = document.createElement('div');
    cardTitle = document.createElement('div');

    createCard(title: string, body: string): void {
        this.cardContain.className = 'card-contain';
        this.description.className = 'card-description';
        this.description.innerHTML = body;
        this.cardTitle.className = 'card-title';
        this.cardTitle.innerHTML = title;
        this.cardContain?.appendChild(this.description);
        this.cardContain?.appendChild(this.cardTitle);
        
        //this.cardContain.innerHTML = body;
        this.section?.appendChild(this.cardContain);
    };
}