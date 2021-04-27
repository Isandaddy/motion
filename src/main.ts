
import { ImagePopUp } from "./popup/popup.js";

const imageButton = document.querySelector('.image-btn');
const videoButton = document.querySelector('.video-btn');
const noteButton = document.querySelector('.note-btn');
const taskButton = document.querySelector('.task-btn');

const popup = new ImagePopUp();

imageButton?.addEventListener('click', (e) => popup.viewPopup(outputValue(e)));
videoButton?.addEventListener('click', (e) => console.log(outputValue(e)));
noteButton?.addEventListener('click', (e) => console.log());
taskButton?.addEventListener('click', (e) => console.log());

function outputValue(e: any): string {
    if(!(e.target instanceof HTMLInputElement)) return 'not HTMLInputElement';
    return e.target.value;
}