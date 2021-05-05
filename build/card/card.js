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
        this.cardContain = document.createElement('article');
        this.description = document.createElement('div');
        this.cardTitle = document.createElement('div');
        this.deliveredDescription = { title: '', body: '' };
    }
    ;
    CardMaker.makeCard = function () {
        return new CardMaker();
    };
    ;
    // createCard(title: string, body: string): void {
    //     this.cardContain.className = 'card-contain';
    //     this.description.className = 'card-description';
    //     this.description.innerHTML = body;
    //     this.cardTitle.className = 'card-title';
    //     this.cardTitle.innerHTML = title;
    //     this.cardContain?.appendChild(this.description);
    //     this.cardContain?.appendChild(this.cardTitle);
    //     this.section?.appendChild(this.cardContain);
    //     this.deliverDescription(title, body);
    // };
    CardMaker.prototype.deliverDescription = function (title, body) {
        this.deliveredDescription = __assign(__assign({}, this.deliveredDescription), { title: title,
            body: body });
        var imageCard = new ImageCard(this);
        imageCard.createCard();
    };
    return CardMaker;
}());
export { CardMaker };
var ImageCard = /** @class */ (function () {
    function ImageCard(cardMaker) {
        this.cardMaker = cardMaker;
        this.description = this.cardMaker.deliveredDescription;
    }
    ;
    ImageCard.prototype.createCard = function () {
        var _a, _b, _c;
        this.cardMaker.cardContain.className = 'card-contain';
        this.cardMaker.description.className = 'card-description';
        this.cardMaker.description.innerHTML = this.isValidHttpUrl(this.description.body) ? this.description.body : 'not http protocol';
        this.cardMaker.cardTitle.className = 'card-title';
        this.cardMaker.cardTitle.innerHTML = this.description.title;
        (_a = this.cardMaker.cardContain) === null || _a === void 0 ? void 0 : _a.appendChild(this.cardMaker.description);
        (_b = this.cardMaker.cardContain) === null || _b === void 0 ? void 0 : _b.appendChild(this.cardMaker.cardTitle);
        (_c = this.cardMaker.section) === null || _c === void 0 ? void 0 : _c.appendChild(this.cardMaker.cardContain);
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
