import { CardMaker } from '../card/card.js';

export interface PopUp {
    viewPopup(title: string): void;
}

type PopUpLabelType = {
    title: string;
}

const card = CardMaker.makeCard();

export class PopupMaker implements PopUp {
    private constructor() {}

    static makePopUp() {
        return new PopupMaker();
    }

    popupSection = document.querySelector('.pop-up');
    popupTitle = document.querySelector('.pop-up_title');
    popupBody = document.querySelector('.pop-up_body');
    popupAddBtn = document.querySelector('.pop-up_add-btn'); 
    popupCloseBtn = document.querySelector('.pop-up_close-btn');

    popupTitleValue = '';
    popupBodyValue = '';

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
        this.popupSection?.classList.remove('pop-up_hide');

        this.popupTitle?.addEventListener('change', (e: any) => this.popupTitleValue = e.target.value);
        this.popupBody?.addEventListener('change', (e: any) => this.popupBodyValue = e.target.value);
        
        this.popupCloseBtn?.addEventListener('click', () => this.closePopup());
        this.popupAddBtn?.addEventListener('click',(e) => {
            e.preventDefault();
            card.deliverDescription(this.popupTitleValue, this.popupBodyValue);
            this.closePopup();
        });

    }

    private closePopup(): void {
        this.popupSection?.classList.add('pop-up_hide');
    }

    private changeText(bodyText: string): void {
        
        if(this.popupBodyLabel) {
            this.popupBodyLabel.innerHTML = bodyText;
        }
    }
}

