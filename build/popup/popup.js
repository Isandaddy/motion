var ImagePopUp = /** @class */ (function () {
    function ImagePopUp() {
        this.popupSection = document.querySelector('.pop-up');
        this.popupCloseBtn = document.querySelector('.pop-up_close-btn');
    }
    ImagePopUp.prototype.viewPopup = function (title) {
        var _a;
        if (!(title === 'IMAGE'))
            console.log('not Image Btn');
        (_a = this.popupSection) === null || _a === void 0 ? void 0 : _a.classList.remove('pop-up_hide');
    };
    return ImagePopUp;
}());
export { ImagePopUp };
