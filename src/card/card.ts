interface Card {
    deliverDescription(cardInstance: CardMaker, currentPopUp: string, title: string, body: string): void;
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
    // cardContain = document.createElement('article');
    // description = document.createElement('div');
    // cardTitle = document.createElement('div');

    deliverDescription(cardInstance: CardMaker, currentPopUp: string, title: string, body: string): void {
        let current = currentPopUp;

        this.deliveredDescription = { ...this.deliveredDescription,
            title,
            body,
        };

        let imageCard = new ImageCard(cardInstance);
        let videoCard = new VideoCard(cardInstance);

        switch(current){
            case 'IMAGE' :
                //let imageCard = new ImageCard(this);
                imageCard.createCard();
                current = '';
                break;
            case 'VIDEO' :
                //let videoCard = new VideoCard(this);
                videoCard.createCard();
                current = '';
                break;   
            case 'NOTE' :
                break;   
            case 'TASK' :
                break;
            default :
                throw new Error(`${current} is not currentPopUp`);   
        };
        
    }

    deliveredDescription: Description = {title: '', body: ''}; 
}

class ImageCard {
    constructor(private cardMaker: CardMaker){};
    description: Description = this.cardMaker.deliveredDescription;

    cardContain = document.createElement('article');
    cardDescription = document.createElement('div');
    cardTitle = document.createElement('div');
    
    createCard(): void {
        this.cardContain.className = 'card-contain';
        this.cardDescription.className = 'card-description';
        this.cardDescription.innerHTML = this.isValidHttpUrl(this.description.body) ? this.description.body : 'not http protocol';
        this.cardTitle.className = 'card-title';
        this.cardTitle.innerHTML = this.description.title;
        this.cardContain?.appendChild(this.cardDescription);
        this.cardContain?.appendChild(this.cardTitle);
        this.cardMaker.section?.appendChild(this.cardContain);
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

class VideoCard {
    constructor(private cardMaker: CardMaker){};
    description: Description = this.cardMaker.deliveredDescription;
    
    cardContain = document.createElement('article');
    cardDescription = document.createElement('div');
    cardTitle = document.createElement('div');

    createCard(): void {
        this.cardContain.className = 'card-vido-contain';
        this.cardDescription.className = 'card-vido-description';
        this.cardDescription.innerHTML = this.isValidHttpUrl(this.description.body) ? this.description.body : 'not http protocol';
        this.cardTitle.className = 'card-vido-title';
        this.cardTitle.innerHTML = this.description.title;
        this.cardContain?.appendChild(this.cardDescription);
        this.cardContain?.appendChild(this.cardTitle);
        this.cardMaker.section?.appendChild(this.cardContain);
    };

    isValidHttpUrl(body: string): boolean {
        let url;
        try {
            url = new URL(body);
        } catch (error) {
            return false;
        }
        return url.protocol === "http://www.youtube.com/" || url.protocol === "https://www.youtube.com/";
    };

}