var Card = /** @class */ (function () {
    function Card() {
        this.section = document.querySelector('.card-article');
        this.cardContain = document.createElement("li");
    }
    Card.prototype.createCard = function (title, body) {
        var _a;
        //console.log(title);
        this.cardContain.className = 'card-contain';
        this.cardContain.innerHTML = title;
        (_a = this.section) === null || _a === void 0 ? void 0 : _a.appendChild(this.cardContain);
    };
    ;
    return Card;
}());
export default Card;
