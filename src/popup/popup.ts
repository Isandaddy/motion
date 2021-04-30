import Card from '../card/card.js';

interface PopUp {
    viewPopup(title: string): void;
}

type PopUpLabelType = {
    title: string;
}

const card = new Card();

const popupSection = document.querySelector('.pop-up');
const popupTitle = document.querySelector('.pop-up_title');
const popupBody = document.querySelector('.pop-up_body');
const popupAddBtn = document.querySelector('.pop-up_add-btn');
const popupCloseBtn = document.querySelector('.pop-up_close-btn');

let popupTitleValue = '';
let popupBodyValue = '';

popupTitle?.addEventListener('change', (e: any) => popupTitleValue = e.target.value);

popupCloseBtn?.addEventListener('click', () => closePopup());
popupAddBtn?.addEventListener('click',(e) => {
    e.preventDefault();
    console.log(popupTitleValue);
    card.createCard(popupTitleValue, popupBodyValue);
    closePopup();
});


function closePopup(): void {
    popupSection?.classList.add('pop-up_hide');
}

export class PopupMaker implements PopUp{
    constructor() {}
    popupBodyLabel = document.querySelector('.pop-up_body-label');

    viewPopup(title: string) {
        switch(title) {
            case 'IMAGE' :
                this.changeText('URL');
                break;
            case 'VIDEO' :
                this.changeText('URL');
                break;   
            case 'NOTE' :
                this.changeText('BODY');
                break;   
            case 'TASK' :
                this.changeText('BODY');
                break;       
        }

        popupSection?.classList.remove('pop-up_hide');
    }

    private changeText(bodyText: string): void {
        
        if(this.popupBodyLabel) {
            this.popupBodyLabel.innerHTML = bodyText;
        }
    }
}

