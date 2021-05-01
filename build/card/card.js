var Card = /** @class */ (function () {
    function Card() {
        this.section = document.querySelector('.section');
        this.cardContain = document.createElement('article');
        this.description = document.createElement('div');
        this.cardTitle = document.createElement('div');
    }
    ;
    Card.makeCard = function () {
        return new Card();
    };
    ;
    Card.prototype.createCard = function (title, body) {
        var _a, _b, _c;
        this.cardContain.className = 'card-contain';
        this.description.className = 'card-description';
        this.description.innerHTML = body;
        this.cardTitle.className = 'card-title';
        this.cardTitle.innerHTML = title;
        (_a = this.cardContain) === null || _a === void 0 ? void 0 : _a.appendChild(this.description);
        (_b = this.cardContain) === null || _b === void 0 ? void 0 : _b.appendChild(this.cardTitle);
        //this.cardContain.innerHTML = body;
        (_c = this.section) === null || _c === void 0 ? void 0 : _c.appendChild(this.cardContain);
    };
    ;
    return Card;
}());
export default Card;
