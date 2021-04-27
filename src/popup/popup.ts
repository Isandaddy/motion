interface PopUp {
    viewPopup(title: string): void;
}

type PopUpType = {
    title: string;
    url?: string;
    body?: string;
}

export class ImagePopUp implements PopUp{
    constructor() {}
    popupSection = document.querySelector('.pop-up');
    popupCloseBtn = document.querySelector('.pop-up_close-btn');
    
    viewPopup(title: string) {
        if(!(title === 'IMAGE')) console.log('not Image Btn');
        
        this.popupSection?.classList.remove('pop-up_hide');
    }
}