var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var CardMaker = /** @class */ (function () {
    function CardMaker() {
        this.section = document.querySelector('.section');
        this.deliveredDescription = { title: '', body: '' };
    }
    ;
    CardMaker.makeCard = function () {
        return new CardMaker();
    };
    ;
    // cardContain = document.createElement('article');
    // description = document.createElement('div');
    // cardTitle = document.createElement('div');
    CardMaker.prototype.deliverDescription = function (cardInstance, currentPopUp, title, body) {
        var current = currentPopUp;
        this.deliveredDescription = __assign(__assign({}, this.deliveredDescription), { title: title,
            body: body });
        var imageCard = new ImageCard(cardInstance);
        var videoCard = new VideoCard(cardInstance);
        switch (current) {
            case 'IMAGE':
                //let imageCard = new ImageCard(this);
                imageCard.createCard();
                current = '';
                break;
            case 'VIDEO':
                //let videoCard = new VideoCard(this);
                videoCard.createCard();
                current = '';
                break;
            case 'NOTE':
                break;
            case 'TASK':
                break;
            default:
                throw new Error(current + " is not currentPopUp");
        }
        ;
    };
    return CardMaker;
}());
export { CardMaker };
var ImageCard = /** @class */ (function () {
    function ImageCard(cardMaker) {
        this.cardMaker = cardMaker;
        this.description = this.cardMaker.deliveredDescription;
        this.cardContain = document.createElement('article');
        this.cardDescription = document.createElement('div');
        this.cardTitle = document.createElement('div');
    }
    ;
    ImageCard.prototype.createCard = function () {
        var _a, _b, _c;
        this.cardContain.className = 'card-contain';
        this.cardDescription.className = 'card-description';
        this.cardDescription.innerHTML = this.isValidHttpUrl(this.description.body) ? this.description.body : 'not http protocol';
        this.cardTitle.className = 'card-title';
        this.cardTitle.innerHTML = this.description.title;
        (_a = this.cardContain) === null || _a === void 0 ? void 0 : _a.appendChild(this.cardDescription);
        (_b = this.cardContain) === null || _b === void 0 ? void 0 : _b.appendChild(this.cardTitle);
        (_c = this.cardMaker.section) === null || _c === void 0 ? void 0 : _c.appendChild(this.cardContain);
    };
    ;
    ImageCard.prototype.isValidHttpUrl = function (body) {
        var url;
        try {
            url = new URL(body);
        }
        catch (error) {
            return false;
        }
        return url.protocol === "http:" || url.protocol === "https:";
    };
    ;
    return ImageCard;
}());
var VideoCard = /** @class */ (function () {
    function VideoCard(cardMaker) {
        this.cardMaker = cardMaker;
        this.description = this.cardMaker.deliveredDescription;
        this.cardContain = document.createElement('article');
        this.cardDescription = document.createElement('div');
        this.cardTitle = document.createElement('div');
    }
    ;
    VideoCard.prototype.createCard = function () {
        var _a, _b, _c;
        this.cardContain.className = 'card-vido-contain';
        this.cardDescription.className = 'card-vido-description';
        this.cardDescription.innerHTML = this.isValidHttpUrl(this.description.body) ? this.description.body : 'not http protocol';
        this.cardTitle.className = 'card-vido-title';
        this.cardTitle.innerHTML = this.description.title;
        (_a = this.cardContain) === null || _a === void 0 ? void 0 : _a.appendChild(this.cardDescription);
        (_b = this.cardContain) === null || _b === void 0 ? void 0 : _b.appendChild(this.cardTitle);
        (_c = this.cardMaker.section) === null || _c === void 0 ? void 0 : _c.appendChild(this.cardContain);
    };
    ;
    VideoCard.prototype.isValidHttpUrl = function (body) {
        var url;
        try {
            url = new URL(body);
        }
        catch (error) {
            return false;
        }
        return url.protocol === "http://www.youtube.com/" || url.protocol === "https://www.youtube.com/";
    };
    ;
    return VideoCard;
}());
