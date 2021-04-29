var popupSection = document.querySelector('.pop-up');
var popupCloseBtn = document.querySelector('.pop-up_close-btn');
popupCloseBtn === null || popupCloseBtn === void 0 ? void 0 : popupCloseBtn.addEventListener('click', function () { return closePopup(); });
function closePopup() {
    popupSection === null || popupSection === void 0 ? void 0 : popupSection.classList.add('pop-up_hide');
}
var PopupMaker = /** @class */ (function () {
    function PopupMaker() {
        //popupSection = document.querySelector('.pop-up');
        //popupCloseBtn = document.querySelector('.pop-up_close-btn');
        this.popupBodyLabel = document.querySelector('.pop-up_body-label');
    }
    //popupCloseBtn.addEventListener('click', () => console.log());
    PopupMaker.prototype.viewPopup = function (title) {
        switch (title) {
            case 'IMAGE':
                this.changeText('URL');
                break;
            case 'VIDEO':
                this.changeText('URL');
                break;
            case 'NOTE':
                this.changeText('BODY');
                break;
            case 'TASK':
                this.changeText('BODY');
                break;
        }
        popupSection === null || popupSection === void 0 ? void 0 : popupSection.classList.remove('pop-up_hide');
    };
    PopupMaker.prototype.changeText = function (bodyText) {
        if (this.popupBodyLabel) {
            this.popupBodyLabel.innerHTML = bodyText;
        }
    };
    return PopupMaker;
}());
export { PopupMaker };
