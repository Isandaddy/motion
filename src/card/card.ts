interface Card {
    deliverDescription(title: string, body: string): void;
}

type Description = {
    title: string; 
    body: string;
}

export class CardMaker implements Card{
    private constructor(){};

    static makeCard(){
        return new CardMaker();
    };

    section = document.querySelector('.section');
    cardContain = document.createElement('article');
    description = document.createElement('div');
    cardTitle = document.createElement('div');

    // createCard(title: string, body: string): void {
    //     this.cardContain.className = 'card-contain';
    //     this.description.className = 'card-description';
    //     this.description.innerHTML = body;
    //     this.cardTitle.className = 'card-title';
    //     this.cardTitle.innerHTML = title;
    //     this.cardContain?.appendChild(this.description);
    //     this.cardContain?.appendChild(this.cardTitle);
    //     this.section?.appendChild(this.cardContain);
    //     this.deliverDescription(title, body);
    // };

    deliverDescription(title: string, body: string): void {
        this.deliveredDescription = { ...this.deliveredDescription,
            title,
            body,
        };
        let imageCard = new ImageCard(this);
        imageCard.createCard();
    }

    deliveredDescription: Description = {title: '', body: ''}; 
}

class ImageCard {
    constructor(private cardMaker: CardMaker){};
    description: Description = this.cardMaker.deliveredDescription;
    createCard(): void {
        this.cardMaker.cardContain.className = 'card-contain';
        this.cardMaker.description.className = 'card-description';
        this.cardMaker.description.innerHTML = this.isValidHttpUrl(this.description.body) ? this.description.body : 'not http protocol';
        this.cardMaker.cardTitle.className = 'card-title';
        this.cardMaker.cardTitle.innerHTML = this.description.title;
        this.cardMaker.cardContain?.appendChild(this.cardMaker.description);
        this.cardMaker.cardContain?.appendChild(this.cardMaker.cardTitle);
        this.cardMaker.section?.appendChild(this.cardMaker.cardContain);
    };

    isValidHttpUrl(body: string): boolean {
        let url;
        try {
            url = new URL(body);
        } catch (error) {
            return false;
        }
        return url.protocol === "http:" || url.protocol === "https:";
    };

}