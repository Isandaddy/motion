
import { PopupMaker } from "./popup/popup.js";

const imageButton = document.querySelector('.image-btn');
const videoButton = document.querySelector('.video-btn');
const noteButton = document.querySelector('.note-btn');
const taskButton = document.querySelector('.task-btn');

const popup = PopupMaker.makePopUp();

imageButton?.addEventListener('click', (e) => popup.viewPopup(outputValue(e)));
videoButton?.addEventListener('click', (e) => popup.viewPopup(outputValue(e)));
noteButton?.addEventListener('click', (e) => popup.viewPopup(outputValue(e)));
taskButton?.addEventListener('click', (e) => popup.viewPopup(outputValue(e)));

function outputValue(e: any): string {
    if(!(e.target instanceof HTMLInputElement)) return 'not HTMLInputElement';
    return e.target.value;
}
