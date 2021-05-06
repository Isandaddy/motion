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

    currentPopUp = '';

    viewPopup(title: string) {
        switch(title) {
            case 'IMAGE' :
                this.currentPopUp = title;
                this.changeText('URL');
                break;
            case 'VIDEO' :
                this.currentPopUp = title;
                this.changeText('URL');
                break;   
            case 'NOTE' :
                this.currentPopUp = title;
                this.changeText('BODY');
                break;   
            case 'TASK' :
                this.currentPopUp = title;
                this.changeText('BODY');
                break;
            default :
                throw new Error(`${title} is not title`);           
        }
        this.popupSection?.classList.remove('pop-up_hide');

        this.popupTitle?.addEventListener('change', (e: any) => this.popupTitleValue = e.target.value);
        this.popupBody?.addEventListener('change', (e: any) => this.popupBodyValue = e.target.value);
        
        this.popupCloseBtn?.addEventListener('click', () => this.closePopup());
        this.popupAddBtn?.addEventListener('click',(e) => {
            e.preventDefault();
            card.deliverDescription(card, this.currentPopUp, this.popupTitleValue, this.popupBodyValue);
            this.closePopup();
        });

    }

    private closePopup(): void {
  
        this.popupTitle instanceof HTMLInputElement ? this.popupTitle.value = '' : '';
        this.popupBody instanceof HTMLInputElement ? this.popupBody.value = '' : '';
        this.popupSection?.classList.add('pop-up_hide');
    }

    private changeText(bodyText: string): void {
        
        if(this.popupBodyLabel) {
            this.popupBodyLabel.innerHTML = bodyText;
        }
    }
}

