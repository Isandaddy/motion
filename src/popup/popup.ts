interface PopUp {
    viewPopup(title: string): void;
}

type PopUpLabelType = {
    title: string;
}
const popupSection = document.querySelector('.pop-up');
const popupCloseBtn = document.querySelector('.pop-up_close-btn');
popupCloseBtn?.addEventListener('click', () => closePopup());

function closePopup(): void {
    popupSection?.classList.add('pop-up_hide');
}
export class PopupMaker implements PopUp{
    constructor() {}
    //popupSection = document.querySelector('.pop-up');
    //popupCloseBtn = document.querySelector('.pop-up_close-btn');
    popupBodyLabel = document.querySelector('.pop-up_body-label');
    
    
    //popupCloseBtn.addEventListener('click', () => console.log());

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

    changeText(bodyText: string): void {
        
        if(this.popupBodyLabel) {
            this.popupBodyLabel.innerHTML = bodyText;
        }
    }
}

