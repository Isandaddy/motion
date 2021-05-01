import Card from '../card/card.js';
var card = Card.makeCard();
var popupSection = document.querySelector('.pop-up');
var popupTitle = document.querySelector('.pop-up_title');
var popupBody = document.querySelector('.pop-up_body');
var popupAddBtn = document.querySelector('.pop-up_add-btn');
var popupCloseBtn = document.querySelector('.pop-up_close-btn');
var popupTitleValue = '';
var popupBodyValue = '';
popupTitle === null || popupTitle === void 0 ? void 0 : popupTitle.addEventListener('change', function (e) { return popupTitleValue = e.target.value; });
popupBody === null || popupBody === void 0 ? void 0 : popupBody.addEventListener('change', function (e) { return popupBodyValue = e.target.value; });
popupCloseBtn === null || popupCloseBtn === void 0 ? void 0 : popupCloseBtn.addEventListener('click', function () { return closePopup(); });
popupAddBtn === null || popupAddBtn === void 0 ? void 0 : popupAddBtn.addEventListener('click', function (e) {
    e.preventDefault();
    console.log(popupTitleValue);
    card.createCard(popupTitleValue, popupBodyValue);
    closePopup();
});
function closePopup() {
    popupSection === null || popupSection === void 0 ? void 0 : popupSection.classList.add('pop-up_hide');
}
var PopupMaker = /** @class */ (function () {
    function PopupMaker() {
        this.popupBodyLabel = document.querySelector('.pop-up_body-label');
    }
    PopupMaker.makePopUp = function () {
        return new PopupMaker();
    };
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
