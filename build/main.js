import { ImagePopUp } from "./popup/popup.js";
var imageButton = document.querySelector('.image-btn');
var videoButton = document.querySelector('.video-btn');
var noteButton = document.querySelector('.note-btn');
var taskButton = document.querySelector('.task-btn');
var popup = new ImagePopUp();
imageButton === null || imageButton === void 0 ? void 0 : imageButton.addEventListener('click', function (e) { return popup.viewPopup(outputValue(e)); });
videoButton === null || videoButton === void 0 ? void 0 : videoButton.addEventListener('click', function (e) { return console.log(outputValue(e)); });
noteButton === null || noteButton === void 0 ? void 0 : noteButton.addEventListener('click', function (e) { return console.log(); });
taskButton === null || taskButton === void 0 ? void 0 : taskButton.addEventListener('click', function (e) { return console.log(); });
function outputValue(e) {
    if (!(e.target instanceof HTMLInputElement))
        return 'not HTMLInputElement';
    return e.target.value;
}
