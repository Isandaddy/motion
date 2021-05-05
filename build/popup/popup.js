import { CardMaker } from '../card/card.js';
var card = CardMaker.makeCard();
var PopupMaker = /** @class */ (function () {
    function PopupMaker() {
        this.popupSection = document.querySelector('.pop-up');
        this.popupTitle = document.querySelector('.pop-up_title');
        this.popupBody = document.querySelector('.pop-up_body');
        this.popupAddBtn = document.querySelector('.pop-up_add-btn');
        this.popupCloseBtn = document.querySelector('.pop-up_close-btn');
        this.popupTitleValue = '';
        this.popupBodyValue = '';
        this.popupBodyLabel = document.querySelector('.pop-up_body-label');
    }
    PopupMaker.makePopUp = function () {
        return new PopupMaker();
    };
    PopupMaker.prototype.viewPopup = function (title) {
        var _this = this;
        var _a, _b, _c, _d, _e;
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
        (_a = this.popupSection) === null || _a === void 0 ? void 0 : _a.classList.remove('pop-up_hide');
        (_b = this.popupTitle) === null || _b === void 0 ? void 0 : _b.addEventListener('change', function (e) { return _this.popupTitleValue = e.target.value; });
        (_c = this.popupBody) === null || _c === void 0 ? void 0 : _c.addEventListener('change', function (e) { return _this.popupBodyValue = e.target.value; });
        (_d = this.popupCloseBtn) === null || _d === void 0 ? void 0 : _d.addEventListener('click', function () { return _this.closePopup(); });
        (_e = this.popupAddBtn) === null || _e === void 0 ? void 0 : _e.addEventListener('click', function (e) {
            e.preventDefault();
            card.deliverDescription(_this.popupTitleValue, _this.popupBodyValue);
            _this.closePopup();
        });
    };
    PopupMaker.prototype.closePopup = function () {
        var _a;
        (_a = this.popupSection) === null || _a === void 0 ? void 0 : _a.classList.add('pop-up_hide');
    };
    PopupMaker.prototype.changeText = function (bodyText) {
        if (this.popupBodyLabel) {
            this.popupBodyLabel.innerHTML = bodyText;
        }
    };
    return PopupMaker;
}());
export { PopupMaker };
